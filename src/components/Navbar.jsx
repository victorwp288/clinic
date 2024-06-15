'use client'

import Image from 'next/image'
import logo from '@/images/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import BurgerMenu from '@/components/BurgerMenu' // Adjust the import path as necessary

function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (target) => {
    if (target.startsWith('#')) {
      // Internal link, check if the target element exists
      const targetElement = document.querySelector(target)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If the target element doesn't exist, navigate using router
        router.push(target)
      }
    } else {
      // External link, navigate using router
      router.push(target)
    }
  }

  const menuItems = [
    { id: 1, link: '/#services', label: 'I NOSTRI SERVIZI' },
    { id: 2, link: '/gallery', label: 'GALLERY' },
    { id: 3, link: '/chisiamo', label: 'CONTATTI' },
    { id: 4, link: '/#booking-section', label: 'PRENOTA' },
  ]

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-4 text-sm transition duration-300 ease-in-out md:px-28 lg:px-64">
      <Image src={logo} className=" w-16 lg:w-20" alt="Logo" />
      <ul className="hidden gap-10 md:flex">
        <li>
          <Link
            href="/#services"
            className="link cursor-pointer"
            activeClass="active-link"
          >
            I NOSTRI SERVIZI
          </Link>
        </li>
        <li>
          <a
            onClick={() => handleLinkClick('/gallery')}
            className="link cursor-pointer"
          >
            GALLERY
          </a>
        </li>
        <li>
          <a
            onClick={() => handleLinkClick('/chisiamo')}
            className="link cursor-pointer"
          >
            CONTATTI
          </a>
        </li>
        <li>
          <Link
            href="/#booking-section"
            className="link cursor-pointer font-semibold"
            activeClass="active-link"
          >
            PRENOTA
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <BurgerMenu
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          menuItems={menuItems}
        />
      </div>
    </div>
  )
}

export default Navbar
