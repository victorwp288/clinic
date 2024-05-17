'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Accordion = ({ title, description, image, children, imagePosition }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const renderImageFirst = imagePosition === 'left'

  return (
    <div className="h-auto w-full overflow-hidden border-[0.5px] border-solid border-[#e2ecf9] shadow-[0px_2px_5px_#e2ecf9da]">
      <div
        className={`grid h-64 cursor-pointer grid-cols-[1fr_1fr] items-center ${
          imagePosition === 'right' ? 'flex-row-reverse' : ''
        }`}
        onClick={toggleAccordion}
      >
        {renderImageFirst && (
          <div className="max-h-full overflow-hidden">
            <Image src={image} className="h-full" alt="Accordion image" />
          </div>
        )}
        <div className="flex flex-col items-start gap-3 pl-9 text-left">
          <h2 className="font-serif text-2xl font-bold">{title}</h2>
          <p className="w-[85%] text-sm">{description}</p>
          <button
            type="button"
            className="border-0 bg-white text-xs font-bold text-[#dec3c5] no-underline"
          >
            {isOpen ? 'Chiudi dettagli ⋀' : 'Apri dettagli ➝'}
          </button>
        </div>
        {!renderImageFirst && (
          <div className="ml-4">
            <Image src={image} className="h-full" alt="Accordion image" />
          </div>
        )}
      </div>
      <div
        className={`overflow-hidden transition duration-300 ease-in-out ${
          isOpen ? 'h-auto' : 'h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
