import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Create a client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)

// Insert into a table
async function insertIntoTable(data) {
  const { error } = await supabase
    .from('customers')
    .insert([{ column1: data.value1, column2: data.value2 }])

  if (error) {
    console.error('Error inserting:', error)
    return
  }
}

// Read from a table
async function readFromTable() {
  const { data, error } = await supabase.from('customers').select('*')

  if (error) {
    console.error('Error reading:', error)
    return
  }

  return data
}

export async function POST(req, res) {
  const data = req.body
  await insertIntoTable(data)
  res.status(200).json({ message: 'Data inserted' })
  const hej = await readFromTable()
  console.log(hej)
}

export async function GET(req, res) {
  const data = await readFromTable()
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'Not found' })
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    await insertIntoTable(data)
    res.status(200).json({ message: 'Data inserted' })
    const hej = await readFromTable()
    console.log(hej)
  } else if (req.method === 'GET') {
    const data = await readFromTable()
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json({ message: 'Not found' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
