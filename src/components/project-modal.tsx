"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    images: string[]
    long_description: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md sm:max-w-4xl bg-[#1A1F25] text-white border-gray-800 h-full max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-400 text-sm sm:text-base">{project.description}</DialogDescription>
        </DialogHeader>

        {/* Contenedor para la imagen con altura ajustada */}
        <div className="relative mt-4 bg-[#1E242C] rounded-lg overflow-hidden sm:h-[60vh] h-[40vh] max-h-[60vh]">
          <div className="absolute inset-0">
            <Image
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-contain w-full h-full"
              priority
            />
          </div>
          {/* Los botones de navegación */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={previousImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-[#00FF7F]" : "bg-gray-500"
                  }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>


        <div className="mt-4 text-gray-300">
          <p className="leading-relaxed text-sm sm:text-base">{project.long_description}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}