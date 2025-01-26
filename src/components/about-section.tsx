"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface AboutSectionProps {
  onResumeClick: () => void
}

export default function AboutSection({ onResumeClick }: AboutSectionProps) {
  return (
    <section id="about" className="relative min-h-screen bg-[#1E242C] py-20">
      {/* "ABOUT ME" text */}
      <div className="absolute left-0 right-0 top-8 md:right-6 md:top-1/2 md:-translate-y-1/2 text-center md:text-right">
        <div className="text-gray-400 tracking-[0.2em] text-sm md:vertical-text">ABOUT ME</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4 md:hidden">About Me</h2>
            <p className="text-white text-lg leading-relaxed">
              Hello! I&apos;m Marco Castillo, a passionate software engineer. I develop web applications, mobile applications,
              and desktop applications. My core skill is based on JavaScript and I love to do most of the things using
              JavaScript. I love to make the web more open to the world. I have graduated with a bachelor&apos;s degree in
              Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any
              kind of job opportunity that suits my interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90 w-full sm:w-auto"
                onClick={onResumeClick}
              >
                Get Resume
              </Button>
              <Button
                variant="outline"
                className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black w-full sm:w-auto"
              >
                My Skills
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-square max-w-md mx-auto">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gy3LHHAVKNJSVAm1iWmT37MWXUsjG2.png"
              alt="Profile picture"
              fill
              className="object-cover rounded-lg grayscale"
              priority
            /> */}
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