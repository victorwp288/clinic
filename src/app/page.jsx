import BookAppointment from '@/components/BookAppointment'
import ServicesContainer from '@/components/ServicesContainer'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <main className="fadeIn animate-fadeIn ">
        <HeroSection />
        <ServicesContainer />
        <BookAppointment />
      </main>
    </>
  )
}
