export default function EducationSection() {
    const educationData = [
      {
        institution: "Chandigarh University",
        degree: "Bachelor's degree in Computer Science Engineering",
        date: "2016 - 2020",
        location: "Punjab, India",
      },
      // Add more education entries as needed
    ]
  
    return (
      <section id="education" className="relative min-h-screen bg-[#1E242C] py-20">
        {/* Vertical "EDUCATION" text */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <div className="vertical-text text-gray-400 tracking-[0.2em] text-sm">EDUCATION</div>
        </div>
  
        <div className="container mx-auto px-6">
          <div className="ml-16 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="bg-[#1A1F25] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#00FF7F] mb-2">{edu.institution}</h3>
                  <p className="text-white mb-2">{edu.degree}</p>
                  <p className="text-gray-400">{edu.date}</p>
                  <p className="text-gray-400">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <style jsx>{`
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}</style>
      </section>
    )
  }
  