import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, ArrowUp, Phone, Palette, ArrowRight, Check, Languages, ArrowLeft, ExternalLink, Calendar, Clock, Eye, Star, Award, User, Target, Lightbulb, Coffee } from 'lucide-react';
import svgPaths from "./imports/svg-3aq2xgmvsu";
import imgD8E6Eb6B345Ada088E2448947C483Ab42 from "figma:asset/caae806975928a75c46c1bc680021f992f457e15.png";
import imgD8E6Eb6B345Ada088E2448947C483Ab43 from "figma:asset/c7d606c54e3dae29bb244748d6905ec049756c18.png";
import imgD8E6Eb6B345Ada088E2448947C483Ab44 from "figma:asset/1f82fe59e0070aa7fe9b9bd980ca9d7a7b457ad2.png";
import imgD8E6Eb6B345Ada088E2448947C483Ab45 from "figma:asset/2ad366052b8413ad8588cb503f693fe5682fc2fe.png";
import imgD8E6Eb6B345Ada088E2448947C483Ab46 from "figma:asset/00b2769ad960ac1a1a52d41a886f4e89812fcc8f.png";
import imgD8E6Eb6B345Ada088E2448947C483Ab47 from "figma:asset/27a964f1166648e57c09876bbdc96b0a29d3e018.png";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Checkbox } from "./components/ui/checkbox";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Separator } from "./components/ui/separator";

// Instagram Icon Component
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

// Behance Icon Component - Fixed
function BehanceIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 4.4h6.938c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.03.34 1.68 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.498 1.19.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.88.24H0V4.4zm3.495 4.513h2.81c.411 0 .783-.07 1.117-.2.334-.13.62-.31.858-.54.237-.23.414-.5.53-.81.116-.31.175-.65.175-1.02 0-.68-.23-1.22-.696-1.61-.466-.39-1.13-.59-1.993-.59H3.495v4.77zm0 6.627h3.273c.484 0 .916-.07 1.297-.19.38-.13.706-.31.975-.54.27-.23.475-.5.615-.81.14-.31.21-.65.21-1.02 0-.68-.23-1.22-.696-1.61-.466-.39-1.13-.59-1.993-.59H3.495v4.76zm12.178-9.49h6.658v1.5h-6.658v-1.5zm.765 3.49c-.045-.68-.3-1.22-.765-1.61-.465-.39-1.095-.59-1.89-.59-.617 0-1.146.2-1.588.6-.442.4-.695.94-.76 1.6h6.658c.065-.68.3-1.22.765-1.61.465-.39 1.095-.59 1.89-.59.617 0 1.146-.2 1.588-.6.442-.4.695-.94.76-1.6zm-6.658 2.49c.065.68.3 1.22.765 1.61.465.39 1.095.59 1.89.59.617 0 1.146-.2 1.588-.6.442-.4.695-.94.76-1.6h-6.658c-.045.68-.3 1.22-.765 1.61-.465.39-1.095.59-1.89.59-.617 0-1.146.2-1.588.6-.442.4-.695.94-.76 1.6z"/>
    </svg>
  );
}

