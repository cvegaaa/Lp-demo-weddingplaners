import { type ElementType, type ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
};

/**
 * Wraps children in a scroll-reveal animation. Use around section blocks.
 */
export default function Reveal({
  as: Tag = 'div',
  children,
  delay,
  className = '',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? ` reveal-delay-${delay}` : '';
  return (
    <Tag
      ref={ref as never}
      className={`reveal${visible ? ' is-visible' : ''}${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
