// pages/kariera.tsx
import type { NextPage } from 'next'
import { CurrencyDollarIcon, DesktopComputerIcon } from '@heroicons/react/solid'

// Import komponent pro pozadí a animaci
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import Link from 'next/link'

/**
 * Definice rozhraní pro pracovní pozici.
 */
interface JobPosition {
  title: string
  description: string
  tasksTitle: string
  tasks: string[]
  requirementsTitle: string
  requirements: string[]
  remote: string // Popis možnosti práce na dálku či home office
  salary: string // Textový popis platu
  salaryRange: string // Konkrétní platové rozmezí
  link: string // Odkaz na kontaktní formulář či e-mail
}

/**
 * Statické pole pracovních pozic.
 */
const jobPositions: JobPosition[] = [
  {
    title: 'Shopify Developer (Liquid, TSX)',
    description:
      'Hledáme zkušeného vývojáře, který se specializuje na tvorbu a přizpůsobení e-shopů na platformě Shopify. Tato pozice vyžaduje odborné znalosti Liquid templating, TypeScriptu a TSX pro vývoj front-endu. Budete pracovat na vývoji, úpravách a integracích šablon a aplikací pro Shopify e-shopy.',
    tasksTitle: 'Co budeš dělat:',
    tasks: [
      'Vývoj a úpravy šablon na Shopify pomocí Liquid templating',
      'Implementace aplikací a custom řešení s použitím TypeScriptu a TSX',
      'Spolupráce s UX/UI designéry na optimalizaci vzhledu e-shopu',
      'Integrace API pro Shopify a externí aplikace',
      'Optimalizace výkonu a responzivity aplikací napříč zařízeními',
    ],
    requirementsTitle: 'Co požadujeme:',
    requirements: [
      'Pokročilou znalost Liquid templating pro Shopify',
      'Zkušenosti s vývojem aplikací na platformě Shopify',
      'Znalost TypeScriptu a TSX pro vývoj front-endu',
      'Zkušenost s verzováním kódu pomocí Git',
      'Schopnost implementovat komplexní aplikace pro Shopify',
    ],
    remote: 'Full remote',
    salary: 'Plat:',
    salaryRange: '60 000 - 90 000 CZK/měsíc',
    link: 'mailto:tomas@hephasoft.cz',
  },
  {
    title: 'Next.js + Tailwind Developer',
    description:
      'Hledáme vývojáře pro práci s moderními front-end technologiemi. Pozice zahrnuje vývoj aplikací v Next.js a styling pomocí Tailwind CSS. Pokud máš zkušenosti s moderními webovými technologiemi a rád pracuješ v agilním týmu, budeš ideálním kandidátem.',
    tasksTitle: 'Co budeš dělat:',
    tasks: [
      'Vývoj responzivních aplikací pomocí Next.js a Tailwind CSS',
      'Tvorba API endpointů v Next.js pro interakci s backendem',
      'Optimalizace výkonu aplikací a zajištění jejich kompatibility napříč prohlížeči a zařízeními',
      'Spolupráce s UX/UI designéry na vytváření moderních uživatelských rozhraní',
    ],
    requirementsTitle: 'Co požadujeme:',
    requirements: [
      'Pokročilou znalost Next.js a React',
      'Zkušenost s Tailwind CSS pro efektivní tvorbu responzivních designů',
      'Základní znalost TypeScriptu pro vývoj front-end aplikací',
      'Zkušenosti s verzováním kódu pomocí Git',
    ],
    remote: 'Full remote',
    salary: 'Plat:',
    salaryRange: '50 000 - 70 000 CZK/měsíc',
    link: 'mailto:tomas@hephasoft.cz',
  },
]

/**
 * Hlavní komponenta stránky Kariéra.
 */
const KarieraPage: NextPage = () => {
  return (
    <section
      id="kariera"
      className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32"
    >
      {/* Pozadí s GridPattern */}
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-accent/5 mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hlavička sekce */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-800">Kariéra</h2>
              <p className="mt-2 text-lg text-gray-600">
                Hledáme talentované lidi, kteří s námi budou posouvat digitální
                svět kupředu.
              </p>
            </div>

            {/* Výpis pracovních pozic */}
            <div className="grid gap-12 md:grid-cols-2">
              {jobPositions.map((job, index) => (
                <div
                  key={index}
                  className="transform rounded-2xl bg-accent px-6 py-16 shadow-sm transition duration-300 hover:scale-105"
                >
                  <h3 className="mb-6 text-3xl font-semibold text-white">
                    {job.title}
                  </h3>
                  <p className="mb-8 text-sm text-white">{job.description}</p>

                  <h4 className="mb-6 text-lg font-semibold text-white">
                    {job.tasksTitle}
                  </h4>
                  <ul className="mb-8 list-inside list-disc text-sm text-white">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>

                  <h4 className="mb-6 text-lg font-semibold text-white">
                    {job.requirementsTitle}
                  </h4>
                  <ul className="mb-8 list-inside list-disc text-sm text-white">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>

                  {/* Sekce s informacemi o pracovní formě */}
                  <div className="mb-4 flex items-center text-white">
                    <DesktopComputerIcon className="mr-2 h-5 w-5" />
                    <span className="font-semibold">{job.remote}</span>
                  </div>
                  <div className="mb-8 flex items-center text-white">
                    <CurrencyDollarIcon className="mr-2 h-5 w-5" />
                    <span className="font-semibold">
                      {job.salary} {job.salaryRange}
                    </span>
                  </div>

                  <Link
                    href={job.link}
                    className="inline-block rounded-2xl bg-white px-4 py-2 text-accent transition-colors hover:bg-white/90 hover:text-accent/90"
                  >
                    Odeslat životopis
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default KarieraPage
