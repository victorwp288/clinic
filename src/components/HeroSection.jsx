import React from 'react'

function HeroSection() {
  return (
    <div
      className="  z-0  grid h-screen grid-cols-1 items-end justify-center bg-cover bg-center md:grid-cols-2"
      style={{ backgroundColor: '#faf0f1' }}
    >
      <div className=" relative p-24 md:p-24">
        <h3 className="text-black">
          “Experience the artistry of beauty transformation at our premier
          clinic. Discover personalized treatments tailored to enhance your
          natural radiance and rejuvenate your skin. <br />
          <br />
          Step into a world of indulgence and refinement, where every visit
          leaves you feeling confident, refreshed, and revitalized.”
        </h3>
      </div>
    </div>
  )
}

export default HeroSection
