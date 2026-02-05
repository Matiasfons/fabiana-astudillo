"use client"

import { Sparkles, Heart, Target, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function ThirdGenTherapies() {
  const { t } = useLanguage()

  const therapyApproaches = [
    {
      icon: Heart,
      title: t.therapies.approaches.act.title,
      description: t.therapies.approaches.act.description,
    },
    {
      icon: Target,
      title: t.therapies.approaches.dbt.title,
      description: t.therapies.approaches.dbt.description,
    },
    {
      icon: Leaf,
      title: t.therapies.approaches.mindfulness.title,
      description: t.therapies.approaches.mindfulness.description,
    },
    {
      icon: Sparkles,
      title: t.therapies.approaches.activation.title,
      description: t.therapies.approaches.activation.description,
    },
  ]

  return (
    <section id="terapias" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            {t.therapies.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            {t.therapies.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.therapies.description}
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
                {t.therapies.whyChoose.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.therapies.whyChoose.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
