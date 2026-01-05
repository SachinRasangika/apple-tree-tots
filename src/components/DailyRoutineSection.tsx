import React from 'react';
import { Clock, Sun, Coffee, BookOpen, Palette, Music, Utensils, TreePine, Home } from 'lucide-react';
interface RoutineItemProps {
  time: string;
  activity: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}
function RoutineItem({
  time,
  activity,
  description,
  icon,
  delay
}: RoutineItemProps) {
  return <div className="flex gap-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{
    animationDelay: delay
  }}>
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#2d5555]/20 border border-white/10 flex items-center justify-center text-[#2d5555] shrink-0">
          {icon}
        </div>
        <div className="w-px h-full bg-white/10 mt-2"></div>
      </div>

      {/* Content */}
      <div className="pb-12 flex-grow">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-xs font-bold tracking-widest uppercase text-[#2d5555]">
            {time}
          </span>
          <h3 className="text-lg font-serif tracking-wide">{activity}</h3>
        </div>
        <p className="text-sm text-gray-400 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>;
}
export function DailyRoutineSection() {
  const routine = [{
    time: '07:30',
    activity: 'Morning Arrival',
    description: 'Warm welcome and free play as children settle in',
    icon: <Sun size={20} />,
    delay: '0ms'
  }, {
    time: '08:30',
    activity: 'Circle Time',
    description: 'Morning songs, calendar, weather, and sharing time',
    icon: <Music size={20} />,
    delay: '100ms'
  }, {
    time: '09:00',
    activity: 'Montessori Work Period',
    description: 'Self-directed learning with specialized materials',
    icon: <BookOpen size={20} />,
    delay: '200ms'
  }, {
    time: '10:00',
    activity: 'Snack & Story Time',
    description: 'Healthy snack followed by storytelling in English',
    icon: <Coffee size={20} />,
    delay: '300ms'
  }, {
    time: '10:30',
    activity: 'Outdoor Learning',
    description: 'Garden exploration, physical play, and nature activities',
    icon: <TreePine size={20} />,
    delay: '400ms'
  }, {
    time: '11:30',
    activity: 'Creative Arts',
    description: 'Art, music, or hands-on STEAM projects',
    icon: <Palette size={20} />,
    delay: '500ms'
  }, {
    time: '12:30',
    activity: 'Lunch Time',
    description: 'Nutritious meal and social development',
    icon: <Utensils size={20} />,
    delay: '600ms'
  }, {
    time: '13:30',
    activity: 'Quiet Time & Activities',
    description: 'Rest period followed by afternoon learning centers',
    icon: <BookOpen size={20} />,
    delay: '700ms'
  }, {
    time: '15:30',
    activity: 'Afternoon Snack',
    description: 'Light refreshment and group activities',
    icon: <Coffee size={20} />,
    delay: '800ms'
  }, {
    time: '16:00',
    activity: 'Departure',
    description: 'Closing circle and parent pickup (extended care until 18:00)',
    icon: <Home size={20} />,
    delay: '900ms'
  }];
  return <section className="py-20 bg-[#152e2e]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
                A Day in the Life
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6">
                Daily <span className="italic opacity-80">Routine</span>
              </h2>
              <p className="text-gray-300 font-light leading-relaxed text-sm mb-8">
                Our structured yet flexible schedule balances learning, play,
                and rest. Each day is thoughtfully designed to nurture your
                child's development across all domains.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <Clock size={16} className="text-[#2d5555]" />
                <span>Monday - Friday, 7:30 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {routine.map(item => <RoutineItem key={item.time} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}