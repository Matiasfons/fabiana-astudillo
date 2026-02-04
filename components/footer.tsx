import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
              Fabiana Astudillo Abad
            </h3>
            <p className="text-muted-foreground mb-4">
              Psicóloga Clínica comprometida con tu bienestar emocional y
              desarrollo personal.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:contacto@fabianaastudillo.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@fabianaastudillo.com
              </a>
              <a
                href="https://wa.me/593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/fabianaastudillo.psicologa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @fabianaastudillo.psicologa
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground">Horarios</h4>
            <p className="text-muted-foreground">
              Lunes a Viernes
              <br />
              9:00 AM - 6:00 PM
              <br />
              <span className="text-sm">(Horario flexible para citas online)</span>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fabiana Astudillo Abad. Todos los
            derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Psicóloga Clínica | Atención presencial y online
          </p>
        </div>
      </div>
    </footer>
  )
}
