// src/lib/MDXComponents.tsx
import clsx from 'clsx'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { StatList, StatListItem } from '@/components/StatList'
import { TagList, TagListItem } from '@/components/TagList'
import { Obrazek } from '@/components/Obrazek'
import { Video } from '@/components/Video'

export const MDXComponents = {
  Blockquote({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Blockquote>) {
    return <Blockquote className={clsx('my-32', className)} {...props} />
  },
  img: function Img({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) {
    return (
      <div className={clsx('group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6', className)}>
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-16/10 w-full object-cover"
        />
      </div>
    )
  },
  Obrazek: function ObrazekComponent({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'img'>) {
    return <Obrazek className={clsx('my-10', className)} {...props} />
  },
  Video: function VideoComponent({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Video>) {
    return <Video className={clsx('my-10', className)} {...props} />
  },
  StatList({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof StatList>) {
    return <StatList className={clsx('my-32 max-w-none!', className)} {...props} />
  },
  StatListItem,
  table: function Table({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'table'>) {
    return (
      <div className={clsx('my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto', className)}>
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    )
  },
  TagList({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TagList>) {
    return <TagList className={clsx('my-6', className)} {...props} />
  },
  TagListItem,
  TopTip({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <Border position="left" className={clsx('my-10 pl-8', className)}>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-accent">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    )
  },
  Typography({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div className={clsx('typography', className)} {...props} />
  },
  wrapper({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return (
      <div
        className={clsx('mt-14 px-6 lg:mt-32 *:mx-auto *:max-w-3xl *:first:mt-0! *:last:mb-0!', className)}
        {...props}
      />
    )
  },
}
