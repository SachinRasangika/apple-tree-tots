import React, { useState, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext';
import { PageHeroSection } from '../components/PageHeroSection';
import { Button } from '../components/ui/Button';
import { Calendar, FileText, Users, CheckCircle, Clock, Mail, Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({
  question,
  answer
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useDarkMode();

  const borderColor = isDark ? 'border-white/10' : 'border-[#2A372F]/20';
  const hoverBg = isDark ? 'hover:bg-white/5' : 'hover:bg-[#2A372F]/5';
  const iconBorder = isDark ? 'border-white/30' : 'border-[#2A372F]/30';
  const textColor = isDark ? 'text-white' : 'text-[#2A372F]';
  const answerColor = isDark ? 'text-white/70' : 'text-[#2A372F]/70';

  return <div className={`border-b ${borderColor}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={`w-full py-6 flex items-center justify-between ${hoverBg} transition-colors px-4`}>
        <span className={`text-sm font-medium tracking-wide text-left pr-4 ${textColor}`}>
          {question}
        </span>
        <div className={`w-6 h-6 rounded-full border ${iconBorder} flex items-center justify-center shrink-0`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      {isOpen && <div className="px-4 pb-6 animate-[fadeIn_0.3s_ease-out]">
          <p className={`text-sm ${answerColor} leading-relaxed`}>{answer}</p>
        </div>}
    </div>;
}

export function AdmissionsPage() {
  const navigate = useNavigate();
  const faqs = [{
    question: 'What are the age requirements for enrollment?',
    answer: 'We accept children ages 2-5 years old. Our Toddler Program serves ages 2-3, Preschool Program serves ages 3-4, and Pre-K Program serves ages 4-5. Children must meet the minimum age requirement by the start date.'
  }, {
    question: 'When does the academic year begin?',
    answer: 'Our academic year follows the Sri Lankan calendar, beginning in January. However, we accept rolling admissions throughout the year based on availability. We recommend applying 2-3 months before your desired start date.'
  }, {
    question: 'What documents are required for application?',
    answer: "You'll need: Child's birth certificate, immunization records, two recent passport-size photos, parent/guardian ID copies, proof of address, and previous school records (if applicable). All documents should be submitted within one week of application."
  }, {
    question: 'Is there an application fee?',
    answer: 'Yes, there is a non-refundable application fee of Rs 5,000. This covers administrative processing and assessment materials. The fee can be paid online or at our admissions office.'
  }, {
    question: 'How long does the admissions process take?',
    answer: 'Once your complete application is submitted, we typically respond within 5-7 business days. The process includes document review, a campus visit, and a brief child assessment. Total timeline from application to enrollment is approximately 2-3 weeks.'
  }, {
    question: 'Do you offer campus tours?',
    answer: "Absolutely! We encourage all prospective families to schedule a campus tour. Tours are available Monday-Friday by appointment. You'll meet our teachers, see our facilities, and learn about our curriculum. Contact our admissions office to schedule."
  }, {
    question: 'What is your teacher-to-child ratio?',
    answer: 'We maintain a maximum 1:8 teacher-to-child ratio across all programs. Our Toddler Program often has even smaller ratios of 1:6. All lead teachers hold recognized ECE degrees or diplomas.'
  }, {
    question: 'Are sibling discounts available?',
    answer: 'Yes, we offer a 10% discount on tuition for the second child and 15% for the third child when multiple siblings are enrolled simultaneously. This applies to monthly tuition fees.'
  }];

  return <div className="min-h-screen bg-[#CDD1CB] text-[#2A372F] selection:bg-[#2A372F] selection:text-[#CDD1CB]">
      <Navigation />

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <PageHeroSection
          title="ADMISSIONS"
          description="We're delighted you're considering Apple Tree Tots for your child's early education. Our admissions process is designed to be straightforward and welcoming. Let's begin this journey together."
          imageUrl="/apple-tree-tots/images/gallery/Gemini_Generated_Image_dcqagmdcqagmdcqa.png"
          imageAlt="Admissions welcome"
          buttonLabel="Start Application"
          onButtonClick={() => navigate('/application')}
        />

        {/* Key Information Cards */}
        <section className="max-w-[1400px] mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2A372F]/10 border border-[#2A372F]/20 p-8 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]">
              <Calendar className="w-8 h-8 text-[#2A372F] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A372F] mb-3">
                Application Deadlines
              </h3>
              <p className="text-sm text-[#2A372F]/70 font-light leading-relaxed mb-4">
                Rolling admissions throughout the year. Apply 2-3 months
                before desired start date.
              </p>
              <p className="text-xs text-[#2d5555] font-medium tracking-wide">
                Priority deadline: November 30 for January intake
              </p>
            </div>

            <div className="bg-[#2d5555]/10 border border-[#2A372F]/20 p-8 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards] animation-delay-150">
              <FileText className="w-8 h-8 text-[#2d5555] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A372F] mb-3">
                Required Documents
              </h3>
              <ul className="text-sm text-[#2A372F]/70 font-light leading-relaxed space-y-2">
                <li>• Birth certificate</li>
                <li>• Immunization records</li>
                <li>• Parent ID & proof of address</li>
                <li>• Recent photos (2)</li>
              </ul>
            </div>

            <div className="bg-[#2d5555]/10 border border-[#2A372F]/20 p-8 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards] animation-delay-300">
              <Users className="w-8 h-8 text-[#2d5555] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A372F] mb-3">
                Age Requirements
              </h3>
              <ul className="text-sm text-[#2A372F]/70 font-light leading-relaxed space-y-2">
                <li>• Toddler: Ages 2-3</li>
                <li>• Preschool: Ages 3-4</li>
                <li>• Pre-K: Ages 4-5</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Process Timeline */}
        <section className="max-w-[1400px] mx-auto mb-20 border-t border-[#2A372F]/20 pt-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
                The Process
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#2A372F]">
                Your Enrollment <span className="italic opacity-80">Journey</span>
              </h2>
            </div>

            <div className="space-y-0">
              {[{
                step: '01',
                title: 'Submit Application',
                description: "Complete our online application form with your child's and family information. Application fee: Rs 5,000.",
                icon: <FileText size={20} />,
                delay: '0ms'
              }, {
                step: '02',
                title: 'Document Submission',
                description: 'Upload or deliver required documents to our admissions office within one week of application.',
                icon: <CheckCircle size={20} />,
                delay: '150ms'
              }, {
                step: '03',
                title: 'Campus Visit & Assessment',
                description: "Schedule a campus tour and brief child assessment. This helps us understand your child's needs and readiness.",
                icon: <Users size={20} />,
                delay: '300ms'
              }, {
                step: '04',
                title: 'Admissions Decision',
                description: "Receive notification within 5-7 business days. If accepted, we'll guide you through enrollment and orientation.",
                icon: <Mail size={20} />,
                delay: '450ms'
              }].map((item, index) => <div key={item.step} className="flex gap-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{
                animationDelay: item.delay
              }}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#2d5555]/20 border border-white/10 flex items-center justify-center text-[#2d5555] shrink-0">
                    {item.icon}
                  </div>
                  {index < 3 && <div className="w-px h-full bg-white/10 mt-2"></div>}
                </div>

                <div className="pb-12 flex-grow">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#2d5555]">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2A372F]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>)}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <DarkModeProvider isDark={false}>
          <section className="max-w-[1400px] mx-auto mb-20 border-t border-[#2A372F]/20 pt-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
                  Common Questions
                </span>
                <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#2A372F]">
                  Admissions <span className="italic opacity-80">FAQ</span>
                </h2>
              </div>

              <div className="bg-[#2A372F]/5 border border-[#2A372F]/20">
                {faqs.map(faq => <FAQItem key={faq.question} {...faq} />)}
              </div>
            </div>
          </section>
        </DarkModeProvider>

        {/* Contact CTA */}
        <DarkModeProvider isDark={false}>
          <section className="max-w-4xl mx-auto text-center">
            <div className="bg-[#2A372F]/10 border border-[#2A372F]/20 p-12">
              <Clock className="w-12 h-12 text-[#2A372F] mx-auto mb-6" />
              <h3 className="text-2xl font-serif tracking-widest uppercase mb-4 text-[#2A372F]">
                Have Questions?
              </h3>
              <p className="text-sm text-[#2A372F]/70 font-light mb-8 max-w-lg mx-auto">
                Our admissions team is here to help. Schedule a campus visit or
                contact us directly to learn more about Apple Tree Tots
                Preschool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary">Schedule Campus Tour</Button>
                <Button variant="outline">Contact Admissions</Button>
              </div>
            </div>
          </section>
        </DarkModeProvider>
      </main>

      <Footer />
    </div>;
}
