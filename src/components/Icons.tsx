import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const ArrowUpRightIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M8 3.5V12.5M8 12.5L4 8.5M8 12.5L12 8.5" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" />
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M8 12.5V3.5M8 3.5L4 7.5M8 3.5L12 7.5" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M12 9V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V4.5C3 4.22386 3.22386 4 3.5 4H7" />
    <path d="M9.5 3H13V6.5" />
    <path d="M6.5 9.5L13 3" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M4 4L12 12M12 4L4 12" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M2.5 4.5H13.5M2.5 8H13.5M2.5 11.5H13.5" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M8 3.5V12.5M3.5 8H12.5" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M3.5 8H12.5" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M10 3.5L5.5 8L10 12.5" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M6 3.5L10.5 8L6 12.5" />
  </svg>
);

export const CopyIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <rect x="5.5" y="5.5" width="7.5" height="7.5" rx="1.5" />
    <path d="M3 10.5V3.5C3 3.22386 3.22386 3 3.5 3H10.5" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <path d="M8 3V10.5M8 10.5L5 7.5M8 10.5L11 7.5" />
    <path d="M3 13H13" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
    {...props}
  >
    <rect x="2.5" y="3.5" width="11" height="9" rx="1.5" />
    <path d="M2.5 5.5L8 9L13.5 5.5" />
  </svg>
);
