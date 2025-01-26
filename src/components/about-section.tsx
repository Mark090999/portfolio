"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface AboutSectionProps {
  onResumeClick: () => void
}

export default function AboutSection({ onResumeClick }: AboutSectionProps) {
  return (
    <section id="about" className="relative min-h-screen bg-[#1E242C] py-20">
      {/* Vertical "ABOUT ME" text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <div className="vertical-text text-gray-400 tracking-[0.2em] text-sm">ABOUT ME</div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed">
              Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications,
              and desktop applications. My core skill is based on JavaScript and I love to do most of the things using
              JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in
              Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any
              kind of job opportunity that suits my interests.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90" onClick={onResumeClick}>
                Get Resume
              </Button>
              <Button variant="outline" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black">
                My Skills
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/not-found.png"
              alt="Profile picture"
              fill
              className="object-cover rounded-lg grayscale"
              priority
            />
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