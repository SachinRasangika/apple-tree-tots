import React from 'react';
import { clsx } from 'clsx';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options?: {
    value: string;
    label: string;
  }[];
}
export function Input({
  label,
  error,
  helperText,
  className,
  required,
  ...props
}: InputProps) {
  return <div className="w-full">
      {label && <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
          {label} {required && '*'}
        </label>}
      <input className={clsx('w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors', error && 'border-red-400 focus:border-red-400', className)} {...props} />
      {error && <p className="text-xs text-red-400 mt-2 tracking-wide">{error}</p>}
      {helperText && !error && <p className="text-xs text-gray-500 mt-2 tracking-wide">{helperText}</p>}
    </div>;
}
export function TextArea({
  label,
  error,
  helperText,
  className,
  required,
  ...props
}: TextAreaProps) {
  return <div className="w-full">
      {label && <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
          {label} {required && '*'}
        </label>}
      <textarea className={clsx('w-full bg-transparent border border-white/30 p-3 text-sm focus:outline-none focus:border-white transition-colors resize-none', error && 'border-red-400 focus:border-red-400', className)} {...props} />
      {error && <p className="text-xs text-red-400 mt-2 tracking-wide">{error}</p>}
      {helperText && !error && <p className="text-xs text-gray-500 mt-2 tracking-wide">{helperText}</p>}
    </div>;
}
export function Select({
  label,
  error,
  helperText,
  className,
  required,
  options,
  children,
  ...props
}: SelectProps) {
  return <div className="w-full">
      {label && <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
          {label} {required && '*'}
        </label>}
      <select className={clsx('w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors', error && 'border-red-400 focus:border-red-400', className)} {...props}>
        {options ? options.map(option => <option key={option.value} value={option.value} className="bg-[#1a3a3a]">
                {option.label}
              </option>) : children}
      </select>
      {error && <p className="text-xs text-red-400 mt-2 tracking-wide">{error}</p>}
      {helperText && !error && <p className="text-xs text-gray-500 mt-2 tracking-wide">{helperText}</p>}
    </div>;
}