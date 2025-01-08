import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  Icon: LucideIcon;
  className?: string;
}

export const IconWrapper = ({ Icon, className = "w-6 h-6" }: IconWrapperProps) => (
  <div className="p-3 bg-indigo-100 rounded-full mr-4">
    <Icon className={`text-indigo-600 ${className}`} />
  </div>
);