import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import imageTomasKrepel from '@/images/team/tomas-krepel.webp'
import imageVojtaBobek from '@/images/team/vojta-bobek.jpg'

import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-accent py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Naše hodnoty"
        title="Dodávat excelentní, spolehlivé a inovativní řešení pro naše klienty."
        invert
      >
        <p>
          Jsme skupina stejně smýšlejících lidí, kteří sdílejí stejné základní
          hodnoty.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Výkonnost" invert>
            Náš tým používá nejmodernější technologie a pravidelně se vzdělává,
            abychom zvyšovali efektivitu naší práce a dodávali našim zákazníkům
            jejich řešení co nejrychleji.
          </GridListItem>
          <GridListItem title="Excelence" invert>
            Zakládáme si na vynikající odvedené práci pro naše klienty. Máme
            vysoké standardy pro naši práci, kterých vždy dosáhneme. Přes to pro
            nás nejede vlak.
          </GridListItem>
          <GridListItem title="Spolehlivost" invert>
            Řešení, která našim klientům dodáváme jsou spolehlivá a dělají
            přesně to, co od nich naši klienti očekávají. V případě jakéhokoliv
            výpadku jsme dostupní 24/7 a problém máme obvykle vyřešený do 24h
            hodin.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
/*
const team = [
  {
    title: 'Náš tým',
    people: [
      {
        name: 'Tomáš Křepel',
        role: 'Co-Founder / COO',
        image: { src: imageTomasKrepel },
      },
      {
        name: 'Vojtěch Bobek',
        role: 'Co-Founder / CTO & CMO',
        image: { src: imageVojtaBobek },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-accent">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-accent to-accent/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}
*/
export const metadata: Metadata = {
  title: 'O nás',
  description:
    'Věříme, že naše síla spočívá v našem týmovém duchu, bohatých zkušenostech a vysokých standardech pro naši práci, což nám umožňuje dodávat vynikající IT a marketingová řešení v nadstandardně krátkém čase.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="O nás"
        title="Náš týmový duch, bohaté zkušenosti a vysoké standardy jsou naše síla"
      >
        <p>
          Věříme, že naše síla spočívá v našem týmovém duchu, bohatých
          zkušenostech a vysokých standardech pro naši práci, což nám umožňuje
          dodávat vynikající IT a marketingová řešení v nadstandardně krátkém
          čase.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Naše studio bylo založeno profesionály, kteří sdíleli stejný smysl
            pro detail a excelenci a chtěli dělat IT a marketingová řešení
            pořádně.
          </p>
          <p>
            U nás jsme orientovaní čistě na dodávání kvalitních řešení na míru,
            která našim klientům přinesou slíbené výsledky. Protože výsledky
            jsou to, na čem v podnikání záleží.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="40+" label="Dokončených projektů" />
          <StatListItem value="20+" label="Spokojených klientů" />
          <StatListItem
            value="9 "
            label="Členů teamu"
          />
        </StatList>
      </Container>

      <Culture />

   {/* <Team />*/} 

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Z našeho blogu"
        intro="Zůstaňte v obraze s nejnovějšími marketingovými a IT trendy. V našem blogu vám přinášíme novinky, tipy od profesionálů a inovativní strategie, které vás udrží napřed před vašimi soupeři."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
