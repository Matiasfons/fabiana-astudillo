"use client"

import { User, Users, Baby, ClipboardList, Video } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: User,
      title: t.services.items.individual.title,
      description: t.services.items.individual.description,
    },
    {
      icon: Users,
      title: t.services.items.couple.title,
      description: t.services.items.couple.description,
    },
    {
      icon: Baby,
      title: t.services.items.child.title,
      description: t.services.items.child.description,
    },
    {
      icon: ClipboardList,
      title: t.services.items.evaluation.title,
      description: t.services.items.evaluation.description,
    },
    {
      icon: Video,
      title: t.services.items.online.title,
      description: t.services.items.online.description,
    },
  ]

  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            {t.services.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group border-border hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
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
