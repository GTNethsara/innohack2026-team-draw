import React from 'react';

interface InnoHackLogoProps {
  compact?: boolean;
  showUniBadge?: boolean;
}

export const InnoHackLogo: React.FC<InnoHackLogoProps> = ({
  compact = false,
  showUniBadge = true,
}) => {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      {/* Custom INNOHACK Logo ('A' icon eka wenuwata) */}
      <img
        src="/innohack-logo.png"
        alt="INNOHACK Logo"
        className={
          compact
            ? 'h-8 w-auto shrink-0 object-contain'
            : 'h-9 w-auto shrink-0 object-contain'
        }
      />
      
      {/* Wordmark */}
      <div
            aria-hidden="true"
            className="hidden sm:block h-9 w-[1.5px] bg-[#284B73] mx-1 shrink-0"
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-[0.12em] text-white ${
            compact ? 'text-sm' : 'text-base sm:text-lg'
          }`}
        >
          INNOHACK
        </span>
        <span className="font-display text-[9px] sm:text-[10px] tracking-[0.26em] text-[#7D97B4] mt-1">
          SEASON 2026
        </span>
      </div>

      {/* Custom SLIIT Kandy Uni Logo */}
      {showUniBadge && (
        <>
          <div
            aria-hidden="true"
            className="hidden sm:block h-9 w-[1.5px] bg-[#284B73] mx-1 shrink-0"
          />
          <div className="hidden sm:flex items-center">
            <img
              src="/kandy-uni-logo.png"
              alt="SLIIT Kandy Uni Logo"
              className="h-11 w-auto object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
};