"use client"

import { ArrowUp, GitFork, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1A1F25] py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Thanks in different languages */}
        <div className="flex gap-4">
          {/* <span className="text-white hover:text-[#00FF7F] cursor-pointer transition-colors">Tanks</span> */}
        </div>

        {/* Right side links */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-[#00FF7F]">
            <Star className="h-4 w-4" /> Start
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#00FF7F]">
            <GitFork className="h-4 w-4" /> Fork
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90 rounded-lg ml-2"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}