import React from 'react';

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#1a3a3a] text-white p-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-serif mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Applications', value: '24' },
            { title: 'Active Students', value: '48' },
            { title: 'This Month Revenue', value: 'Rs 144,000' },
            { title: 'Pending Tasks', value: '5' },
          ].map((card) => (
            <div key={card.title} className="bg-[#2d5555]/20 border border-white/10 p-6 rounded">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-2">{card.title}</p>
              <p className="text-2xl font-semibold">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#2d5555]/10 border border-white/10 p-6 rounded">
            <h2 className="text-lg font-serif mb-4">Recent Applications</h2>
            <p className="text-xs text-white/50">Dashboard coming soon...</p>
          </div>

          <div className="bg-[#2d5555]/10 border border-white/10 p-6 rounded">
            <h2 className="text-lg font-serif mb-4">Quick Actions</h2>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-[#2d5555] hover:text-white transition">View Applications</a></li>
              <li><a href="#" className="text-[#2d5555] hover:text-white transition">Manage Students</a></li>
              <li><a href="#" className="text-[#2d5555] hover:text-white transition">View Gallery</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
