"use client";

import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function ImageWrapper({ src, alt = '', className = '', width = 800, height = 600, priority = false }: Props) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" priority={priority} />
    </div>
  );
}
