import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ThirdGenTherapies } from "@/components/third-gen-therapies"
import { Services } from "@/components/services"
import { Booking } from "@/components/booking"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <ThirdGenTherapies />
        <Services />
        <Booking />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
