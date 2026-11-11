/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Flame, ShieldAlert, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreRealms: () => void;
  onExploreCharacters: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreRealms,
  onExploreCharacters,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-amber-950/60">
      {/* Antique Atmosphere & Ambient Light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Ornate Corners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Curatorial Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-serif tracking-[0.25em] text-amber-400 uppercase mb-4">
            <span className="w-8 h-[1px] bg-amber-500/50" />
            <span>홍무 15년 · 아리아력 687년 ｜ 천문(天門)과 차원의 균열 발발</span>
            <span className="w-8 h-[1px] bg-amber-500/50" />
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-stone-100 leading-[1.2] mb-6">
            <span className="gold-gradient-text block mb-1">격돌! 이계 vs 무협</span>
            <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-stone-300 block">
              천하의 명운을 건 양대 우주의 전란 실록(實錄)
            </span>
          </h1>

          {/* Core Worldview Deck */}
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-serif max-w-2xl mx-auto mb-8 text-balance">
            하늘이 갈라지고 다른 우주의 문이 열렸다. 뼈와 혈맥에 압축된 고밀도 <strong className="text-amber-300 font-semibold">내공(內功)</strong>과
            천지자연을 부리는 광포한 <strong className="text-sky-300 font-semibold">마나(Mana)</strong>의 충돌.
            물러설 곳 없는 전장에서 살아남고자 한다면 경지의 격차를 깨우치고, 적의 무력을 꿰뚫어 보라.
          </p>

          {/* Direct Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={onExploreRealms}
              className="px-6 py-3 text-sm font-serif font-semibold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded hover:brightness-110 transition-all shadow-md shadow-amber-950 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-stone-950" />
              <span>【 卷之壹 】 6대 경지 비전(秘傳) 열람</span>
            </button>
            <button
              onClick={onExploreCharacters}
              className="px-6 py-3 text-sm font-serif font-semibold text-stone-200 bg-stone-900/90 border border-amber-600/40 rounded hover:border-amber-400 hover:text-white transition-all flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>【 卷之參 】 양대 진영 35인 영걸록</span>
            </button>
          </div>

          {/* Editorial Metric Strips (No pill badges, clean typography) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded border border-amber-900/40 bg-stone-950/60 backdrop-blur-sm text-center">
            <div className="p-2">
              <span className="text-xs text-stone-400 font-serif block mb-1">전투 경지 체계</span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-amber-300 tabular-nums">6단계</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">삼류부터 화경까지</span>
            </div>
            <div className="p-2 border-l border-stone-800">
              <span className="text-xs text-stone-400 font-serif block mb-1">상호 침식 에너지</span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-sky-300">내공 vs 마나</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">강도·밀도 흡수 법칙</span>
            </div>
            <div className="p-2 border-l border-stone-800">
              <span className="text-xs text-stone-400 font-serif block mb-1">참전 핵심 세력</span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-amber-300 tabular-nums">6개 세력</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">무림 3 vs 이계 3</span>
            </div>
            <div className="p-2 border-l border-stone-800">
              <span className="text-xs text-stone-400 font-serif block mb-1">공식 등장인물</span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-stone-200 tabular-nums">35인</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">상태별 초상화 연동</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
