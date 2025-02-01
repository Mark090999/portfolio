import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  onClick: () => void
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1A1F25] rounded-lg overflow-hidden cursor-pointer group" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain w-full h-full"
          //className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-sm bg-[#1E242C] text-gray-400 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          {githubUrl && (
            <Link href={githubUrl} className="text-gray-400 hover:text-[#00FF7F]" onClick={(e) => e.stopPropagation()}>
              <Github className="h-5 w-5" />
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} className="text-gray-400 hover:text-[#00FF7F]" onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}