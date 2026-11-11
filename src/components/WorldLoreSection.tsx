/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WORLD_LORE } from '../data/loreData';
import { Sparkles, Shield, Flame, AlertCircle, Compass, Zap } from 'lucide-react';

export const WorldLoreSection: React.FC = () => {
  return (
    <section id="lore" className="py-16 lg:py-24 border-b border-amber-950/60 bg-[#0a0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-serif tracking-widest text-amber-400 uppercase mb-2">
            <span>The Collision of Inner Force & Primordial Mana</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight mb-4">
            【 卷之貳 · 기운전기 (氣運戰記) 】
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-serif leading-relaxed">
            단전의 내공과 대지의 마나가 맞부딪친 순간, 전장의 법칙은 완전히 뒤바뀌었다.
            기운의 포식과 침식, 그리고 무작위로 열리는 차원 균열의 재앙을 기록한다.
          </p>
        </div>

        {/* 1. Dimensional Rift & War Background */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded bg-stone-950/80 border border-amber-900/40">
            <div className="flex items-center gap-2 text-xs font-serif text-amber-400 font-bold mb-3 uppercase tracking-wider">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>차원 균열의 발발 ｜ 천문(天門)과 게이트</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-100 mb-3">
              두 세계의 연결과 회담의 파탄
            </h3>
            <p className="text-stone-300 text-sm font-serif leading-relaxed mb-4">
              {WORLD_LORE.background.event} {WORLD_LORE.background.nature}
            </p>
            <div className="p-3.5 rounded bg-stone-900/90 border border-stone-800 text-xs font-serif text-amber-200/90 leading-relaxed">
              <strong className="text-amber-400 block mb-1">총력 전면전 선포:</strong>
              {WORLD_LORE.background.conflict}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded bg-stone-950/80 border border-indigo-950/60">
            <div className="flex items-center gap-2 text-xs font-serif text-sky-400 font-bold mb-3 uppercase tracking-wider">
              <Flame className="w-4 h-4 text-sky-400" />
              <span>기운의 상호 침식 법칙 ｜ 포식과 피식의 생태계</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-100 mb-3">
              강도와 밀도에 의한 영역 흡수
            </h3>
            <p className="text-stone-300 text-sm font-serif leading-relaxed mb-4">
              {WORLD_LORE.background.erosionRule}
            </p>
            <div className="p-3.5 rounded bg-indigo-950/30 border border-indigo-900/40 text-xs font-serif text-stone-300 leading-relaxed">
              <strong className="text-sky-300 block mb-1">원정 시 지속적인 기운 침식:</strong>
              무림인이 이계 영역에 진입하면 마나의 환경 압력에 내공이 지속 손실되며,
              마법사가 무림에 진입하면 고밀도 내공에 의해 마나가 희석 침식당합니다.
            </div>
          </div>
        </div>

        {/* 2. Naegong vs Mana Comparative Table */}
        <div id="clash" className="mb-14 bg-stone-950/90 border border-amber-900/40 rounded overflow-hidden shadow-xl shadow-black/60">
          <div className="p-5 sm:p-6 border-b border-amber-900/30 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>단전의 내공(內功) vs 천지의 마나(Mana) 상성 비록(相性秘錄)</span>
            </h3>
            <p className="text-xs text-stone-400 font-serif mt-1">
              무림의 응축된 생체 기운과 판타지 자연 마나의 본질적 충돌과 전술적 상성
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-serif border-collapse">
              <thead>
                <tr className="border-b border-stone-800 bg-stone-900/50 text-stone-400 font-semibold">
                  <th className="py-3.5 px-4 sm:px-6 w-1/4">구분 기준</th>
                  <th className="py-3.5 px-4 sm:px-6 w-3/8 text-amber-300">
                    무림의 내공 (Naegong)
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 w-3/8 text-sky-300">
                    이계의 마나 (Mana)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-900 text-stone-300">
                {WORLD_LORE.energyComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-900/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-stone-200 bg-stone-950/40">
                      {row.category}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-stone-200">
                      {row.naegong}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-stone-200">
                      {row.mana}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Dimensional Rift Traits & Lifespan Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dimensional Rift Characteristics */}
          <div className="p-6 rounded bg-stone-950/80 border border-stone-800">
            <div className="flex items-center gap-2 text-xs font-serif text-amber-400 font-bold mb-3 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>균열(천문/게이트)의 무작위 특성</span>
            </div>
            <div className="space-y-3 font-serif text-xs sm:text-sm">
              {WORLD_LORE.dimensionalRiftRules.map((rule, idx) => (
                <div key={idx} className="p-3 rounded bg-stone-900/60 border border-stone-800/80">
                  <strong className="text-amber-200 block mb-1 font-semibold">
                    {idx + 1}. {rule.name}
                  </strong>
                  <p className="text-stone-300 leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lifespan & Transcendence */}
          <div className="p-6 rounded bg-stone-950/80 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-serif text-yellow-400 font-bold mb-3 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>노화 및 수명 — 초월자의 법칙</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed mb-4">
                양대 세계의 정점에 선 초월자들은 시간의 흐름을 초월하는 독자적인 신체 변혁을 겪습니다.
              </p>

              <div className="space-y-4 font-serif text-xs sm:text-sm">
                <div className="p-4 rounded bg-stone-900/80 border border-amber-900/40">
                  <span className="text-amber-400 font-bold block mb-1">
                    무림: 화경(化境)과 환골탈태
                  </span>
                  <p className="text-stone-200 leading-relaxed">
                    {WORLD_LORE.lifespanRules.moorim}
                  </p>
                </div>

                <div className="p-4 rounded bg-stone-900/80 border border-sky-950">
                  <span className="text-sky-300 font-bold block mb-1">
                    이계: 그랜드 소드 마스터 & 8서클
                  </span>
                  <p className="text-stone-200 leading-relaxed">
                    {WORLD_LORE.lifespanRules.otherworld}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded bg-amber-950/30 border border-amber-800/40 text-xs font-serif text-amber-200">
              *주의: 양 세계 모두 완전한 사지 재생이나 부활은 불가능하며, 타 세계 기운 침식으로 인한 손상은 각자 고유의 심법 및 마나 연공법으로 치유해야 합니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
