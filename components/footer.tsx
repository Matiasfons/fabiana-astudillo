"use client"

import { Instagram, Mail, Phone, Clock, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contacto" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
              Psic. Fabiana Astudillo
            </h3>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                ACT
              </span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                Mindfulness
              </span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                DBT
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a
                href="mailto:fabianaastudillo.abad@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm break-all">fabianaastudillo.abad@gmail.com</span>
              </a>
              <a
                href="https://wa.me/593959744465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm">+593 95 974 4465</span>
              </a>
              <a
                href="https://instagram.com/fabianaastudillo.psicologa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span className="text-sm">@fabianaastudillo.psicologa</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground">{t.footer.office}</h4>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0 mt-1" />
              <div className="text-sm">
                <p>{t.footer.address}</p>
                <p className="text-xs mt-2 text-muted-foreground">
                  Cuenca, Ecuador
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground">{t.footer.schedule}</h4>
            <div className="flex items-start gap-3 text-muted-foreground">
              <Clock className="w-4 h-4 shrink-0 mt-1" />
              <div className="text-sm">
                <p>{t.footer.weekdays}</p>
                <p>{t.footer.hours}</p>
                <p className="text-xs mt-2 text-primary">
                  {t.footer.flexible}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t.footer.coverage}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Psic. Fabiana Astudillo. {t.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.credentials}
          </p>
        </div>
      </div>
    </footer>
  )
}
