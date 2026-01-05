import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { X, Mail, Award, BookOpen } from 'lucide-react';
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  qualifications: string;
  specialization: string;
  image: string;
}
const teamMembers: TeamMember[] = [{
  name: 'PRIYA JAYASINGHE',
  role: 'Lead Educator',
  bio: 'With a degree in Early Childhood Education and extensive experience, Priya leads our teaching team with expertise in Montessori methodology and child development. She creates a nurturing environment where children thrive and develop a genuine love for learning.',
  qualifications: 'Degree in Early Childhood Education, Montessori Certification',
  specialization: 'Montessori Methodology, Child Development',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
}, {
  name: 'SARAH MITCHELL',
  role: 'Senior Teacher',
  bio: 'A native English speaker with ECE certification, Sarah brings international teaching experience and a passion for language immersion education. Her warm approach helps children develop confidence in English communication.',
  qualifications: 'ECE Certification, TESOL Diploma',
  specialization: 'English Language Immersion, International Curriculum',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
}, {
  name: 'CHAMINDA FERNANDO',
  role: 'Toddler Coordinator',
  bio: 'Specializing in ages 2-3, Chaminda creates nurturing environments where our youngest learners develop confidence and social skills through play. His patient, gentle approach helps toddlers feel secure and excited to explore.',
  qualifications: 'Diploma in Early Childhood Education',
  specialization: 'Toddler Development, Play-Based Learning',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
}, {
  name: 'NISHA PERERA',
  role: 'Pre-K Teacher',
  bio: 'Focused on school readiness, Nisha prepares our 4-5 year olds for primary school with advanced literacy and numeracy programs. She makes learning engaging and builds the academic foundation children need for future success.',
  qualifications: 'Diploma in Early Childhood Education, Primary Education Certificate',
  specialization: 'School Readiness, Literacy & Numeracy',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
}, {
  name: 'RAJITHA SILVA',
  role: 'STEAM Coordinator',
  bio: 'With a background in science education, Rajitha designs hands-on STEAM activities that spark curiosity and critical thinking in young learners. Her innovative approach makes complex concepts accessible and fun.',
  qualifications: 'Bachelor of Science, ECE Diploma',
  specialization: 'STEAM Education, Science & Technology',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
}, {
  name: 'EMMA THOMPSON',
  role: 'Trainee Teacher',
  bio: 'Currently completing her ECE diploma, Emma brings fresh perspectives and enthusiasm to our teaching team while gaining valuable classroom experience. Her energy and creativity inspire both children and colleagues.',
  qualifications: 'ECE Diploma (In Progress)',
  specialization: 'Creative Arts, Outdoor Learning',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
}];
function TeacherModal({
  teacher,
  onClose
}: {
  teacher: TeamMember;
  onClose: () => void;
}) {
  return <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" onClick={onClose}>
      <div className="bg-[#1a3a3a] border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-[fadeInUp_0.4s_ease-out]" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors" aria-label="Close">
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[3/4] md:aspect-auto">
            <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-2">
                {teacher.name}
              </h2>
              <p className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold">
                {teacher.role}
              </p>
            </div>

            <div className="space-y-6 flex-grow">
              <div>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {teacher.bio}
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="w-5 h-5 text-[#2d5555] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
                      Qualifications
                    </p>
                    <p className="text-sm text-gray-300 font-light">
                      {teacher.qualifications}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#2d5555] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
                      Specialization
                    </p>
                    <p className="text-sm text-gray-300 font-light">
                      {teacher.specialization}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a href="tel:0743431488" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#2d5555] hover:text-white transition-colors">
                <Mail size={14} />
                Contact About This Teacher
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export function TeamPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<TeamMember | null>(null);
  return <div className="min-h-screen bg-[#1a3a3a] text-white selection:bg-[#2d5555] selection:text-white">
      <Navigation />

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-16">
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto mb-20">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-widest uppercase mb-6">
              TEACHERS
            </h1>
            <p className="text-sm md:text-base tracking-wide leading-relaxed max-w-2xl opacity-90">
              We are most grateful for our teacher team. Let them carry you
              along and inspire you. Each educator brings unique expertise and
              passion to nurturing your child's development.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-[#1a3a3a]/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img src="/image.png" alt="Teacher in peaceful setting" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="max-w-[1400px] mx-auto">
          <div className="mb-12 border-b border-white/10 pb-6">
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => <button key={member.name} onClick={() => setSelectedTeacher(member)} className="text-left opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] group cursor-pointer" style={{
            animationDelay: `${index * 100}ms`
          }}>
                {/* Portrait Image */}
                <div className="aspect-[3/4] mb-4 overflow-hidden border border-white/10 relative">
                  <div className="absolute inset-0 bg-[#1a3a3a]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-xs uppercase tracking-widest border border-white px-4 py-2 bg-[#1a3a3a]/80 backdrop-blur-sm">
                      View Profile
                    </span>
                  </div>
                </div>

                {/* Name and Role */}
                <div>
                  <h3 className="text-sm font-serif tracking-wider mb-1 group-hover:text-[#2d5555] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs tracking-wide opacity-70">
                    {member.role}
                  </p>
                </div>
              </button>)}
          </div>
        </section>

        {/* Join Section */}
        <section className="mt-32 max-w-4xl mx-auto text-center border-t border-white/10 pt-20">
          <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-6">
            Join Our Teaching Team
          </h2>
          <p className="text-sm tracking-wide leading-relaxed mb-8 opacity-90 max-w-lg mx-auto">
            We are actively recruiting qualified preschool teachers and trainee
            teachers. If you have a passion for early childhood education, we
            would love to hear from you.
          </p>
          <a href="tel:0743431488" className="inline-block border border-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-all duration-300">
            Contact Us
          </a>
        </section>
      </main>

      <Footer />

      {/* Teacher Modal */}
      {selectedTeacher && <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />}
    </div>;
}