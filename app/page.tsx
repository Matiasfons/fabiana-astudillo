import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
