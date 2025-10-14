"use client"

import Link from 'next/link'
import React from 'react'
import { FaUsers, FaShoppingCart, FaGlobe, FaMobileAlt } from 'react-icons/fa'
import { motion, useReducedMotion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  bgColor: string // Hex kód barvy pozadí
  icon?: React.ReactNode
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bgColor,
  icon,
  index,
}) => {
  let shouldReduceMotion = useReducedMotion()
  let hiddenState = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 40, scale: 0.95 }
  let visibleState = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1 }

  return (
    <motion.div
      className="flex items-center justify-between rounded-2xl p-6 shadow-lg shadow-black/5"
      style={{ backgroundColor: bgColor }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      custom={index}
      variants={{
        hidden: hiddenState,
        visible: () => ({
          ...visibleState,
          transition: {
            type: 'spring',
            stiffness: 120,
            damping: 22,
            delay: index * 0.08,
          },
        }),
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 260, damping: 20 },
            }
      }
    >
      <div className="max-w-md">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-4 text-gray-200">{description}</p>
        {/* <button className="flex items-center font-medium text-white transition-colors hover:underline">
          Ukázky práce
          <span className="ml-2">&#8594;</span>
        </button>
        */}
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
        {icon ? (
          icon
        ) : (
          // Placeholder ikona
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12s4.48 10 10 10 10-4.58 10-10S17.52 2 12 2zM7 10h10v4H7v-4z" />
          </svg>
        )}
      </div>
    </motion.div>
  )
}

const ServiceSection: React.FC = () => {
  const services = [
    {
      title: 'Tvorba CRM',
      description:
        'Naše CRM systémy jsou kované s precizností, aby optimalizovaly vaše obchodní procesy a posilovaly vztahy se zákazníky. S naším CRM získáte nástroj, který přemění data na skutečnou hodnotu pro váš byznys.',
      bgColor: '#25374A',
      icon: <FaUsers className="h-6 w-6" />,
    },
    {
      title: 'Tvorba E-Shopů',
      description:
        'Koveme e-commerce platformy, které přetvářejí nákupní zážitek do plynulého a efektivního procesu. Od návrhu až po finální implementaci – dbáme na každý detail, aby váš online obchod zářil.',
      bgColor: '#1C2D41',
      icon: <FaShoppingCart className="h-6 w-6" />,
    },
    {
      title: 'Tvorba webových stránek',
      description:
        'Vaše webová prezentace je vaší digitální vizitkou. Koveme weby, které přeměňují návštěvníky na věrné zákazníky a pomáhají vám vystoupit z davu.',
      bgColor: '#132337',
      icon: <FaGlobe className="h-6 w-6" />,
    },
    {
      title: 'Tvorba aplikací',
      description:
        'Vstupte do světa mobilních a webových aplikací s řešeními, která jsou vytvořená právě pro vás. Koveme digitální nástroje, které vám pomohou efektivně řídit váš byznys a zůstat vždy o krok napřed.',
      bgColor: '#0A192F',
      icon: <FaMobileAlt className="h-6 w-6" />,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      {/* Grid kontejner s 2 sloupci, kde větší horizontální mezera */}
      <div className="grid grid-cols-1 items-stretch gap-x-16 gap-y-8 md:grid-cols-2">
        {/* Levý sloupec */}
        <div className="flex h-full w-full flex-col md:w-4/5">
          {/* Horní část (header) – zůstává beze změny */}
          <div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Koveme digitální inovace, které otevírají nové kapitoly vašeho
              podnikání
            </h2>

            <p className="mb-8 text-lg text-gray-600">
              Naše služby kombinují technologii s vášní a precizností. Díky
              osobnímu přístupu, transparentnosti a inovacím vytváříme řešení na
              míru, která optimalizují vaše procesy a otevírají nové
              příležitosti.
            </p>
          </div>
          {/* Spodní tlačítko */}
          <Link href="/kontakt">
            <button className="w-80 rounded-lg bg-accent px-6 py-3 text-white shadow-md transition-colors hover:bg-[#25374A]">
              Kontaktuje nás
            </button>
          </Link>
        </div>

        {/* Pravý sloupec – kartičky služeb */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
