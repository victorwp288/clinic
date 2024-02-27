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

import { createClient } from '@/utils/supabase/client'

const formSchema = z.object({
  date: z.date(),
  note: z.string(),
  name: z.string(),
  number: z.string(),
  email: z.string().email(),
})

const handleSubmit = async (data) => {
  const supabase = createClient()
  const { data: insertedData, error } = await supabase
    .from('customers')
    .insert([data])

  if (error) console.error('Error inserting data:', error)
  else console.log('Data inserted:', insertedData)
}

function BookAppointment() {
  const [timeSlot, setTimeSlot] = useState()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      note: '',
      name: '',
      number: '',
      email: '',
    },
  })

  useEffect(() => {
    getTime()
  }, [])

  const getTime = () => {
    const timeList = []
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM',
      })
      timeList.push({
        time: i + ':30 AM',
      })
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 PM',
      })
      timeList.push({
        time: i + ':30 PM',
      })
    }

    setTimeSlot(timeList)
  }

  const isPastDay = (day) => {
    return day <= new Date()
  }

  return (
    <Form
      {...form}
      onSubmit={form.handleSubmit(handleSubmit)}
      className="container space-y-8 p-5"
    >

        <h1 className="text-4xl">Book now</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
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
                    onSelect={field.onChange}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Time Slot  */}
          <div className=" mt-3 md:mt-0">
            <h2 className="mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Select Time Slot
            </h2>
            <div
              className="grid grid-cols-3 gap-2 rounded-lg 
				border p-5"
            >
              {timeSlot?.map((item, index) => (
                <h2
                  key={index} // Add key prop with unique value
                  onClick={() => setSelectedTimeSlot(item.time)}
                  className={`cursor-pointer rounded-full border
						p-2 text-center hover:bg-primary
						hover:text-white
						${item.time == selectedTimeSlot && 'bg-primary text-white'}`}
                >
                  {item.time}
                </h2>
              ))}
            </div>
          </div>
        </div>
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
        <Button className="mt-3" color="primary" type="submit">
          Book Appointment
        </Button>
    </Form>
  )
}

export default BookAppointment
