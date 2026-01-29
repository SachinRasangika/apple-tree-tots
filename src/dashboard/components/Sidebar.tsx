import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Image, Settings, LogOut } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#2d5555] border-r border-white/10 p-6 h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-white">Admin</h2>
        <p className="text-xs text-white/50 mt-1">Apple Tree Tots</p>
      </div>

      <nav className="space-y-2 flex-grow">
        <NavLink to="/admin/dashboard" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}>
          <LayoutDashboard size={18} />
          <span className="text-sm">Dashboard</span>
        </NavLink>
        
        <NavLink to="/admin/applications" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}>
          <FileText size={18} />
          <span className="text-sm">Applications</span>
        </NavLink>

        <NavLink to="/admin/gallery" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}>
          <Image size={18} />
          <span className="text-sm">Gallery</span>
        </NavLink>

        <NavLink to="/admin/settings" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}>
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </NavLink>
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/10 transition text-white/70 hover:text-white w-full text-left">
        <LogOut size={18} />
        <span className="text-sm">Logout</span>
      </button>
    </aside>
  );
}
