// src/components/Obrazek.tsx
'use client'

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

export interface ObrazekProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export const Obrazek: React.FC<ObrazekProps> = ({ src, alt, className, ...props }) => {
  // Pokud je src objekt, použijeme jeho vlastnost `src`
  const imageUrl = typeof src === 'string' ? src : (src as any)?.src || ''

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Zavření popup klávesou Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPopupOpen(false)
      }
    }
    if (isPopupOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPopupOpen])

  return (
    <>
      {/* Základní zobrazení obrázku */}
      <div className={clsx('my-10 overflow-hidden rounded-xl bg-gray-100 p-2 shadow', className)}>
        <img
          src={imageUrl}
          alt={alt}
          className=" object-contain cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
          {...props}
        />
      </div>

      {/* Popup (modal) s větší verzí obrázku */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="relative bg-white rounded shadow-lg p-4"
            onClick={(e) => e.stopPropagation()} // Zabrání zavření při kliknutí uvnitř popupu
          >
            <img
              src={imageUrl}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300"
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </>
  )
}
