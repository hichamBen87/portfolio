import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  href: string;
  Icon: LucideIcon;
  label: string;
}

export const ContactButton = ({ href, Icon, label }: ContactButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);