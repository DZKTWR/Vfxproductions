import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react'
import NavbarEn from '@/components/NavbarEn'
import NavbarEs from '@/components/NavbarEs'

type Language = 'en' | 'es'

interface Translations {
  [key: string]: string
}

interface LanguageContextType {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
  t: (text: string) => string
  NavbarComponent: React.ComponentType
}

const translations: { [key: string]: string } = {
    'Coureses': 'Cursos',
    'Gallery': 'Galleria',
    'Recourses': 'Recursos',
    'About': 'Acerca',
    'Login': 'Iniciar sesión',
    'Sign Up': 'Regístrate',
    'A way to learn': 'Una forma de aprender',
    'Learn More!': 'Aprende mas!',
    /*Courses*/
    'LEARN THE  ART OF VIDEO EDITING': "APRENDE EL ARTE DE LA EDICIÓN DE VIDEO",
    'Unlook your creativity with our in-depth tutorials.':'Desbloquea tu creatividad con nuestros tutoriales detallados.',
    'Total Free':'Totalmente Gratis',
    'Get it now':'Consíguelo ahora',
    'THE MOST POPULAR TUTORIALS':'LOS TUTORIALES MÁS POPULARES',
    'Explore our top-rated video editing guides.':'Explora nuestras guías mejor valoradas de edición de video.',
    'Watch Now':'Mira Ahora',
    'Mastering anime editing':'Domina la edición de anime',
    'Create editing anime video':'Crea ediciónes de anime',
    'Creating Dynamic trasitions':'Creando transiciones dinámicas',
    'Discover the secrets to smooth trasitions in anime style':'Descubre los secretos para transiciones suaves en estilo anime.',
    'RECENTLY ADDED':'AGREGADO RECIENTEMENTE',
    'Explore our recent content.':'Explora nuestro contenido reciente.',

    'ACTIVE':'ACTIVOS',
    'COURSES':'CURSOS',
    "Explore our top-rated video editing guides":'Explore nuestras guías de edición de video mejor calificadas',


    /*Gallery*/
    'GALLERY':'GALLERIA',
    'AND VIDEOS':'Y VIDEOS',
    'Explore our extensive collection of videos focused on video editing,visual effects, and animation.':'Explora nuestra extensa colección de videos centrados en la edición de video, efectos visuales y animación.',
    'This section features a diverse range of content showcasing advanced editing techniques and special effects.':'Esta sección presenta una variedad de contenido que muestra técnicas avanzadas de edición y efectos especiales.',
    "Additionally, you'll find an art gallery presenting impressive videos with effects and anime edits from our two prominent accounts: VFX Productions and Dazkon.":'Además, encontrarás una galería de arte que presenta videos impresionantes con efectos y ediciones de anime de nuestras dos cuentas destacadas: VFX Productions y Dazkon.',
    'WATCH ALL THE VIDEOS HERE':'MIRA TODOS LOS VIDEOS AQUÍ',
    "Here you will find all the free videos on how to create special effects, how to make anime editions, also how to create animations.":'Aquí encontrarás todos los videos gratuitos sobre cómo crear efectos especiales, cómo hacer ediciones de anime y también cómo crear animaciones.',
    "Art Gallery":"Galería de Arte",
    "find all the art gallery of vfx productions and dazkon a mix of anime editions and special effects, with their social networks of each one.Unlook your creativity with our in-depth tutorials.":'Encuentra toda la galería de arte de VFX Productions y Dazkon, una mezcla de ediciones de anime y efectos especiales, junto con sus redes sociales de cada uno. Desbloquea tu creatividad con nuestros tutoriales detallados.',
    "Watch it now":"Miralo ahora",




    /*About*/
    'ABOUT OF':'ACERCA DE',
    "Vfx productions was created specifically to help people who do not have advanced knowledge or training in the field of video editing or creating visual effects":'VFX Productions fue creada específicamente para ayudar a personas que no tienen conocimientos avanzados o capacitación en el campo de la edición de video o la creación de efectos visuales.',
    "Dazkon is the creator of the VFX Productions project. Dazkon is a nickname that is used; his real name is Diego Acosta, a student passionate about the world of anime, drawing, computer science, and video editing.":"Dazkon es el creador del proyecto VFX Productions. Dazkon es un apodo que se utiliza; realmente, su nombre real es Diego Acosta, un estudiante apasionado por el mundo del anime, el dibujo, la informática y la edición de video.",

    /*Recourses*/
    "ALL RESOURCES":"TODO LOS RECURSOS",
    "Find everything you need to After Effects, Davichi Resolve, Cap cut":"Encuentra todo lo que necesitas para After Effects, DaVinci Resolve, CapCut",
    "MOST POPULAR":"MÁS POPULARES",
    "ACTIVE PACKS":"PAQUETES ACTIVOS",

    /*footer*/
    "Social Media":"Redes Sociales",
    "Donate here!❤️":"¡Dona aquí!❤️",
    "Terms of service":"Términos de servicio",
    "Privacy Policy":"Política de privacidad",
    "Policy":"Política",
    "Do you want to help me ?":"¿Quieres ayudarme?",
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en')
  const [NavbarComponent, setNavbarComponent] = useState<React.ComponentType>(() => NavbarEn)

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    } else {
      const browserLang = navigator.language.split('-')[0]
      setLanguage(browserLang === 'es' ? 'es' : 'en')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    setNavbarComponent(() => language === 'en' ? NavbarEn : NavbarEs)
  }, [language])

  const t = (text: string): string => {
    if (language === 'en') return text
    return translations[text] || text
  }

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    NavbarComponent
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
