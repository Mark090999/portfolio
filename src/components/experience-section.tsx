export default function ExperienceSection() {
    const experienceData = [
      {
        company: "Tech Innovators Inc.",
        position: "Senior Full Stack Developer",
        date: "January 2021 - Present",
        description:
          "Lead development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
      },
      {
        company: "Digital Solutions Ltd.",
        position: "Frontend Developer",
        date: "June 2020 - December 2020",
        description:
          "Developed responsive user interfaces using React and Redux. Collaborated with UX designers to implement pixel-perfect designs.",
      },
      // Add more experience entries as needed
    ]
  
    return (
      <section id="experience" className="relative min-h-screen bg-[#1E242C] py-20">
        {/* Vertical "EXPERIENCE" text */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <div className="vertical-text text-gray-400 tracking-[0.2em] text-sm">EXPERIENCE</div>
        </div>
  
        <div className="container mx-auto px-6">
          <div className="mr-16 max-w-4xl ml-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Professional Experience</h2>
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="bg-[#1A1F25] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#00FF7F] mb-2">{exp.company}</h3>
                  <p className="text-white font-medium mb-2">{exp.position}</p>
                  <p className="text-gray-400 mb-4">{exp.date}</p>
                  <p className="text-gray-300">{exp.description}</p>
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
  