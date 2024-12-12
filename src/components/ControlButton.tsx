import React from 'react';

interface ControlButtonProps {
  label: string;
  onClick?: () => void;
}

const ControlButton = ({ label, onClick }: ControlButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative group w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-red-900/20 rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="absolute inset-0 border border-red-900/50 rounded" />
      <div className="absolute -top-px left-1 right-1 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="absolute -bottom-px left-1 right-1 h-[1px] bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
      <div className="px-2 py-1.5 relative">
        <div className="text-[9px] leading-none text-center font-medium tracking-wider text-red-400 uppercase">
          {label}
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-red-500/30 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </button>
  );
};

export default ControlButton;