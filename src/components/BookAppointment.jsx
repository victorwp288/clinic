'use client'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CalendarDays, Clock } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

function BookAppointment() {
  const [date, setDate] = useState(new Date())
  const [timeSlot, setTimeSlot] = useState()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState()
  const [note, setNote] = useState()
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
    <div className="container p-5">
      <h1 className="text-4xl">Book now</h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
        {/* Calender  */}
        <div className="flex flex-col   items-baseline gap-3">
          <h2 className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            Select Date
          </h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={isPastDay}
            className="rounded-md border"
          />
        </div>
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
      <Textarea
        className="mt-3"
        placeholder="Note"
        onChange={(e) => setNote(e.target.value)}
      />
      <Button className="mt-3" color="primary">
        Book Appointment
      </Button>
    </div>
  )
}

export default BookAppointment
