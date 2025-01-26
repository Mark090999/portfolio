"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import { ResumeModal } from "@/components/resume-modal"
import SkillsSection from "@/components/skill-section"
import ProjectsSection from "@/components/project-section"
import Footer from "@/components/footer"

export default function PortfolioLandingPage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <div className="min-h-screen bg-[#1E242C] text-white pt-20">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4 bg-[#1E242C]/90 backdrop-blur-sm">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-[#00FF7F]">
              <div className="h-12 w-12 bg-[#00FF7F] text-black flex items-center justify-center clip-hex">MC</div>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#about" className="hover:text-[#00FF7F]">
                ABOUT
              </Link>
              <Link href="#skills" className="hover:text-[#00FF7F]">
                SKILLS
              </Link>
              <Link href="#education" className="hover:text-[#00FF7F]">
                EDUCATION
              </Link>
              <Link href="#experience" className="hover:text-[#00FF7F]">
                EXPERIENCE
              </Link>
              <Link href="#portfolio" className="hover:text-[#00FF7F]">
                PORTFOLIO
              </Link>
              <Link href="#contact" className="hover:text-[#00FF7F]">
                CONTACT
              </Link>
              <Button
                variant="outline"
                className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black"
                onClick={() => setIsResumeModalOpen(true)}
              >
                RESUME
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 flex min-h-[calc(100vh-80px)]">
        {/* Social Links Sidebar */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6">
          <Link href="https://github.com" className="text-gray-400 hover:text-[#00FF7F]">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-400 hover:text-[#00FF7F]">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com" className="text-gray-400 hover:text-[#00FF7F]">
            <Twitter className="h-6 w-6" />
          </Link>
          <div className="h-32 w-[2px] bg-gray-400 mx-auto mt-4"></div>
          <div className="vertical-text text-gray-400 tracking-widest">FOLLOW ME</div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl ml-24">
          <p className="text-[#00FF7F] text-xl mb-4">Hello! I am</p>
          <h1 className="text-6xl font-bold mb-4">Marco Castillo</h1>
          <div className="space-y-2 mb-8">
            <h2 className="text-[#00FF7F] text-2xl font-semibold">Full Stack Developer</h2>
            <p className="text-gray-400">Web Developer • Programmer • Software Engineer</p>
          </div>
          <div className="flex gap-4">
            <Button
              className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90"
              onClick={() => setIsResumeModalOpen(true)}
            >
              Get Resume
            </Button>
            <Button variant="outline" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black">
              About Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection onResumeClick={() => setIsResumeModalOpen(true)} />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      {/* <EducationSection /> */}

      {/* Experience Section */}
      {/* <ExperienceSection /> */}

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />

      <Footer />
      <style jsx global>{`
        .clip-hex {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  )
}

