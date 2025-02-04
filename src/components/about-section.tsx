"use client"

import { Button } from "@/components/ui/button"

interface AboutSectionProps {
  onResumeClick: () => void
}

export default function AboutSection({ onResumeClick }: AboutSectionProps) {
  return (
    <section id="about" className="relative min-h-screen bg-[#1E242C] py-20">
      {/* "ABOUT ME" text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
      <div className="vertical-text text-gray-400 tracking-[0.2em] text-sm hidden md:block">ABOUT ME</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="text-center text-gray-400 tracking-[0.2em] text-sm md:hidden">ABOUT ME</div>
            <p className="text-white text-lg leading-relaxed text-justify">
              Hello! I&apos;m Marco Castillo, a passionate software engineer with 5 years of experience in FullStack development, 
              specialized in creating efficient and scalable technological solutions that meet the specific needs of businesses. 
              Throughout my career, I have designed, implemented, and optimized systems for sectors such as insurance and enterprise management (ERP). 
              I handle modern technologies like JavaScript (Node.js, React.js), Laravel, .NET Core, Flutter, and both relational and non-relational databases, with a focus on improving operational efficiency and user experience.
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
                onClick={() => {
                  const element = document.getElementById("skills")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
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