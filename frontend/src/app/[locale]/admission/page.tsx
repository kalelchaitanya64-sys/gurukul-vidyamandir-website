import AdmissionForm from '@/components/forms/AdmissionForm'

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            Apply for Admission
          </h1>
          <p className="text-gray-500 text-lg">
            Fill the form below and we will contact you shortly on your mobile number
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            📞 For direct inquiry call: +91 96737 61468
          </div>
        </div>
        <AdmissionForm />
      </div>
    </div>
  )
}