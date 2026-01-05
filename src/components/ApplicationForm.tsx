import React, { useState, Fragment } from 'react';
import { Button } from './ui/Button';
import { Check, ChevronRight } from 'lucide-react';
interface FormData {
  // Child Information
  childFirstName: string;
  childLastName: string;
  childDOB: string;
  childGender: string;
  // Parent Information
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone: string;
  parentAddress: string;
  // Program Selection
  program: string;
  startDate: string;
  schedule: string;
  // Additional Information
  previousSchool: string;
  specialNeeds: string;
  howHeard: string;
  additionalComments: string;
}
export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    childFirstName: '',
    childLastName: '',
    childDOB: '',
    childGender: '',
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    parentAddress: '',
    program: '',
    startDate: '',
    schedule: '',
    previousSchool: '',
    specialNeeds: '',
    howHeard: '',
    additionalComments: ''
  });
  const totalSteps = 4;
  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  return <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map(step => <Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step < currentStep ? 'bg-[#2d5555] border-[#2d5555] text-white' : step === currentStep ? 'bg-white border-white text-[#1a3a3a]' : 'bg-transparent border-white/20 text-white/40'}`}>
                  {step < currentStep ? <Check size={20} /> : <span className="text-sm font-medium">{step}</span>}
                </div>
                <span className="text-[10px] tracking-widest uppercase mt-2 opacity-60">
                  {step === 1 && 'Child Info'}
                  {step === 2 && 'Parent Info'}
                  {step === 3 && 'Program'}
                  {step === 4 && 'Additional'}
                </span>
              </div>
              {step < 4 && <div className={`flex-1 h-0.5 mx-2 transition-all duration-500 ${step < currentStep ? 'bg-[#2d5555]' : 'bg-white/10'}`} />}
            </Fragment>)}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: Child Information */}
        {currentStep === 1 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Child Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  First Name *
                </label>
                <input type="text" required value={formData.childFirstName} onChange={e => updateFormData('childFirstName', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" placeholder="Enter first name" />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Last Name *
                </label>
                <input type="text" required value={formData.childLastName} onChange={e => updateFormData('childLastName', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" placeholder="Enter last name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Date of Birth *
                </label>
                <input type="date" required value={formData.childDOB} onChange={e => updateFormData('childDOB', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Gender *
                </label>
                <select required value={formData.childGender} onChange={e => updateFormData('childGender', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors">
                  <option value="" className="bg-[#1a3a3a]">
                    Select gender
                  </option>
                  <option value="male" className="bg-[#1a3a3a]">
                    Male
                  </option>
                  <option value="female" className="bg-[#1a3a3a]">
                    Female
                  </option>
                  <option value="other" className="bg-[#1a3a3a]">
                    Other
                  </option>
                </select>
              </div>
            </div>
          </div>}

        {/* Step 2: Parent Information */}
        {currentStep === 2 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Parent / Guardian Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  First Name *
                </label>
                <input type="text" required value={formData.parentFirstName} onChange={e => updateFormData('parentFirstName', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" placeholder="Enter first name" />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Last Name *
                </label>
                <input type="text" required value={formData.parentLastName} onChange={e => updateFormData('parentLastName', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" placeholder="Enter last name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Email Address *
                </label>
                <input type="email" required value={formData.parentEmail} onChange={e => updateFormData('parentEmail', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Phone Number *
                </label>
                <input type="tel" required value={formData.parentPhone} onChange={e => updateFormData('parentPhone', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" placeholder="+94 XX XXX XXXX" />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                Home Address *
              </label>
              <textarea required value={formData.parentAddress} onChange={e => updateFormData('parentAddress', e.target.value)} rows={3} className="w-full bg-transparent border border-white/30 p-3 text-sm focus:outline-none focus:border-white transition-colors resize-none" placeholder="Enter your full address" />
            </div>
          </div>}

        {/* Step 3: Program Selection */}
        {currentStep === 3 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Program Selection
              </h3>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                Preferred Program *
              </label>
              <select required value={formData.program} onChange={e => updateFormData('program', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors">
                <option value="" className="bg-[#1a3a3a]">
                  Select a program
                </option>
                <option value="toddler" className="bg-[#1a3a3a]">
                  Toddler Program (Ages 2-3)
                </option>
                <option value="preschool" className="bg-[#1a3a3a]">
                  Preschool Program (Ages 3-4)
                </option>
                <option value="prek" className="bg-[#1a3a3a]">
                  Pre-K Program (Ages 4-5)
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Preferred Start Date *
                </label>
                <input type="date" required value={formData.startDate} onChange={e => updateFormData('startDate', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors" />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                  Schedule Preference *
                </label>
                <select required value={formData.schedule} onChange={e => updateFormData('schedule', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors">
                  <option value="" className="bg-[#1a3a3a]">
                    Select schedule
                  </option>
                  <option value="fullday" className="bg-[#1a3a3a]">
                    Full Day (7:30 AM - 6:00 PM)
                  </option>
                  <option value="halfday" className="bg-[#1a3a3a]">
                    Half Day (8:00 AM - 12:00 PM)
                  </option>
                </select>
              </div>
            </div>
          </div>}

        {/* Step 4: Additional Information */}
        {currentStep === 4 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Additional Information
              </h3>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                Previous Preschool / Childcare Experience
              </label>
              <textarea value={formData.previousSchool} onChange={e => updateFormData('previousSchool', e.target.value)} rows={3} className="w-full bg-transparent border border-white/30 p-3 text-sm focus:outline-none focus:border-white transition-colors resize-none" placeholder="Please share any previous educational experiences" />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                Special Needs or Considerations
              </label>
              <textarea value={formData.specialNeeds} onChange={e => updateFormData('specialNeeds', e.target.value)} rows={3} className="w-full bg-transparent border border-white/30 p-3 text-sm focus:outline-none focus:border-white transition-colors resize-none" placeholder="Allergies, dietary restrictions, developmental considerations, etc." />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                How Did You Hear About Us?
              </label>
              <select value={formData.howHeard} onChange={e => updateFormData('howHeard', e.target.value)} className="w-full bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white transition-colors">
                <option value="" className="bg-[#1a3a3a]">
                  Select an option
                </option>
                <option value="google" className="bg-[#1a3a3a]">
                  Google Search
                </option>
                <option value="social" className="bg-[#1a3a3a]">
                  Social Media
                </option>
                <option value="referral" className="bg-[#1a3a3a]">
                  Friend / Family Referral
                </option>
                <option value="local" className="bg-[#1a3a3a]">
                  Local Community
                </option>
                <option value="other" className="bg-[#1a3a3a]">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-gray-300">
                Additional Comments or Questions
              </label>
              <textarea value={formData.additionalComments} onChange={e => updateFormData('additionalComments', e.target.value)} rows={4} className="w-full bg-transparent border border-white/30 p-3 text-sm focus:outline-none focus:border-white transition-colors resize-none" placeholder="Anything else you'd like us to know?" />
            </div>
          </div>}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          {currentStep > 1 ? <button type="button" onClick={prevStep} className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              ← Previous
            </button> : <div />}

          {currentStep < totalSteps ? <Button type="button" onClick={nextStep} variant="primary" className="flex items-center gap-2">
              Next Step
              <ChevronRight size={16} />
            </Button> : <Button type="submit" variant="primary">
              Submit Application
            </Button>}
        </div>
      </form>
    </div>;
}