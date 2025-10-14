'use client'

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import clsx from 'clsx'
import { type CSSProperties, useRef } from 'react'

type ScrollAnimationSectionProps = {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  variant?: 'parallax' | 'tilt' | 'spotlight'
}

export function ScrollAnimationSection({
  children,
  className,
  innerClassName,
  variant = 'parallax',
}: ScrollAnimationSectionProps) {
  let ref = useRef<HTMLDivElement>(null)
  let shouldReduceMotion = useReducedMotion()
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  let smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  })

  let parallaxY = useTransform(smoothProgress, [0, 1], ['-12%', '12%'])
  let parallaxScale = useTransform(smoothProgress, [0, 1], [0.94, 1.04])

  let tiltRotateX = useTransform(smoothProgress, [0, 0.5, 1], ['6deg', '0deg', '-6deg'])
  let tiltRotateY = useTransform(smoothProgress, [0, 0.5, 1], ['-6deg', '0deg', '6deg'])
  let tiltScale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1.02, 0.98])

  let spotlightOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.1, 0.6, 1])
  let spotlightX = useTransform(smoothProgress, [0, 1], ['-10%', '10%'])
  let spotlightY = useTransform(smoothProgress, [0, 1], ['-15%', '15%'])
  let spotlightScale = useTransform(smoothProgress, [0, 1], [0.85, 1.1])
  let spotlightShadow = useTransform(smoothProgress, [0, 1], [
    '0px 40px 120px -60px rgba(37,55,74,0.25)',
    '0px 80px 200px -60px rgba(15,23,42,0.55)',
  ])

  let baseOpacity = useTransform(smoothProgress, [0, 0.2, 1], [0.6, 1, 1])

  let sectionStyle: CSSProperties | undefined
  if (variant === 'tilt' && !shouldReduceMotion) {
    sectionStyle = { perspective: 1600 }
  }

  return (
    <section ref={ref} className={clsx('relative', className)} style={sectionStyle}>
      {variant === 'spotlight' && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[3rem]"
          style={{
            opacity: shouldReduceMotion ? 0.35 : spotlightOpacity,
            mixBlendMode: 'screen',
          }}
        >
          <motion.span
            className="absolute inset-[-40%] bg-[radial-gradient(circle_at_center,_rgba(37,55,74,0.65),_transparent_70%)]"
            style={
              shouldReduceMotion
                ? undefined
                : { x: spotlightX, y: spotlightY, scale: spotlightScale }
            }
          />
        </motion.span>
      )}
      <motion.div
        className={clsx('will-change-transform', innerClassName)}
        style={{
          opacity: shouldReduceMotion ? 1 : baseOpacity,
          y: shouldReduceMotion || variant !== 'parallax' ? undefined : parallaxY,
          scale:
            shouldReduceMotion || variant === 'spotlight'
              ? undefined
              : variant === 'parallax'
                ? parallaxScale
                : tiltScale,
          rotateX: shouldReduceMotion || variant !== 'tilt' ? undefined : tiltRotateX,
          rotateY: shouldReduceMotion || variant !== 'tilt' ? undefined : tiltRotateY,
          boxShadow:
            variant === 'spotlight'
              ? shouldReduceMotion
                ? '0px 60px 160px -80px rgba(15,23,42,0.35)'
                : spotlightShadow
              : undefined,
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}
