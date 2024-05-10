'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ActiveLink from '@/components/ActiveLink'
import logo from '@/images/logo.svg'

function Navbar() {
  const router = useRouter()
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10
      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  // Function to determine if a link is active
  const isActive = (route) => {
    return route === router.pathname
  }

  return (
    <div
      className={`z-100 fixed top-0 flex w-full items-center justify-between bg-white px-24 transition duration-300 ease-in-out ${
        visible ? '' : 'hidden'
      }`}
    >
      <img className="h-20 w-20 object-contain" src={logo}></img>
      <ul className="flex gap-10">
        <li>
          <ActiveLink
            href="/gallery"
            className={
              isActive('/gallery') ? 'font-bold text-black' : 'text-gray-700'
            }
          >
            GALLERY
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="#contacts"
            className={
              isActive('/contatti') ? 'font-bold text-black' : 'text-gray-700'
            }
          >
            CONTATTI
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/"
            className={`rounded-md border border-black px-4 py-2 font-bold text-black hover:bg-gray-200 ${
              isActive('/') ? 'bg-gray-200' : ''
            }`}
          >
            PRENOTA UN APPUNTAMENTO
          </ActiveLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
