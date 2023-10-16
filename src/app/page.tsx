'use client';
import { ClickCountProvider } from '@/contexts/colorsContext';

import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main >
      <ClickCountProvider>
        <Header />
      </ClickCountProvider>
    </main>
  )
}
