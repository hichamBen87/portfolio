import React from 'react';

interface SkillBarProps {
  nom: string;
  niveau: number;
}

export const SkillBar = ({ nom, niveau }: SkillBarProps) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{nom}</span>
      <span className="text-gray-600">{niveau}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${niveau}%` }}
      />
    </div>
  </div>
);