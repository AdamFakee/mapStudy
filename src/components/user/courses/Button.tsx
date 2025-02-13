import React from 'react';

interface ButtonProps {
  title: string;
  fn?: () => void; 
  isActive: boolean;
}

export function Button({ title, fn, isActive = false }: ButtonProps) {
  return (
    <button
      className="px-8 py-2.5 text-md whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2" style={{ backgroundColor: isActive ? '#236fa9' : '#e5e5e5', color: isActive ? '#fff' : '#A4A4A4'}}
      onClick={() => {
        if (fn) fn();
      }}
    >
      {title}
    </button>
  );
}

export function ButtonLight({ title, fn, isActive = false }: ButtonProps) {
  return (
    <button
      className="px-8 py-2.5 text-md whitespace-nowrap inline-flex items-center justify-center rounded-xl shadow-sm border-2" style={{ backgroundColor: isActive ? '#f8f8f8' : '#e5e5e5', color: isActive ? '#222' : '#A4A4A4'}}
      onClick={() => {
        if (fn) fn();
      }}
    >
      {title}
    </button>
  );
}

