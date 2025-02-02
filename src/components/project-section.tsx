import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import { supabase } from "@/lib/supabase"

const tabs = ["Projects"] as const

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Projects")
  const [projects, setProjects] = useState<any[]>([])  // Cambié la definición de projects
  const [selectedProject, setSelectedProject] = useState<null | any>(null) // Cambié la definición de selectedProject

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects') // Asumiendo que la tabla de Supabase se llama "projects"
        .select('*')
        .order('order', { ascending: true })

      if (error) {
        console.error("Error al obtener proyectos:", error)
        return
      }

      setProjects(data || [])
    }

    fetchProjects()
  }, [])

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
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} onClick={() => setSelectedProject(project)} />
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