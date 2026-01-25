import React, { useState, Fragment } from 'react';
import { Button } from './ui/Button';
import { Check, ChevronRight } from 'lucide-react';

interface FormData {
  // Step 1: Child's Information
  childFullName: string;
  childDOB: string;
  programType: string; // Montessori or Daycare
  programOption: string; // Nursery, Toddler Group, Before/After School Group
  
  // Step 2: Parent / Guardian Information
  parentName1: string;
  parentName2: string;
  contactNumber: string;
  contactEmail: string;
  homeAddress: string;
  
  // Step 3: Required Document Uploads
  birthCertificate: File[];
  childPhotograph: File[];
  parentNIC: File[];
  
  // Step 4: Health & Safety
  emergencyContact1Name: string;
  emergencyContact1Phone: string;
  emergencyContact2Name: string;
  emergencyContact2Phone: string;
  allergies: string;
  immunizationStatus: boolean;
  
  // Step 5: Authorized Pickup
  authorizedPersonName: string;
  authorizedPersonNIC: string;
}

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    childFullName: '',
    childDOB: '',
    programType: '',
    programOption: '',
    parentName1: '',
    parentName2: '',
    contactNumber: '',
    contactEmail: '',
    homeAddress: '',
    birthCertificate: [],
    childPhotograph: [],
    parentNIC: [],
    emergencyContact1Name: '',
    emergencyContact1Phone: '',
    emergencyContact2Name: '',
    emergencyContact2Phone: '',
    allergies: '',
    immunizationStatus: false,
    authorizedPersonName: '',
    authorizedPersonNIC: ''
  });
  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string | boolean | File[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field: 'birthCertificate' | 'childPhotograph' | 'parentNIC', files: FileList | null) => {
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
    if (termsAgreed) {
      console.log('Form submitted:', formData);
      setShowTermsPopup(false);
      setTermsAgreed(false);
      // Here you would typically send the data to your backend
    }
  };

  return <div className="w-full">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4, 5].map(step => <Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step < currentStep ? 'bg-[#2d5555] border-[#2A372F]/20 text-[#2A372F]' : step === currentStep ? 'bg-transparent border-[#2A372F]/20 text-[#2A372F]' : 'bg-transparent border-[#2A372F]/20 text-[#2A372F]/40'}`}>
                  {step < currentStep ? <Check size={20} /> : <span className="text-sm font-medium">{step}</span>}
                </div>
                <span className="text-[10px] tracking-widest uppercase mt-2 opacity-60">
                  {step === 1 && "Child's Info"}
                  {step === 2 && 'Parent Info'}
                  {step === 3 && 'Documents'}
                  {step === 4 && 'Health'}
                  {step === 5 && 'Pickup'}
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
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Child's Information
              </h3>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Full Name *
              </label>
              <input type="text" required value={formData.childFullName} onChange={e => updateFormData('childFullName', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter child's full name" />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Date of Birth *
              </label>
              <input type="date" required value={formData.childDOB} onChange={e => updateFormData('childDOB', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] focus:outline-none focus:border-[#2A372F] transition-colors" />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Program Type *
              </label>
              <select required value={formData.programType} onChange={e => updateFormData('programType', e.target.value)} className="w-full bg-[#2d5555] border-b border-[#2A372F]/40 px-3 py-3 text-sm text-white focus:outline-none focus:border-[#2A372F] transition-colors">
                <option value="" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                  Select program type
                </option>
                <option value="montessori" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                  Montessori
                </option>
                <option value="daycare" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                  Daycare
                </option>
              </select>
            </div>

            {formData.programType && <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                {formData.programType === 'montessori' ? 'Montessori Program' : 'Daycare Program'} *
              </label>
              <select required value={formData.programOption} onChange={e => updateFormData('programOption', e.target.value)} className="w-full bg-[#2d5555] border-b border-[#2A372F]/40 px-3 py-3 text-sm text-white focus:outline-none focus:border-[#2A372F] transition-colors">
                <option value="" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                  Select option
                </option>
                {formData.programType === 'daycare' ? (
                  <>
                    <option value="nursery" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                      Nursery
                    </option>
                    <option value="toddler" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                      Toddler Group
                    </option>
                    <option value="beforeafter" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                      Before/After School Group
                    </option>
                  </>
                ) : (
                  <option value="montessori-program" className="bg-[#2d5555] text-white" style={{ padding: '0.5rem' }}>
                    Montessori Program
                  </option>
                )}
              </select>
            </div>}
          </div>}

        {/* Step 2: Parent / Guardian Information */}
        {currentStep === 2 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Parent / Guardian Information
              </h3>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Parent / Guardian 1 Name *
              </label>
              <input type="text" required value={formData.parentName1} onChange={e => updateFormData('parentName1', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter parent/guardian name" />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Parent / Guardian 2 Name
              </label>
              <input type="text" value={formData.parentName2} onChange={e => updateFormData('parentName2', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter second parent/guardian name (optional)" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                  Contact Number *
                </label>
                <input type="tel" required value={formData.contactNumber} onChange={e => updateFormData('contactNumber', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter contact number" />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                  Email Address *
                </label>
                <input type="email" required value={formData.contactEmail} onChange={e => updateFormData('contactEmail', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter email address" />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Home Address *
              </label>
              <textarea required value={formData.homeAddress} onChange={e => updateFormData('homeAddress', e.target.value)} rows={3} className="w-full bg-transparent border border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors resize-none" placeholder="Enter your full home address" />
            </div>
          </div>}

        {/* Step 3: Required Document Uploads */}
        {currentStep === 3 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Required Documents
              </h3>
              <p className="text-sm text-[#2A372F]/70 mb-6">Please upload the following documents (you can upload multiple files for each document type)</p>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Child's Birth Certificate (Front Page) *
              </label>
              <input type="file" multiple required onChange={e => handleFileUpload('birthCertificate', e.target.files)} className="w-full px-3 py-2 text-sm text-[#2A372F] border border-[#2A372F]/40 rounded focus:outline-none focus:border-[#2A372F] transition-colors" />
              {formData.birthCertificate.length > 0 && (
                <div className="mt-2 text-xs text-[#2A372F]/70">
                  {formData.birthCertificate.length} file(s) selected
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Child's Photograph *
              </label>
              <input type="file" multiple required onChange={e => handleFileUpload('childPhotograph', e.target.files)} className="w-full px-3 py-2 text-sm text-[#2A372F] border border-[#2A372F]/40 rounded focus:outline-none focus:border-[#2A372F] transition-colors" />
              {formData.childPhotograph.length > 0 && (
                <div className="mt-2 text-xs text-[#2A372F]/70">
                  {formData.childPhotograph.length} file(s) selected
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Parents' / Guardian's NIC *
              </label>
              <input type="file" multiple required onChange={e => handleFileUpload('parentNIC', e.target.files)} className="w-full px-3 py-2 text-sm text-[#2A372F] border border-[#2A372F]/40 rounded focus:outline-none focus:border-[#2A372F] transition-colors" />
              {formData.parentNIC.length > 0 && (
                <div className="mt-2 text-xs text-[#2A372F]/70">
                  {formData.parentNIC.length} file(s) selected
                </div>
              )}
            </div>
          </div>}

        {/* Step 4: Health & Safety */}
        {currentStep === 4 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Health & Safety
              </h3>
            </div>

            <div className="border-t border-[#2A372F]/20 pt-6">
              <h4 className="text-sm font-semibold text-[#2A372F] mb-4 uppercase">Emergency Contacts</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                    Emergency Contact 1 - Name *
                  </label>
                  <input type="text" required value={formData.emergencyContact1Name} onChange={e => updateFormData('emergencyContact1Name', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter name" />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                    Emergency Contact 1 - Phone *
                  </label>
                  <input type="tel" required value={formData.emergencyContact1Phone} onChange={e => updateFormData('emergencyContact1Phone', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                    Emergency Contact 2 - Name *
                  </label>
                  <input type="text" required value={formData.emergencyContact2Name} onChange={e => updateFormData('emergencyContact2Name', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter name" />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                    Emergency Contact 2 - Phone *
                  </label>
                  <input type="tel" required value={formData.emergencyContact2Phone} onChange={e => updateFormData('emergencyContact2Phone', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter phone number" />
                </div>
              </div>
            </div>

            <div className="border-t border-[#2A372F]/20 pt-6">
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Allergies / Dietary Restrictions
              </label>
              <textarea value={formData.allergies} onChange={e => updateFormData('allergies', e.target.value)} rows={3} className="w-full bg-transparent border border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors resize-none" placeholder="Please list any allergies or dietary restrictions" />
            </div>

            <div className="border-t border-[#2A372F]/20 pt-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.immunizationStatus} onChange={e => updateFormData('immunizationStatus', e.target.checked)} className="w-5 h-5 accent-[#2d5555]" />
                <span className="text-sm text-[#2A372F]">
                  Confirm that child's immunizations are up to date
                </span>
              </label>
            </div>
          </div>}

        {/* Step 5: Authorized Pickup */}
        {currentStep === 5 && <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <h3 className="text-2xl font-serif tracking-wide mb-6">
                Authorized Pickup Person
              </h3>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                Authorized Person Name *
              </label>
              <input type="text" required value={formData.authorizedPersonName} onChange={e => updateFormData('authorizedPersonName', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter name of authorized pickup person" />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-[#2A372F]">
                NIC Number *
              </label>
              <input type="text" required value={formData.authorizedPersonNIC} onChange={e => updateFormData('authorizedPersonNIC', e.target.value)} className="w-full bg-transparent border-b border-[#2A372F]/40 px-3 py-3 text-sm text-[#2A372F] placeholder-[#2A372F]/60 focus:outline-none focus:border-[#2A372F] transition-colors" placeholder="Enter NIC number" />
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
              Submit Application
            </Button>}
        </div>
      </form>

      {/* Terms and Conditions Popup */}
      {showTermsPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#CDD1CB] rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto w-full">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#2A372F]">
                Terms and Conditions <span className="italic opacity-80">of Enrollment</span>
              </h2>

              <div className="space-y-6 text-[#2A372F]">
                {/* Section 1 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">1. Attendance and Punctuality</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li><span className="font-semibold">Arrival Time:</span> Children should arrive by 8:30 AM to ensure they do not miss out on important morning activities.</li>
                    <li><span className="font-semibold">Absences:</span> Please inform the school administration via text or email by 8:00 AM if your child will be absent.</li>
                    <li><span className="font-semibold">Dismissal and Late Pickup:</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>• Toddlers: Pickup is at 11:30 AM</li>
                        <li>• First-Year Students: Pickup is at 12:00 PM</li>
                        <li>• Second/Third-Year Students: Pickup is at 1:00 PM</li>
                      </ul>
                    </li>
                    <li><span className="font-semibold">Late Pickup Fees:</span> Pickups after 1:00 PM will incur a fee (USD/LKR...) per every hour. Daycare late pickups beyond 15 minutes will incur a fee per every hour. After-School Daycare closes at 6:00 PM, and pickups beyond 15 minutes past this time will incur a fee (USD/LKR...) per 30 minutes.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">2. Fees and Payment Policy</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li><span className="font-semibold">Payment Due Date:</span> Tuition and fees are due by the 10th of each month. For termly payments, fees should be paid in full by the second week of each term.</li>
                    <li><span className="font-semibold">Late Payment Surcharge:</span> Any fees not settled by the due date will be subject to a 10% surcharge per month until fully paid.</li>
                    <li><span className="font-semibold">Grace Period:</span> A grace period of 7 days will be provided from the initial due date before any late fees are applied.</li>
                    <li><span className="font-semibold">Service Suspension:</span> If outstanding fees are not paid within 7 days of the final notice (issued three weeks from the due date), the preschool reserves the right to suspend the child's attendance until the account is settled in full.</li>
                    <li><span className="font-semibold">Financial Hardship:</span> It is the parent's responsibility to contact the administration as early as possible to discuss alternative payment arrangements if experiencing financial hardship.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">3. Refunds and Withdrawals</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li><span className="font-semibold">Refund Requests:</span> All refund requests must be submitted in writing to the school administration.</li>
                    <li><span className="font-semibold">Non-Refundable Fee:</span> The enrollment/admission fee is non-refundable and secures your child's spot for the upcoming academic term.</li>
                    <li><span className="font-semibold">Withdrawal Before Term Start:</span> If a student withdraws before the start of the term/calendar month, a full refund of the term/monthly fee will be provided (minus the admission fee).</li>
                    <li><span className="font-semibold">Withdrawal During First Two Weeks:</span> If a student withdraws within the first two weeks of the term/calendar month, a partial refund of 50% of the monthly fee will be provided.</li>
                    <li><span className="font-semibold">No Refunds:</span> No refunds will be issued after the first two weeks.</li>
                    <li><span className="font-semibold">Extracurriculars:</span> Fees for extracurricular activities and field trips are non-refundable unless the activity or trip is canceled by the school.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">4. Health and Safety</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li><span className="font-semibold">Illness:</span> Daily health checks will be conducted. Please do not send your child to school if they show signs of illness. The school reserves the right to ask an unwell child to remain at home if there is a risk to others.</li>
                    <li><span className="font-semibold">Medication:</span> If teachers need to administer medication, a Medication Record Form must be completed by the parent/guardian. We reserve the right to refuse the administration of medication.</li>
                    <li><span className="font-semibold">Immunizations:</span> Ensure your child's immunizations are up to date and provide a copy of the immunization record to the school office.</li>
                    <li><span className="font-semibold">Emergency Procedures:</span> In case of a medical emergency, parents will be notified immediately, and the child will be taken to the closest medical hospital.</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">5. Authority to Pick Up</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li><span className="font-semibold">Authorized List:</span> Only individuals listed on the authorized pickup list will be allowed to collect your child.</li>
                    <li><span className="font-semibold">Security Pass:</span> The designated person must present a valid security pass to ensure the safety of all students.</li>
                    <li><span className="font-semibold">Changes:</span> Any changes to this list must be communicated in writing (text/email). If there are abrupt changes on the day, inform the school immediately in writing and provide a photo of the person coming to pick up the child.</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">6. Behavior and Conduct</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li><span className="font-semibold">Respect:</span> Children are expected to treat peers, staff, and property with respect.</li>
                    <li><span className="font-semibold">Aggression:</span> Physical or verbal aggression will not be tolerated. We encourage positive conflict resolution.</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">7. Supplies and Personal Items</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li><span className="font-semibold">Jewelry:</span> Avoid sending children with valuable jewelry or accessories.</li>
                    <li><span className="font-semibold">Toys:</span> Personal toys should not be brought to school unless for a specific show-and-tell activity.</li>
                    <li><span className="font-semibold">Labeling:</span> Please label all personal belongings, including clothing, water bottles, and backpacks.</li>
                  </ul>
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-8 pt-6 border-t border-[#2A372F]/20">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAgreed}
                    onChange={e => setTermsAgreed(e.target.checked)}
                    className="w-5 h-5 mt-1 accent-[#2d5555]"
                  />
                  <span className="text-sm text-[#2A372F] leading-relaxed">
                    I have read and understood the Terms and Conditions above, including attendance and pickup policies, fees and payment terms, refund restrictions, health and safety requirements, authorized pickup procedures, and school conduct expectations.
                  </span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 justify-end">
                <button
                  onClick={() => {
                    setShowTermsPopup(false);
                    setTermsAgreed(false);
                  }}
                  className="px-6 py-2 text-sm font-medium text-[#2A372F] border border-[#2A372F]/40 rounded hover:bg-[#2A372F]/5 transition-colors uppercase tracking-widest"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={!termsAgreed}
                  className={`px-8 py-3 text-xs font-medium uppercase tracking-widest rounded transition-all duration-300 ${
                    termsAgreed
                      ? 'bg-[#2A372F] text-[#CDD1CB] hover:bg-[#1a2720] cursor-pointer'
                      : 'bg-[#2A372F]/50 text-[#CDD1CB]/50 cursor-not-allowed'
                  }`}
                >
                  I Agree & Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>;
}
