"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const skillsByCategory = {
  Frontend: [
    { name: "HTML5", progress: 95 },
    { name: "CSS3", progress: 85 },
    { name: "JavaScript", progress: 95 },
    { name: "React", progress: 100 },
    { name: "Node.js", progress: 95 },
    { name: "Next.js", progress: 95 },
    { name: "TypeScript", progress: 80 },
    { name: "TailwindCSS", progress: 80 },
  ],
  Backend: [
    { name: "Python", progress: 70 },
    { name: "Node.js", progress: 90 },
    { name: "PHP", progress: 100 },
    { name: "Dart", progress: 80 },
    { name: "SQL", progress: 100 },
    { name: "GraphQL", progress: 50 },
    { name: "Rest API", progress: 100 },
  ],
  Mobile: [
    { name: "Flutter", progress: 90 },
    { name: "Kotlin", progress: 50 },
    { name: "Swift", progress: 50 },
  ],
  Tools: [
    { name: "Git", progress: 90 },
    { name: "Docker", progress: 90 },
    { name: "Kubernetes", progress: 50 },
    { name: "Travis CI", progress: 20 },
    { name: "Jenkins", progress: 70 },
    { name: "AWS", progress: 85 },
    { name: "Digital Ocean", progress: 85 },
  ],
  Others: [
    { name: "Photoshop", progress: 50 },
    { name: "Illustrator", progress: 10 },
    { name: "Figma", progress: 85 },
    { name: "Adobe XD", progress: 50 },
    { name: "Excel", progress: 60 }
  ],
}

const tabs = ["Backend", "Frontend", "Mobile", "Tools", "Others"] as const

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Backend")

  return (
    <section id="skills" className="relative min-h-screen bg-[#1E242C] py-20">
      {/* "MY SKILLS" text */}
      <div className="absolute left-0 right-0 top-8 md:left-6 md:top-1/2 md:-translate-y-1/2 text-center md:text-left">
        <div className="text-gray-400 tracking-[0.2em] text-sm md:vertical-text md:rotate-180">MY SKILLS</div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6">
        <div className="md:ml-16">
          {/* Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-6 md:mb-8 -mx-6 px-6 md:px-0 md:-mx-0 md:overflow-x-visible">
            <div className="flex gap-4 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2 rounded border transition-colors duration-200 whitespace-nowrap flex-shrink-0",
                    activeTab === tab
                      ? "bg-[#00FF7F] border-[#00FF7F] text-black"
                      : "border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black",
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsByCategory[activeTab].map((skill) => (
              <div key={skill.name} className="bg-[#1A1F25] rounded-lg p-6 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-lg">{skill.name}</h3>
                  <span className="text-[#00FF7F] bg-[#1E242C] px-2 py-1 rounded text-sm">{skill.progress}%</span>
                </div>
                <div className="h-2 bg-[#1E242C] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00FF7F] rounded-full transition-all duration-500"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}