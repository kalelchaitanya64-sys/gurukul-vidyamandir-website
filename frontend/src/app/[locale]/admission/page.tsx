import AdmissionForm from '@/components/forms/AdmissionForm'
import { GraduationCap, Phone } from 'lucide-react'

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4 shadow-sm uppercase tracking-wider">
            <GraduationCap size={16} />
            Academic Session 2025-26
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Apply for Admission
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Fill out the form below and our admissions committee will contact you promptly with complete fee, syllabus, and batch details.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2.5 rounded-full text-sm font-bold shadow-xs">
            <Phone size={15} className="text-amber-600" />
            <span>Direct Inquiry Helpline: <a href="tel:+919673761468" className="text-blue-950 hover:text-amber-600 transition underline font-black">+91 96737 61468</a></span>
          </div>
        </div>
        <AdmissionForm />
      </div>
    </div>
  )
}