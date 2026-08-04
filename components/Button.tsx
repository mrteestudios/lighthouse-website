"use client";

import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export default function Button({ variant = 'primary', className = '', children, ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const sizes = 'px-4 py-2 min-h-[44px]';
  const variants =
    variant === 'primary'
      ? 'bg-brand text-black hover:opacity-95'
      : 'bg-transparent text-white hover:bg-white/5';

  return (
    <button className={`${base} ${sizes} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
}
