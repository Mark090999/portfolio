import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"
import { supabase } from "@/lib/supabase"

const TEMPORARY_EMAIL_DOMAINS = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "maildrop.cc",
  "yopmail.com",
  "tempmail.net"
]

const isTemporaryEmail = (email: string) => {
  const domain = email.split('@')[1]
  return TEMPORARY_EMAIL_DOMAINS.includes(domain)
}

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isFileAvailable, setIsFileAvailable] = useState(false) // Estado para mostrar el enlace de descarga

  const getIp = async () => {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip
  }

  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent
    let browser = 'Unknown'
    if (userAgent.includes('Chrome')) browser = 'Chrome'
    else if (userAgent.includes('Firefox')) browser = 'Firefox'
    else if (userAgent.includes('Safari')) browser = 'Safari'
    return browser
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("") // Reseteamos el error

    // Validación del correo electrónico
    if (isTemporaryEmail(email)) {
      setErrorMessage("Please use a valid email address, not a temporary one.")
      setIsSubmitting(false)
      return
    }

    // Obtener la IP y el navegador
    const ip = await getIp()
    const browser = getBrowserInfo()

    // Guardar la información en Supabase
    const { error } = await supabase
      .from('requests')
      .insert([{
        email,
        ip,
        browser,
        //timestamp: new Date().toISOString(), // Puedes agregar más campos según sea necesario
      }])

    if (error) {
      console.error('Error al guardar los datos:', error)
    } else {
      // Simulamos el envío de correo electrónico - reemplazar con la lógica real
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simular la disponibilidad de un archivo (esto debe adaptarse a tu caso)
      setIsFileAvailable(true) // Esto activará la opción de descarga
    }

    // Resetear el formulario y cerrar el modal
    setEmail("")
    setIsSubmitting(false)
    // Si el archivo está disponible, cerrar el modal después de mostrar el enlace
    if (isFileAvailable) {
      onClose()
    }
  }

  const handleDownloadClick = () => {
    // Llamamos a onClose() cuando el usuario haga clic en el enlace de descarga
    setIsFileAvailable(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1A1F25] text-white border-gray-800 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Download Resume</DialogTitle>
        </DialogHeader>
        {!isFileAvailable && (<form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email address
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#1E242C] border-gray-700 text-white pl-10"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <p className="text-sm text-gray-400">Your resume will be sent to this email address.</p>
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Resume"}
          </Button>
        </form>)}
        {isFileAvailable && (
          <div className="mt-4 text-center">
            <a
              href="https://qkyaigeccoxcigkweqmu.supabase.co/storage/v1/object/public/portfolio//cv.pdf"  // Reemplaza con la URL real del archivo
              download
              target="_blank"
              className="text-lg text-[#00FF7F] underline"
              onClick={handleDownloadClick}  // Llamar a onClose() al hacer clic en el enlace
            >
              Click here to download your resume
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}