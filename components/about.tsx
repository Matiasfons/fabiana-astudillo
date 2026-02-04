import { GraduationCap, Heart, Shield, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empatía",
    description:
      "Comprendo tu situación y te acompaño desde un lugar de genuina conexión.",
  },
  {
    icon: Shield,
    title: "Ética",
    description:
      "Respeto absoluto por tu privacidad y proceso personal de crecimiento.",
  },
  {
    icon: GraduationCap,
    title: "Enfoque Científico",
    description:
      "Técnicas basadas en evidencia y formación continua de vanguardia.",
  },
  {
    icon: Sparkles,
    title: "Espacio Seguro",
    description:
      "Un lugar donde puedas expresarte con libertad y sin juicios.",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            Sobre mí
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Mi compromiso es tu bienestar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mi objetivo es ofrecerte un espacio seguro donde puedas expresarte
            con libertad, comprender lo que estás viviendo y desarrollar
            herramientas que promuevan tu bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
              Mi formación y experiencia
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p>
                  <strong className="text-foreground">
                    Psicóloga Clínica
                  </strong>{" "}
                  graduada de la Universidad del Azuay (UDA)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p>
                  <strong className="text-foreground">
                    Maestrante en Psicoterapia de Tercera Generación
                  </strong>{" "}
                  en la Universidad Internacional de La Rioja (UNIR)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p>
                  <strong className="text-foreground">
                    Experiencia en contextos hospitalarios y ambulatorios
                  </strong>
                  , evaluación psicológica, terapia individual y facilitación de
                  talleres grupales
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p>
                  <strong className="text-foreground">
                    Trabajo con poblaciones diversas
                  </strong>
                  : adolescentes, adultos, adultos mayores y universitarios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
