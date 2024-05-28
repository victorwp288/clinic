'use client'

import Image from 'next/image'
import logo from '@/images/logo.svg'
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import BurgerMenu from '@/components/BurgerMenu' // Adjust the import path as necessary

function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (target) => {
    if (target.startsWith('#')) {
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' })
    } else {
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
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-4 text-sm transition duration-300 ease-in-out md:px-64">
      <Image src={logo} className=" w-16 lg:w-20" alt="Logo" />
      <ul className="hidden gap-10 md:flex">
        <li>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-120}
            duration={300}
            className="link cursor-pointer"
            activeClass="active-link"
          >
            I NOSTRI SERVIZI
          </ScrollLink>
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
          <ScrollLink
            to="booking-section"
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
            className="link cursor-pointer font-semibold"
            activeClass="active-link"
          >
            PRENOTA
          </ScrollLink>
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
