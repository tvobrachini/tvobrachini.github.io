import React from 'react';

export const Divider: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-44 md:h-56 w-full print:hidden">
      <img
        src="/alpine_divider.webp"
        alt="Alpine terrain"
        width={1920}
        height={224}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-[center_55%] opacity-75"
      />
      {/* Very light top fade only */}
      <div className="absolute inset-0 bg-gradient-to-b from-alpine-obsidian/80 via-transparent to-transparent pointer-events-none" />
      {/* Very light bottom fade only */}
      <div className="absolute inset-0 bg-gradient-to-t from-alpine-obsidian/60 via-transparent to-transparent pointer-events-none" />
      {/* Minimal side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-alpine-obsidian/30 via-transparent to-alpine-obsidian/30 pointer-events-none" />
      <div className="absolute bottom-4 right-8 font-mono text-[9px] uppercase tracking-[0.3em] text-alpine-cloud/30 select-none">
        Navigating Complex Terrain
      </div>
    </div>
  );
};
