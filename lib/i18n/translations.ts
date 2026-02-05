export type Language = "es" | "en"

export const translations = {
  es: {
    // Header
    nav: {
      about: "Sobre mí",
      training: "Formación",
      specialties: "Especialidades",
      services: "Servicios",
      contact: "Contacto",
      bookAppointment: "Agendar cita",
    },
    // Hero
    hero: {
      badge: "Especialista en Terapias de Tercera Generación",
      title: "Psicóloga Clínica",
      name: "Fabiana Astudillo",
      description:
        "Te acompaño en tu proceso de bienestar emocional con un enfoque científico, empático y basado en las terapias más actuales y efectivas.",
      location: "Cuenca, Ecuador",
      online: "Atención Online",
      bookCta: "Agenda tu cita",
      learnMore: "Conoce mi enfoque",
      languages: {
        spanish: "Español",
        english: "English (B2)",
        italian: "Italiano",
      },
    },
    // About
    about: {
      subtitle: "Sobre mí",
      title: "Comprometida con tu bienestar emocional",
      description:
        "Soy Fabiana Astudillo, Psicóloga Clínica especializada en Terapias de Tercera Generación. Mi enfoque combina rigor científico con calidez humana para ofrecerte el mejor acompañamiento posible en tu proceso de crecimiento personal.",
      values: {
        empathy: {
          title: "Empatía Genuina",
          description:
            "Cada persona es única. Te escucho y comprendo desde un lugar de conexión auténtica.",
        },
        ethics: {
          title: "Ética Profesional",
          description:
            "Confidencialidad absoluta y respeto por tu proceso personal de crecimiento.",
        },
        safe: {
          title: "Espacio Seguro",
          description:
            "Un ambiente de confianza donde puedes expresarte con libertad y sin juicios.",
        },
        integral: {
          title: "Enfoque Integral",
          description:
            "Intervenciones individuales y grupales adaptadas a tus necesidades específicas.",
        },
      },
      philosophy: {
        title: "Mi filosofía de trabajo",
        description:
          "Creo firmemente que cada persona tiene la capacidad de transformar su vida. Mi rol es acompañarte en ese proceso, brindándote herramientas basadas en evidencia científica y un espacio de comprensión genuina. Las terapias de tercera generación me permiten ayudarte no solo a reducir el malestar, sino a construir una vida rica y significativa, alineada con tus valores más profundos.",
      },
    },
    // Credentials
    credentials: {
      subtitle: "Formación Profesional",
      title: "Preparación de excelencia",
      description:
        "Formación especializada en las terapias más actuales y efectivas de la psicología contemporánea.",
      education: {
        masters: {
          degree: "Maestría en Psicoterapia",
          specialty: "Terapias de Tercera Generación",
          institution: "UNIR, España",
        },
        bachelors: {
          degree: "Licenciatura en Psicología Clínica",
          specialty: "Especialización Clínica",
        },
      },
      inProgress: "En curso",
      certifications: "Certificaciones y Formación Continua",
      certs: {
        coaching: {
          name: "Coaching en Habilidades Interpersonales",
          institution: "Dhum Consultores",
        },
        crisis: {
          name: "Intervención Psicológica en Crisis",
          institution: "Ministerio de Salud Pública",
        },
        gender: {
          name: "Violencia de Género desde la Justicia Terapéutica",
          institution: "Formación Internacional",
        },
        mindfulness: {
          name: "Mindfulness para ser más efectivo",
          institution: "Coursera",
        },
        english: {
          name: "First Certificate in English (B2)",
          institution: "Cambridge Assessment English",
        },
        italian: {
          name: "Italiano - 10 Niveles",
          institution: "Società Dante Alighieri",
        },
      },
    },
    // Third Gen Therapies
    therapies: {
      subtitle: "Enfoque Terapéutico",
      title: "Terapias de Tercera Generación",
      description:
        "Las terapias de tercera generación representan la evolución más reciente en psicología clínica. A diferencia de enfoques anteriores que buscan eliminar síntomas, estas terapias se centran en cambiar tu relación con los pensamientos y emociones, promoviendo la aceptación, la flexibilidad psicológica y una vida con propósito.",
      approaches: {
        act: {
          title: "Terapia de Aceptación y Compromiso (ACT)",
          description:
            "Aprende a aceptar tus emociones mientras te comprometes con acciones alineadas a tus valores personales.",
        },
        dbt: {
          title: "Terapia Dialéctica Conductual (DBT)",
          description:
            "Desarrolla habilidades de regulación emocional, tolerancia al malestar y relaciones interpersonales efectivas.",
        },
        mindfulness: {
          title: "Mindfulness",
          description:
            "Cultiva la atención plena para conectar con el momento presente y reducir el estrés y la ansiedad.",
        },
        activation: {
          title: "Activación Conductual",
          description:
            "Reconecta con actividades significativas que mejoran tu estado de ánimo y calidad de vida.",
        },
      },
      whyChoose: {
        title: "¿Por qué elegir este enfoque?",
        description:
          "Estas terapias cuentan con amplia evidencia científica y son especialmente efectivas para el manejo de ansiedad, depresión, estrés, trastornos alimentarios y dificultades en relaciones interpersonales. Mi objetivo es ayudarte a construir una vida rica y significativa, incluso en presencia de emociones difíciles.",
      },
    },
    // Specialties
    specialties: {
      subtitle: "Áreas de Atención",
      title: "¿En qué puedo ayudarte?",
      description:
        "Mi experiencia clínica me permite abordar diversas problemáticas con un enfoque personalizado y basado en evidencia.",
      items: {
        anxiety: {
          title: "Ansiedad y Estrés",
          description: "Manejo de ansiedad generalizada, ansiedad social, ataques de pánico y estrés crónico mediante técnicas de tercera generación.",
        },
        emotional: {
          title: "Regulación Emocional",
          description: "Aprende a identificar, comprender y gestionar tus emociones de manera saludable para mejorar tu calidad de vida.",
        },
        depression: {
          title: "Depresión y Estado de Ánimo",
          description: "Acompañamiento en procesos depresivos, ayudándote a reconectar con lo que da sentido a tu vida.",
        },
        social: {
          title: "Habilidades Sociales",
          description: "Desarrollo de habilidades interpersonales, comunicación asertiva y mejora de relaciones personales.",
        },
        life: {
          title: "Proyecto de Vida",
          description: "Clarificación de valores, metas y propósito. Ideal para momentos de transición o búsqueda de dirección.",
        },
        trauma: {
          title: "Trauma y Experiencias Difíciles",
          description: "Procesamiento de experiencias traumáticas con un enfoque compasivo y basado en evidencia.",
        },
        academic: {
          title: "Adaptación y Cambios de Vida",
          description: "Apoyo en transiciones importantes, manejo de presión y desarrollo de hábitos saludables.",
        },
        growth: {
          title: "Crecimiento Personal",
          description: "Acompañamiento para quienes buscan conocerse mejor, desarrollar su potencial y vivir con mayor plenitud.",
        },
      },
      populations: {
        title: "Poblaciones que atiendo",
        teens: { title: "Adolescentes", description: "Desde los 14 años" },
        youngAdults: { title: "Adultos Jóvenes", description: "18-35 años" },
        adults: { title: "Adultos", description: "35-60 años" },
        seniors: { title: "Adultos Mayores", description: "60+ años" },
      },
    },
    // Services
    services: {
      subtitle: "Servicios",
      title: "¿Cómo puedo ayudarte?",
      description:
        "Ofrezco diferentes modalidades de atención para adaptarme a tus necesidades específicas.",
      items: {
        individual: {
          title: "Psicoterapia Individual",
          description:
            "Atención personalizada para adolescentes y adultos. Sesiones enfocadas en tus necesidades específicas y objetivos de bienestar.",
        },
        couple: {
          title: "Terapia de Pareja",
          description:
            "Acompañamiento para parejas que buscan mejorar su comunicación, resolver conflictos y fortalecer su relación.",
        },
        child: {
          title: "Psicoterapia Infantil",
          description:
            "Intervención especializada para niños, utilizando técnicas adaptadas a su edad y desarrollo emocional.",
        },
        evaluation: {
          title: "Evaluación Psicológica",
          description:
            "Evaluación profesional para identificar fortalezas, áreas de mejora y orientar el proceso terapéutico.",
        },
        online: {
          title: "Psicoterapia Online",
          description:
            "Sesiones virtuales por videollamada segura vía Meet, con la misma calidad y confidencialidad que la atención presencial.",
        },
      },
    },
    // Booking
    booking: {
      subtitle: "Reserva tu cita",
      title: "Agenda tu primera sesión",
      description:
        "Selecciona el horario que mejor se adapte a tu disponibilidad. La primera sesión es una oportunidad para conocernos y evaluar cómo puedo ayudarte.",
      options: {
        online: {
          title: "Sesión Online",
          duration: "50 minutos",
          description: "Sesión virtual por videollamada desde cualquier lugar.",
        },
        inPerson: {
          title: "Sesión Presencial",
          duration: "50 minutos",
          description: "Sesión en consultorio en un espacio cómodo y privado.",
        },
      },
      cta: "Ver disponibilidad y agendar",
      redirect: "Serás redirigido a Google Calendar para seleccionar tu horario",
    },
    // CTA
    cta: {
      title: "Si estás buscando acompañamiento profesional, estoy aquí para ti",
      description:
        "Da el primer paso hacia tu bienestar. Agenda una cita y comencemos este camino juntos.",
      whatsapp: "Agenda por WhatsApp",
      instagram: "Sígueme en Instagram",
    },
    // Footer
    footer: {
      description:
        "Psicóloga Clínica especializada en Terapias de Tercera Generación. Te acompaño en tu proceso de bienestar emocional con un enfoque científico, empático y personalizado.",
      contact: "Contacto",
      office: "Consultorio",
      address: "Remigio Tamariz, Edificio Luzán, oficina 306",
      schedule: "Horarios",
      weekdays: "Lunes a Viernes",
      hours: "9:00 AM - 6:00 PM",
      flexible: "Horario flexible para citas online",
      coverage: "Atención presencial en Cuenca y online a nivel nacional e internacional",
      rights: "Todos los derechos reservados.",
      credentials: "Psicóloga Clínica | Especialista en Terapias de Tercera Generación",
    },
  },
  en: {
    // Header
    nav: {
      about: "About me",
      training: "Education",
      specialties: "Specialties",
      services: "Services",
      contact: "Contact",
      bookAppointment: "Book appointment",
    },
    // Hero
    hero: {
      badge: "Third Generation Therapies Specialist",
      title: "Clinical Psychologist",
      name: "Fabiana Astudillo",
      description:
        "I accompany you in your emotional wellness journey with a scientific, empathetic approach based on the most current and effective therapies.",
      location: "Cuenca, Ecuador",
      online: "Online Care",
      bookCta: "Book your appointment",
      learnMore: "Learn about my approach",
      languages: {
        spanish: "Spanish",
        english: "English (B2)",
        italian: "Italian",
      },
    },
    // About
    about: {
      subtitle: "About me",
      title: "Committed to your emotional well-being",
      description:
        "I'm Fabiana Astudillo, a Clinical Psychologist specialized in Third Generation Therapies. My approach combines scientific rigor with human warmth to offer you the best possible support in your personal growth journey.",
      values: {
        empathy: {
          title: "Genuine Empathy",
          description:
            "Each person is unique. I listen and understand you from a place of authentic connection.",
        },
        ethics: {
          title: "Professional Ethics",
          description:
            "Absolute confidentiality and respect for your personal growth process.",
        },
        safe: {
          title: "Safe Space",
          description:
            "An environment of trust where you can express yourself freely and without judgment.",
        },
        integral: {
          title: "Comprehensive Approach",
          description:
            "Individual and group interventions tailored to your specific needs.",
        },
      },
      philosophy: {
        title: "My work philosophy",
        description:
          "I firmly believe that each person has the capacity to transform their life. My role is to accompany you in that process, providing you with evidence-based tools and a space of genuine understanding. Third generation therapies allow me to help you not only reduce distress, but to build a rich and meaningful life, aligned with your deepest values.",
      },
    },
    // Credentials
    credentials: {
      subtitle: "Professional Training",
      title: "Excellence in preparation",
      description:
        "Specialized training in the most current and effective therapies in contemporary psychology.",
      education: {
        masters: {
          degree: "Master's in Psychotherapy",
          specialty: "Third Generation Therapies",
          institution: "UNIR, Spain",
        },
        bachelors: {
          degree: "Bachelor's in Clinical Psychology",
          specialty: "Clinical Specialization",
        },
      },
      inProgress: "In progress",
      certifications: "Certifications and Continuing Education",
      certs: {
        coaching: {
          name: "Interpersonal Skills Coaching",
          institution: "Dhum Consultores",
        },
        crisis: {
          name: "Psychological Crisis Intervention",
          institution: "Ministry of Public Health",
        },
        gender: {
          name: "Gender Violence from Therapeutic Justice",
          institution: "International Training",
        },
        mindfulness: {
          name: "Mindfulness for Effectiveness",
          institution: "Coursera",
        },
        english: {
          name: "First Certificate in English (B2)",
          institution: "Cambridge Assessment English",
        },
        italian: {
          name: "Italian - 10 Levels",
          institution: "Società Dante Alighieri",
        },
      },
    },
    // Third Gen Therapies
    therapies: {
      subtitle: "Therapeutic Approach",
      title: "Third Generation Therapies",
      description:
        "Third generation therapies represent the most recent evolution in clinical psychology. Unlike previous approaches that seek to eliminate symptoms, these therapies focus on changing your relationship with thoughts and emotions, promoting acceptance, psychological flexibility, and a purposeful life.",
      approaches: {
        act: {
          title: "Acceptance and Commitment Therapy (ACT)",
          description:
            "Learn to accept your emotions while committing to actions aligned with your personal values.",
        },
        dbt: {
          title: "Dialectical Behavior Therapy (DBT)",
          description:
            "Develop skills in emotional regulation, distress tolerance, and effective interpersonal relationships.",
        },
        mindfulness: {
          title: "Mindfulness",
          description:
            "Cultivate mindful awareness to connect with the present moment and reduce stress and anxiety.",
        },
        activation: {
          title: "Behavioral Activation",
          description:
            "Reconnect with meaningful activities that improve your mood and quality of life.",
        },
      },
      whyChoose: {
        title: "Why choose this approach?",
        description:
          "These therapies have extensive scientific evidence and are especially effective for managing anxiety, depression, stress, eating disorders, and difficulties in interpersonal relationships. My goal is to help you build a rich and meaningful life, even in the presence of difficult emotions.",
      },
    },
    // Specialties
    specialties: {
      subtitle: "Areas of Care",
      title: "How can I help you?",
      description:
        "My clinical experience allows me to address various issues with a personalized, evidence-based approach.",
      items: {
        anxiety: {
          title: "Anxiety and Stress",
          description: "Management of generalized anxiety, social anxiety, panic attacks, and chronic stress through third generation techniques.",
        },
        emotional: {
          title: "Emotional Regulation",
          description: "Learn to identify, understand, and manage your emotions in a healthy way to improve your quality of life.",
        },
        depression: {
          title: "Depression and Mood",
          description: "Support in depressive processes, helping you reconnect with what gives meaning to your life.",
        },
        social: {
          title: "Social Skills",
          description: "Development of interpersonal skills, assertive communication, and improvement of personal relationships.",
        },
        life: {
          title: "Life Project",
          description: "Clarification of values, goals, and purpose. Ideal for moments of transition or searching for direction.",
        },
        trauma: {
          title: "Trauma and Difficult Experiences",
          description: "Processing of traumatic experiences with a compassionate and evidence-based approach.",
        },
        academic: {
          title: "Adaptation and Life Changes",
          description: "Support in important transitions, pressure management, and development of healthy habits.",
        },
        growth: {
          title: "Personal Growth",
          description: "Support for those seeking to know themselves better, develop their potential, and live more fully.",
        },
      },
      populations: {
        title: "Populations I serve",
        teens: { title: "Adolescents", description: "From 14 years old" },
        youngAdults: { title: "Young Adults", description: "18-35 years" },
        adults: { title: "Adults", description: "35-60 years" },
        seniors: { title: "Older Adults", description: "60+ years" },
      },
    },
    // Services
    services: {
      subtitle: "Services",
      title: "How can I help you?",
      description:
        "I offer different care modalities to adapt to your specific needs.",
      items: {
        individual: {
          title: "Individual Psychotherapy",
          description:
            "Personalized care for adolescents and adults. Sessions focused on your specific needs and wellness goals.",
        },
        couple: {
          title: "Couples Therapy",
          description:
            "Support for couples seeking to improve their communication, resolve conflicts, and strengthen their relationship.",
        },
        child: {
          title: "Child Psychotherapy",
          description:
            "Specialized intervention for children, using techniques adapted to their age and emotional development.",
        },
        evaluation: {
          title: "Psychological Evaluation",
          description:
            "Professional evaluation to identify strengths, areas for improvement, and guide the therapeutic process.",
        },
        online: {
          title: "Online Psychotherapy",
          description:
            "Virtual sessions via secure Meet video call, with the same quality and confidentiality as in-person care.",
        },
      },
    },
    // Booking
    booking: {
      subtitle: "Book your appointment",
      title: "Schedule your first session",
      description:
        "Select the time that best fits your availability. The first session is an opportunity to get to know each other and assess how I can help you.",
      options: {
        online: {
          title: "Online Session",
          duration: "50 minutes",
          description: "Virtual session via video call from anywhere.",
        },
        inPerson: {
          title: "In-Person Session",
          duration: "50 minutes",
          description: "Session in a comfortable and private office space.",
        },
      },
      cta: "View availability and book",
      redirect: "You will be redirected to Google Calendar to select your time",
    },
    // CTA
    cta: {
      title: "If you're looking for professional support, I'm here for you",
      description:
        "Take the first step towards your well-being. Book an appointment and let's start this journey together.",
      whatsapp: "Book via WhatsApp",
      instagram: "Follow me on Instagram",
    },
    // Footer
    footer: {
      description:
        "Clinical Psychologist specialized in Third Generation Therapies. I accompany you in your emotional wellness journey with a scientific, empathetic, and personalized approach.",
      contact: "Contact",
      office: "Office",
      address: "Remigio Tamariz, Edificio Luzán, office 306",
      schedule: "Hours",
      weekdays: "Monday to Friday",
      hours: "9:00 AM - 6:00 PM",
      flexible: "Flexible hours for online appointments",
      coverage: "In-person care in Cuenca and online nationally and internationally",
      rights: "All rights reserved.",
      credentials: "Clinical Psychologist | Third Generation Therapies Specialist",
    },
  },
}

export type Translations = typeof translations.es
