import React, { useState, Fragment } from 'react';
import { Button } from './ui/Button';
import { Check, ChevronRight } from 'lucide-react';

interface FormData {
  // Section A: Child's Information
  childFullName: string;
  childDOB: string;
  childGender: string;
  childNationality: string;
  homeAddress: string;
  languageAtHome: string;

  // Section B: Parent / Guardian Information
  parent1Name: string;
  parent1NIC: string;
  parent1Mobile: string;
  parent1Email: string;
  parent2Name: string;
  parent2NIC: string;
  parent2Mobile: string;

  // Section C: Program Enrollment
  programType: string;
  programLevel: string;

  // Section D: Medical & Emergency Information
  immunizationUpToDate: boolean;
  medicalConditions: string;
  emergencyContact1Name: string;
  emergencyContact1Phone: string;
  emergencyContact2Name: string;
  emergencyContact2Phone: string;
  authorizedPickupPersons: string;

  // Section E: Document Uploads
  birthCertificate: File[];
  childPhoto: File[];
  parentNICs: File[];
  immunizationRecord: File[];

  // Agreements
  termsAgreed: boolean;
  medicalConsentAgreed: boolean;
}

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    childFullName: '',
    childDOB: '',
    childGender: '',
    childNationality: '',
    homeAddress: '',
    languageAtHome: '',
    parent1Name: '',
    parent1NIC: '',
    parent1Mobile: '',
    parent1Email: '',
    parent2Name: '',
    parent2NIC: '',
    parent2Mobile: '',
    programType: '',
    programLevel: '',
    immunizationUpToDate: false,
    medicalConditions: '',
    emergencyContact1Name: '',
    emergencyContact1Phone: '',
    emergencyContact2Name: '',
    emergencyContact2Phone: '',
    authorizedPickupPersons: '',
    birthCertificate: [],
    childPhoto: [],
    parentNICs: [],
    immunizationRecord: [],
    termsAgreed: false,
    medicalConsentAgreed: false,
  });

  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string | boolean | File[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field: 'birthCertificate' | 'childPhoto' | 'parentNICs' | 'immunizationRecord', files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData(prev => ({
        ...prev,
        [field]: fileArray
      }));
    }
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
    setShowTermsPopup(true);
  };

  const handleFinalSubmit = () => {
    if (formData.termsAgreed && formData.medicalConsentAgreed) {
      console.log('Form submitted:', formData);
      setShowTermsPopup(false);
      // Here you would typically send the data to your backend
      alert('Application submitted successfully!');
    }
  };

  return <div className="w-full">
      {/* Form Header */}
      <div className="mb-12 pb-8 border-b border-[#2A372F]/20">
        <h1 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-4 text-[#2A372F]">
          Apple Tree Tots - Online Admission Form
        </h1>
        <p className="text-base text-[#2A372F]/80 mb-4 font-light">
          Nurturing confident, independent, and curious learners through AMI Montessori principles and the HEI approach.
        </p>
        <p className="text-sm text-[#2A372F]/70">
          <strong>Instructions:</strong> Please complete all sections below. To finalize admission, you must submit the required documents (Birth Certificate, Photos, and NIC copies) and pay the non-refundable admission fee.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4, 5].map(step => <Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step < currentStep ? 'bg-[#2d5555] border-[#2d5555] text-white' : step === currentStep ? 'bg-transparent border-[#2A372F] text-[#2A372F]' : 'bg-transparent border-[#2A372F]/20 text-[#2A372F]/40'}`}>
                  {step < currentStep ? <Check size={20} /> : <span className="text-sm font-medium">{step}</span>}
                </div>
                <span className="text-[10px] tracking-widest uppercase mt-2 opacity-60">
                  {step === 1 && "Child's Info"}
                  {step === 2 && 'Parent Info'}
                  {step === 3 && 'Program'}
                  {step === 4 && 'Health & Docs'}
                  {step === 5 && 'Agreements'}
                </span>
              </div>
              {step < 5 && <div className={`flex-1 h-0.5 mx-2 transition-all duration-500 ${step < currentStep ? 'bg-[#2d5555]' : 'bg-[#2A372F]/10'}`} />}
            </Fragment>)}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: Child's Information */}
        {currentStep === 1 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6 text-[#2A372F]">
                Section A: Child's Information
              </h3>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                Full Name *
              </label>
              <input type="text" required value={formData.childFullName} onChange={e => updateFormData('childFullName', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter child's full name" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                  Date of Birth *
                </label>
                <input type="date" required value={formData.childDOB} onChange={e => updateFormData('childDOB', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] focus:outline-none focus:border-[#2A372F] transition-colors" />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                  Gender *
                </label>
                <select required value={formData.childGender} onChange={e => updateFormData('childGender', e.target.value)} className="w-full bg-[#2d5555] border-b border-[#2A372F]/40 px-3 py-3 text-sm text-white focus:outline-none focus:border-[#2A372F] transition-colors">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                Nationality *
              </label>
              <input type="text" required value={formData.childNationality} onChange={e => updateFormData('childNationality', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter nationality" />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                Home Address *
              </label>
              <textarea required value={formData.homeAddress} onChange={e => updateFormData('homeAddress', e.target.value)} rows={3} className="w-full bg-transparent border border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors resize-none" placeholder="Enter full home address" />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                Language Spoken at Home *
              </label>
              <input type="text" required value={formData.languageAtHome} onChange={e => updateFormData('languageAtHome', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter language(s)" />
              <p className="text-xs text-[#2A372F]/60 mt-1">Note: English is the main language of instruction</p>
            </div>
          </div>}

        {/* Step 2: Parent / Guardian Information */}
        {currentStep === 2 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6 text-[#2A372F]">
                Section B: Parent / Guardian Information
              </h3>
            </div>

            {/* Father/Guardian 1 */}
            <div className="pb-6 border-b border-[#2A372F]/20">
              <h4 className="text-sm font-semibold text-[#2A372F] mb-4 uppercase">Father/Guardian 1</h4>
              
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                  Name *
                </label>
                <input type="text" required value={formData.parent1Name} onChange={e => updateFormData('parent1Name', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter name" />
              </div>

              <div className="mt-6">
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                  NIC Number * (Copy required)
                </label>
                <input type="text" required value={formData.parent1NIC} onChange={e => updateFormData('parent1NIC', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter NIC number" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Mobile Number *
                  </label>
                  <input type="tel" required value={formData.parent1Mobile} onChange={e => updateFormData('parent1Mobile', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter mobile number" />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Email Address * (Used for receipts and reminders)
                  </label>
                  <input type="email" required value={formData.parent1Email} onChange={e => updateFormData('parent1Email', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter email" />
                </div>
              </div>
            </div>

            {/* Mother/Guardian 2 */}
            <div>
              <h4 className="text-sm font-semibold text-[#2A372F] mb-4 uppercase">Mother/Guardian 2 (Optional)</h4>
              
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                  Name
                </label>
                <input type="text" value={formData.parent2Name} onChange={e => updateFormData('parent2Name', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter name (optional)" />
              </div>

              <div className="mt-6">
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                  NIC Number (Copy required)
                </label>
                <input type="text" value={formData.parent2NIC} onChange={e => updateFormData('parent2NIC', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter NIC number (optional)" />
              </div>

              <div className="mt-6">
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                  Mobile Number
                </label>
                <input type="tel" value={formData.parent2Mobile} onChange={e => updateFormData('parent2Mobile', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter mobile number (optional)" />
              </div>
            </div>
          </div>}

        {/* Step 3: Program Enrollment */}
        {currentStep === 3 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6 text-[#2A372F]">
                Section C: Program Enrollment
              </h3>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                Select Program Type *
              </label>
              <select required value={formData.programType} onChange={e => updateFormData('programType', e.target.value)} className="w-full bg-[#2d5555] border-b border-[#2A372F]/40 px-3 py-3 text-sm text-white focus:outline-none focus:border-[#2A372F] transition-colors">
                <option value="">Select program</option>
                <option value="montessori">Montessori</option>
                <option value="daycare">Daycare</option>
              </select>
            </div>

            {formData.programType && <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                {formData.programType === 'montessori' ? 'Level' : 'Group'} *
              </label>
              <select required value={formData.programLevel} onChange={e => updateFormData('programLevel', e.target.value)} className="w-full bg-[#2d5555] border-b border-[#2A372F]/40 px-3 py-3 text-sm text-white focus:outline-none focus:border-[#2A372F] transition-colors">
                <option value="">Select {formData.programType === 'montessori' ? 'level' : 'group'}</option>
                {formData.programType === 'montessori' ? (
                  <>
                    <option value="toddler">Toddler</option>
                    <option value="first-year">First Year</option>
                    <option value="second-year">Second Year</option>
                    <option value="third-year">Third Year</option>
                  </>
                ) : (
                  <>
                    <option value="nursery">Nursery</option>
                    <option value="toddler-group">Toddler Group</option>
                    <option value="before-after">Before & After School Group</option>
                  </>
                )}
              </select>
            </div>}
          </div>}

        {/* Step 4: Medical & Emergency Information & Documents */}
        {currentStep === 4 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6 text-[#2A372F]">
                Section D: Medical & Emergency Information
              </h3>
            </div>

            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.immunizationUpToDate} onChange={e => updateFormData('immunizationUpToDate', e.target.checked)} className="w-5 h-5 accent-[#2d5555]" />
                <span className="text-sm text-[#2A372F]">
                  Immunization Record Up to Date? * (Copy of record required)
                </span>
              </label>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                Existing Medical Conditions/Allergies
              </label>
              <textarea value={formData.medicalConditions} onChange={e => updateFormData('medicalConditions', e.target.value)} rows={3} className="w-full bg-transparent border border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors resize-none" placeholder="List any medical conditions or allergies" />
            </div>

            <div className="border-t border-[#2A372F]/20 pt-6">
              <h4 className="text-sm font-semibold text-[#2A372F] mb-4 uppercase">Emergency Contacts</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Emergency Contact 1 - Name & Phone *
                  </label>
                  <input type="text" required value={formData.emergencyContact1Name} onChange={e => updateFormData('emergencyContact1Name', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Name & Phone" />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Emergency Contact 2 - Name & Phone *
                  </label>
                  <input type="text" required value={formData.emergencyContact2Name} onChange={e => updateFormData('emergencyContact2Name', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Name & Phone" />
                </div>
              </div>
            </div>

            <div className="border-t border-[#2A372F]/20 pt-6">
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                Authorized Pickup Persons *
              </label>
              <p className="text-xs text-[#2A372F]/60 mb-3">Note: Only individuals listed here may collect your child</p>
              <textarea required value={formData.authorizedPickupPersons} onChange={e => updateFormData('authorizedPickupPersons', e.target.value)} rows={3} className="w-full bg-transparent border border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors resize-none" placeholder="List names and relationships of authorized pickup persons" />
            </div>

            <div className="border-t border-[#2A372F]/20 pt-6">
              <h4 className="text-sm font-semibold text-[#2A372F] mb-4 uppercase">Section E: Document Uploads</h4>
              <p className="text-sm text-[#2A372F]/70 mb-6">Please upload clear scans or photos of the following:</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Child's Birth Certificate (Front page) *
                  </label>
                  <input type="file" multiple required onChange={e => handleFileUpload('birthCertificate', e.target.files)} className="w-full px-3 py-2 text-sm text-[#2A372F] border border-[#2A372F]/40 rounded focus:outline-none focus:border-[#2A372F] transition-colors" />
                  {formData.birthCertificate.length > 0 && (
                    <div className="mt-2 text-xs text-[#2A372F]/70">
                      ✓ {formData.birthCertificate.length} file(s) uploaded
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Child's Photograph (Clear headshot) *
                  </label>
                  <input type="file" multiple required onChange={e => handleFileUpload('childPhoto', e.target.files)} className="w-full px-3 py-2 text-sm text-[#2A372F] border border-[#2A372F]/40 rounded focus:outline-none focus:border-[#2A372F] transition-colors" />
                  {formData.childPhoto.length > 0 && (
                    <div className="mt-2 text-xs text-[#2A372F]/70">
                      ✓ {formData.childPhoto.length} file(s) uploaded
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Parents'/Guardians' NIC Copies *
                  </label>
                  <input type="file" multiple required onChange={e => handleFileUpload('parentNICs', e.target.files)} className="w-full px-3 py-2 text-sm text-[#2A372F] border border-[#2A372F]/40 rounded focus:outline-none focus:border-[#2A372F] transition-colors" />
                  {formData.parentNICs.length > 0 && (
                    <div className="mt-2 text-xs text-[#2A372F]/70">
                      ✓ {formData.parentNICs.length} file(s) uploaded
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F] font-semibold">
                    Immunization Record *
                  </label>
                  <input type="file" multiple required onChange={e => handleFileUpload('immunizationRecord', e.target.files)} className="w-full px-3 py-2 text-sm text-[#2A372F] border border-[#2A372F]/40 rounded focus:outline-none focus:border-[#2A372F] transition-colors" />
                  {formData.immunizationRecord.length > 0 && (
                    <div className="mt-2 text-xs text-[#2A372F]/70">
                      ✓ {formData.immunizationRecord.length} file(s) uploaded
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>}

        {/* Step 5: Agreements & Terms */}
        {currentStep === 5 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6 text-[#2A372F]">
                Terms, Conditions & Agreements
              </h3>
            </div>

            {/* Payment Terms */}
            <div className="bg-[#2d5555]/5 border border-[#2d5555]/20 rounded-lg p-6 mb-6">
              <h4 className="text-sm font-semibold text-[#2A372F] mb-4 uppercase">Payment Terms and Conditions</h4>
              <div className="space-y-3 text-sm text-[#2A372F]/80">
                <p><strong>Billing Cycle:</strong> Tuition fees are payable either Termly or Monthly.</p>
                <p><strong>Due Dates:</strong> Termly payments by the 2nd week of each term. Monthly payments by the 10th of each month.</p>
                <p><strong>Late Fees:</strong> Any fees not settled by the due date will incur a 10% surcharge per month until fully paid.</p>
                <p><strong>Grace Period:</strong> A 7-day grace period is provided from the due date before late fees apply.</p>
                <p><strong>Service Suspension:</strong> If fees remain unpaid 7 days after the "Final Notice" (issued 3 weeks from due date), the school reserves the right to suspend the child's attendance.</p>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="bg-[#2d5555]/5 border border-[#2d5555]/20 rounded-lg p-6 mb-6">
              <h4 className="text-sm font-semibold text-[#2A372F] mb-4 uppercase">Refund Policy</h4>
              <div className="space-y-3 text-sm text-[#2A372F]/80">
                <p><strong>Admission Fee:</strong> The enrollment/admission fee is strictly non-refundable.</p>
                <p><strong>Withdrawal Before Term Start:</strong> A full refund of the term/monthly fee is provided (minus the admission fee).</p>
                <p><strong>Withdrawal Within First 2 Weeks:</strong> A 50% refund of the monthly fee is provided.</p>
                <p><strong>No Refunds:</strong> No refunds will be issued after the first two weeks of the term/month.</p>
                <p><strong>Activity/Field Trip Fees:</strong> Non-refundable unless canceled by the school.</p>
              </div>
            </div>

            {/* Agreements */}
            <div className="space-y-4 border-t border-[#2A372F]/20 pt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAgreed}
                  onChange={e => updateFormData('termsAgreed', e.target.checked)}
                  required
                  className="w-5 h-5 mt-1 accent-[#2d5555]"
                />
                <span className="text-sm text-[#2A372F] leading-relaxed">
                  I have read and agree to the Terms and Conditions of Apple Tree Tots, including payment terms, refund policies, and all school procedures.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.medicalConsentAgreed}
                  onChange={e => updateFormData('medicalConsentAgreed', e.target.checked)}
                  required
                  className="w-5 h-5 mt-1 accent-[#2d5555]"
                />
                <span className="text-sm text-[#2A372F] leading-relaxed">
                  <strong>Medical Consent:</strong> In the event of a medical emergency, parents will be notified immediately, and the child will be taken to the closest medical hospital. I authorize the school to take appropriate emergency action if I cannot be reached.
                </span>
              </label>

              <div className="pt-4 text-xs text-[#2A372F]/70">
                <p><strong>Data Accuracy Disclaimer:</strong> I confirm that the information provided, including emergency contacts and immunization records, is accurate and up to date.</p>
              </div>
            </div>
          </div>}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-[#2A372F]/40">
          {currentStep > 1 ? <button type="button" onClick={prevStep} className="text-xs uppercase tracking-widest text-[#2A372F]/60 hover:text-[#2A372F] transition-colors">
              ← Previous
            </button> : <div />}

          {currentStep < totalSteps ? <Button type="button" onClick={nextStep} variant="primary" className="flex items-center gap-2">
              Next Step
              <ChevronRight size={16} />
            </Button> : <Button type="submit" variant="primary">
              Review & Submit
            </Button>}
        </div>
      </form>

      {/* Terms and Conditions Modal */}
      {showTermsPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#CDD1CB] rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto w-full">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-6 text-[#2A372F]">
                Confirm Your <span className="italic opacity-80">Application</span>
              </h2>

              <div className="space-y-4 text-[#2A372F] mb-8">
                <div className="bg-[#2d5555]/10 border-l-4 border-[#2d5555] p-4 rounded">
                  <p className="text-sm font-light leading-relaxed">
                    <strong>Registration Fee:</strong> A non-refundable admission fee is required at the time of enrollment. The amount is determined based on the program level selected.
                  </p>
                </div>

                <div className="bg-[#2d5555]/10 border-l-4 border-[#2d5555] p-4 rounded">
                  <p className="text-sm font-light leading-relaxed">
                    <strong>Montessori Program:</strong> Monthly or Termly tuition fees apply based on your selected billing cycle.
                  </p>
                </div>

                <div className="bg-[#2d5555]/10 border-l-4 border-[#2d5555] p-4 rounded">
                  <p className="text-sm font-light leading-relaxed">
                    <strong>Additional Charges:</strong> School uniforms, late pickup fees, and activity fees may apply. Late pickup fees vary by program level.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#2A372F]/20 pt-6">
                <label className="flex items-start gap-3 cursor-pointer mb-4">
                  <input
                    type="checkbox"
                    checked={formData.termsAgreed && formData.medicalConsentAgreed}
                    readOnly
                    className="w-5 h-5 mt-1 accent-[#2d5555]"
                  />
                  <span className="text-sm text-[#2A372F] leading-relaxed">
                    I acknowledge that I have reviewed all information, agree to the terms and conditions, and provide medical consent as outlined above.
                  </span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 justify-end">
                <button
                  onClick={() => setShowTermsPopup(false)}
                  className="px-6 py-2 text-sm font-medium text-[#2A372F] border border-[#2A372F]/40 rounded hover:bg-[#2A372F]/5 transition-colors uppercase tracking-widest"
                >
                  Back
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={!formData.termsAgreed || !formData.medicalConsentAgreed}
                  className={`px-8 py-3 text-xs font-medium uppercase tracking-widest rounded transition-all duration-300 ${
                    formData.termsAgreed && formData.medicalConsentAgreed
                      ? 'bg-[#2A372F] text-[#CDD1CB] hover:bg-[#1a2720] cursor-pointer'
                      : 'bg-[#2A372F]/50 text-[#CDD1CB]/50 cursor-not-allowed'
                  }`}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>;
}
