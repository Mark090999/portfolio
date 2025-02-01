"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"

const tabs = ["Web", "Others"] as const

const projects = {
  Web: [
    {
      title: "Novacita",
      description: "Find a healthcare professional and schedule an appointment at your convenience.",
      image: "/images/novacita/novacita.png",
      technologies: ["Reactjs", "Laravel", "Ant Design"],
      githubUrl: "#",
      liveUrl: "https://novacita.com",
      images: [
        "/images/novacita/novacita.png",
        "/images/novacita/novacita-1.png",
      ],
      longDescription:
        "Find a specialist or healthcare professional of your choice and schedule an appointment with them at a date and time that is convenient for you.",
    },
    {
      title: "Novacita App",
      description: "Find a healthcare professional and schedule an appointment at your convenience.",
      image: "/images/novacita/novacita-app.png",
      technologies: ["Dart", "Flutter", "Android", "IOS"],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=com.novacitasoft.novacita&pcampaignid=web_share",
      images: [
        "/images/novacita/novacita-app.png",
      ],
      longDescription:
        "Find a specialist or healthcare professional of your choice and schedule an appointment with them at a date and time that is convenient for you.",
    },
    {
      title: "Mantis Speed",
      description: "Platform that connects people with professionals offering domestic services like cleaning, repairs, gardening, and childcare.",
      image: "/images/mantis-speed/mantis.png",
      technologies: ["Nodejs", "Vuejs", "Laravel", "CoreUi"],
      githubUrl: "#",
      liveUrl: "#",
      images: [
        "/images/mantis-speed/mantis.png?height=800&width=600",
        "/images/mantis-speed/mantis-1.png?height=800&width=600",
      ],
      longDescription:
        "Platform that connects people who need domestic services with professionals in the field. They offer a variety of services such as cleaning, gardening, repairs, childcare, and more. It's an easy way to find help for household tasks.",
    },
    {
      title: "Mantis Speed App",
      description: "Platform that connects people with professionals offering domestic services like cleaning, repairs, gardening, and childcare.",
      image: "/images/mantis-speed/mantis-app.png",
      technologies: ["Dart", "Flutter", "Android", "IOS"],
      githubUrl: "#",
      liveUrl: "#",
      images: [
        "/images/mantis-speed/mantis-app.png?height=800&width=600",
        "/images/mantis-speed/mantis-app-1.png?height=800&width=600",
      ],
      longDescription:
        "Platform that connects people who need domestic services with professionals in the field. They offer a variety of services such as cleaning, gardening, repairs, childcare, and more. It's an easy way to find help for household tasks.",
    },
    {
      title: "Jexa Jeans",
      description: "Platform that connects people with professionals offering domestic services like cleaning, repairs, gardening, and childcareA sales and inventory system helps businesses track sales and manage inventory in real-time, providing reports for better decision-making and operational efficiency.",
      image: "/images/jexa-jeans/jexa.png",
      technologies: ["Dart", "Flutter", "Android", "IOS"],
      githubUrl: "#",
      liveUrl: "#",
      images: [
        "/images/jexa-jeans/jexa.png?height=800&width=600",
        "/images/jexa-jeans/jexa-1.png?height=800&width=600",
      ],
      longDescription:
        "A sales and inventory system is a digital tool that helps businesses manage sales transactions and inventory levels efficiently. It tracks sales, updates stock in real-time, and generates detailed reports on product performance and stock trends.",
    },
  ],
  Others: [
    // Add other projects here
  ],
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Web")
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects.Web)[0]>(null)

  return (
    <section id="portfolio" className="relative min-h-screen bg-[#1E242C] py-20">
      {/* "PORTFOLIO" text */}
      <div className="absolute left-0 right-0 top-8 md:left-6 md:top-1/2 md:-translate-y-1/2 text-center md:text-left">
        <div className="text-gray-400 tracking-[0.2em] text-sm md:hidden">PORTFOLIO</div>
        <div className="vertical-text text-gray-400 tracking-[0.2em] text-sm hidden md:block">PORTFOLIO</div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6">
        <div className="md:ml-16">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2 rounded border transition-colors duration-200",
                  activeTab === tab
                    ? "bg-[#00FF7F] border-[#00FF7F] text-black"
                    : "border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects[activeTab].map((project) => (
              <ProjectCard key={project.title} {...project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      )}
    </section>
  )
}