// LinkedIn Icon Component
function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// Project data with new project added
const projectsData = {
  "dashboard-shm": {
    id: "dashboard-shm",
    title: "Dashboard for SHM",
    subtitle: "Healthcare Management System",
    image: imgD8E6Eb6B345Ada088E2448947C483Ab42,
    category: "UX/UI Project",
    duration: "4 months",
    year: "2024",
    client: "SHM Healthcare",
    tags: ["Dashboard Design", "Healthcare", "Data Visualization", "User Experience"],
    overview: {
      en: "A comprehensive healthcare management dashboard designed to streamline patient data management and improve healthcare provider workflows. The project focused on creating an intuitive interface that reduces cognitive load while providing quick access to critical information.",
      es: "Un dashboard integral de gestión sanitaria diseñado para optimizar la gestión de datos de pacientes y mejorar los flujos de trabajo de los proveedores de salud. El proyecto se centró en crear una interfaz intuitiva que reduce la carga cognitiva mientras proporciona acceso rápido a información crítica."
    },
    challenge: {
      en: "The existing system was outdated and inefficient, leading to increased response times and user frustration. Healthcare professionals needed a solution that could handle complex data while remaining user-friendly and accessible during high-stress situations.",
      es: "El sistema existente estaba desactualizado e era ineficiente, lo que resultaba en tiempos de respuesta aumentados y frustración del usuario. Los profesionales de la salud necesitaban una solución que pudiera manejar datos complejos mientras permanecía amigable y accesible durante situaciones de alto estrés."
    },
    solution: {
      en: "I designed a clean, modern dashboard with a focus on data hierarchy and quick actions. Key features include customizable widgets, real-time notifications, and a streamlined patient search system. The design system emphasizes clarity and reduces visual clutter while maintaining comprehensive functionality.",
      es: "Diseñé un dashboard limpio y moderno con enfoque en la jerarquía de datos y acciones rápidas. Las características clave incluyen widgets personalizables, notificaciones en tiempo real y un sistema de búsqueda de pacientes optimizado. El sistema de diseño enfatiza la claridad y reduce el desorden visual mientras mantiene funcionalidad integral."
    },
    results: {
      en: "The new dashboard reduced task completion time by 40% and improved user satisfaction scores by 65%. Healthcare providers reported significantly improved workflow efficiency and reduced training time for new staff members.",
      es: "El nuevo dashboard redujo el tiempo de completación de tareas en un 40% y mejoró las puntuaciones de satisfacción del usuario en un 65%. Los proveedores de salud reportaron una eficiencia de flujo de trabajo significativamente mejorada y tiempo de entrenamiento reducido para nuevos miembros del personal."
    },
    metrics: [
      { label: "Task completion time", value: "40% faster", icon: Clock },
      { label: "User satisfaction", value: "65% increase", icon: Star },
      { label: "Training time", value: "50% reduction", icon: Award }
    ]
  },
  "website-comprajusta": {
    id: "website-comprajusta",
    title: "Full website for CompraJusta",
    subtitle: "E-commerce Platform Redesign",
    image: imgD8E6Eb6B345Ada088E2448947C483Ab43,
    category: "UX/UI Project",
    duration: "6 months",
    year: "2024",
    client: "CompraJusta",
    tags: ["E-commerce", "Responsive Design", "User Experience", "Conversion Optimization"],
    overview: {
      en: "Complete redesign of CompraJusta's e-commerce platform to improve user experience and increase conversion rates. The project involved restructuring the information architecture and implementing a modern, mobile-first design approach.",
      es: "Rediseño completo de la plataforma de e-commerce de CompraJusta para mejorar la experiencia del usuario e incrementar las tasas de conversión. El proyecto involucró reestructurar la arquitectura de información e implementar un enfoque de diseño moderno y mobile-first."
    },
    challenge: {
      en: "The original website had a complex navigation structure, poor mobile experience, and low conversion rates. Users were abandoning their shopping carts due to a complicated checkout process and lack of trust indicators.",
      es: "El sitio web original tenía una estructura de navegación compleja, pobre experiencia móvil y bajas tasas de conversión. Los usuarios abandonaban sus carritos de compra debido a un proceso de checkout complicado y falta de indicadores de confianza."
    },
    solution: {
      en: "I redesigned the entire user journey with a focus on simplicity and trust. This included a streamlined navigation, improved product discovery, simplified checkout process, and enhanced mobile experience. Trust signals and social proof were strategically placed throughout the site.",
      es: "Rediseñé todo el journey del usuario con enfoque en simplicidad y confianza. Esto incluyó una navegación optimizada, descubrimiento de productos mejorado, proceso de checkout simplificado y experiencia móvil mejorada. Las señales de confianza y prueba social se colocaron estratégicamente en todo el sitio."
    },
    results: {
      en: "The redesign resulted in a 85% increase in conversion rates, 60% improvement in mobile user engagement, and 45% reduction in cart abandonment. The new design also improved site performance and SEO rankings.",
      es: "El rediseño resultó en un aumento del 85% en las tasas de conversión, 60% de mejora en el engagement de usuarios móviles y 45% de reducción en abandono del carrito. El nuevo diseño también mejoró el rendimiento del sitio y rankings de SEO."
    },
    metrics: [
      { label: "Conversion rate", value: "85% increase", icon: ArrowUp },
      { label: "Mobile engagement", value: "60% improvement", icon: Phone },
      { label: "Cart abandonment", value: "45% reduction", icon: ArrowRight }
    ]
  },
  "landing-klamad": {
    id: "landing-klamad",
    title: "Modern landing page for Klamad",
    subtitle: "SaaS Product Launch",
    image: imgD8E6Eb6B345Ada088E2448947C483Ab44,
    category: "UX/UI Project",
    duration: "2 months",
    year: "2024",
    client: "Klamad",
    tags: ["Landing Page", "Conversion Optimization", "SaaS", "Marketing"],
    overview: {
      en: "Design and development of a high-converting landing page for Klamad's SaaS product launch. The page was designed to effectively communicate the product's value proposition and drive user sign-ups through compelling design and clear call-to-actions.",
      es: "Diseño y desarrollo de una landing page de alta conversión para el lanzamiento del producto SaaS de Klamad. La página fue diseñada para comunicar efectivamente la propuesta de valor del producto e impulsar registros de usuarios a través de diseño atractivo y llamadas a la acción claras."
    },
    challenge: {
      en: "Klamad needed to quickly establish market presence and generate qualified leads for their new SaaS platform. The challenge was to create a landing page that would stand out in a competitive market while clearly communicating complex technical benefits to potential users and investors.",
      es: "Klamad necesitaba establecer rápidamente presencia en el mercado y generar leads calificados para su nueva plataforma SaaS. El desafío era crear una landing page que se destacara en un mercado competitivo mientras comunicaba claramente beneficios técnicos complejos a usuarios potenciales e inversores."
    },
    solution: {
      en: "I created a modern, conversion-focused landing page with a clear value hierarchy, compelling hero section, social proof integration, and strategic placement of CTAs. The design uses progressive disclosure to guide users through the product benefits without overwhelming them, featuring interactive elements and data visualizations.",
      es: "Creé una landing page moderna y enfocada en conversión con una jerarquía de valor clara, sección hero atractiva, integración de prueba social y ubicación estratégica de CTAs. El diseño usa revelación progresiva para guiar a los usuarios a través de los beneficios del producto sin abrumarlos, presentando elementos interactivos y visualizaciones de datos."
    },
    results: {
      en: "The landing page achieved a 32% conversion rate, generated 1,200+ qualified leads in the first month, and helped Klamad secure their initial funding round. The page also won a design award for excellence in SaaS marketing and increased organic traffic by 250%.",
      es: "La landing page logró una tasa de conversión del 32%, generó más de 1,200 leads calificados en el primer mes y ayudó a Klamad a asegurar su ronda inicial de financiamiento. La página también ganó un premio de diseño por excelencia en marketing SaaS y aumentó el tráfico orgánico en un 250%."
    },
    metrics: [
      { label: "Conversion rate", value: "32%", icon: ArrowUp },
      { label: "Qualified leads", value: "1,200+", icon: Eye },
      { label: "Design award", value: "Winner", icon: Award }
    ]
  },
  "brand-hoxi": {
    id: "brand-hoxi",
    title: "Brand Identity for Hoxi",
    subtitle: "Complete Brand System",
    image: imgD8E6Eb6B345Ada088E2448947C483Ab45,
    category: "Graphic Design",
    duration: "3 months",
    year: "2024",
    client: "Hoxi",
    tags: ["Brand Identity", "Logo Design", "Visual System", "Brand Guidelines"],
    overview: {
      en: "Complete brand identity development for Hoxi, including logo design, color palette, typography system, and comprehensive brand guidelines. The project aimed to create a distinctive and memorable brand that reflects the company's innovative approach and values.",
      es: "Desarrollo completo de identidad de marca para Hoxi, incluyendo diseño de logo, paleta de colores, sistema tipográfico y guías de marca integrales. El proyecto buscaba crear una marca distintiva y memorable que reflejara el enfoque innovador y valores de la empresa."
    },
    challenge: {
      en: "Hoxi needed a brand identity that would differentiate them in a crowded technology market. The brand had to convey innovation, reliability, and approachability while being versatile enough to work across digital and print applications.",
      es: "Hoxi necesitaba una identidad de marca que los diferenciara en un mercado tecnológico saturado. La marca tenía que transmitir innovación, confiabilidad y accesibilidad mientras era lo suficientemente versátil para funcionar en aplicaciones digitales e impresas."
    },
    solution: {
      en: "I developed a modern, geometric logo system with a flexible color palette and typography hierarchy. The brand system includes comprehensive guidelines for logo usage, color applications, typography, and various brand touchpoints to ensure consistency across all platforms.",
      es: "Desarrollé un sistema de logo moderno y geométrico con una paleta de colores flexible y jerarquía tipográfica. El sistema de marca incluye guías integrales para uso del logo, aplicaciones de color, tipografía y varios puntos de contacto de marca para asegurar consistencia en todas las plataformas."
    },
    results: {
      en: "The new brand identity increased brand recognition by 75% and helped Hoxi secure three major partnerships within six months. The brand system was praised for its versatility and professional execution, leading to additional brand extension projects.",
      es: "La nueva identidad de marca aumentó el reconocimiento de marca en un 75% y ayudó a Hoxi a asegurar tres asociaciones importantes en seis meses. El sistema de marca fue elogiado por su versatilidad y ejecución profesional, llevando a proyectos adicionales de extensión de marca."
    },
    metrics: [
      { label: "Brand recognition", value: "75% increase", icon: Eye },
      { label: "New partnerships", value: "3 major deals", icon: ArrowUp },
      { label: "Project extensions", value: "5 new projects", icon: Star }
    ]
  },
  "landing-windsor": {
    id: "landing-windsor",
    title: "Landing page for WindsorGroup",
    subtitle: "Corporate Website Redesign",
    image: imgD8E6Eb6B345Ada088E2448947C483Ab46,
    category: "UX/UI Project",
    duration: "3 months",
    year: "2024",
    client: "WindsorGroup",
    tags: ["Corporate Design", "Responsive Web", "Content Strategy", "SEO Optimization"],
    overview: {
      en: "Redesign of WindsorGroup's corporate website to better reflect their market position and improve lead generation. The project focused on creating a professional, trustworthy online presence that effectively communicates their services and expertise.",
      es: "Rediseño del sitio web corporativo de WindsorGroup para reflejar mejor su posición en el mercado y mejorar la generación de leads. El proyecto se centró en crear una presencia online profesional y confiable que comunique efectivamente sus servicios y experiencia."
    },
    challenge: {
      en: "WindsorGroup's existing website was outdated and didn't reflect their industry leadership. The site had poor SEO performance, limited mobile optimization, and failed to generate qualified leads for their high-value services.",
      es: "El sitio web existente de WindsorGroup estaba desactualizado y no reflejaba su liderazgo en la industria. El sitio tenía pobre rendimiento SEO, optimización móvil limitada y fallaba en generar leads calificados para sus servicios de alto valor."
    },
    solution: {
      en: "I redesigned the website with a focus on professionalism and credibility. This included restructuring the content hierarchy, implementing SEO best practices, creating compelling case studies, and optimizing the mobile experience. Strategic CTAs and lead magnets were integrated throughout.",
      es: "Rediseñé el sitio web con enfoque en profesionalismo y credibilidad. Esto incluyó reestructurar la jerarquía de contenido, implementar mejores prácticas de SEO, crear estudios de caso atractivos y optimizar la experiencia móvil. CTAs estratégicos e imanes de leads se integraron en todo el sitio."
    },
    results: {
      en: "The new website increased organic traffic by 120%, improved lead quality by 90%, and generated 25% more qualified inquiries. The redesign also enhanced WindsorGroup's professional image and helped them secure two major enterprise clients.",
      es: "El nuevo sitio web aumentó el tráfico orgánico en 120%, mejoró la calidad de leads en 90% y generó 25% más consultas calificadas. El rediseño también mejoró la imagen profesional de WindsorGroup y los ayudó a asegurar dos clientes empresariales importantes."
    },
    metrics: [
      { label: "Organic traffic", value: "120% increase", icon: ArrowUp },
      { label: "Lead quality", value: "90% improvement", icon: Star },
      { label: "Enterprise clients", value: "2 new deals", icon: Award }
    ]
  },
  "mobile-fintech": {
    id: "mobile-fintech",
    title: "FinTech Mobile App",
    subtitle: "Digital Banking Revolution",
    image: imgD8E6Eb6B345Ada088E2448947C483Ab47,
    category: "UX/UI Project",
    duration: "5 months",
    year: "2024",
    client: "NextBank",
    tags: ["Mobile App", "FinTech", "Security", "User Interface"],
    overview: {
      en: "Revolutionary mobile banking application designed to simplify financial management for digital natives. The app combines cutting-edge security features with an intuitive interface that makes complex financial operations feel effortless and accessible.",
      es: "Aplicación móvil bancaria revolucionaria diseñada para simplificar la gestión financiera para nativos digitales. La app combina características de seguridad de vanguardia con una interfaz intuitiva que hace que las operaciones financieras complejas se sientan sin esfuerzo y accesibles."
    },
    challenge: {
      en: "Traditional banking apps were failing to engage younger users due to outdated interfaces and complex workflows. The challenge was to create a secure, compliant banking solution that felt more like a modern consumer app while maintaining the highest security standards and regulatory compliance.",
      es: "Las aplicaciones bancarias tradicionales no lograban involucrar a usuarios más jóvenes debido a interfaces desactualizadas y flujos de trabajo complejos. El desafío era crear una solución bancaria segura y cumpliente que se sintiera más como una app de consumidor moderna mientras mantiene los más altos estándares de seguridad y cumplimiento regulatorio."
    },
    solution: {
      en: "I designed a clean, card-based interface with intuitive gestures and micro-interactions. The app features biometric authentication, real-time transaction tracking, smart budgeting tools, and personalized financial insights. The design prioritizes clarity and trust while maintaining a modern, engaging aesthetic with gamified savings features.",
      es: "Diseñé una interfaz limpia basada en tarjetas con gestos intuitivos y micro-interacciones. La app presenta autenticación biométrica, seguimiento de transacciones en tiempo real, herramientas de presupuestación inteligente e insights financieros personalizados. El diseño prioriza la claridad y confianza mientras mantiene una estética moderna y atractiva con características de ahorro gamificadas."
    },
    results: {
      en: "The app achieved 500K+ downloads in the first quarter, received a 4.8-star rating, and increased user engagement by 180%. Customer acquisition costs decreased by 35% compared to traditional banking channels, and user retention rates exceeded industry benchmarks by 40%.",
      es: "La app logró más de 500K descargas en el primer trimestre, recibió una calificación de 4.8 estrellas y aumentó el engagement del usuario en un 180%. Los costos de adquisición de clientes disminuyeron en un 35% comparado con canales bancarios tradicionales, y las tasas de retención de usuarios superaron los benchmarks de la industria en un 40%."
    },
    metrics: [
      { label: "App downloads", value: "500K+", icon: ArrowUp },
      { label: "User rating", value: "4.8 stars", icon: Star },
      { label: "User engagement", value: "180% increase", icon: Eye }
    ]
  }
};

