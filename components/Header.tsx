"use client";

import React from 'react';
import Nav from './Nav';

export default function Header(){
  return (
    <header className="relative z-40 border-b border-white/6 bg-black/80 backdrop-blur-sm">
      <a className="skip-link" href="#content">Skip to content</a>
      <Nav />
    </header>
  );
}
