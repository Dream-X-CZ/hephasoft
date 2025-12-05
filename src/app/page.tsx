import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Import dalších serverových komponent
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import logoPenefDark from '@/images/clients/renewbody/renew-body-logo-transparent.png'
import logoPenefLight from '@/images/clients/penef/penef-all-white.png'
import logoDreampro from '@/images/clients/dreampro/WDreampro.svg'
import logoVektoring from '@/images/clients/vektoring/Wvektoring.svg'
import logoFdrive from '@/images/clients/fdrive/WFdrive.svg'
import logoAskme from '@/images/clients/askme/WAskme.svg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import Service from '@/components/Service'
import Kariera from '@/components/Kariera'
import Timeline from '@/components/Timeline'
import logoVesuf from '@/images/clients/vesuf/vesuf-logo.png'
import logoElimon from '@/images/clients/elimon/elimon-logo.svg'

import logoDUK from '@/images/clients/duk/duk-logo.svg'

// Import klientské komponenty (s direktivou "use client")
import TypewriterAnimation from '@/components/TypewriterAnimation'

const clients = [
  ['Penef', logoPenefLight],
  ['Vektoring', logoVektoring],
  ['Fdrive', logoFdrive],
  ['Ask-me', logoAskme],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-accent py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Firmy, s kterými jsme spolupracovali
          </h2>
          <div className="h-px flex-auto bg-accent/80" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 place-items-center gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li
                key={client}
                className={`relative -my-10 h-36 w-36 lg:scale-150 ${client === 'Elimon' ? 'ml-4' : ''} `}
              >
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    fill
                    className="object-contain object-center"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Vytváříme řešení na míru pro vás"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Od moderních webů přes intuitivní CRM až po e-shopy, naše řešení jsou
          kovaná s vášní a precizností. Jako malý, ale dynamický tým se
          zaměřujeme na individuální potřeby vašich projektů. Přetavujeme vaše
          nápady do digitálních příběhů, které posouvají vaše podnikání kupředu
          – abyste se mohli věnovat tomu, co máte opravdu rádi. Společně kováme
          cestu k vašemu úspěchu.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-accent/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-accent">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Reference</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-accent">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-accent/60">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
{
  /*
function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Služby"
        title="Pomáháme vám najít řešení pro každou situaci"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ať už jde o naplánovaný IT nebo marketingový projekt, anebo jen nápad
          - my vám ho pomůžeme uskutečnit.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Tvorba CRM">
              <br />
              Naše CRM systémy jsou kované s precizností, aby optimalizovaly vaše obchodní procesy a posilovaly vztahy se zákazníky. 
              Vytváříme intuitivní, škálovatelná a na míru šitá řešení, která integrují všechny aspekty vaší komunikace a prodejů. 
              S naším CRM získáte nástroj, který přemění data na skutečnou hodnotu pro váš byznys.
            </ListItem>
            <ListItem title="E-Shopy">
              Koveme e-commerce platformy, které přetvářejí nákupní zážitek do plynulého a efektivního procesu. Naše e-shopy na míru 
              kombinují moderní design s funkčností, aby zvýšily konverze a podpořily růst vašeho podnikání. Od návrhu až po finální 
              implementaci – dbáme na každý detail, aby váš online obchod zářil.
            </ListItem>
            <ListItem title="Tvorba aplikací">
              Vstupte do světa mobilních a webových aplikací s řešeními, která jsou vytvořená právě pro vás. Navrhujeme a vyvíjíme aplikace, 
              které jsou intuitivní, spolehlivé a navrženy pro maximální uživatelský komfort. Koveme digitální nástroje, které vám pomohou 
              efektivně řídit váš byznys a zůstat vždy o krok napřed.
            </ListItem>
            <ListItem title="Tvorba webových stránek">
              Vaše webová prezentace je vaší digitální vizitkou. Vytváříme moderní, responzivní a optimalizované webové stránky, které nejen
              krásně vypadají, ale i efektivně komunikují vaše hodnoty a značku. Koveme weby, které přeměňují návštěvníky na věrné zákazníky 
              a pomáhají vám vystoupit z davu.
            </ListItem>
            
            <ListItem title="Marketing">
              PPC Reklamy, SEO, tvorba organického obsahu, či podpůrná IT řešení
              pro marketing? To vše máme v malíčku.
            </ListItem>
            
          </List>
        </div>
      </Container>
    </>
  )
}
*/
}
export const metadata: Metadata = {
  description:
    'Přetavujeme vaše nápady do moderních webů, CRM a e-shopů. Společně tvoříme technologická řešení, která otevírají nové příležitosti a posouvají váš byznys kupředu.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          {/* Vložený TypewriterAnimation inline uvnitř h1 */}
          <h1 className="font-display text-7xl font-semibold tracking-tight text-accent text-balance sm:text-7xl">
            <TypewriterAnimation />
          </h1>
          <p className="mt-7 text-xl text-accent/60">
            Přetavujeme vaše nápady do moderních webů, CRM a e-shopů. Společně
            tvoříme technologická řešení, která otevírají nové příležitosti a
            posouvají váš byznys kupředu.
          </p>
          {/* Přidaná tlačítka pod popis */}
          <div className="mt-10 flex gap-4">
            <Link href="/reference">
              <button className="rounded-2xl bg-accent px-8 py-3 text-white hover:bg-accent/90">
                Ukázky práce
              </button>
            </Link>
            <Link href="/klientske-prihlaseni">
              <button className="rounded-2xl border-2 font-black border-accent bg-transparent px-8 py-3 text-accent transition duration-200 ease-in-out hover:bg-accent/10">
                Klientský portál
              </button>
            </Link>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'RenewBody', logo: logoPenefDark }}
      >
        Děkuji! Hephasoft se o všechno postarali a musím říct, že jsou to
        rychlíci. Poslala jsem jim jen texty na web, soubor s logem a popsala
        jim svoji hrubou představu o webu a během pár dní vše nadesignovali a
        web spustili. Dokonce mi na něm udělali kompletní SEO a zřídili mi k
        němu doménu i s emailem. Jsem s nimi maximálně spokojená a určitě s nimi
        budu spolupracovat i v budoucnu.
      </Testimonial>
      <Service />
      <Timeline />
      <div className='hidden'>
        <Kariera />
      </div>
      <ContactSection />
    </>
  )
}
