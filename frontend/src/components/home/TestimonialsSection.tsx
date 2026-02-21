'use client'

const testimonials = [
  {
    name: 'Rajesh Patil',
    role: 'Parent of JEE Student',
    text: 'Gurukul has transformed my son\'s future. The teachers are dedicated and the results speak for themselves.'
  },
  {
    name: 'Sunita Deshmukh',
    role: 'Parent of NEET Student',
    text: 'My daughter got selected in MBBS thanks to Gurukul coaching. Forever grateful to this institution.'
  },
  {
    name: 'Vikas Shinde',
    role: 'Alumni, IIT Bombay',
    text: 'The foundation I built at Gurukul helped me crack IIT. Best coaching in the region.'
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Parents Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "{item.text}"
              </p>
              <div>
                <p className="font-bold text-gray-800">{item.name}</p>
                <p className="text-orange-500 text-xs">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}