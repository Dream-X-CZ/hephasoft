'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const featuredTestimonial = {
  body: 'Děkuji! Hephasoft se o všechno postarali a musím říct, že jsou to rychlíci. Poslala jsem jim jen texty na web, soubor s logem a popsala jim svoji hrubou představu o webu a během pár dní vše nadesignovali a web spustili. Dokonce mi na něm udělali kompletní SEO a zřídili mi k němu doménu i s emailem. Jsem s nimi maximálně spokojená a určitě s nimi budu spolupracovat i v budoucnu.',
  author: {
    name: 'Jana Bartošová',
    handle: 'jancifotio',
    imageUrl: '/jana-bartosova.png',
    logoUrl: '/jana-bartosova.png',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Děkuji! Hephasoft se o všechno postarali a musím říct, že jsou to rychlíci. Poslala jsem jim jen texty na web, soubor s logem a popsala jim svoji hrubou představu o webu a během pár dní vše nadesignovali a web spustili. Dokonce mi na něm udělali kompletní SEO a zřídili mi k němu doménu i s emailem. Jsem s nimi maximálně spokojená a určitě s nimi budu spolupracovat i v budoucnu.',
        author: {
          name: 'Jana Bartošová',
          handle: 'jancifoto',
          imageUrl: '/jana-bartosova.png',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Nechali jsme si vytvořit CRM na míru, které nám umožnilo lépe spravovat zákaznické vztahy a zefektivnit interní procesy. Precizní práce a skvělá komunikace.',
        author: {
          name: 'Václav Horáček',
          handle: 'vaclavhoracek',
          imageUrl: '/img_Vaclav-Horacek.png',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Měli jsme eshop, se kterým jsme nebyli nikde úplně spokojeni a báli jsme se velké změny, ale HephaSoft nás provedl celým procesem. Já jsem s tím měl naprosto minimální práci. Po vytvoření jsme absolvovali školení, kde nás se vším naučili a i teď, když potřebuji pomoc, reagují rychle a ochotně.',
        author: {
          name: 'Eliška Řezníčková',
          handle: 'eliskareznickova',
          imageUrl: '/img_Eliska-Reznickova.png',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Nový web, který nám dali, působí moderně a přitažlivě. Celý proces spolupráce byl velmi osobní a transparentní, díky čemuž jsme dostali přesně to, co jsme hledali. Ocenili jsme jejich kreativitu a pečlivý přístup.',
        author: {
          name: 'Martina Černá',
          handle: 'martinacerna',
          imageUrl: '/img_Martina-Cerna.png',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative isolate bg-white pb-6 pt-12 sm:pt-16 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-accent sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {/* Featured Testimonial */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-moonstone shadow-lg ring-1 ring-accent/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
          >
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-white sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-accent/10 px-6 py-4 sm:flex-nowrap">
              <Image
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-moonstone/50"
                width={40}
                height={40}
              />
              <div className="flex-auto">
                <div className="font-semibold text-white">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-200">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </motion.figure>
          {/* Testimonials Grid */}
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <motion.figure
                      key={testimonial.author.handle}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-accent/5"
                    >
                      <blockquote className="text-accent">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          alt=""
                          src={testimonial.author.imageUrl}
                          className="size-10 rounded-full bg-gray-50 object-cover object-center"
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
