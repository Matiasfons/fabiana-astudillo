import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
            Si estás buscando acompañamiento profesional, estoy aquí para ti
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
            Da el primer paso hacia tu bienestar. Agenda una cita y comencemos
            este camino juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8"
              asChild
            >
              <a
                href="https://wa.me/593959744465"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <a
                href="https://instagram.com/fabianaastudillo.psicologa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Sígueme en Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
