import React from 'react';
import { BookOpen, Globe, Beaker, TreePine, Palette, Heart, Users, Music } from 'lucide-react';
interface CurriculumCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  delay: string;
}
function CurriculumCard({
  icon,
  title,
  description,
  highlights,
  delay
}: CurriculumCardProps) {
  return <div className="group bg-white/95 border border-gray-300/30 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]" style={{
    animationDelay: delay
  }}>
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-[#2d5555]/10 border border-[#2d5555]/20 flex items-center justify-center text-[#2d5555] mb-6 group-hover:bg-[#2d5555] group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-serif tracking-wide mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
        {description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {highlights.map((highlight, idx) => <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
            <div className="w-1 h-1 rounded-full bg-[#2d5555] mt-1.5 shrink-0" />
            <span>{highlight}</span>
          </li>)}
      </ul>
    </div>;
}
export function ClassesSection() {
  const curriculum = [{
    icon: <BookOpen size={24} />,
    title: 'Montessori Method',
    description: 'Child-led exploration with specialized materials designed to foster independence and natural curiosity.',
    highlights: ['Self-paced learning environment', 'Hands-on discovery activities', 'Mixed-age peer learning', 'Development of concentration'],
    delay: '0ms'
  }, {
    icon: <Globe size={24} />,
    title: 'English Language Immersion',
    description: 'Full English-medium instruction with qualified native and bilingual teachers for comprehensive language development.',
    highlights: ['Daily conversation practice', 'Phonics and early literacy', 'Vocabulary through play', 'Cultural exposure'],
    delay: '100ms'
  }, {
    icon: <Beaker size={24} />,
    title: 'STEAM Learning',
    description: 'Integrated Science, Technology, Engineering, Arts, and Mathematics through hands-on projects and experiments.',
    highlights: ['Science experiments', 'Basic coding introduction', 'Mathematical thinking', 'Problem-solving skills'],
    delay: '200ms'
  }, {
    icon: <TreePine size={24} />,
    title: 'Outdoor Education',
    description: 'Nature-based learning in our garden space, connecting children with the environment through daily outdoor activities.',
    highlights: ['Garden exploration', 'Gross motor development', 'Environmental awareness', 'Sensory experiences'],
    delay: '300ms'
  }, {
    icon: <Palette size={24} />,
    title: 'Creative Arts',
    description: 'Artistic expression through various mediums including painting, music, drama, and creative movement.',
    highlights: ['Visual arts exploration', 'Music and rhythm', 'Creative storytelling', 'Fine motor skills'],
    delay: '400ms'
  }, {
    icon: <Music size={24} />,
    title: 'Cultural Studies',
    description: 'Celebrating Sri Lankan heritage while fostering global awareness through stories, festivals, and traditions.',
    highlights: ['Traditional celebrations', 'Local art and craft', 'Sinhala language basics', 'Diverse cultural stories'],
    delay: '500ms'
  }, {
    icon: <Heart size={24} />,
    title: 'Social-Emotional Learning',
    description: 'Building emotional intelligence, empathy, and positive relationships through guided activities and play.',
    highlights: ['Conflict resolution', 'Emotional vocabulary', 'Cooperative teamwork', 'Self-regulation strategies'],
    delay: '600ms'
  }, {
    icon: <Users size={24} />,
    title: 'School Readiness',
    description: 'Comprehensive preparation for primary school including academic skills, independence, and social confidence.',
    highlights: ['Pre-reading and writing', 'Number sense foundation', 'Classroom routines', 'Social confidence building'],
    delay: '700ms'
  }];
  return;
}