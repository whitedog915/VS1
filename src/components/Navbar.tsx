/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Shield, Swords, Sparkles } from 'lucide-react';

interface NavbarProps {
  onSelectTab: (tab: 'all' | 'realms' | 'lore' | 'characters') => void;
  activeTab: 'all' | 'realms' | 'lore' | 'characters';
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectTab, activeTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'all' | 'realms' | 'lore' | 'characters', e: React.MouseEvent) => {
    e.preventDefault();
    onSelectTab(tab);
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(tab === 'all' ? 'hero' : tab);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0a0d14]/90 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick('all', e)}
          className="flex items-center gap-2.5 text-slate-100 whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded border border-amber-500/50 flex items-center justify-center bg-stone-900/80 shadow-sm shadow-amber-900/40">
            <Swords className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base tracking-wider text-amber-200/90 group-hover:text-amber-300 transition-colors">
              격돌! 이계 vs 무협
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a
            href="#realms"
            onClick={(e) => handleNavClick('realms', e)}
            className={`whitespace-nowrap transition-colors hover:text-amber-300 font-serif ${
              activeTab === 'realms' ? 'text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            6대 경지록 (境地)
          </a>
          <a
            href="#lore"
            onClick={(e) => handleNavClick('lore', e)}
            className={`whitespace-nowrap transition-colors hover:text-amber-300 font-serif ${
              activeTab === 'lore' ? 'text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            기운전기 (氣運)
          </a>
          <a
            href="#clash"
            onClick={(e) => handleNavClick('lore', e)}
            className="text-stone-300 hover:text-amber-300 whitespace-nowrap transition-colors font-serif"
          >
            상성 비전 (相性)
          </a>
          <a
            href="#characters"
            onClick={(e) => handleNavClick('characters', e)}
            className={`whitespace-nowrap transition-colors hover:text-amber-300 font-serif ${
              activeTab === 'characters' ? 'text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            영걸 열전 (列傳)
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={(e) => handleNavClick('characters', e)}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-serif font-semibold text-amber-100 bg-stone-900/90 border border-amber-600/50 rounded hover:border-amber-400 hover:bg-stone-800 transition-all shadow-sm shadow-amber-950"
          >
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>영걸록(英傑錄) 열람</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-400 hover:text-amber-300 rounded focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-900/40 bg-[#0d121c] px-4 pt-2 pb-4 space-y-2 font-serif">
          <button
            onClick={(e) => handleNavClick('all', e)}
            className="block w-full text-left px-3 py-2 text-sm text-stone-200 hover:text-amber-300 font-medium rounded hover:bg-stone-800/50"
          >
            전란 총람
          </button>
          <button
            onClick={(e) => handleNavClick('realms', e)}
            className="block w-full text-left px-3 py-2 text-sm text-amber-300 font-medium rounded hover:bg-stone-800/50"
          >
            6대 경지록 (삼류 ~ 화경)
          </button>
          <button
            onClick={(e) => handleNavClick('lore', e)}
            className="block w-full text-left px-3 py-2 text-sm text-stone-200 hover:text-amber-300 font-medium rounded hover:bg-stone-800/50"
          >
            기운전기 & 차원의 균열
          </button>
          <button
            onClick={(e) => handleNavClick('characters', e)}
            className="block w-full text-left px-3 py-2 text-sm text-stone-200 hover:text-amber-300 font-medium rounded hover:bg-stone-800/50"
          >
            양대 진영 35인 영걸 열전
          </button>
        </div>
      )}
    </header>
  );
};
