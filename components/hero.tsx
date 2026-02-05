"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, MapPin, Video } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                {t.hero.badge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance text-foreground">
                {t.hero.title}{" "}
                <span className="text-primary">{t.hero.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-sm">{t.hero.online}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                asChild
              >
                <a href="#agendar">
                  {t.hero.bookCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-foreground/20 bg-transparent"
                asChild
              >
                <a href="#servicios">{t.hero.learnMore}</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇪🇨</span>
                <span className="text-sm text-muted-foreground">{t.hero.languages.spanish}</span>
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-sm text-muted-foreground">{t.hero.languages.english}</span>
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇮🇹</span>
                <span className="text-sm text-muted-foreground">{t.hero.languages.italian}</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] -rotate-3" />
              <div className="absolute inset-0 bg-secondary rounded-[2rem] rotate-3" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/fabi4.jpeg"
                  alt="Psicóloga Clínica Fabiana Astudillo"
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
