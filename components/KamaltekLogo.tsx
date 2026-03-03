import React from 'react';
import clsx from 'clsx';

interface KamaltekLogoProps {
  className?: string;
  classNameIcon?: string;
  classNameText?: string;
}

const KamaltekLogo: React.FC<KamaltekLogoProps> = ({
  className,
  classNameIcon = "text-white group-hover:text-taupe-500",
  classNameText = "text-white"
}) => {
  return (
    <div className={clsx("flex flex-row items-center gap-2", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 6 20 12"
        fill="none"
        stroke="#56DA74"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx("w-7 h-auto transition-colors duration-300", classNameIcon)}
      >
        <path d="M14 19l-7-7 7-7" />
        <path d="M8.5 17l-5-5 5-5" />
      </svg>
      <span className={clsx("text-2xl font-sans font-bold tracking-tight leading-none transition-colors duration-300", classNameText)}>
        KamalTek
      </span>
    </div>
  );
};

export default KamaltekLogo;