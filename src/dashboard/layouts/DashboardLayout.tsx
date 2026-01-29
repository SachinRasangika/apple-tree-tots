import React, { ReactNode } from 'react';
import { Sidebar } from '../components/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#1a3a3a]">
      <Sidebar />
      <div className="flex-grow overflow-auto">
        {children}
      </div>
    </div>
  );
}
