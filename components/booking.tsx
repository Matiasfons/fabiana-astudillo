"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Video, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

// IMPORTANTE: Reemplaza esta URL con tu enlace de Google Calendar Appointment Scheduling
// Para configurarlo:
// 1. Ve a calendar.google.com
// 2. Click en "Crear" > "Horario de citas"
// 3. Configura tu disponibilidad y duración de citas
// 4. Copia el enlace de la página de reservas
const GOOGLE_CALENDAR_BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1234567890"

export function Booking() {
  const { t } = useLanguage()

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

        <div className="text-center">
          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a
              href={GOOGLE_CALENDAR_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-3 h-5 w-5" />
              {t.booking.cta}
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            {t.booking.redirect}
          </p>
        </div>
      </div>
    </section>
  )
}
