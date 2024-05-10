// Import necessary libraries and Firebase modules
'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CalendarDays, Clock } from 'lucide-react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import { db } from '@/utils/firebase'
function toasty() {
  toast('Appointment Booked!')
}

const formSchema = z.object({
  date: z.date(),
  note: z.string(),
  name: z.string(),
  number: z.string(),
  email: z.string().email(),
  timeSlot: z.string(),
  selectedDate: z.date(),
  appointmentType: z.string(),
})

const handleSubmit = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'customers'), {
      ...data,
      selectedDate: data.selectedDate.toISOString().split('T')[0], // Convert date to YYYY-MM-DD format
      appointmentType: data.appointmentType, // Add this line
    })
    console.log('Appointment booked with ID:', docRef.id)
    toasty() // Show toast on successful booking
  } catch (error) {
    console.error('Error booking appointment:', error)
  }
}

export function BookAppointment() {
  const appointmentTypes = [
    { type: 'Hair treatment', duration: 30 },
    { type: 'Nail treatment', duration: 60 },
    { type: 'Hair cut', duration: 90 },
    // Add more types as needed
  ]
  const [timeSlot, setTimeSlot] = useState([])
  const [selectedTimeSlot, setSelectedTimeSlot] = useState()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [appointmentType, setAppointmentType] = useState(appointmentTypes[0])
  // Refactored getTimeFromDB function for Firebase
  async function getTimeFromDB(date) {
    if (!date) {
      return
    }
    const formattedDate = date.toISOString().split('T')[0]
    const q = query(
      collection(db, 'customers'),
      where('selectedDate', '==', formattedDate),
    )
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map((doc) => doc.data())

    console.log('Date:', date)
    console.log('Fetched Data:', data)

    const allTimeSlots = Array.from(
      { length: Math.floor(((17 - 8) * 60) / appointmentType.duration) },
      (_, i) => {
        const time = 8 * 60 + i * appointmentType.duration
        const hours = Math.floor(time / 60)
        const minutes = time % 60
        return `${hours < 10 ? '0' : ''}${hours}:${
          minutes < 10 ? '0' : ''
        }${minutes}`
      },
    )
    const occupiedTimeSlots = data.map((item) => item.timeSlot)
    const availableTimeSlots = allTimeSlots.filter(
      (slot) => !occupiedTimeSlots.includes(slot),
    )

    console.log('Available time slots:', availableTimeSlots)
    setTimeSlot(availableTimeSlots)

    if (availableTimeSlots.length > 0) {
      const firstAvailableTimeSlot = availableTimeSlots[0]
      setSelectedTimeSlot(firstAvailableTimeSlot) // Update selected time slot state
      form.setValue('timeSlot', firstAvailableTimeSlot) // Update form field
    }
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      note: '',
      name: '',
      number: '',
      email: '',
      timeSlot: '',
      selectedDate: new Date(),
      appointmentType: 'type1',
    },
  })

  useEffect(() => {
    getTimeFromDB(selectedDate)
  }, [selectedDate, appointmentType]) // Include timeSlot as a dependency to re-select if available slots change

  const isPastDay = (day) =>
    day <= new Date() || day.getDay() === 0 || day.getDay() === 6

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('Form submitted') // This will log when the form is submitted
          form.handleSubmit(handleSubmit)(e)
        }}
        className="container m-auto mt-12 w-[70vw] space-y-8 p-5"
      >
        <h1 className="text-4xl">Book now</h1>
        <div className=" grid  grid-cols-1 gap-8 md:grid-cols-2">
          {/* Calender  */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Date</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date)
                      setSelectedDate(date)
                      form.setValue('selectedDate', date)
                    }}
                    disabled={isPastDay}
                    className=" w-[100%] rounded-md border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Slot  */}
          <FormField
            control={form.control}
            name="timeSlot"
            render={({ field }) => (
              <FormItem className="mt-3 md:mt-0">
                <FormLabel className="mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Select Time Slot
                </FormLabel>
                <FormControl>
                  <div className="grid grid-cols-3 gap-2 rounded-lg border p-5">
                    {timeSlot?.map((time, index) => (
                      <h2
                        key={index}
                        onClick={() => {
                          setSelectedTimeSlot(time)
                          field.onChange(time)
                        }}
                        className={`cursor-pointer rounded-full border p-2 text-center hover:bg-primary hover:text-white
    ${time == selectedTimeSlot && 'bg-primary text-white'}`}
                      >
                        {time}
                      </h2>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="appointmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appointment Type</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    onChange={(e) => {
                      const selectedType = appointmentTypes.find(
                        (type) => type.type === e.target.value,
                      )
                      setAppointmentType(selectedType)
                      field.onChange(e)
                    }}
                  >
                    {appointmentTypes.map((appointmentType) => (
                      <option
                        key={appointmentType.type}
                        value={appointmentType.type}
                      >
                        {appointmentType.type} - {appointmentType.duration}{' '}
                        minutes
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-3"
            color="primary"
            type="submit"
            onClick={toasty}
          >
            Book Appointment
          </Button>
        </div>
      </form>
      <ToastContainer />
    </Form>
  )
}
