"use client"

import { GraduationCap, Award, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function Credentials() {
  const { t } = useLanguage()

  const education = [
    {
      icon: GraduationCap,
      degree: t.credentials.education.masters.degree,
      specialty: t.credentials.education.masters.specialty,
      institution: t.credentials.education.masters.institution,
      status: t.credentials.inProgress,
      highlight: true,
    },
    {
      icon: Award,
      degree: t.credentials.education.bachelors.degree,
      specialty: t.credentials.education.bachelors.specialty,
      highlight: false,
    },
  ]

  const certifications = [
    {
      name: t.credentials.certs.coaching.name,
      institution: t.credentials.certs.coaching.institution,
    },
    {
      name: t.credentials.certs.crisis.name,
      institution: t.credentials.certs.crisis.institution,
    },
    {
      name: t.credentials.certs.gender.name,
      institution: t.credentials.certs.gender.institution,
    },
    {
      name: t.credentials.certs.mindfulness.name,
      institution: t.credentials.certs.mindfulness.institution,
    },
    {
      name: t.credentials.certs.english.name,
      institution: t.credentials.certs.english.institution,
    },
    {
      name: t.credentials.certs.italian.name,
      institution: t.credentials.certs.italian.institution,
    },
  ]

  return (
    <section id="formacion" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">
            {t.credentials.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            {t.credentials.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.credentials.description}
          </p>
        </div>

        {/* Educación principal */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {education.map((edu) => (
            <Card
              key={edu.degree}
              className={`relative overflow-hidden ${
                edu.highlight
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              {edu.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg">
                  {edu.status}
                </div>
              )}
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-1 text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {edu.specialty}
                </p>
                {edu.institution && (
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificaciones y formación complementaria */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-medium mb-8 text-center text-foreground">
            {t.credentials.certifications}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