// Translations with improved Spanish title and About section
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      backToProjects: "Back to Projects"
    },
    hero: {
      title: "Hi there! I'm Facu, your next",
      titleDesigner: "product designer",
      subtitle: "Specializing in intuitive wireframes, interactive prototypes, and visual identities that captivate global audiences. Ready to elevate your brand?",
      cta: "Get a quote"
    },
    about: {
      title: "About",
      titleHighlight: "Me",
      subtitle: "Passionate product designer with a mission to create meaningful digital experiences",
      intro: "I'm Facundo, but everyone calls me Facu. With over 5 years of experience in product design, I've had the privilege of working with startups and established companies across the globe, helping them transform their ideas into exceptional digital experiences.",
      passion: {
        title: "My Passion",
        description: "I believe great design is invisible. It's not about flashy animations or trendy aesthetics—it's about creating solutions that feel so natural, users don't even think about them. Every pixel, every interaction, every decision is crafted with purpose."
      },
      approach: {
        title: "My Approach",
        description: "I combine strategic thinking with creative execution. Whether it's conducting user research, prototyping new features, or crafting pixel-perfect interfaces, I approach every project with curiosity, empathy, and a relentless focus on the user experience."
      },
      impact: {
        title: "Creating Impact",
        description: "Beyond beautiful interfaces, I measure success by real business outcomes. Increased conversions, improved user satisfaction, and measurable ROI—that's what drives me to push the boundaries of what's possible in digital design."
      },
      stats: [
        { number: "50+", label: "Projects Completed" },
        { number: "5", label: "Years Experience" },
        { number: "15+", label: "Happy Clients" },
        { number: "3", label: "Design Awards" }
      ]
    },
    services: {
      title: "Services That",
      titleHighlight: "Drive Results",
      subtitle: "Comprehensive design solutions tailored to elevate your brand and engage your audience",
      uxui: {
        title: "UX/UI Design",
        tools: "Figma, Justinmind",
        description: "Intuitive wireframes, user flows, and interactive prototypes in Figma, backed by UX expertise in user research, A/B testing, and accessibility optimization. I focus on seamless experiences that boost conversions and keep users hooked."
      },
      graphic: {
        title: "Graphic Design",
        tools: "Adobe Illustrator, Photoshop, MidJourney",
        description: "Crafting captivating logos, branding visuals, and digital assets using Adobe Illustrator, Photoshop, and MidJourney. Backed by expertise in color theory, typography, and trend-forward designs that make your brand stand out and drive engagement."
      }
    },
    projects: {
      title: "Featured",
      titleHighlight: "Projects",
      subtitle: "A showcase of successful projects delivered for clients across different industries and continents.",
      cta: "View Project",
      types: {
        uxui: "UX/UI Project",
        graphic: "Graphic Design"
      }
    },
    projectDetail: {
      overview: "Project Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      results: "Results & Impact",
      details: "Project Details",
      client: "Client",
      duration: "Duration",
      year: "Year",
      category: "Category",
      keyMetrics: "Key Metrics",
      viewLive: "View Live Site",
      nextProject: "Next Project",
      prevProject: "Previous Project",
      projectNav: "Project"
    },
    cta: {
      title: "Ready to",
      titleUpgrade: "Upgrade",
      titleBrand: "Your Brand",
      subtitle: "Let's discuss your project and create something amazing together. Get in touch for a personalized consultation.",
      button: "Start your project today"
    },
    contact: {
      title: "Get a personalized quote",
      subtitle: "Subscribe to get design tips, industry insights, and exclusive project updates.",
      form: {
        name: "Name*",
        namePlaceholder: "Your name",
        projectTitle: "Project Title*",
        projectTitlePlaceholder: "Project Title",
        projectType: "Project Type*",
        projectTypes: {
          ecommerce: "E-Commerce Website",
          webapp: "Web Application",
          mobile: "Mobile App",
          branding: "Brand Identity"
        },
        description: "Description",
        descriptionPlaceholder: "(Max 300 characters)",
        assets: "Will you provide assets for your website?*",
        assetsYes: "Yes",
        assetsNo: "No",
        assetsDescription: "This would include: all copy (bios, headlines, products, about pages, etc.), images and all kind of assets, brand guidelines and so on.",
        website: "Project Website (if any)",
        websitePlaceholder: "https://urlwebsite.com",
        submit: "Get a quote",
        privacy: "No spam. Your privacy is important to us."
      },
      success: {
        title: "Thank you for your request!",
        message: "We have received your information and will contact you within 24 hours with a personalized quote."
      }
    },
    footer: {
      links: {
        home: "Home",
        services: "Services",
        projects: "Projects",
        about: "About",
        instagram: "Instagram",
        behance: "Behance",
        linkedin: "LinkedIn",
        terms: "Terms",
        privacy: "Privacy",
        cookies: "Cookies"
      },
      copyright: "© 2077 Untitled UI. All rights reserved."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Acerca de",
      contact: "Contacto",
      backToProjects: "Volver a Proyectos"
    },
    hero: {
      title: "¡Hola! Soy Facu, tu próximo",
      titleDesigner: "diseñador de productos",
      subtitle: "Especializado en wireframes intuitivos, prototipos interactivos e identidades visuales que cautivan audiencias globales. ¿Listo para elevar tu marca?",
      cta: "Obtener cotización"
    },
    about: {
      title: "Acerca de",
      titleHighlight: "Mí",
      subtitle: "Diseñador de productos apasionado con la misión de crear experiencias digitales significativas",
      intro: "Soy Facundo, pero todos me dicen Facu. Con más de 5 años de experiencia en diseño de productos, he tenido el privilegio de trabajar con startups y empresas establecidas de todo el mundo, ayudándolas a transformar sus ideas en experiencias digitales excepcionales.",
      passion: {
        title: "Mi Pasión",
        description: "Creo que el gran diseño es invisible. No se trata de animaciones llamativas o estéticas de moda, sino de crear soluciones que se sientan tan naturales que los usuarios ni siquiera piensen en ellas. Cada píxel, cada interacción, cada decisión se crea con propósito."
      },
      approach: {
        title: "Mi Enfoque",
        description: "Combino pensamiento estratégico con ejecución creativa. Ya sea realizando investigación de usuarios, prototipando nuevas funciones o creando interfaces pixel-perfect, abordo cada proyecto con curiosidad, empatía y un enfoque implacable en la experiencia del usuario."
      },
      impact: {
        title: "Creando Impacto",
        description: "Más allá de interfaces hermosas, mido el éxito por resultados comerciales reales. Conversiones aumentadas, satisfacción del usuario mejorada y ROI medible: eso es lo que me impulsa a empujar los límites de lo posible en el diseño digital."
      },
      stats: [
        { number: "50+", label: "Proyectos Completados" },
        { number: "5", label: "Años de Experiencia" },
        { number: "15+", label: "Clientes Satisfechos" },
        { number: "3", label: "Premios de Diseño" }
      ]
    },
    services: {
      title: "Servicios que",
      titleHighlight: "Generan Resultados",
      subtitle: "Soluciones de diseño integrales adaptadas para elevar tu marca y cautivar a tu audiencia",
      uxui: {
        title: "Diseño UX/UI",
        tools: "Figma, Justinmind",
        description: "Wireframes intuitivos, flujos de usuario y prototipos interactivos en Figma, respaldados por experiencia en UX, investigación de usuarios, pruebas A/B y optimización de accesibilidad. Me enfoco en experiencias fluidas que aumentan conversiones y mantienen a los usuarios comprometidos."
      },
      graphic: {
        title: "Diseño Gráfico",
        tools: "Adobe Illustrator, Photoshop, MidJourney",
        description: "Creando logos cautivadores, visuales de marca y activos digitales usando Adobe Illustrator, Photoshop y MidJourney. Respaldado por experiencia en teoría del color, tipografía y diseños vanguardistas que hacen destacar tu marca e impulsan el engagement."
      }
    },
    projects: {
      title: "Proyectos",
      titleHighlight: "Destacados",
      subtitle: "Una muestra de proyectos exitosos entregados para clientes de diferentes industrias y continentes.",
      cta: "Ver Proyecto",
      types: {
        uxui: "Proyecto UX/UI",
        graphic: "Diseño Gráfico"
      }
    },
    projectDetail: {
      overview: "Resumen del Proyecto",
      challenge: "El Desafío",
      solution: "La Solución",
      results: "Resultados e Impacto",
      details: "Detalles del Proyecto",
      client: "Cliente",
      duration: "Duración",
      year: "Año",
      category: "Categoría",
      keyMetrics: "Métricas Clave",
      viewLive: "Ver Sitio en Vivo",
      nextProject: "Siguiente Proyecto",
      prevProject: "Proyecto Anterior",
      projectNav: "Proyecto"
    },
    cta: {
      title: "¿Listo para",
      titleUpgrade: "Mejorar",
      titleBrand: "Tu Marca",
      subtitle: "Hablemos de tu proyecto y creemos algo increíble juntos. Ponte en contacto para una consulta personalizada.",
      button: "Comienza tu proyecto hoy"
    },
    contact: {
      title: "Obtén una cotización personalizada",
      subtitle: "Suscríbete para recibir consejos de diseño, insights de la industria y actualizaciones exclusivas de proyectos.",
      form: {
        name: "Nombre*",
        namePlaceholder: "Tu nombre",
        projectTitle: "Título del Proyecto*",
        projectTitlePlaceholder: "Título del Proyecto",
        projectType: "Tipo de Proyecto*",
        projectTypes: {
          ecommerce: "Sitio Web E-Commerce",
          webapp: "Aplicación Web",
          mobile: "App Móvil",
          branding: "Identidad de Marca"
        },
        description: "Descripción",
        descriptionPlaceholder: "(Máximo 300 caracteres)",
        assets: "¿Proporcionarás activos para tu sitio web?*",
        assetsYes: "Sí",
        assetsNo: "No",
        assetsDescription: "Esto incluiría: todo el copy (biografías, titulares, productos, páginas about, etc.), imágenes y todo tipo de activos, guías de marca, etc.",
        website: "Sitio Web del Proyecto (si existe)",
        websitePlaceholder: "https://sitiowebejemplo.com",
        submit: "Obtener cotización",
        privacy: "Sin spam. Tu privacidad es importante para nosotros."
      },
      success: {
        title: "¡Gracias por tu solicitud!",
        message: "Hemos recibido tu información y te contactaremos dentro de 24 horas con una cotización personalizada."
      }
    },
    footer: {
      links: {
        home: "Inicio",
        services: "Servicios",
        projects: "Proyectos",
        about: "Acerca de",
        instagram: "Instagram",
        behance: "Behance",
        linkedin: "LinkedIn",
        terms: "Términos",
        privacy: "Privacidad",
        cookies: "Cookies"
      },
      copyright: "© 2077 Untitled UI. Todos los derechos reservados."
    }
  }
};

