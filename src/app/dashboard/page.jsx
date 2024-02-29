'use client'
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'


function Dashboard() {

  const supabase = createClient()
  const [appointments, setAppointments] = useState([])

  // fetch appointments from db for today in a function
  async function fetchAppointments() {
	const { data, error } = await supabase
	  .from('appointments')
	  .select('*')
	  .eq('date', new Date().toLocaleDateString())
	if (error) console.error('Error fetching appointments:', error)
	else setAppointments(data)
  }

  // fetch appointments from db for the next week day
  async function fetchAppointmentsNextWeek() {
	const { data, error } = await supabase
	  .from('appointments')
	  .select('*')
	  .eq('date', new Date().toLocaleDateString())
	if (error) console.error('Error fetching appointments:', error)
	else setAppointments(data)
  }


  return <div>
	<h1>Dashboard</h1>

  </div>
}

export default Dashboard
