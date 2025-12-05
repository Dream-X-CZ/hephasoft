import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section group [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center transition-all duration-500 ease-in-out group-hover:grayscale-0 lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-accent after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-accent sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Seznámení a plán" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-accent/60">
        <p>
          Nejdřív se s vámi{' '}
          <strong className="font-semibold text-accent">
            sejdeme a probereme vaše potřeby
          </strong>
          . Chceme detailně pochopit, co přesně chcete – ať už jde o nový web,
          aplikaci, e-shop, nebo efektivnější marketing.
        </p>
        <p>
          Důkladně nasloucháme vašim představám a cílům, abychom si byli jistí,
          že jsme na stejné vlně. Nebojte se nás ptát na cokoliv, jsme tu pro
          vás, a chceme, aby výsledek{' '}
          <strong className="font-semibold text-accent">
            překonal vaše očekávání
          </strong>
          .
        </p>
        <p>
          Společně definujeme rozsah spolupráce, navrhneme optimální postup a
          domluvíme se na dalším postupu. Vytvoříme{' '}
          <strong className="font-semibold text-accent">jasný plán</strong>, ať
          už se pouštíme do IT projektu, nebo marketingové kampaně.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-accent">
        V této fázi se můžete těšit na
      </h3>
      <TagList className="mt-4">
        <TagListItem>Úvodní konzultaci zdarma</TagListItem>
        <TagListItem>Detailní rozbor vašich potřeb a cílů</TagListItem>
        <TagListItem>Návrh řešení šitý na míru</TagListItem>
        <TagListItem>Stanovení časového harmonogramu projektu</TagListItem>
        <TagListItem>Transparentní rozpočet</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section
      title="Realizace a průběžné info"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-accent/60">
        <p>
          Jakmile máme plán hotový,{' '}
          <strong className="font-semibold text-accent">
            náš tým se pouští do realizace
          </strong>
          . Ať už jde o kód, grafiku, nebo marketingovou strategii, pracujeme s
          maximálním nasazením, abychom vám dodali špičkové řešení.
        </p>
        <p>
          Během realizace vás{' '}
          <strong className="font-semibold text-accent">
            pravidelně informujeme o postupu
          </strong>{' '}
          – ukazujeme vám, jak se projekt vyvíjí, ať už se jedná o web,
          aplikaci, nebo třeba vizuály pro vaši kampaň.
        </p>
        <p>
          Vaše zpětná vazba je pro nás klíčová. Pokud máte v průběhu realizace
          nápady nebo{' '}
          <strong className="font-semibold text-accent">
            potřebujete cokoliv upravit
          </strong>
          , jsme připraveni flexibilně reagovat a zapracovat vaše připomínky do
          IT řešení i marketingových aktivit.
        </p>
      </div>

      <Blockquote
        author={{
          name: 'Petr Svoboda',
          role: 'Majitel, Rychlejší Web s.r.o.', // Fiktivní firma, zní obecně obchodně
        }}
        className="mt-12"
      >
        S Hephasoftem jsme řešili jak vývoj webu, tak i marketingovou strategii.
        Během obou projektů nás mile překvapila jejich komunikace a ochota
        přizpůsobit se našim potřebám. Vždycky jsme přesně věděli, co se děje a
        jak projekt pokračuje.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Hotovo a spuštěno" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-accent/60">
        <p>
          Když je dílo hotové,{' '}
          <strong className="font-semibold text-accent">
            předáváme vám kompletní řešení
          </strong>
          . Společně projdeme výsledek, ať už se jedná o web, aplikaci, e-shop
          nebo marketingovou kampaň, abychom se ujistili, že je vše v naprostém
          pořádku a splňuje vaše očekávání.
        </p>
        <p>
          Spuštění do provozu{' '}
          <strong className="font-semibold text-accent">
            probíhá hladce a bez komplikací
          </strong>
          . Jsme připraveni vám se vším pomoct, ať už rozjíždíte nový software
          nebo spouštíte marketingové aktivity.
        </p>
        <p>
          Naše spolupráce odevzdáním projektu nekončí. Zajišťujeme{' '}
          <strong className="font-semibold text-accent">
            spolehlivou 24/7 podporu
          </strong>{' '}
          pro případ jakýchkoliv dotazů nebo nečekaných situací – a to jak v IT
          oblasti, tak i v marketingu.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-accent">
        V této fázi se můžete spolehnout na
      </h3>
      <List className="mt-8">
        <ListItem title="Finální testování a kontrola">
          Důkladně otestujeme funkčnost a provedeme finální kontrolu, ať už se
          jedná o IT řešení nebo marketingové výstupy – chceme mít jistotu, že
          je vše perfektní.
        </ListItem>
        <ListItem title="Bezproblémové spuštění">
          Postaráme se o plynulý start vašeho nového webu, aplikace, e-shopu,
          nebo marketingové kampaně.
        </ListItem>
        <ListItem title="Garanci 24/7 podpory">
          I po spuštění projektu vám poskytneme rychlou a spolehlivou podporu,
          kdykoliv ji budete potřebovat – a to napříč všemi našimi službami.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-accent/5 mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Naše hodnoty"
        title="Jednoduchost, spolehlivost a férový přístup"
      >
        <p>
          V Hephasoftu se držíme jednoduchých, ale pevných hodnot. Věříme, že
          úspěšná spolupráce stojí na pečlivosti, spolehlivosti a
          srozumitelnosti – a to platí pro všechny naše služby, od IT až po
          marketing.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Srozumitelnost">
            Mluvíme jasně a bez zbytečného žargonu. Chceme, abyste rozuměli
            každému kroku a měli jistotu, že víte, za co platíte – ať už
            investujete do IT, nebo marketingu.
          </GridListItem>
          <GridListItem title="Spolehlivost">
            Dodržujeme, co slíbíme. Naše řešení – ať už se jedná o software,
            web, nebo marketingovou kampaň – jsou spolehlivá a dělají to, co
            mají.
          </GridListItem>
          <GridListItem title="Flexibilita">
            Chápeme, že se požadavky mění. Jsme připraveni se přizpůsobit a
            hledat řešení, která vám budou dlouhodobě vyhovovat – v IT i v
            marketingu.
          </GridListItem>
          <GridListItem title="Otevřenost">
            Komunikujeme otevřeně a upřímně. Nebojíme se říct, co si myslíme, a
            rádi vám nasloucháme – ať už řešíte technické detaily nebo
            marketingovou strategii.
          </GridListItem>
          <GridListItem title="Férovost">
            Jednáme férově a transparentně. Chceme, aby naše spolupráce byla
            výhodná pro obě strany – ať už se jedná o IT služby nebo
            marketingovou podporu.
          </GridListItem>
          <GridListItem title="Efektivita">
            Hledáme efektivní cesty k vašemu cíli. Šetříme váš čas i peníze – ať
            už řešíme IT systémy, nebo marketingové kampaně.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Jak fungujeme',
  description:
    'Věříme v efektivitu a maximální využití zdrojů, abychom našim klientům poskytli tu nejlepší hodnotu.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Jak fungujeme" title="Jednoduše a efektivně">
        <p>
          U nás v Hephasoftu věříme, že nejlepší spolupráce je ta, která je
          postavena na jednoduchosti, srozumitelnosti a vede k hmatatelným
          výsledkům – ať už v IT, nebo v marketingu.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
