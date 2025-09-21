import Link from "next/link"
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gen18x-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gen18x-teal p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold">Gen18x</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with world-class computer products by building a seamless bridge between global
              suppliers and local markets.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-gen18x-teal cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-gen18x-teal cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-gen18x-teal cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-gen18x-teal cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-gen18x-teal transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-gen18x-teal transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-gen18x-teal transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-gen18x-teal transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Our Services</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Global Computer Imports</p>
              <p className="text-gray-300">Laptop Distribution</p>
              <p className="text-gray-300">Tech Parts Supply</p>
              <p className="text-gray-300">Quality Assurance</p>
              <p className="text-gray-300">Logistics Solutions</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gen18x-teal" />
                <span className="text-gray-300">info@gen18x.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gen18x-teal" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gen18x-teal" />
                <span className="text-gray-300">Global Headquarters</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Gen18X Global Imports. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
