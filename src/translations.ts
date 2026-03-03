export type Language = 'tr' | 'en' | 'es' | 'fr' | 'de' | 'cs' | 'ar' | 'nl';

export const languages: { code: Language; name: string; flag: string; dir?: 'rtl' | 'ltr' }[] = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

export const translations = {
  tr: {
    nav: {
      capabilities: "Kabiliyetler",
      sectors: "Sektörler",
      documents: "Belgeler",
      contact: "İletişim",
      getQuote: "Teklif Al",
      companySub: "Makina Mühendislik"
    },
    hero: {
      title: "Geleceğin Mühendislik Çözümleri",
      subtitle: "Mühendislik",
      manufacturing: "İmalat",
      desc: "Manes Makina Mühendislik olarak, otomasyondan robotik sistemlere, özel tasarımdan savunma sanayine kadar geniş bir yelpazede yüksek kaliteli imalat ve mühendislik hizmetleri sunuyoruz.",
      cta: "Hemen Teklif Alın",
      badge: "ISO Sertifikalı",
      badgeDesc: "Yüksek Kalite Standartları"
    },
    capabilities: {
      title: "Kabiliyetlerimiz",
      subtitle: "Endüstriyel İhtiyaçlarınıza Profesyonel Yaklaşım",
      items: [
        { title: "Otomasyon Projeleri", desc: "Endüstriyel süreçlerin verimliliğini artıran modern otomasyon çözümleri." },
        { title: "Robotik Otomasyon", desc: "Hassas ve hızlı üretim için özelleştirilmiş robotik sistem entegrasyonu." },
        { title: "Kaynaklı İmalat", desc: "Uluslararası standartlarda sertifikalı kaynaklı üretim ve montaj." },
        { title: "Proje İmalatları", desc: "Fikir aşamasından anahtar teslim üretime kadar tam kapsamlı proje yönetimi." },
        { title: "Tasarım & Analiz", desc: "CAD/CAM tasarımı ve gelişmiş mühendislik analizleri (FEA, CFD)." },
        { title: "Hidrolik-Pnömatik", desc: "Güç ve hareket kontrolü için yüksek performanslı akışkan sistemleri." }
      ]
    },
    sectors: {
      title: "Sektörler",
      subtitle: "Hizmet Verdiğimiz Alanlar",
      desc: "Farklı endüstrilerin zorlu gereksinimlerini karşılayan esnek ve dayanıklı çözümler üretiyoruz.",
      items: {
        construction: "İş Makinesi",
        automotive: "Otomotiv",
        defense: "Savunma Sanayi",
        custom: "Özel Tasarım & İmalat",
        test: "Test Üniteleri"
      }
    },
    machines: {
      title: "Makina Parkuru",
      subtitle: "Modern Üretim Altyapımız"
    },
    references: {
      title: "Referanslarımız",
      subtitle: "Güçlü İş Ortaklıklarımız"
    },
    samples: {
      title: "Örnek Üretimlerimiz",
      subtitle: "Hassas ve Kaliteli Çözümler"
    },
    documents: {
      title: "Kalite Belgelerimiz",
      subtitle: "Uluslararası Standartlarda Güvenilir Üretim",
      desc: "Tüm süreçlerimizde kalite yönetim sistemlerini titizlikle uyguluyor, müşteri memnuniyetini ve güvenliğini en üst seviyede tutuyoruz."
    },
    contact: {
      title: "Bize Ulaşın",
      address: "Adres",
      email: "E-Posta",
      phone: "Telefon",
      form: {
        name: "Ad Soyad",
        email: "E-Posta",
        subject: "Konu",
        message: "Mesajınız",
        send: "Mesaj Gönder"
      }
    },
    quote: {
      title: "Teklif Alın",
      subtitle: "Projeniz için detayları paylaşın, size en kısa sürede dönüş yapalım.",
      name: "İsim Soyisim",
      company: "Firma Adı",
      email: "E-Posta",
      phone: "Telefon",
      file: "Proje Dosyası (ZIP/RAR - Max 250MB)",
      filePlaceholder: "Dosyayı buraya sürükleyin veya tıklayın",
      fileHint: "Sadece .zip veya .rar uzantılı dosyalar",
      submit: "Teklif Talebi Gönder",
      errorSize: "Dosya boyutu 250MB'ı aşamaz.",
      errorType: "Lütfen sadece ZIP veya RAR dosyası yükleyin."
    },
    footer: {
      rights: "Tüm hakları saklıdır."
    }
  },
  en: {
    nav: {
      capabilities: "Capabilities",
      sectors: "Sectors",
      documents: "Documents",
      contact: "Contact",
      getQuote: "Get a Quote",
      companySub: "Machine Engineering"
    },
    hero: {
      title: "Engineering Solutions of the Future",
      subtitle: "Engineering",
      manufacturing: "Manufacturing",
      desc: "As Manes Machine Engineering, we offer a wide range of high-quality manufacturing and engineering services from automation to robotic systems, custom design to defense industry.",
      cta: "Get a Quote Now",
      badge: "ISO Certified",
      badgeDesc: "High Quality Standards"
    },
    capabilities: {
      title: "Our Capabilities",
      subtitle: "Professional Approach to Your Industrial Needs",
      items: [
        { title: "Automation Projects", desc: "Modern automation solutions that increase the efficiency of industrial processes." },
        { title: "Robotic Automation", desc: "Customized robotic system integration for precise and fast production." },
        { title: "Welded Manufacturing", desc: "Certified welded production and assembly at international standards." },
        { title: "Project Manufacturing", desc: "Full-scale project management from the idea stage to turnkey production." },
        { title: "Design & Analysis", desc: "CAD/CAM design and advanced engineering analysis (FEA, CFD)." },
        { title: "Hydraulic-Pneumatic", desc: "High-performance fluid systems for power and motion control." }
      ]
    },
    sectors: {
      title: "Sectors",
      subtitle: "Areas We Serve",
      desc: "We produce flexible and durable solutions that meet the demanding requirements of different industries.",
      items: {
        construction: "Construction Machinery",
        automotive: "Automotive",
        defense: "Defense Industry",
        custom: "Custom Design & Mfg",
        test: "Test Units"
      }
    },
    machines: {
      title: "Machine Park",
      subtitle: "Our Modern Production Infrastructure"
    },
    references: {
      title: "Our References",
      subtitle: "Strong Business Partnerships"
    },
    samples: {
      title: "Sample Productions",
      subtitle: "Precise and Quality Solutions"
    },
    documents: {
      title: "Our Quality Certificates",
      subtitle: "Reliable Production at International Standards",
      desc: "We meticulously apply quality management systems in all our processes, keeping customer satisfaction and safety at the highest level."
    },
    contact: {
      title: "Contact Us",
      address: "Address",
      email: "E-Mail",
      phone: "Phone",
      form: {
        name: "Full Name",
        email: "E-Mail",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message"
      }
    },
    quote: {
      title: "Get a Quote",
      subtitle: "Share the details for your project, we will get back to you as soon as possible.",
      name: "Full Name",
      company: "Company Name",
      email: "E-Mail",
      phone: "Phone",
      file: "Project File (ZIP/RAR - Max 250MB)",
      filePlaceholder: "Drag and drop the file here or click",
      fileHint: "Only .zip or .rar files",
      submit: "Send Quote Request",
      errorSize: "File size cannot exceed 250MB.",
      errorType: "Please upload only ZIP or RAR files."
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  es: {
    nav: {
      capabilities: "Capacidades",
      sectors: "Sectores",
      documents: "Documentos",
      contact: "Contacto",
      getQuote: "Obtener presupuesto",
      companySub: "Ingeniería de Máquinas"
    },
    hero: {
      title: "Soluciones de ingeniería del futuro",
      subtitle: "Ingeniería",
      manufacturing: "Fabricación",
      desc: "Como Manes Machine Engineering, ofrecemos una amplia gama de servicios de fabricación e ingeniería de alta calidad, desde automatización hasta sistemas robóticos, diseño personalizado hasta industria de defensa.",
      cta: "Obtenga un presupuesto ahora",
      badge: "Certificado ISO",
      badgeDesc: "Altos estándares de calidad"
    },
    capabilities: {
      title: "Nuestras capacidades",
      subtitle: "Enfoque profesional para sus necesidades industriales",
      items: [
        { title: "Proyectos de automatización", desc: "Soluciones de automatización modernas que aumentan la eficiencia de los procesos industriales." },
        { title: "Automatización robótica", desc: "Integración de sistemas robóticos personalizados para una producción precisa y rápida." },
        { title: "Fabricación soldada", desc: "Producción y montaje soldados certificados según estándares internacionales." },
        { title: "Fabricación de proyectos", desc: "Gestión de proyectos a gran escala desde la etapa de idea hasta la producción llave en mano." },
        { title: "Diseño y análisis", desc: "Diseño CAD/CAM y análisis de ingeniería avanzado (FEA, CFD)." },
        { title: "Hidráulica-Neumática", desc: "Sistemas de fluidos de alto rendimiento para el control de potencia y movimiento." }
      ]
    },
    sectors: {
      title: "Sectores",
      subtitle: "Áreas que servimos",
      desc: "Producimos soluciones flexibles y duraderas que cumplen con los exigentes requisitos de diferentes industrias.",
      items: {
        construction: "Maquinaria de construcción",
        automotive: "Automotriz",
        defense: "Industria de defensa",
        custom: "Diseño y fabricación personalizados",
        test: "Unidades de prueba"
      }
    },
    machines: {
      title: "Parque de máquinas",
      subtitle: "Nuestra moderna infraestructura de producción"
    },
    references: {
      title: "Nuestras referencias",
      subtitle: "Sólidas alianzas comerciales"
    },
    samples: {
      title: "Producciones de muestra",
      subtitle: "Soluciones precisas y de calidad"
    },
    documents: {
      title: "Nuestros certificados de calidad",
      subtitle: "Producción confiable bajo estándares internacionales",
      desc: "Aplicamos meticulosamente sistemas de gestión de calidad en todos nuestros procesos, manteniendo la satisfacción y seguridad del cliente al más alto nivel."
    },
    contact: {
      title: "Contáctenos",
      address: "Dirección",
      email: "Correo electrónico",
      phone: "Teléfono",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Su mensaje",
        send: "Enviar mensaje"
      }
    },
    quote: {
      title: "Obtenga un presupuesto",
      subtitle: "Comparta los detalles de su proyecto, nos pondremos en contacto con usted lo antes posible.",
      name: "Nombre completo",
      company: "Nombre de la empresa",
      email: "Correo electrónico",
      phone: "Teléfono",
      file: "Archivo de proyecto (ZIP/RAR - Máx. 250MB)",
      filePlaceholder: "Arrastre y suelte el archivo aquí o haga clic",
      fileHint: "Solo archivos .zip o .rar",
      submit: "Enviar solicitud de presupuesto",
      errorSize: "El tamaño del archivo no puede exceder los 250MB.",
      errorType: "Cargue solo archivos ZIP o RAR."
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  fr: {
    nav: {
      capabilities: "Capacités",
      sectors: "Secteurs",
      documents: "Documents",
      contact: "Contact",
      getQuote: "Obtenir un devis",
      companySub: "Ingénierie de Machines"
    },
    hero: {
      title: "Solutions d'ingénierie du futur",
      subtitle: "Ingénierie",
      manufacturing: "Fabrication",
      desc: "En tant que Manes Machine Engineering, nous proposons une large gamme de services de fabrication et d'ingénierie de haute qualité, de l'automatisation aux systèmes robotiques, de la conception personnalisée à l'industrie de la défense.",
      cta: "Obtenez un devis maintenant",
      badge: "Certifié ISO",
      badgeDesc: "Normes de qualité élevées"
    },
    capabilities: {
      title: "Nos capacités",
      subtitle: "Approche professionnelle de vos besoins industriels",
      items: [
        { title: "Projets d'automatisation", desc: "Solutions d'automatisation modernes qui augmentent l'efficacité des processus industriels." },
        { title: "Automatisation robotique", desc: "Intégration de systèmes robotiques personnalisés pour une production précise et rapide." },
        { title: "Fabrication soudée", desc: "Production et assemblage soudés certifiés selon les normes internationales." },
        { title: "Fabrication de projets", desc: "Gestion de projet à grande échelle, de l'étape de l'idée à la production clé en main." },
        { title: "Conception et analyse", desc: "Conception CAD/CAM et analyse d'ingénierie avancée (FEA, CFD)." },
        { title: "Hydraulique-Pneumatique", desc: "Systèmes fluides haute performance pour le contrôle de la puissance et du mouvement." }
      ]
    },
    sectors: {
      title: "Secteurs",
      subtitle: "Domaines que nous servons",
      desc: "Nous produisons des solutions flexibles et durables qui répondent aux exigences exigeantes de différentes industries.",
      items: {
        construction: "Engins de chantier",
        automotive: "Automobile",
        defense: "Industrie de la défense",
        custom: "Conception et fabrication sur mesure",
        test: "Unités de test"
      }
    },
    machines: {
      title: "Parc de machines",
      subtitle: "Notre infrastructure de production moderne"
    },
    references: {
      title: "Nos références",
      subtitle: "Partenariats commerciaux solides"
    },
    samples: {
      title: "Exemples de productions",
      subtitle: "Solutions précises et de qualité"
    },
    documents: {
      title: "Nos certificats de qualité",
      subtitle: "Production fiable aux normes internationales",
      desc: "Nous appliquons méticuleusement les systèmes de gestion de la qualité dans tous nos processus, en maintenant la satisfaction et la sécurité des clients au plus haut niveau."
    },
    contact: {
      title: "Contactez-nous",
      address: "Adresse",
      email: "E-mail",
      phone: "Téléphone",
      form: {
        name: "Nom complet",
        email: "E-mail",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer le message"
      }
    },
    quote: {
      title: "Obtenir un devis",
      subtitle: "Partagez les détails de votre projet, nous vous répondrons dans les plus brefs délais.",
      name: "Nom complet",
      company: "Nom de l'entreprise",
      email: "E-mail",
      phone: "Téléphone",
      file: "Fichier de projet (ZIP/RAR - Max 250Mo)",
      filePlaceholder: "Glissez et déposez le fichier ici ou cliquez",
      fileHint: "Uniquement les fichiers .zip ou .rar",
      submit: "Envoyer la demande de devis",
      errorSize: "La taille du fichier ne peut pas dépasser 250 Mo.",
      errorType: "Veuillez télécharger uniquement des fichiers ZIP ou RAR."
    },
    footer: {
      rights: "Tous droits réservés."
    }
  },
  de: {
    nav: {
      capabilities: "Fähigkeiten",
      sectors: "Branchen",
      documents: "Dokumente",
      contact: "Kontakt",
      getQuote: "Angebot anfordern",
      companySub: "Maschinenbau"
    },
    hero: {
      title: "Engineering-Lösungen der Zukunft",
      subtitle: "Engineering",
      manufacturing: "Fertigung",
      desc: "Als Manes Machine Engineering bieten wir eine breite Palette hochwertiger Fertigungs- und Ingenieurdienstleistungen an, von der Automatisierung über Robotersysteme bis hin zu kundenspezifischem Design und der Verteidigungsindustrie.",
      cta: "Jetzt Angebot anfordern",
      badge: "ISO-zertifiziert",
      badgeDesc: "Hohe Qualitätsstandards"
    },
    capabilities: {
      title: "Unsere Fähigkeiten",
      subtitle: "Professioneller Ansatz für Ihre industriellen Anforderungen",
      items: [
        { title: "Automatisierungsprojekte", desc: "Moderne Automatisierungslösungen, die die Effizienz industrieller Prozesse steigern." },
        { title: "Roboterautomatisierung", desc: "Kundenspezifische Robotersystemintegration für präzise und schnelle Produktion." },
        { title: "Schweißfertigung", desc: "Zertifizierte Schweißproduktion und Montage nach internationalen Standards." },
        { title: "Projektfertigung", desc: "Umfassendes Projektmanagement von der Ideenphase bis zur schlüsselfertigen Produktion." },
        { title: "Design & Analyse", desc: "CAD/CAM-Design und fortschrittliche Engineering-Analyse (FEA, CFD)." },
        { title: "Hydraulik-Pneumatik", desc: "Hochleistungs-Fluidsysteme für Leistungs- und Bewegungssteuerung." }
      ]
    },
    sectors: {
      title: "Branchen",
      subtitle: "Bereiche, die wir bedienen",
      desc: "Wir produzieren flexible und langlebige Lösungen, die den anspruchsvollen Anforderungen verschiedener Branchen gerecht werden.",
      items: {
        construction: "Baumaschinen",
        automotive: "Automobilindustrie",
        defense: "Verteidigungsindustrie",
        custom: "Sonderkonstruktion & Fertigung",
        test: "Testeinheiten"
      }
    },
    machines: {
      title: "Maschinenpark",
      subtitle: "Unsere moderne Produktionsinfrastruktur"
    },
    references: {
      title: "Unsere Referenzen",
      subtitle: "Starke Geschäftspartnerschaften"
    },
    samples: {
      title: "Beispielproduktionen",
      subtitle: "Präzise und qualitative Lösungen"
    },
    documents: {
      title: "Unsere Qualitätszertifikate",
      subtitle: "Zuverlässige Produktion nach internationalen Standards",
      desc: "Wir wenden Qualitätsmanagementsysteme in all unseren Prozessen akribisch an und halten Kundenzufriedenheit und Sicherheit auf höchstem Niveau."
    },
    contact: {
      title: "Kontaktieren Sie uns",
      address: "Adresse",
      email: "E-Mail",
      phone: "Telefon",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail",
        subject: "Betreff",
        message: "Ihre Nachricht",
        send: "Nachricht senden"
      }
    },
    quote: {
      title: "Angebot anfordern",
      subtitle: "Teilen Sie uns die Details für Ihr Projekt mit, wir melden uns so schnell wie möglich bei Ihnen.",
      name: "Vollständiger Name",
      company: "Firmenname",
      email: "E-Mail",
      phone: "Telefon",
      file: "Projektdatei (ZIP/RAR - Max. 250MB)",
      filePlaceholder: "Datei hierher ziehen oder klicken",
      fileHint: "Nur .zip- oder .rar-Dateien",
      submit: "Angebotsanfrage senden",
      errorSize: "Dateigröße darf 250 MB nicht überschreiten.",
      errorType: "Bitte laden Sie nur ZIP- oder RAR-Dateien hoch."
    },
    footer: {
      rights: "Alle Rechte vorbehalten."
    }
  },
  cs: {
    nav: {
      capabilities: "Schopnosti",
      sectors: "Sektory",
      documents: "Dokumenty",
      contact: "Kontakt",
      getQuote: "Získat nabídku",
      companySub: "Strojní Inženýrství"
    },
    hero: {
      title: "Inženýrská řešení budoucnosti",
      subtitle: "Inženýrství",
      manufacturing: "Výroba",
      desc: "Jako Manes Machine Engineering nabízíme širokou škálu vysoce kvalitních výrobních a inženýrských služeb od automatizace po robotické systémy, zakázkový design až po obranný průmysl.",
      cta: "Získat nabídku nyní",
      badge: "Certifikace ISO",
      badgeDesc: "Vysoké standardy kvality"
    },
    capabilities: {
      title: "Naše schopnosti",
      subtitle: "Profesionální přístup k vašim průmyslovým potřebám",
      items: [
        { title: "Projekty automatizace", desc: "Moderní automatizační řešení, která zvyšují efektivitu průmyslových procesů." },
        { title: "Robotická automatizace", desc: "Zakázková integrace robotických systémů pro přesnou a rychlou výrobu." },
        { title: "Svařovaná výroba", desc: "Certifikovaná svařovaná výroba a montáž podle mezinárodních standardů." },
        { title: "Projektová výroba", desc: "Komplexní projektové řízení od fáze nápadu až po výrobu na klíč." },
        { title: "Design a analýza", desc: "CAD/CAM design a pokročilá inženýrská analýza (FEA, CFD)." },
        { title: "Hydraulika-Pneumatika", desc: "Vysoce výkonné fluidní systémy pro řízení výkonu a pohybu." }
      ]
    },
    sectors: {
      title: "Sektory",
      subtitle: "Oblasti, které obsluhujeme",
      desc: "Vyrábíme flexibilní a odolná řešení, která splňují náročné požadavky různých odvětví.",
      items: {
        construction: "Stavební stroje",
        automotive: "Automobilový průmysl",
        defense: "Obranný průmysl",
        custom: "Zakázkový design a výroba",
        test: "Testovací jednotky"
      }
    },
    machines: {
      title: "Strojový park",
      subtitle: "Naše moderní výrobní infrastruktura"
    },
    references: {
      title: "Naše reference",
      subtitle: "Silná obchodní partnerství"
    },
    samples: {
      title: "Ukázky výroby",
      subtitle: "Přesná a kvalitní řešení"
    },
    documents: {
      title: "Naše certifikáty kvality",
      subtitle: "Spolehlivá výroba podle mezinárodních standardů",
      desc: "Ve všech našich procesech pečlivě uplatňujeme systémy řízení kvality a udržujeme spokojenost a bezpečnost zákazníků na nejvyšší úrovni."
    },
    contact: {
      title: "Kontaktujte nás",
      address: "Adresa",
      email: "E-mail",
      phone: "Telefon",
      form: {
        name: "Celé jméno",
        email: "E-mail",
        subject: "Předmět",
        message: "Vaše zpráva",
        send: "Odeslat zprávu"
      }
    },
    quote: {
      title: "Získat nabídku",
      subtitle: "Sdílejte podrobnosti o svém projektu, ozveme se vám co nejdříve.",
      name: "Celé jméno",
      company: "Název společnosti",
      email: "E-mail",
      phone: "Telefon",
      file: "Soubor projektu (ZIP/RAR - Max 250MB)",
      filePlaceholder: "Přetáhněte soubor sem nebo klikněte",
      fileHint: "Pouze soubory .zip nebo .rar",
      submit: "Odeslat žádost o nabídku",
      errorSize: "Velikost souboru nesmí překročit 250 MB.",
      errorType: "Nahrajte prosím pouze soubory ZIP nebo RAR."
    },
    footer: {
      rights: "Všechna práva vyhrazena."
    }
  },
  ar: {
    nav: {
      capabilities: "القدرات",
      sectors: "القطاعات",
      documents: "الوثائق",
      contact: "اتصل بنا",
      getQuote: "احصل على عرض سعر",
      companySub: "هندسة الآلات"
    },
    hero: {
      title: "حلول هندسية للمستقبل",
      subtitle: "الهندسة",
      manufacturing: "التصنيع",
      desc: "بصفتنا مانيس لهندسة الآلات، نقدم مجموعة واسعة من خدمات التصنيع والهندسة عالية الجودة من الأتمتة إلى الأنظمة الروبوتية، ومن التصميم المخصص إلى الصناعات الدفاعية.",
      cta: "احصل على عرض سعر الآن",
      badge: "معتمد من ISO",
      badgeDesc: "معايير جودة عالية"
    },
    capabilities: {
      title: "قدراتنا",
      subtitle: "نهج احترافي لاحتياجاتك الصناعية",
      items: [
        { title: "مشاريع الأتمتة", desc: "حلول أتمتة حديثة تزيد من كفاءة العمليات الصناعية." },
        { title: "الأتمتة الروبوتية", desc: "تكامل الأنظمة الروبوتية المخصصة للإنتاج الدقيق والسريع." },
        { title: "التصنيع الملحوم", desc: "إنتاج وتجميع ملحوم معتمد وفق المعايير الدولية." },
        { title: "تصنيع المشاريع", desc: "إدارة مشاريع كاملة من مرحلة الفكرة إلى الإنتاج الجاهز للتسليم." },
        { title: "التصميم والتحليل", desc: "تصميم CAD/CAM وتحليل هندسي متقدم (FEA, CFD)." },
        { title: "الهيدروليك والنيوماتيك", desc: "أنظمة سوائل عالية الأداء للتحكم في الطاقة والحركة." }
      ]
    },
    sectors: {
      title: "القطاعات",
      subtitle: "المجالات التي نخدمها",
      desc: "ننتج حلولاً مرنة ومتينة تلبي المتطلبات الصعبة لمختلف الصناعات.",
      items: {
        construction: "آلات البناء",
        automotive: "صناعة السيارات",
        defense: "الصناعات الدفاعية",
        custom: "تصميم وتصنيع مخصص",
        test: "وحدات الاختبار"
      }
    },
    machines: {
      title: "حديقة الآلات",
      subtitle: "بنيتنا التحتية الحديثة للإنتاج"
    },
    references: {
      title: "مراجعنا",
      subtitle: "شراكات تجارية قوية"
    },
    samples: {
      title: "عينات من إنتاجنا",
      subtitle: "حلول دقيقة وعالية الجودة"
    },
    documents: {
      title: "شهادات الجودة لدينا",
      subtitle: "إنتاج موثوق بالمعايير الدولية",
      desc: "نطبق بدقة أنظمة إدارة الجودة في جميع عملياتنا، مع الحفاظ على رضا العملاء وسلامتهم في أعلى مستوى."
    },
    contact: {
      title: "اتصل بنا",
      address: "العنوان",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        send: "إرسال الرسالة"
      }
    },
    quote: {
      title: "احصل على عرض سعر",
      subtitle: "شارك تفاصيل مشروعك، وسنعاود الاتصال بك في أقرب وقت ممكن.",
      name: "الاسم الكامل",
      company: "اسم الشركة",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      file: "ملف المشروع (ZIP/RAR - بحد أقصى 250 ميجابايت)",
      filePlaceholder: "اسحب الملف وأفلته هنا أو انقر",
      fileHint: "فقط ملفات .zip أو .rar",
      submit: "إرسال طلب عرض السعر",
      errorSize: "لا يمكن أن يتجاوز حجم الملف 250 ميجابايت.",
      errorType: "يرجى تحميل ملفات ZIP أو RAR فقط."
    },
    footer: {
      rights: "جميع الحقوق محفوظة."
    }
  },
  nl: {
    nav: {
      capabilities: "Capaciteiten",
      sectors: "Sectoren",
      documents: "Documenten",
      contact: "Contact",
      getQuote: "Offerte aanvragen",
      companySub: "Machinebouw"
    },
    hero: {
      title: "Engineeringoplossingen van de toekomst",
      subtitle: "Engineering",
      manufacturing: "Productie",
      desc: "Als Manes Machine Engineering bieden we een breed scala aan hoogwaardige productie- en engineeringdiensten, van automatisering tot robotica, van aangepast ontwerp tot de defensie-industrie.",
      cta: "Vraag nu een offerte aan",
      badge: "ISO Gecertificeerd",
      badgeDesc: "Hoge kwaliteitsnormen"
    },
    capabilities: {
      title: "Onze capaciteiten",
      subtitle: "Professionele aanpak voor uw industriële behoe用の",
      items: [
        { title: "Automatiseringsprojecten", desc: "Moderne automatiseringsoplossingen die de efficiëntie van industriële processen verhogen." },
        { title: "Robotautomatisering", desc: "Aangepaste robotica-integratie voor nauwkeurige en snelle productie." },
        { title: "Gelaste fabricage", desc: "Gecertificeerde gelaste productie en assemblage volgens internationale normen." },
        { title: "Projectfabricage", desc: "Volledige projectbegeleiding van idee tot turn-key productie." },
        { title: "Ontwerp & Analyse", desc: "CAD/CAM-ontwerp en geavanceerde engineeringanalyse (FEA, CFD)." },
        { title: "Hydraulisch-Pneumatisch", desc: "Hoogwaardige vloeistofsystemen voor vermogens- en bewegingscontrole." }
      ]
    },
    sectors: {
      title: "Sectoren",
      subtitle: "Gebieden die we bedienen",
      desc: "We produceren flexibele en duurzame oplossingen die voldoen aan de veeleisende eisen van verschillende industrieën.",
      items: {
        construction: "Bouwmachines",
        automotive: "Automobielindustrie",
        defense: "Defensie-industrie",
        custom: "Aangepast ontwerp & fabricage",
        test: "Testeenheden"
      }
    },
    machines: {
      title: "Machinepark",
      subtitle: "Onze moderne productie-infrastructuur"
    },
    references: {
      title: "Onze referenties",
      subtitle: "Sterke zakelijke partnerschappen"
    },
    samples: {
      title: "Voorbeeldproducties",
      subtitle: "Precieze en kwalitatieve oplossingen"
    },
    documents: {
      title: "Onze kwaliteitscertificaten",
      subtitle: "Betrouwbare productie volgens internationale normen",
      desc: "We passen kwaliteitsmanagementsystemen nauwgezet toe in al onze processen, waarbij klanttevredenheid en veiligheid op het hoogste niveau staan."
    },
    contact: {
      title: "Neem contact op",
      address: "Adres",
      email: "E-mail",
      phone: "Telefoon",
      form: {
        name: "Volledige naam",
        email: "E-mail",
        subject: "Onderwerp",
        message: "Uw bericht",
        send: "Bericht verzenden"
      }
    },
    quote: {
      title: "Offerte aanvragen",
      subtitle: "Deel de details voor uw project, we nemen zo snel mogelijk contact met u op.",
      name: "Volledige naam",
      company: "Bedrijfsnaam",
      email: "E-mail",
      phone: "Telefoon",
      file: "Projectbestand (ZIP/RAR - Max 250MB)",
      filePlaceholder: "Sleep het bestand hierheen of klik",
      fileHint: "Alleen .zip of .rar bestanden",
      submit: "Offerteaanvraag verzenden",
      errorSize: "Bestandsgrootte mag niet groter zijn dan 250MB.",
      errorType: "Upload alleen ZIP- of RAR-bestanden."
    },
    footer: {
      rights: "Alle rechten voorbehouden."
    }
  }
};
