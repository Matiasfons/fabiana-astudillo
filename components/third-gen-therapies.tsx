import { Sparkles, Heart, Target, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const therapyApproaches = [
  {
    icon: Heart,
    title: "Terapia de Aceptación y Compromiso (ACT)",
    description:
      "Aprende a aceptar tus emociones mientras te comprometes con acciones alineadas a tus valores personales.",
  },
  {
    icon: Target,
    title: "Terapia Dialéctica Conductual (DBT)",
    description:
      "Desarrolla habilidades de regulación emocional, tolerancia al malestar y relaciones interpersonales efectivas.",
  },
  {
    icon: Leaf,
    title: "Mindfulness",
    description:
      "Cultiva la atención plena para conectar con el momento presente y reducir el estrés y la ansiedad.",
  },
  {
    icon: Sparkles,
    title: "Activación Conductual",
    description:
      "Reconecta con actividades significativas que mejoran tu estado de ánimo y calidad de vida.",
  },
]

export function ThirdGenTherapies() {
  return (
    <section id="terapias" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            Enfoque Terapéutico
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Terapias de Tercera Generación
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Las terapias de tercera generación representan la evolución más reciente
            en psicología clínica. A diferencia de enfoques anteriores que buscan
            eliminar síntomas, estas terapias se centran en cambiar tu relación con
            los pensamientos y emociones, promoviendo la aceptación, la flexibilidad
            psicológica y una vida con propósito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {therapyApproaches.map((approach) => (
            <Card
              key={approach.title}
              className="group border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <approach.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-xl font-medium mb-4 text-foreground">
                ¿Por qué elegir este enfoque?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estas terapias cuentan con amplia evidencia científica y son especialmente
                efectivas para el manejo de ansiedad, depresión, estrés, trastornos
                alimentarios y dificultades en relaciones interpersonales. Mi objetivo es
                ayudarte a construir una vida rica y significativa, incluso en presencia
                de emociones difíciles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
