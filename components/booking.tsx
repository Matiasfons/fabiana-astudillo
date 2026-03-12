"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Video, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useState } from "react"

const MICROSOFT_BOOKINGS_URL =
  "https://outlook.office.com/book/AgendaFabianaAstudillo@fabianaastudillo.com/"

export function Booking() {
  const { t } = useLanguage()
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const bookingOptions = [
    {
      icon: Video,
      title: t.booking.options.online.title,
      duration: t.booking.options.online.duration,
      description: t.booking.options.online.description,
    },
    {
      icon: MapPin,
      title: t.booking.options.inPerson.title,
      duration: t.booking.options.inPerson.duration,
      description: t.booking.options.inPerson.description,
    },
  ]

  return (
    <section id="agendar" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            {t.booking.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            {t.booking.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.booking.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {bookingOptions.map((option) => (
            <Card
              key={option.title}
              className="group border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                  {option.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  {option.duration}
                </div>
                <p className="text-muted-foreground text-sm">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Microsoft Bookings Embedded Calendar */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="overflow-hidden border-border">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ minHeight: "650px" }}>
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <div className="text-center">
                      <Calendar className="w-10 h-10 text-primary mx-auto mb-3 animate-pulse" />
                      <p className="text-sm text-muted-foreground">
                        {t.booking.loading}
                      </p>
                    </div>
                  </div>
                )}
                <iframe
                  src={MICROSOFT_BOOKINGS_URL}
                  title={t.booking.calendarTitle}
                  className="w-full border-0"
                  style={{ height: "650px" }}
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-6"
            asChild
          >
            <a
              href={MICROSOFT_BOOKINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {t.booking.openExternal}
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            {t.booking.redirect}
          </p>
        </div>
      </div>
    </section>
  )
}
