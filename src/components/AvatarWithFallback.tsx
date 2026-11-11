/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface AvatarWithFallbackProps {
  code: string;
  stateCode?: number; // 1=평소, 2=놀람, 3=분노, 4=슬픔, 5=전투
  name: string;
  title?: string;
  factionSide: 'moorim' | 'otherworld';
  className?: string;
}

export const AvatarWithFallback: React.FC<AvatarWithFallbackProps> = ({
  code,
  stateCode = 1,
  name,
  title,
  factionSide,
  className = "w-full h-full object-cover",
}) => {
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // External CDN URL format as specified in instructions
  const imageUrl = `https://cdn.jsdelivr.net/gh/whitedog915/vs@main/${code}${stateCode}.png`;

  // First character of name for seal fallback
  const firstLetter = name.slice(0, 1);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-3 text-center select-none ${
          factionSide === 'moorim'
            ? 'bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/40 text-amber-200 border border-amber-900/30'
            : 'bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 text-sky-200 border border-sky-900/30'
        } ${className}`}
      >
        <div className="w-12 h-12 rounded-full border border-amber-500/40 flex items-center justify-center mb-1 bg-black/40 shadow-inner">
          <span className="font-serif text-xl font-bold tracking-widest text-amber-300">
            {firstLetter}
          </span>
        </div>
        <span className="text-xs font-serif font-medium text-stone-300 truncate max-w-full">
          {name}
        </span>
        {title && (
          <span className="text-[10px] text-amber-400/80 truncate max-w-full font-serif">
            {title}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-stone-950 ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-900/80 animate-pulse text-stone-500 text-xs">
          불러오는 중...
        </div>
      )}
      <img
        src={imageUrl}
        alt={`${name} - ${title || ''}`}
        referrerPolicy="no-referrer"
        onLoad={() => setImageLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
