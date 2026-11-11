/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CHARACTERS, FACTIONS, Character } from '../data/loreData';
import { AvatarWithFallback } from './AvatarWithFallback';
import { CharacterDetailModal } from './CharacterDetailModal';
import { Search, Shield, Filter, Users, Sparkles, ChevronRight } from 'lucide-react';

export const CharactersSection: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'moorim' | 'otherworld'>('moorim');
  const [selectedSubGroup, setSelectedSubGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  // Sub-faction groups based on active side
  const subFactionGroups = useMemo(() => {
    const list = FACTIONS.filter((f) => f.factionSide === activeSide);
    return [{ id: 'all', name: '전체 소속' }, ...list.map((f) => ({ id: f.name, name: f.name }))];
  }, [activeSide]);

  // Filtered characters
  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter((char) => {
      if (char.factionSide !== activeSide) return false;
      if (selectedSubGroup !== 'all' && char.factionGroup !== selectedSubGroup) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = char.name.toLowerCase().includes(query);
        const matchesTitle = char.title.toLowerCase().includes(query);
        const matchesSkill = char.mainSkill.toLowerCase().includes(query);
        const matchesRealm = char.realm.toLowerCase().includes(query);
        const matchesSub = char.subDivision?.toLowerCase().includes(query);
        return matchesName || matchesTitle || matchesSkill || matchesRealm || matchesSub;
      }
      return true;
    });
  }, [activeSide, selectedSubGroup, searchQuery]);

  return (
    <section id="characters" className="py-16 lg:py-24 border-b border-amber-950/60 bg-[#080b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-serif tracking-widest text-amber-400 uppercase mb-2">
            <span>Chronicles of the Champions & Sovereign Rulers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight mb-4">
            【 卷之參 · 영걸열전 (英傑列傳) 】
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-serif leading-relaxed">
            전쟁의 향방을 뒤흔드는 양대 세계 35인의 군주와 사도, 대주와 기사단장들.
            피와 쇠의 전선에서 마주한 이들의 사문과 맹세, 그리고 심상(心象)의 기록이다.
          </p>
        </div>

        {/* Faction Side Switcher Tabs (무림 vs 이계 양대 세력 탭) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded bg-stone-950 border border-amber-900/40 shadow-inner">
            <button
              onClick={() => {
                setActiveSide('moorim');
                setSelectedSubGroup('all');
              }}
              className={`px-6 py-2.5 rounded font-serif text-sm font-bold transition-all flex items-center gap-2 ${
                activeSide === 'moorim'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 shadow-md shadow-amber-950'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <span>중원 무림의 영걸 (武林)</span>
              <span className="text-xs px-1.5 py-0.2 rounded bg-black/30 text-amber-200">15인</span>
            </button>
            <button
              onClick={() => {
                setActiveSide('otherworld');
                setSelectedSubGroup('all');
              }}
              className={`px-6 py-2.5 rounded font-serif text-sm font-bold transition-all flex items-center gap-2 ${
                activeSide === 'otherworld'
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md shadow-indigo-950'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <span>크로아 제국의 맹장 (異界)</span>
              <span className="text-xs px-1.5 py-0.2 rounded bg-black/30 text-sky-200">20인</span>
            </button>
          </div>
        </div>

        {/* Active Side Faction Dossier Banners */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {FACTIONS.filter((f) => f.factionSide === activeSide).map((faction) => (
            <div
              key={faction.id}
              className={`p-4 rounded border font-serif text-xs transition-all ${
                selectedSubGroup === faction.name
                  ? 'bg-stone-900 border-amber-500/80 shadow-md ring-1 ring-amber-500/30'
                  : 'bg-stone-950/70 border-stone-800/80 hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="font-bold text-sm text-stone-100">{faction.name}</h4>
                <span className="text-[10px] text-amber-400">{faction.baseLocation}</span>
              </div>
              <p className="text-stone-400 leading-relaxed line-clamp-2 mb-2">{faction.summary}</p>
              <button
                onClick={() => setSelectedSubGroup(selectedSubGroup === faction.name ? 'all' : faction.name)}
                className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
              >
                <span>{selectedSubGroup === faction.name ? '전체 보기로 복귀' : '이 세력 인물만 필터'}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Search & Sub-Faction Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-stone-950/90 border border-stone-800 p-4 rounded">
          {/* Sub-faction filter buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-serif">
            <span className="text-stone-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-stone-500" />
              세력 필터:
            </span>
            {subFactionGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedSubGroup(group.id)}
                className={`px-3 py-1.5 rounded transition-all ${
                  selectedSubGroup === group.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-semibold'
                    : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                }`}
              >
                {group.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="영걸명, 별호, 비전 무공, 도달 경지 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-serif bg-stone-900 border border-stone-800 rounded text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500/80 transition-colors"
            />
          </div>
        </div>

        {/* Character Card Grid */}
        {filteredCharacters.length === 0 ? (
          <div className="text-center py-16 bg-stone-950/50 rounded border border-stone-800 font-serif">
            <p className="text-stone-400 text-sm mb-2">기록된 비록에서 일치하는 영걸을 찾을 수 없습니다.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubGroup('all');
              }}
              className="text-xs text-amber-400 underline hover:text-amber-300"
            >
              전체 영걸록으로 복귀
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredCharacters.map((char) => {
              const isMoorim = char.factionSide === 'moorim';

              return (
                <div
                  key={char.id}
                  onClick={() => setSelectedCharacter(char)}
                  className="group flex flex-col rounded bg-stone-950/90 border border-stone-800/90 hover:border-amber-500/60 transition-all duration-200 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg hover:shadow-black/60 relative"
                >
                  {/* Portrait Container */}
                  <div className="relative w-full h-56 bg-stone-950 overflow-hidden border-b border-stone-800">
                    <AvatarWithFallback
                      code={char.code}
                      stateCode={1} // Default state
                      name={char.name}
                      title={char.title}
                      factionSide={char.factionSide}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30 pointer-events-none" />

                    {/* Realm Tag Overlay */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-[10px] font-serif font-bold px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-amber-300 border border-amber-500/40 shadow">
                        {char.realm.split(' ')[0]}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-2.5 left-3 right-3 z-10 font-serif">
                      <span className="text-[11px] text-amber-400/90 block font-medium">
                        {char.title}
                      </span>
                      <h4 className="text-lg font-bold text-stone-100 tracking-wide drop-shadow">
                        {char.name}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3 font-serif text-xs">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-stone-400 text-[11px]">
                        <span>{char.role}</span>
                        {char.subDivision && <span className="truncate max-w-[120px]">· {char.subDivision}</span>}
                      </div>

                      <div className="pt-1 text-stone-300">
                        <span className="text-stone-400 text-[11px] block">주력 무예 / 마법:</span>
                        <span className="font-semibold text-stone-200 truncate block">
                          {char.mainSkill}
                        </span>
                      </div>
                    </div>

                    {/* Mission / Trait Excerpt */}
                    <div className="pt-2 border-t border-stone-900 text-stone-400 text-[11px] line-clamp-2">
                      <span className="text-amber-500/80 mr-1 font-semibold">숙명:</span>
                      {char.mission}
                    </div>

                    {/* Click prompt */}
                    <div className="pt-1 flex items-center justify-between text-[11px] text-stone-400 group-hover:text-amber-300 transition-colors">
                      <span>영걸 상세 비록 및 심상(心象)</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for Character Details */}
        <CharacterDetailModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      </div>
    </section>
  );
};
