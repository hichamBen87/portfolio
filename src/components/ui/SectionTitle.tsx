import React from 'react';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
);