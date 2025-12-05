// src/components/ImageWithModal.tsx
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import clsx from 'clsx';

export interface ImageWithModalProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Cesta k obrázku */
  src: string;
  /** Alternativní text */
  alt: string;
  /** Dodatečné třídy pro zobrazení obrázku v běžném režimu */
  className?: string;
  /** Dodatečné třídy pro modal (obrazovku s větším obrázkem) */
  modalClassName?: string;
}

export const ImageWithModal: React.FC<ImageWithModalProps> = ({
  src,
  alt,
  className,
  modalClassName,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Obrázek v běžném zobrazení, kliknutím se otevře modal */}
      <img
        src={src}
        alt={alt}
        className={clsx('cursor-pointer', className)}
        onClick={openModal}
        {...props}
      />

      {/* Modal - zobrazení větší verze obrázku */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className={clsx('relative', modalClassName)}
            onClick={(e) => e.stopPropagation()} // Zabrání uzavření modalu při kliknutí na obrázek
          >
            <img src={src} alt={alt} className="max-w-full max-h-full" />
            {/* Tlačítko pro zavření modalu */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};
