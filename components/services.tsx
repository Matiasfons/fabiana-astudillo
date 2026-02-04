import { Brain, Users, Video, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Brain,
    title: "Regulación Emocional",
    description:
      "Aprende a identificar, comprender y gestionar tus emociones de manera saludable para mejorar tu calidad de vida.",
  },
  {
    icon: Users,
    title: "Desarrollo de Habilidades",
    description:
      "Fortalece tus habilidades blandas y capacidades de adaptación para enfrentar los desafíos del día a día.",
  },
  {
    icon: Video,
    title: "Terapia Online",
    description:
      "Sesiones virtuales desde la comodidad de tu hogar, con la misma calidad y confidencialidad que la atención presencial.",
  },
  {
    icon: MessageCircle,
    title: "Terapia Presencial",
    description:
      "Encuentros cara a cara en un espacio acogedor diseñado para tu comodidad y privacidad.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acompaño a jóvenes y adultos en procesos de crecimiento personal,
            siempre desde la confianza y el respeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group border-border hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                index === 0 || index === 3 ? "md:col-span-1" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
