// src/app/kontakt/page.tsx (Server Component)
import type { Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import ContactForm from '@/components/ContactForm'

function ContactDetails() {
  return (
    <div className="hidden">
      <h2 className="font-display text-base font-semibold text-accent">
        Naše sídla
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Raději byste se sešli? Napište nám a domluvíme se.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-accent">
          Napište nám
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Tomáš Křepel', 'tomas@hephasoft.cz'],
            ['Vojtěch Bobek', 'vojtech@hephasoft.cz'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-accent">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-accent/60 hover:text-accent"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-accent">
          Sledujte nás
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Kontaktujte nás',
  description: 'Povězte nám o vašem projektu. Obratem se s vámi spojíme.',
}

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Kontaktujte nás" title="Povězte nám o vašem projektu">
        <p>Obratem se s vámi spojíme.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
