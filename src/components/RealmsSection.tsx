/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { REALM_TIERS, RealmTier } from '../data/loreData';
import { ChevronDown, ChevronUp, Sparkles, Zap, Award, Flame, ArrowUpRight } from 'lucide-react';

export const RealmsSection: React.FC = () => {
  // Allow multiple or single expansion
  const [expandedRealms, setExpandedRealms] = useState<number[]>([4, 5, 6]); // Default highlight top 3
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedRealms.includes(id)) {
      setExpandedRealms(expandedRealms.filter((rId) => rId !== id));
    } else {
      setExpandedRealms([...expandedRealms, id]);
    }
  };

  const expandAll = () => {
    setExpandedRealms([1, 2, 3, 4, 5, 6]);
  };

  const collapseAll = () => {
    setExpandedRealms([]);
  };

  const handleStepClick = (id: number) => {
    setSelectedStep(id);
    if (!expandedRealms.includes(id)) {
      setExpandedRealms([...expandedRealms, id]);
    }
    const cardEl = document.getElementById(`realm-card-${id}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="realms" className="py-16 lg:py-24 border-b border-amber-950/60 bg-[#090c12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif tracking-widest text-amber-400 uppercase mb-2">
            <span>The 6 Ascensions of Martial Power & High Magic</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight mb-4">
            【 卷之壹 · 육대경지록 (六大境地錄) 】
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-serif leading-relaxed">
            필멸자의 한계를 부수고 신역(神域)에 닿는 무학과 마도의 여섯 위계.
            단전의 깊이와 심상(心象)의 경지, 그리고 천지를 공명시키는 서클의 크기에 따라 전장의 생사가 갈린다.
          </p>

          {/* Quick Controls */}
          <div className="mt-6 flex items-center justify-center gap-3 text-xs font-serif">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded border border-amber-800/40 text-stone-300 hover:text-amber-300 hover:border-amber-600 transition-colors"
            >
              전(全) 경지 비전(秘傳) 펼치기
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded border border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700 transition-colors"
            >
              비전 봉인
            </button>
          </div>
        </div>

        {/* Step Indicator (단계 표시: 경지의 상승 순서가 한눈에 보이도록) */}
        <div className="mb-12 bg-stone-950/90 border border-amber-900/40 rounded p-4 sm:p-5 shadow-lg shadow-black/60">
          <div className="text-xs font-serif text-amber-400/90 mb-3 flex items-center justify-between">
            <span className="font-semibold tracking-wide">경지 상승 순서 (성장 단계 위계)</span>
            <span className="text-[11px] text-stone-400">단계를 클릭하면 해당 카드로 이동합니다</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {REALM_TIERS.map((realm, index) => {
              const isSelected = selectedStep === realm.id;
              const isExpanded = expandedRealms.includes(realm.id);
              const isHighRealm = realm.id >= 4;

              return (
                <button
                  key={realm.id}
                  onClick={() => handleStepClick(realm.id)}
                  className={`text-left p-2.5 rounded border transition-all text-xs font-serif relative overflow-hidden group ${
                    isSelected
                      ? 'border-amber-400 bg-amber-950/40 text-amber-200 ring-1 ring-amber-500/50'
                      : isHighRealm
                      ? 'border-amber-900/50 bg-stone-900/70 text-stone-200 hover:border-amber-500/60'
                      : 'border-stone-800 bg-stone-900/40 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-stone-400">{realm.level}</span>
                    {realm.breakthrough && (
                      <span className="text-[9px] text-amber-400 font-semibold px-1 py-0.2 rounded bg-amber-950/60 border border-amber-800/40">
                        돌파필요
                      </span>
                    )}
                  </div>
                  <div className="font-bold text-sm text-stone-100 group-hover:text-amber-300 transition-colors truncate">
                    {realm.name.split(' ')[0]}
                  </div>
                  <div className="text-[11px] text-stone-400 truncate mt-0.5">
                    {realm.westernSwordsmanship.split(' ')[0]}
                  </div>
                  {/* Subtle step arrow */}
                  {index < 5 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-stone-600 text-[10px]">
                      ▶
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Individual Realm Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REALM_TIERS.map((tier) => {
            const isExpanded = expandedRealms.includes(tier.id);
            const isTopTier = tier.id === 6; // 화경
            const isBreakthroughTier = tier.id === 4 || tier.id === 5; // 절정, 초절정

            return (
              <div
                key={tier.id}
                id={`realm-card-${tier.id}`}
                className={`flex flex-col rounded bg-stone-950/90 border transition-all duration-300 relative ${
                  isTopTier
                    ? 'border-yellow-500/60 shadow-lg shadow-amber-950/40'
                    : isBreakthroughTier
                    ? 'border-amber-700/50 hover:border-amber-500/70 shadow-md shadow-black/40'
                    : 'border-stone-800 hover:border-stone-700'
                }`}
              >
                {/* Card Top: Highlighted Realm, Western Swordsmanship, Magic Circle */}
                <div
                  onClick={() => toggleExpand(tier.id)}
                  className="p-5 sm:p-6 border-b border-stone-800/80 cursor-pointer select-none bg-gradient-to-b from-stone-900/60 to-transparent"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-serif font-medium text-stone-400 tracking-wider">
                      {tier.level} 경지
                    </span>
                    <button
                      className="text-stone-400 hover:text-amber-300 transition-colors p-1"
                      aria-label={isExpanded ? '상세 접기' : '상세 펼치기'}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Main Realm Title */}
                  <h3 className="text-2xl font-serif font-black tracking-tight text-stone-100 mb-3 flex items-center justify-between">
                    <span className={isTopTier ? 'gold-gradient-text' : isBreakthroughTier ? 'text-amber-200' : 'text-stone-200'}>
                      {tier.name}
                    </span>
                    {isTopTier && (
                      <span className="text-[10px] font-sans uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        초월신역
                      </span>
                    )}
                  </h3>

                  {/* Sub-Badges Highlight: Western Swordsmanship & Magic Circle */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center gap-2 text-xs font-serif">
                      <span className="text-stone-400 shrink-0">검술 위계:</span>
                      <span className="text-stone-200 font-semibold tracking-wide">
                        {tier.westernSwordsmanship}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-serif">
                      <span className="text-stone-400 shrink-0">마법 체계:</span>
                      <span className="text-sky-300 font-semibold tracking-wide">
                        {tier.magicCircle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body: Distinct Combat Ability and Status */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Combat Ability */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-amber-300 uppercase tracking-wider">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>전투 능력 (Combat Ability)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                      {tier.combatAbility}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-900">
                    <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-stone-300 uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                      <span>전장 위상 (Battlefield Status)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                      {tier.status}
                    </p>
                  </div>

                  {/* Breakthrough Condition (Specially highlighted for 절정 & 초절정) */}
                  {tier.breakthrough && (
                    <div className="mt-3 p-3.5 rounded bg-amber-950/30 border border-amber-500/50 shadow-inner">
                      <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-amber-300 mb-1">
                        <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
                        <span>돌파의 벽(壁) ｜ 다음 경지로의 각성 조건</span>
                      </div>
                      <p className="text-xs text-amber-100/90 font-serif leading-relaxed font-medium">
                        {tier.breakthrough}
                      </p>
                    </div>
                  )}

                  {/* Expandable Section */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-stone-800/80 space-y-3.5 text-xs font-serif">
                      {/* Deep Description */}
                      <div>
                        <span className="text-amber-400/90 font-semibold block mb-1">비전 실록 주해 (註解):</span>
                        <p className="text-stone-300 leading-relaxed bg-stone-900/60 p-3 rounded border border-stone-800">
                          {tier.description}
                        </p>
                      </div>

                      {/* Relative Combat Power */}
                      {tier.combatPowerRatio && (
                        <div className="p-2.5 rounded bg-stone-900/80 border border-stone-700/60">
                          <span className="text-amber-400 font-semibold block mb-0.5">상대적 살상 무력 환산:</span>
                          <span className="text-stone-200">{tier.combatPowerRatio}</span>
                        </div>
                      )}

                      {/* Aging and Lifespan (화경) */}
                      {tier.agingAndLifespan && (
                        <div className="p-2.5 rounded bg-amber-950/40 border border-amber-600/40">
                          <span className="text-yellow-300 font-semibold block mb-0.5">초월자의 환골탈태 및 수명:</span>
                          <span className="text-stone-200 leading-relaxed block">{tier.agingAndLifespan}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom Toggle Bar */}
                  <button
                    onClick={() => toggleExpand(tier.id)}
                    className="w-full pt-2 flex items-center justify-center gap-1 text-[11px] font-serif text-stone-400 hover:text-amber-300 transition-colors"
                  >
                    <span>{isExpanded ? '비전 주해 닫기' : '비전 주해 및 무력 환산 열람'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
