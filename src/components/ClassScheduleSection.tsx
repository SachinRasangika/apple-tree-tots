import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
interface ClassSession {
  name: string;
  teacher: string;
  level: string;
  capacity: string;
}
interface TimeSlot {
  time: string;
  sessions: {
    [key: string]: ClassSession | null;
  };
}
export function ClassScheduleSection() {
  const [currentWeek, setCurrentWeek] = useState('07/11 - 13/11');
  const [selectedFilter, setSelectedFilter] = useState({
    time: 'all',
    activity: 'all',
    teacher: 'all',
    level: 'all'
  });
  const weekDays = [{
    key: 'monday',
    label: 'MONDAY 07/11'
  }, {
    key: 'tuesday',
    label: 'TUESDAY 08/11'
  }, {
    key: 'wednesday',
    label: 'WEDNESDAY 09/11'
  }, {
    key: 'thursday',
    label: 'THURSDAY 10/11'
  }, {
    key: 'friday',
    label: 'FRIDAY 11/11'
  }, {
    key: 'saturday',
    label: 'SATURDAY 12/11'
  }, {
    key: 'sunday',
    label: 'SUNDAY 13/11'
  }];
  const schedule: TimeSlot[] = [{
    time: '7:30-8:30',
    sessions: {
      monday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      tuesday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      wednesday: null,
      thursday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      friday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      saturday: null,
      sunday: null
    }
  }, {
    time: '8:30-9:30',
    sessions: {
      monday: null,
      tuesday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      wednesday: null,
      thursday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      friday: null,
      saturday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      sunday: {
        name: 'PILATES',
        teacher: 'Maxime Menten',
        level: 'All levels',
        capacity: '(20/26)'
      }
    }
  }, {
    time: '18:30-19:30',
    sessions: {
      monday: {
        name: 'PILATES',
        teacher: 'Maxime Menten',
        level: 'All levels',
        capacity: '(20/26)'
      },
      tuesday: null,
      wednesday: null,
      thursday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      friday: {
        name: 'SOUND & YIN YANG',
        teacher: 'Carolina Dorell',
        level: 'All levels',
        capacity: '(19/20)'
      },
      saturday: null,
      sunday: null
    }
  }, {
    time: '19:30-20:30',
    sessions: {
      monday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      tuesday: {
        name: 'SOUND YIN YANG',
        teacher: 'Carolina Dorell',
        level: 'All levels',
        capacity: '(19/20)'
      },
      wednesday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      thursday: null,
      friday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      saturday: {
        name: 'PILATES',
        teacher: 'Maxime Menten',
        level: 'All levels',
        capacity: '(20/26)'
      },
      sunday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      }
    }
  }, {
    time: '20:30-21:30',
    sessions: {
      monday: {
        name: 'DREAMY VINYASA',
        teacher: 'Rose-Meije Smit',
        level: 'All levels',
        capacity: '(17/26)'
      },
      tuesday: null,
      wednesday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      thursday: {
        name: 'PILATES',
        teacher: 'Maxime Menten',
        level: 'All levels',
        capacity: '(20/26)'
      },
      friday: null,
      saturday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      },
      sunday: null
    }
  }, {
    time: '21:30-22:30',
    sessions: {
      monday: null,
      tuesday: {
        name: 'DREAMY VINYASA',
        teacher: 'Rose-Meije Smit',
        level: 'All levels',
        capacity: '(17/26)'
      },
      wednesday: null,
      thursday: {
        name: 'DREAMY VINYASA',
        teacher: 'Rose-Meije Smit',
        level: 'All levels',
        capacity: '(17/26)'
      },
      friday: null,
      saturday: {
        name: 'DREAMY VINYASA',
        teacher: 'Rose-Meije Smit',
        level: 'All levels',
        capacity: '(17/26)'
      },
      sunday: {
        name: 'OMNI VINYASA',
        teacher: 'Yiwen Wang',
        level: 'All levels',
        capacity: '(23/26)'
      }
    }
  }];
  return <section className="py-20 bg-[#152e2e]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-8">
            Class Schedule
          </h2>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Week Navigation */}
            <div className="flex items-center gap-4">
              <button onClick={() => {}} className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-3 bg-[#1a3a3a] border border-white/20 px-6 py-3">
                <Calendar size={16} className="text-[#2d5555]" />
                <span className="text-sm tracking-widest uppercase">
                  {currentWeek}
                </span>
              </div>

              <button onClick={() => {}} className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight size={20} />
              </button>

              <Button variant="outline" size="sm">
                TODAY
              </Button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select value={selectedFilter.time} onChange={e => setSelectedFilter({
              ...selectedFilter,
              time: e.target.value
            })} className="bg-transparent border border-white/30 px-4 py-2 text-xs uppercase tracking-widest focus:outline-none focus:border-white transition-colors">
                <option value="all" className="bg-[#1a3a3a]">
                  TIME
                </option>
                <option value="morning" className="bg-[#1a3a3a]">
                  Morning
                </option>
                <option value="afternoon" className="bg-[#1a3a3a]">
                  Afternoon
                </option>
                <option value="evening" className="bg-[#1a3a3a]">
                  Evening
                </option>
              </select>

              <select value={selectedFilter.activity} onChange={e => setSelectedFilter({
              ...selectedFilter,
              activity: e.target.value
            })} className="bg-transparent border border-white/30 px-4 py-2 text-xs uppercase tracking-widest focus:outline-none focus:border-white transition-colors">
                <option value="all" className="bg-[#1a3a3a]">
                  ACTIVITY
                </option>
                <option value="vinyasa" className="bg-[#1a3a3a]">
                  Vinyasa
                </option>
                <option value="pilates" className="bg-[#1a3a3a]">
                  Pilates
                </option>
                <option value="yin" className="bg-[#1a3a3a]">
                  Yin Yang
                </option>
              </select>

              <select value={selectedFilter.teacher} onChange={e => setSelectedFilter({
              ...selectedFilter,
              teacher: e.target.value
            })} className="bg-transparent border border-white/30 px-4 py-2 text-xs uppercase tracking-widest focus:outline-none focus:border-white transition-colors">
                <option value="all" className="bg-[#1a3a3a]">
                  TEACHER
                </option>
                <option value="yiwen" className="bg-[#1a3a3a]">
                  Yiwen Wang
                </option>
                <option value="maxime" className="bg-[#1a3a3a]">
                  Maxime Menten
                </option>
                <option value="carolina" className="bg-[#1a3a3a]">
                  Carolina Dorell
                </option>
              </select>

              <select value={selectedFilter.level} onChange={e => setSelectedFilter({
              ...selectedFilter,
              level: e.target.value
            })} className="bg-transparent border border-white/30 px-4 py-2 text-xs uppercase tracking-widest focus:outline-none focus:border-white transition-colors">
                <option value="all" className="bg-[#1a3a3a]">
                  LEVEL
                </option>
                <option value="beginner" className="bg-[#1a3a3a]">
                  Beginner
                </option>
                <option value="intermediate" className="bg-[#1a3a3a]">
                  Intermediate
                </option>
                <option value="all-levels" className="bg-[#1a3a3a]">
                  All Levels
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            {/* Header Row */}
            <div className="grid grid-cols-8 gap-2 mb-2">
              <div className="flex items-center justify-center py-4">
                <span className="text-[10px] tracking-widest uppercase opacity-50">
                  TIME
                </span>
              </div>
              {weekDays.map(day => <div key={day.key} className="text-center py-4 border-b border-white/10">
                  <span className="text-[10px] tracking-widest uppercase opacity-70">
                    {day.label}
                  </span>
                </div>)}
            </div>

            {/* Schedule Rows */}
            {schedule.map((slot, index) => <div key={index} className="grid grid-cols-8 gap-2 mb-2">
                {/* Time Column */}
                <div className="flex items-start justify-center pt-6">
                  <span className="text-xs tracking-wide opacity-60">
                    {slot.time}
                  </span>
                </div>

                {/* Day Columns */}
                {weekDays.map(day => {
              const session = slot.sessions[day.key];
              return <div key={day.key}>
                      {session ? <button className="w-full h-full min-h-[100px] bg-[#1a3a3a] border border-white/10 p-4 text-left hover:bg-[#2d5555]/20 hover:border-white/20 transition-all duration-300 group">
                          <div className="space-y-1">
                            <h4 className="text-xs font-medium tracking-wider uppercase group-hover:text-white transition-colors">
                              {session.name}
                            </h4>
                            <p className="text-[10px] text-gray-400 tracking-wide">
                              {session.teacher}
                            </p>
                            <p className="text-[10px] text-gray-500">
                              {session.level}
                            </p>
                            <p className="text-[10px] text-gray-500 mt-2">
                              {session.capacity}
                            </p>
                          </div>
                        </button> : <div className="w-full h-full min-h-[100px] bg-transparent border border-white/5"></div>}
                    </div>;
            })}
              </div>)}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#1a3a3a] border border-white/10"></div>
            <span>Available Classes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-transparent border border-white/5"></div>
            <span>No Classes Scheduled</span>
          </div>
        </div>
      </div>
    </section>;
}