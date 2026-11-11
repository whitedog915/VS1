/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Character } from '../data/loreData';
import { AvatarWithFallback } from './AvatarWithFallback';
import { X, Shield, Swords, Sparkles, User, Tag, BookOpen, Target, MessageSquare } from 'lucide-react';

interface CharacterDetailModalProps {
  character: Character | null;
  onClose: () => void;
}

export const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({
  character,
  onClose,
}) => {
  const [selectedEmotion, setSelectedEmotion] = useState<number>(1);

  if (!character) return null;

  const emotionLabels: { code: number; label: string }[] = [
    { code: 1, label: '평소 (기본)' },
    { code: 2, label: '놀람' },
    { code: 3, label: '분노' },
    { code: 4, label: '슬픔' },
    { code: 5, label: '전투' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded bg-[#0d111a] border border-amber-600/40 shadow-2xl shadow-black text-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 bg-[#0d111a]/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-0.5 rounded font-serif ${
                character.factionSide === 'moorim'
                  ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                  : 'bg-indigo-950/60 text-sky-300 border border-sky-800/40'
              }`}
            >
              {character.factionSide === 'moorim' ? '무림 진영' : '이계 진영'}
            </span>
            <span className="text-xs text-stone-400 font-serif">· {character.factionGroup}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Top Section: Portrait & Main Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            {/* Portrait & Emotion Switcher */}
            <div className="sm:col-span-5 flex flex-col items-center">
              <div className="w-48 h-56 sm:w-full sm:h-64 rounded border border-amber-700/50 overflow-hidden shadow-lg bg-stone-950 relative">
                <AvatarWithFallback
                  code={character.code}
                  stateCode={selectedEmotion}
                  name={character.name}
                  title={character.title}
                  factionSide={character.factionSide}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Emotion State Switcher */}
              <div className="w-full mt-3">
                <span className="text-[11px] font-serif text-amber-400/90 block mb-1.5 text-center font-medium">
                  전투 태세 및 심상(心象) 전이
                </span>
                <div className="grid grid-cols-5 gap-1">
                  {emotionLabels.map((emo) => (
                    <button
                      key={emo.code}
                      onClick={() => setSelectedEmotion(emo.code)}
                      className={`py-1 text-[10px] font-serif rounded transition-all text-center ${
                        selectedEmotion === emo.code
                          ? 'bg-amber-500 text-stone-950 font-bold shadow'
                          : 'bg-stone-900 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                      }`}
                    >
                      {emo.label.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Specs */}
            <div className="sm:col-span-7 space-y-3 font-serif">
              <div>
                <span className="text-xs text-amber-400/90 font-medium block">
                  {character.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight">
                  {character.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-stone-400">
                  <span>{character.role}</span>
                  {character.subDivision && <span>· {character.subDivision}</span>}
                  <span>· {character.age}</span>
                  <span>· {character.gender}</span>
                  {character.mbti && (
                    <span className="px-1.5 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-300 font-mono text-[10px]">
                      {character.mbti}
                    </span>
                  )}
                </div>
              </div>

              {/* Realm & Main Skill */}
              <div className="p-3.5 rounded bg-stone-950/90 border border-stone-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">무학 및 마도의 경지:</span>
                  <span className="text-amber-300 font-bold">{character.realm}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">주력 비전 무공 / 마법:</span>
                  <span className="text-stone-100 font-medium">{character.mainSkill}</span>
                </div>
              </div>

              {/* Mission / Duty */}
              <div className="p-3 rounded bg-amber-950/20 border border-amber-900/40 text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                  <Target className="w-3.5 h-3.5" />
                  <span>부여된 사명과 혈전의 숙명</span>
                </div>
                <p className="text-stone-200 leading-relaxed">{character.mission}</p>
              </div>
            </div>
          </div>

          {/* Detailed Dossier Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-800/80 font-serif text-xs">
            {/* Appearance */}
            <div className="p-3.5 rounded bg-stone-950/60 border border-stone-800">
              <span className="text-amber-400/90 font-semibold block mb-1">외모 및 풍모 (風貌):</span>
              <p className="text-stone-200 leading-relaxed">{character.appearance}</p>
            </div>

            {/* Temperament */}
            <div className="p-3.5 rounded bg-stone-950/60 border border-stone-800">
              <span className="text-amber-400/90 font-semibold block mb-1">기질 및 심성 (心性):</span>
              <p className="text-stone-200 leading-relaxed">{character.temperament}</p>
            </div>

            {/* Speech Style (대사 어투) */}
            <div className="p-3.5 rounded bg-stone-950/60 border border-stone-800 sm:col-span-2">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>교전 전 선언 및 고유 어투 (대사록):</span>
              </div>
              <p className="text-stone-200 leading-relaxed">
                {character.speechStyle}
                <span className="block mt-1 text-stone-400 text-[11px]">
                  {character.factionSide === 'moorim'
                    ? '※ 무림 수칙: 칼을 맞대기 전 자신의 사문(師門)과 본명을 당당히 밝힙니다.'
                    : '※ 제국 수칙: 검을 뽑기 전 출신 지역/소속 부대와 성명을 준엄히 고합니다.'}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-serif text-stone-300 hover:text-white bg-stone-800 rounded hover:bg-stone-700 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
