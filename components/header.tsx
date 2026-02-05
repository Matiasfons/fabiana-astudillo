"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/lib/i18n/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t.nav.about, href: "#sobre-mi" },
    { name: t.nav.training, href: "#formacion" },
    { name: t.nav.specialties, href: "#especialidades" },
    { name: t.nav.services, href: "#servicios" },
    { name: t.nav.contact, href: "#contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-medium text-foreground">
          Fabiana Astudillo
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <LanguageSelector />
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#agendar">{t.nav.bookAppointment}</a>
          </Button>
        </div>

        {/* Mobile: Language selector + Menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            type="button"
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#agendar" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.bookAppointment}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
