'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/not-found')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/not-found')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function save(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const holder = {
    email: formData.get('email'),
    name: formData.get('password'),
    phone_number: formData.get('phone_number'),
    time: formData.get('time'),
  }

  const { data } = await supabase.from('customers').insert([holder])

  if (error) {
    redirect('/not-found')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
