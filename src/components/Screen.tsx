import React from 'react';

interface ScreenProps {
  children: React.ReactNode;
}

const Screen = ({ children }: ScreenProps) => {
  return (
    <div className="bg-navy-900 border-2 border-red-900/50 rounded-lg p-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Screen;