function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-6 h-7 relative">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 30">
          <g opacity="0.84">
            <path
              clipRule="evenodd"
              d={svgPaths.p272b2500}
              fill="white"
              fillRule="evenodd"
              opacity="0.5"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1a6dcb80}
              fill="white"
              fillRule="evenodd"
              opacity="0.7"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p5344000}
              fill="white"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
      <div className="w-16 h-7 relative">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 30">
          <g opacity="0.84">
            <path d={svgPaths.p3d58b100} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p18325570} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2c470900} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p4c4ba80} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p21aa5300} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p2e87ff00} fill="white" />
            <path d={svgPaths.p14573b00} fill="white" />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

function LanguageSwitch({ language, onLanguageChange }: { language: 'en' | 'es', onLanguageChange: (lang: 'en' | 'es') => void }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
          <button
            onClick={() => onLanguageChange('es')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
              language === 'es' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-white/70 hover:text-white'
            }`}
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            ES
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
              language === 'en' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-white/70 hover:text-white'
            }`}
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

function NavigationHeader({ 
  language, 
  onLanguageChange, 
  currentPage, 
  onNavigate 
}: { 
  language: 'en' | 'es', 
  onLanguageChange: (lang: 'en' | 'es') => void,
  currentPage: string,
  onNavigate: (page: string) => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div onClick={() => onNavigate('home')} className="cursor-pointer">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {currentPage === 'project-detail' ? (
              <Button
                variant="ghost"
                onClick={() => onNavigate('home')}
                className="text-white/80 hover:text-white transition-colors font-medium hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.nav.backToProjects}
              </Button>
            ) : (
              <>
                <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors font-medium">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors font-medium">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors font-medium">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-white/80 hover:text-white transition-colors font-medium">
                  {t.nav.projects}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors font-medium">
                  {t.nav.contact}
                </button>
              </>
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Switch */}
            <LanguageSwitch language={language} onLanguageChange={onLanguageChange} />
            
            {/* Social Links with real icons and URLs */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a 
                href="https://www.behance.net/facudelabarrera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Behance"
              >
                <BehanceIcon size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/_facudelabarrera/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Instagram"
              >
                <InstagramIcon size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/facudelabarrera/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {currentPage === 'project-detail' ? (
                <Button
                  variant="ghost"
                  onClick={() => onNavigate('home')}
                  className="w-full text-left text-white/80 hover:text-white py-2 font-medium justify-start"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t.nav.backToProjects}
                </Button>
              ) : (
                <>
                  <button 
                    onClick={() => scrollToSection('home')} 
                    className="block w-full text-left text-white/80 hover:text-white py-2 font-medium"
                  >
                    {t.nav.home}
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="block w-full text-left text-white/80 hover:text-white py-2 font-medium"
                  >
                    {t.nav.about}
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="block w-full text-left text-white/80 hover:text-white py-2 font-medium"
                  >
                    {t.nav.services}
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')} 
                    className="block w-full text-left text-white/80 hover:text-white py-2 font-medium"
                  >
                    {t.nav.projects}
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="block w-full text-left text-white/80 hover:text-white py-2 font-medium"
                  >
                    {t.nav.contact}
                  </button>
                </>
              )}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <a href="https://www.behance.net/facudelabarrera" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" title="Behance">
                  <BehanceIcon size={20} />
                </a>
                <a href="https://www.instagram.com/_facudelabarrera/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" title="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/facudelabarrera/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" title="LinkedIn">
                  <LinkedInIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function ProjectDetailPage({ 
  projectId, 
  language, 
  onNavigate 
}: { 
  projectId: string, 
  language: 'en' | 'es',
  onNavigate: (page: string, projectId?: string) => void
}) {
  const t = translations[language];
  const project = projectsData[projectId as keyof typeof projectsData];
  
  if (!project) {
    return <div>Project not found</div>;
  }

  const projectIds = Object.keys(projectsData);
  const currentIndex = projectIds.indexOf(projectId);
  const nextProject = projectIds[currentIndex + 1] || projectIds[0];
  const prevProject = projectIds[currentIndex - 1] || projectIds[projectIds.length - 1];

  return (
    <div className="bg-black min-h-screen pt-24" style={{ fontFamily: 'Geist, sans-serif' }}>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#7746d7] text-white font-medium border-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {project.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="bg-[#7746d7]/20 text-[#7746d7] border border-[#7746d7]/30 font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div 
                  className="aspect-[4/3] bg-cover bg-center rounded-2xl shadow-2xl"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-neutral-950/50 border-white/10 mb-12 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white font-semibold text-xl" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.projectDetail.details}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-white/60 text-sm font-medium mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {t.projectDetail.client}
                      </p>
                      <p className="text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {project.client}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {t.projectDetail.duration}
                      </p>
                      <p className="text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {project.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {t.projectDetail.year}
                      </p>
                      <p className="text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {project.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {t.projectDetail.category}
                      </p>
                      <p className="text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {project.category}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-12"
            >
              <h2 className="text-2xl text-white font-semibold mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.projectDetail.keyMetrics}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.metrics?.map((metric, index) => (
                  <Card key={index} className="bg-neutral-950/30 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="bg-[#7746d7]/20 p-3 rounded-full">
                          <metric.icon className="h-6 w-6 text-[#7746d7]" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {metric.value}
                      </p>
                      <p className="text-white/70 text-sm" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {metric.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Project Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-16"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.projectDetail.overview}
                  </h2>
                  <p className="text-white/80 leading-relaxed font-normal text-lg" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {project.overview[language]}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.projectDetail.challenge}
                  </h2>
                  <p className="text-white/80 leading-relaxed font-normal text-lg" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {project.challenge[language]}
                  </p>
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.projectDetail.solution}
                  </h2>
                  <p className="text-white/80 leading-relaxed font-normal text-lg" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {project.solution[language]}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.projectDetail.results}
                  </h2>
                  <p className="text-white/80 leading-relaxed font-normal text-lg" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {project.results[language]}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project Navigation - Fixed with proper dark mode and pagination indicator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-20 pt-12 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <Button
                  variant="outline"
                  onClick={() => onNavigate('project-detail', prevProject)}
                  className="bg-neutral-950 border-white/20 text-white hover:bg-neutral-800 hover:border-white/40 transition-colors font-medium w-full sm:w-auto"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t.projectDetail.prevProject}
                </Button>
                
                {/* Pagination indicator */}
                <div className="flex items-center gap-3">
                  <span className="text-white/70 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.projectDetail.projectNav} {currentIndex + 1} of {projectIds.length}
                  </span>
                  <div className="flex gap-1">
                    {projectIds.map((id, index) => (
                      <div
                        key={id}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-[#7746d7]' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => onNavigate('project-detail', nextProject)}
                  className="bg-neutral-950 border-white/20 text-white hover:bg-neutral-800 hover:border-white/40 transition-colors font-medium w-full sm:w-auto"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {t.projectDetail.nextProject}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroSection({ language }: { language: 'en' | 'es' }) {
  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute w-full h-full bg-cover bg-center mix-blend-darken opacity-30"
          style={{ backgroundImage: `url('${imgD8E6Eb6B345Ada088E2448947C483Ab47}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1 
            className={`text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl mx-auto leading-tight ${language === 'es' ? 'px-4' : ''}`}
            style={{ fontFamily: 'Geist, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-bold">{t.hero.title}</span>{' '}
            <span className="italic font-light">{t.hero.titleDesigner}</span>
            <span className="font-bold">.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Geist, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-6 rounded-full font-semibold text-base shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Geist, sans-serif' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white h-6 w-6" />
      </motion.div>
    </section>
  );
}

function AboutSection({ language }: { language: 'en' | 'es' }) {
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.about.title} <span className="text-[#7746d7]">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-black/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-white/90 leading-relaxed font-normal text-center" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {t.about.intro}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {t.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-900/50 border-white/10 text-center backdrop-blur-sm hover:border-[#7746d7]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-[#7746d7] mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-900/50 border-white/10 h-full backdrop-blur-sm hover:border-[#7746d7]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#7746d7]/20 p-2 rounded-full">
                      <Lightbulb className="h-5 w-5 text-[#7746d7]" />
                    </div>
                    <h3 className="text-xl text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {t.about.passion.title}
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.about.passion.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-900/50 border-white/10 h-full backdrop-blur-sm hover:border-[#7746d7]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#7746d7]/20 p-2 rounded-full">
                      <Target className="h-5 w-5 text-[#7746d7]" />
                    </div>
                    <h3 className="text-xl text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {t.about.approach.title}
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.about.approach.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-900/50 border-white/10 h-full backdrop-blur-sm hover:border-[#7746d7]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#7746d7]/20 p-2 rounded-full">
                      <Star className="h-5 w-5 text-[#7746d7]" />
                    </div>
                    <h3 className="text-xl text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {t.about.impact.title}
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.about.impact.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ language }: { language: 'en' | 'es' }) {
  const t = translations[language];

  const services = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: t.services.uxui.title,
      tools: t.services.uxui.tools,
      description: t.services.uxui.description,
      color: "bg-[#7746d7]"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: t.services.graphic.title,
      tools: t.services.graphic.tools,
      description: t.services.graphic.description,
      color: "bg-[#7746d7]"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.services.title} <span className="italic font-light text-white">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-neutral-950 border-white/20 text-white hover:border-[#7746d7]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`${service.color} p-3 rounded-full`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-1 font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>{service.title}</h3>
                      <p className="text-[#7746d7] text-sm mb-4 font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>{service.tools}</p>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ 
  language, 
  onNavigate 
}: { 
  language: 'en' | 'es',
  onNavigate: (page: string, projectId?: string) => void
}) {
  const t = translations[language];

  const projects = [
    {
      id: "dashboard-shm",
      title: "Dashboard for SHM",
      description: "Complete mobile app redesign focusing on user experience and conversion optimization",
      image: imgD8E6Eb6B345Ada088E2448947C483Ab42,
      tags: ["Dashboard Design", "Healthcare", "Data Visualization"],
      type: t.projects.types.uxui
    },
    {
      id: "website-comprajusta",
      title: "Full website for CompraJusta",
      description: "Complete mobile app redesign focusing on user experience and conversion optimization",
      image: imgD8E6Eb6B345Ada088E2448947C483Ab43,
      tags: ["E-commerce", "Responsive Design", "UX"],
      type: t.projects.types.uxui
    },
    {
      id: "landing-klamad",
      title: "Modern landing page for Klamad",
      description: "Design and development of a high-converting landing page for Klamad's SaaS product launch with focus on conversion optimization",
      image: imgD8E6Eb6B345Ada088E2448947C483Ab44,
      tags: ["Landing Page", "SaaS", "Marketing"],
      type: t.projects.types.uxui
    },
    {
      id: "brand-hoxi",
      title: "Brand Identity for Hoxi",
      description: "Complete brand identity development including logo design, color palette, and comprehensive guidelines for technology company",
      image: imgD8E6Eb6B345Ada088E2448947C483Ab45,
      tags: ["Brand Identity", "Logo Design", "Visual System"],
      type: t.projects.types.graphic
    },
    {
      id: "landing-windsor",
      title: "Landing page for WindsorGroup",
      description: "Corporate website redesign to improve lead generation and better reflect their market position with SEO optimization",
      image: imgD8E6Eb6B345Ada088E2448947C483Ab46,
      tags: ["Corporate Design", "Responsive Web", "SEO"],
      type: t.projects.types.uxui
    },
    {
      id: "mobile-fintech",
      title: "FinTech Mobile App",
      description: "Revolutionary mobile banking application designed for digital natives with cutting-edge security features and intuitive interface",
      image: imgD8E6Eb6B345Ada088E2448947C483Ab47,
      tags: ["Mobile App", "FinTech", "Security"],
      type: t.projects.types.uxui
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.projects.title} <span className="text-white">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-neutral-950 border-white/20 text-white overflow-hidden hover:border-[#7746d7]/50 transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                <div className="relative">
                  <div 
                    className="aspect-[16/9] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <Badge className="absolute top-4 right-4 bg-neutral-800 text-white font-medium border-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {project.type}
                  </Badge>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <CardTitle className="text-white mb-2 font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>{project.title}</CardTitle>
                  <CardDescription className="text-white/80 text-sm mb-4 font-normal flex-1" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-[#7746d7]/20 text-[#7746d7] border border-[#7746d7]/30 font-medium text-xs" style={{ fontFamily: 'Geist, sans-serif' }}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-[#7746d7] text-white hover:bg-[#7746d7]/90 transition-colors font-medium rounded-lg border-0 mt-auto"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                    onClick={() => onNavigate('project-detail', project.id)}
                  >
                    {t.projects.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ language }: { language: 'en' | 'es' }) {
  const t = translations[language];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.cta.title} <span className="text-[#7746d7]">{t.cta.titleUpgrade}</span>{' '}
            <span className="text-white">{t.cta.titleBrand}</span>?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.cta.subtitle}
          </p>
          <Button 
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 rounded-full font-semibold text-base"
            style={{ fontFamily: 'Geist, sans-serif' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection({ language }: { language: 'en' | 'es' }) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    projectTitle: '',
    projectType: '',
    description: '',
    willProvideAssets: '',
    projectWebsite: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setShowSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      // Reset form
      setFormData({
        name: '',
        projectTitle: '',
        projectType: '',
        description: '',
        willProvideAssets: '',
        projectWebsite: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-neutral-950 border-white/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.contact.title}
              </CardTitle>
              <CardDescription className="text-white/80 font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.contact.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert className="bg-green-900/50 border-green-500/50 text-green-100">
                      <Check className="h-4 w-4" />
                      <AlertDescription>
                        <div>
                          <p className="font-semibold mb-1" style={{ fontFamily: 'Geist, sans-serif' }}>
                            {t.contact.success.title}
                          </p>
                          <p className="text-sm" style={{ fontFamily: 'Geist, sans-serif' }}>
                            {t.contact.success.message}
                          </p>
                        </div>
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.name}
                  </label>
                  <Input 
                    placeholder={t.contact.form.namePlaceholder}
                    className="bg-neutral-950 border-neutral-800 text-white font-normal"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.projectTitle}
                  </label>
                  <Input 
                    placeholder={t.contact.form.projectTitlePlaceholder}
                    className="bg-neutral-950 border-neutral-800 text-white font-normal"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.projectType}
                  </label>
                  <Select value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
                    <SelectTrigger className="bg-neutral-950 border-neutral-800 text-white font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                      <SelectValue placeholder={t.contact.form.projectTypes.ecommerce} />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-950 border-neutral-800">
                      <SelectItem value="ecommerce" className="text-white focus:bg-neutral-800 focus:text-white">
                        {t.contact.form.projectTypes.ecommerce}
                      </SelectItem>
                      <SelectItem value="webapp" className="text-white focus:bg-neutral-800 focus:text-white">
                        {t.contact.form.projectTypes.webapp}
                      </SelectItem>
                      <SelectItem value="mobile" className="text-white focus:bg-neutral-800 focus:text-white">
                        {t.contact.form.projectTypes.mobile}
                      </SelectItem>
                      <SelectItem value="branding" className="text-white focus:bg-neutral-800 focus:text-white">
                        {t.contact.form.projectTypes.branding}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.description}
                  </label>
                  <Textarea 
                    placeholder={t.contact.form.descriptionPlaceholder}
                    className="bg-neutral-950 border-neutral-800 text-white min-h-[100px] font-normal"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    maxLength={300}
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-white/90 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.assets}
                  </label>
                  <div className="flex gap-3">
                    <div 
                      className={`flex-1 p-3 rounded-md border cursor-pointer transition-all ${
                        formData.willProvideAssets === 'yes' 
                          ? 'border-[#7746d7] bg-[#7746d7]/20' 
                          : 'border-neutral-600 bg-neutral-900'
                      }`}
                      onClick={() => setFormData({...formData, willProvideAssets: 'yes'})}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                          {t.contact.form.assetsYes}
                        </span>
                        <Checkbox checked={formData.willProvideAssets === 'yes'} />
                      </div>
                    </div>
                    <div 
                      className={`flex-1 p-3 rounded-md border cursor-pointer transition-all ${
                        formData.willProvideAssets === 'no' 
                          ? 'border-[#7746d7] bg-[#7746d7]/20' 
                          : 'border-neutral-600 bg-neutral-900'
                      }`}
                      onClick={() => setFormData({...formData, willProvideAssets: 'no'})}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                          {t.contact.form.assetsNo}
                        </span>
                        <Checkbox checked={formData.willProvideAssets === 'no'} />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.assetsDescription}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.website}
                  </label>
                  <Input 
                    placeholder={t.contact.form.websitePlaceholder}
                    className="bg-neutral-950 border-neutral-800 text-white font-normal"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                    value={formData.projectWebsite}
                    onChange={(e) => setFormData({...formData, projectWebsite: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-6 rounded-lg"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                    disabled={showSuccess}
                  >
                    {t.contact.form.submit}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-white/50 text-center font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {t.contact.form.privacy}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ language }: { language: 'en' | 'es' }) {
  const t = translations[language];

  return (
    <footer className="bg-neutral-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo />
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <a href="#" className="block text-white/60 hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.footer.links.home}
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.footer.links.about}
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.footer.links.services}
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.footer.links.projects}
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <a href="https://www.instagram.com/_facudelabarrera/" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.footer.links.instagram}
              </a>
              <a href="https://www.behance.net/facudelabarrera" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.footer.links.behance}
              </a>
              <a href="https://www.linkedin.com/in/facudelabarrera/" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                {t.footer.links.linkedin}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
            <a href="#" className="hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
              {t.footer.links.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
              {t.footer.links.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
              {t.footer.links.cookies}
            </a>
          </div>
          <p className="text-sm text-white/60 font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProjectId, setCurrentProjectId] = useState<string>('');

  const handleNavigate = (page: string, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) {
      setCurrentProjectId(projectId);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black min-h-screen" style={{ fontFamily: 'Geist, sans-serif' }}>
      <NavigationHeader 
        language={language} 
        onLanguageChange={setLanguage}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      {currentPage === 'home' ? (
        <>
          <HeroSection language={language} />
          <AboutSection language={language} />
          <ServicesSection language={language} />
          <CTASection language={language} />
          <ProjectsSection language={language} onNavigate={handleNavigate} />
          <ContactSection language={language} />
        </>
      ) : currentPage === 'project-detail' ? (
        <ProjectDetailPage 
          projectId={currentProjectId}
          language={language}
          onNavigate={handleNavigate}
        />
      ) : null}
      
      <Footer language={language} />
    </div>
  );
}