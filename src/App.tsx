/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RealmsSection } from './components/RealmsSection';
import { WorldLoreSection } from './components/WorldLoreSection';
import { CharactersSection } from './components/CharactersSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'realms' | 'lore' | 'characters'>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080b10] text-stone-200 font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* 3-Zone Navigation Top Bar */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreRealms={() => scrollToSection('realms')}
          onExploreCharacters={() => scrollToSection('characters')}
        />

        {/* 6 Realm Tiers Codex (3. UI 및 기능 요구사항) */}
        <RealmsSection />

        {/* World Lore, Energy Collision & Rift Laws */}
        <WorldLoreSection />

        {/* Faction Roster & Character Archive */}
        <CharactersSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
