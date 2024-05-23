'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const BurgerMenu = ({ isOpen, setIsOpen, menuItems }) => {
  const linksRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      linksRef.current.classList.add('flex')
      linksRef.current.classList.remove('hidden')
    } else {
      linksRef.current.classList.add('hidden')
      linksRef.current.classList.remove('flex')
    }
  }, [isOpen])

  return (
    <div className={`relative ${isOpen ? 'z-50' : ''}`}>
      <button
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        ></span>
      </button>
      <div
        ref={linksRef}
        className={` fixed inset-0 hidden flex-col items-start justify-center space-y-4 bg-white px-8 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {menuItems.map((item) => (
          <Link key={item.id} href={item.link} passHref>
            <p
              className="cursor-pointer  text-3xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BurgerMenu
