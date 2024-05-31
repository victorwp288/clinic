'use client'

import Image from 'next/image'
import rituale from '@/images/rituale.jpg'
import downArrow from '@/images/down-arrow.svg'
import { Link as ScrollLink } from 'react-scroll'

function HeroSection() {
  return (
    <div className="relative mb-6 h-screen bg-cover bg-center md:mb-24">
      <Image
        className="h-full w-full object-cover"
        src={rituale}
        alt="duration of the service"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 from-10% to-transparent"></div>
        <div className="relative flex flex-col gap-8 p-6 md:pl-12">
          <h3 className="  text-left text-base font-semibold leading-tight text-white md:w-[60vw] md:text-2xl">
            Il centro benessere Gioia Beauty offre un&apos;esperienza di
            bellezza ecosotenibile e vegana, con prodotti e servizi di altissima
            qualità che rispettano l&apos;ambiente e gli animali.
          </h3>
          <div className="flex flex-col gap-6">
            <ScrollLink
              to="booking-section"
              spy={true}
              smooth={true}
              offset={-80}
              duration={300}
              className="w-fit cursor-pointer border border-white p-4 text-base font-medium text-white "
              activeClass="active-link"
            >
              PRENOTA
            </ScrollLink>
            <div className="flex items-center gap-2">
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-120}
                duration={300}
                className="w-fit cursor-pointer   text-sm font-medium text-white "
                activeClass="active-link"
              >
                Scopri i nostri servizi
              </ScrollLink>
              <Image src={downArrow} alt="down arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
