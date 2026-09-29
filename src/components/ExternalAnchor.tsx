import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExternalAnchorProps {
  href: string;
  children: React.ReactNode;
  gap?: string;
  className?: string;
  iconClassName?: string;
}

// A link that opens in a new tab, with an external-link icon that brightens when the link itself is hovered.
export const ExternalAnchor: React.FC<ExternalAnchorProps> = ({
  href,
  children,
  gap = 'gap-1.5',
  className = '',
  iconClassName = 'w-3 h-3',
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`group inline-flex items-center hover:text-alpine-moss transition-colors ${gap} ${className}`}
  >
    {children}
    <ExternalLink
      className={`${iconClassName} opacity-50 group-hover:opacity-100 transition-opacity print:hidden`}
      aria-hidden="true"
    />
  </a>
);
