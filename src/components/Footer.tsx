/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronUp, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090e] border-t border-amber-950/40 text-stone-400 py-12 font-serif text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-900">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded border border-amber-600/40 flex items-center justify-center bg-stone-900">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div>
              <span className="font-bold text-stone-200 block text-sm">
                격돌! 이계 vs 무협 ｜ 전란의 공식 실록
              </span>
              <span className="text-[11px] text-stone-400">
                천문과 게이트가 뚫린 홍무 15년 · 아리아력 687년의 영구 사초(史草)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-stone-300">
            <a href="#hero" className="hover:text-amber-300 transition-colors">
              전란 총람
            </a>
            <a href="#realms" className="hover:text-amber-300 transition-colors">
              6대 경지록
            </a>
            <a href="#lore" className="hover:text-amber-300 transition-colors">
              기운전기
            </a>
            <a href="#characters" className="hover:text-amber-300 transition-colors">
              영걸열전
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-stone-800 hover:border-amber-600/60 text-stone-300 hover:text-amber-300 transition-colors"
            >
              <span>상단 복귀</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <p>
            본 비록은 중원무림맹·하오문·천마신교와 쿤드리아 신성제국·바그너 용병단·검은별 교단의 공인 사초에 의거하여 삼류부터 화경에 이르는 무력과 영걸들의 행적을 누락 없이 기록하였습니다.
          </p>
          <p className="whitespace-nowrap">
            홍무 15년 / 아리아력 687년 ｜ 전란실록 편찬원
          </p>
        </div>
      </div>
    </footer>
  );
};
