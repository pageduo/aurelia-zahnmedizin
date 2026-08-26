"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

/** next/image mit Blur-Up: lädt unscharf und blendet scharf ein. */
/*
 * alt wird bewusst einzeln entgegengenommen und weitergereicht, statt nur in
 * props zu stecken. Sonst sieht die Barrierefreiheits-Pruefung am Aufrufort
 * kein alt und meldet jedes Bild dieser Komponente als unbeschriftet.
 */
export default function BlurImage({ className = "", alt, ...props }: ImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Bilder aus dem Browser-Cache feuern kein onLoad mehr - Zustand nachziehen.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <Image
      {...props}
      alt={alt}
      ref={ref}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[filter,transform,opacity] duration-700 ease-out ${
        loaded ? "opacity-100 blur-0" : "opacity-60 blur-lg"
      }`}
    />
  );
}
