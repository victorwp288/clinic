import Image from 'next/image'
import rituale from '@/images/rituale.jpg'

function HeroSection() {
  return (
    <div className="relative mb-6 h-screen bg-cover bg-center md:mb-24">
      <Image
        className="h-full w-full object-cover"
        src={rituale}
        alt="duration of the service"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 from-10% to-transparent"></div>
        <div className="relative p-8 md:p-12">
          <h3 className="text-center text-3xl font-bold leading-tight text-white">
            Experience the artistry of beauty transformation at our premier
            clinic.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
