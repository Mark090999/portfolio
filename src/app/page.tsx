"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
/* import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section" */
import { ResumeModal } from "@/components/resume-modal"
import Footer from "@/components/footer"
import SkillsSection from "@/components/skill-section"
import ProjectsSection from "@/components/project-section"

export default function PortfolioLandingPage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#contact", label: "CONTACT" },
  ]

  return (
    <div className="min-h-screen bg-[#1E242C] text-white pt-20">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 bg-[#1E242C]/90 backdrop-blur-sm">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-[#00FF7F]">
              <div className="h-12 w-12 bg-[#00FF7F] text-black flex items-center justify-center clip-hex">MC</div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[#00FF7F]">
                  {link.label}
                </Link>
              ))}
              <Button
                variant="outline"
                className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black"
                onClick={() => setIsResumeModalOpen(true)}
              >
                RESUME
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#00FF7F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </nav>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1E242C] py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#00FF7F] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="outline"
                className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black w-full"
                onClick={() => {
                  setIsResumeModalOpen(true)
                  setMobileMenuOpen(false)
                }}
              >
                RESUME
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center min-h-[calc(100vh-80px)]">
        {/* Social Links Sidebar */}
        <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6">
          <Link href="https://github.com/mark090999" className="text-gray-400 hover:text-[#00FF7F]">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/mark090999" className="text-gray-400 hover:text-[#00FF7F]">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com/mark090999" className="text-gray-400 hover:text-[#00FF7F]">
            <Twitter className="h-6 w-6" />
          </Link>
          <div className="h-32 w-[2px] bg-gray-400 mx-auto mt-4"></div>
          <div className="vertical-text text-gray-400 tracking-widest">FOLLOW ME</div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center md:ml-24 text-center md:text-left">
          <p className="text-[#00FF7F] text-xl mb-4">Hello! I am</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Marco Castillo</h1>
          <div className="space-y-2 mb-8">
            <h2 className="text-[#00FF7F] text-xl md:text-2xl font-semibold">Full Stack Developer</h2>
            <p className="text-gray-400">Web Developer • Programmer • Software Engineer</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90 w-full sm:w-auto"
              onClick={() => setIsResumeModalOpen(true)}
            >
              Get Resume
            </Button>
            <Button
              variant="outline"
              className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("about")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              About Me
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Social Icons */}
      <div className="md:hidden flex justify-center space-x-6 mt-8">
        <Link href="https://github.com/mark090999" className="text-gray-400 hover:text-[#00FF7F]">
          <Github className="h-6 w-6" />
        </Link>
        <Link href="https://linkedin.com/in/mark090999" className="text-gray-400 hover:text-[#00FF7F]">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link href="https://twitter.com/mark090999" className="text-gray-400 hover:text-[#00FF7F]">
          <Twitter className="h-6 w-6" />
        </Link>
      </div>

      <AboutSection onResumeClick={() => setIsResumeModalOpen(true)} />
      <SkillsSection />
      {/* <EducationSection />
      <ExperienceSection /> */}
      <ProjectsSection />
      <ContactSection />
      <Footer />

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />

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