"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-card border border-border rounded-full px-2 py-1">
      <Globe className="w-3 h-3 text-muted-foreground" />
      <button
        onClick={() => setLanguage("es")}
        className={`text-xs px-2 py-1 rounded-full transition-colors ${
          language === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`text-xs px-2 py-1 rounded-full transition-colors ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
