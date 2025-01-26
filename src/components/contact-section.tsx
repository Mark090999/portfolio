import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-[#1E242C] py-20">
      {/* "CONTACT" text */}
      <div className="absolute left-0 right-0 top-8 md:right-6 md:top-1/2 md:-translate-y-1/2 text-center md:text-right">
        <div className="text-gray-400 tracking-[0.2em] text-sm md:vertical-text">CONTACT</div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed">
              I am interested in working with any company that thinks my skill will be helpful for them. If you are
              looking for someone like me, please let me know. Or you can just 'say hi' to me.
            </p>
            <Button className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90 px-8 py-6 text-lg">Contact Me</Button>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-white text-2xl mb-2">Email</h3>
              <p className="text-white">
                zonayedpca@gmail.com <span className="text-gray-400">(Recommended)</span>
              </p>
            </div>

            {/* Skype */}
            <div>
              <h3 className="text-white text-2xl mb-2">Skype</h3>
              <p className="text-white">
                zonayedpca <span className="text-gray-400">(Always Available)</span>
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white text-2xl mb-2">Social</h3>
              <p className="text-white">
                Facebook/Twitter - @zonayedpca <span className="text-gray-400">(Slow response)</span>
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-white text-2xl mb-2">Address</h3>
              <p className="text-white">Gouripur, Daudkandi, Cumilla, Bangladesh - 3517</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}