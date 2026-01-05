import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
export function AccordionItem({
  title,
  children,
  defaultOpen = false
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return <div className="border-b border-white/10">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between hover:bg-white/5 transition-colors px-4 text-left">
        <span className="text-sm font-medium tracking-wide pr-4">{title}</span>
        <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center shrink-0">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      {isOpen && <div className="px-4 pb-6 animate-[fadeIn_0.3s_ease-out]">
          <div className="text-sm text-gray-400 leading-relaxed">
            {children}
          </div>
        </div>}
    </div>;
}
interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}
export function Accordion({
  children,
  className
}: AccordionProps) {
  return <div className={clsx('bg-[#2d5555]/5 border border-white/10', className)}>
      {children}
    </div>;
}