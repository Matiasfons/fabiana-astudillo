"use client"

import Image from "next/image"
import { Heart, Shield, Sparkles, Brain } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const photos = [
  { src: "/images/fabi1.jpeg", alt: "Fabiana Astudillo - Psicóloga Clínica" },
  { src: "/images/fabi2.jpeg", alt: "Fabiana Astudillo - Atención profesional" },
  { src: "/images/fabi3.jpeg", alt: "Fabiana Astudillo - Sesión terapéutica" },
]

export function About() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: t.about.values.empathy.title,
      description: t.about.values.empathy.description,
    },
    {
      icon: Shield,
      title: t.about.values.ethics.title,
      description: t.about.values.ethics.description,
    },
    {
      icon: Sparkles,
      title: t.about.values.safe.title,
      description: t.about.values.safe.description,
    },
    {
      icon: Brain,
      title: t.about.values.integral.title,
      description: t.about.values.integral.description,
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            {t.about.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl ${
                index === 1 ? "row-span-2" : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2 text-foreground">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Perfil profesional */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-serif text-2xl font-medium mb-6 text-foreground text-center">
              {t.about.philosophy.title}
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
              {t.about.philosophy.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
