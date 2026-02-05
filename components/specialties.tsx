"use client"

import {
  Brain,
  HeartPulse,
  Users,
  Sparkles,
  Shield,
  Target,
  Smile,
  BookHeart
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function Specialties() {
  const { t } = useLanguage()

  const specialties = [
    {
      icon: HeartPulse,
      title: t.specialties.items.anxiety.title,
      description: t.specialties.items.anxiety.description,
      tags: ["ACT", "Mindfulness", "DBT"],
    },
    {
      icon: Brain,
      title: t.specialties.items.emotional.title,
      description: t.specialties.items.emotional.description,
      tags: ["DBT", "ACT"],
    },
    {
      icon: Smile,
      title: t.specialties.items.depression.title,
      description: t.specialties.items.depression.description,
      tags: ["ACT", "Mindfulness"],
    },
    {
      icon: Users,
      title: t.specialties.items.social.title,
      description: t.specialties.items.social.description,
      tags: ["DBT", "ACT"],
    },
    {
      icon: Target,
      title: t.specialties.items.life.title,
      description: t.specialties.items.life.description,
      tags: ["ACT", "Coaching"],
    },
    {
      icon: Shield,
      title: t.specialties.items.trauma.title,
      description: t.specialties.items.trauma.description,
      tags: ["ACT", "Mindfulness"],
    },
    {
      icon: BookHeart,
      title: t.specialties.items.academic.title,
      description: t.specialties.items.academic.description,
      tags: ["Mindfulness", "ACT"],
    },
    {
      icon: Sparkles,
      title: t.specialties.items.growth.title,
      description: t.specialties.items.growth.description,
      tags: ["ACT", "Mindfulness"],
    },
  ]

  const populations = [
    {
      title: t.specialties.populations.teens.title,
      description: t.specialties.populations.teens.description,
      icon: "🧑‍🎓",
    },
    {
      title: t.specialties.populations.youngAdults.title,
      description: t.specialties.populations.youngAdults.description,
      icon: "👩‍💼",
    },
    {
      title: t.specialties.populations.adults.title,
      description: t.specialties.populations.adults.description,
      icon: "👨‍💻",
    },
    {
      title: t.specialties.populations.seniors.title,
      description: t.specialties.populations.seniors.description,
      icon: "👵",
    },
  ]

  return (
    <section id="especialidades" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            {t.specialties.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            {t.specialties.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.specialties.description}
          </p>
        </div>

        {/* Especialidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {specialties.map((specialty) => (
            <Card
              key={specialty.title}
              className="group border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <specialty.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2 text-foreground">
                  {specialty.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {specialty.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {specialty.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Poblaciones atendidas */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-medium mb-8 text-center text-foreground">
            {t.specialties.populations.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {populations.map((pop) => (
              <div
                key={pop.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-3">{pop.icon}</div>
                <h4 className="font-medium text-foreground mb-1">{pop.title}</h4>
                <p className="text-xs text-muted-foreground">{pop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
