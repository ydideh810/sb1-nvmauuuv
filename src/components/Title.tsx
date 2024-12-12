import React from 'react';

const Title = () => {
  return (
    <h1 className="text-center mb-8">
      {'ASCENT'.split('').map((letter, index) => (
        <span
          key={index}
          className="text-6xl font-zendots text-red-500 inline-block animate-crt-glow"
          style={{
            marginRight: '2px',
            textShadow: '0 0 10px rgba(239, 68, 68, 0.7)',
            animationDelay: `${index * 0.1}s`
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Title;