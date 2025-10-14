'use client'

import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const baseTransition = {
  duration: 9,
  repeat: Infinity as const,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
}

type VariantRenderer = (options: { shouldReduceMotion: boolean }) => ReactNode

type SectionDividerProps = {
  className?: string
  label?: string
  variant?: 'aurora' | 'wave' | 'pulse'
}

const aurora: VariantRenderer = ({ shouldReduceMotion }) => {
  const transition = shouldReduceMotion ? undefined : { ...baseTransition, duration: 12 }

  return (
    <>
      <motion.span
        aria-hidden
        className="absolute -inset-y-12 -left-24 aspect-[2/1] w-[70%] rounded-full bg-[radial-gradient(circle_at_top,_theme(colors.violet.500/45%),_transparent_60%)] blur-3xl"
        initial={{ opacity: 0.2, x: -120 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.45, x: 0 }
            : { opacity: [0.25, 0.6, 0.25], x: [-120, 120] }
        }
        transition={transition}
      />
      <motion.span
        aria-hidden
        className="absolute -right-24 -top-16 aspect-[2/1] w-[65%] rounded-full bg-[radial-gradient(circle_at_bottom,_theme(colors.fuchsia.500/35%),_transparent_60%)] blur-3xl"
        initial={{ opacity: 0.2, x: 120 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.45, x: 0 }
            : { opacity: [0.3, 0.7, 0.3], x: [120, -120] }
        }
        transition={transition}
      />
      <motion.span
        aria-hidden
        className="absolute inset-x-1/3 top-4 h-40 rounded-full bg-[radial-gradient(circle,_theme(colors.sky.400/45%),_transparent_65%)] blur-3xl"
        initial={{ opacity: 0.15, scale: 0.9 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.35, scale: 1 }
            : { opacity: [0.2, 0.5, 0.2], scale: [0.9, 1.05, 0.9] }
        }
        transition={shouldReduceMotion ? undefined : { ...baseTransition, duration: 10 }}
      />
    </>
  )
}

const wave: VariantRenderer = ({ shouldReduceMotion }) => {
  const transition = shouldReduceMotion
    ? undefined
    : {
        ...baseTransition,
        duration: 7,
      }

  return (
    <div className="absolute inset-0" aria-hidden>
      <motion.div
        className="absolute -left-8 top-1/2 h-24 w-[120%] -translate-y-1/2 rounded-[40%] bg-gradient-to-r from-accent/60 via-transparent to-accent/60 opacity-60"
        initial={{ rotate: -8, y: '-40%' }}
        animate={
          shouldReduceMotion
            ? { rotate: 0, y: '-50%' }
            : { rotate: [-6, 4, -6], y: ['-40%', '-55%', '-40%'] }
        }
        transition={transition}
      />
      <motion.div
        className="absolute -right-12 top-1/2 h-32 w-[130%] -translate-y-1/2 rounded-[40%] bg-gradient-to-r from-accent/30 via-transparent to-white/20"
        initial={{ rotate: 4, y: '-45%' }}
        animate={
          shouldReduceMotion
            ? { rotate: 0, y: '-50%' }
            : { rotate: [6, -4, 6], y: ['-45%', '-60%', '-45%'] }
        }
        transition={transition}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-neutral-950 via-neutral-900/0 to-transparent"
        initial={{ opacity: 0.2 }}
        animate={shouldReduceMotion ? { opacity: 0.5 } : { opacity: [0.2, 0.45, 0.2] }}
        transition={shouldReduceMotion ? undefined : { ...baseTransition, duration: 6 }}
      />
    </div>
  )
}

const pulse: VariantRenderer = ({ shouldReduceMotion }) => {
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 5,
        repeat: Infinity as const,
        repeatDelay: 1.2,
        ease: 'easeInOut' as const,
      }

  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
      <motion.span
        className="h-24 w-24 rounded-full bg-white/10 shadow-[0_0_60px_-10px_rgba(255,255,255,0.45)]"
        initial={{ scale: 0.85, opacity: 0.35 }}
        animate={
          shouldReduceMotion
            ? { scale: 1, opacity: 0.45 }
            : { scale: [0.85, 1.15, 0.85], opacity: [0.35, 0.55, 0.35] }
        }
        transition={transition}
      />
      <motion.span
        className="absolute h-32 w-32 rounded-full border border-white/30"
        initial={{ scale: 0.95, opacity: 0.3 }}
        animate={
          shouldReduceMotion
            ? { scale: 1, opacity: 0.4 }
            : { scale: [0.95, 1.4], opacity: [0.3, 0] }
        }
        transition={shouldReduceMotion ? undefined : { duration: 3.2, repeat: Infinity, repeatDelay: 1.4 }}
      />
      <motion.span
        className="absolute h-40 w-40 rounded-full border border-white/10"
        initial={{ scale: 0.9, opacity: 0.2 }}
        animate={
          shouldReduceMotion
            ? { scale: 1, opacity: 0.25 }
            : { scale: [0.9, 1.6], opacity: [0.2, 0] }
        }
        transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, repeatDelay: 1.8 }}
      />
    </div>
  )
}

const variantMap: Record<Required<SectionDividerProps>['variant'], VariantRenderer> = {
  aurora,
  wave,
  pulse,
}

export function SectionDivider({
  className,
  label,
  variant = 'aurora',
}: SectionDividerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      aria-hidden
      className={clsx(
        'pointer-events-none relative isolate mt-24 h-28 overflow-hidden rounded-4xl border border-white/10 bg-neutral-950/80 shadow-[0_0_50px_-20px_rgba(59,130,246,0.45)] sm:mt-32 sm:h-32 lg:mt-40',
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_65%)]" />
      {variantMap[variant]({ shouldReduceMotion })}
      {label ? (
        <div className="pointer-events-none relative z-10 flex h-full items-center justify-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  )
}
