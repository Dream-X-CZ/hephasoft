import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-accent px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white text-balance sm:text-4xl">
              Řekněte nám o svém projektu
            </h2>
            <div className="mt-6 flex">
              <Button href="/kontakt" invert>
                Napište nám
              </Button>
            </div>
            <div className="mt-10 border-t border-accent/70 pt-10 hidden">
              <h3 className="font-display text-base font-semibold text-white">
                Naše sídla
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
