import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-widest uppercase text-muted-foreground">
                Psicoterapia con calidez
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance text-foreground">
                Hola, soy{" "}
                <span className="text-primary">Fabiana Astudillo</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Psicóloga clínica comprometida con ofrecerte un acompañamiento
                respetuoso y empático en tu proceso de bienestar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                asChild
              >
                <a
                  href="https://wa.me/593999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda tu cita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-foreground/20 bg-transparent"
                asChild
              >
                <a href="#sobre-mi">Conóceme</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇪🇨</span>
                <span className="text-sm text-muted-foreground">Español</span>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-sm text-muted-foreground">English</span>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Presencial & Online
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] -rotate-3" />
              <div className="absolute inset-0 bg-secondary rounded-[2rem] rotate-3" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/fabiana-astudillo.jpg"
                  alt="Psicóloga Fabiana Astudillo Abad"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
