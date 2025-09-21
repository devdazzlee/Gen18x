"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image 
                src="/logo.png" 
                alt="Gen18x" 
                width={220} 
                height={100} 
                className="h-40 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right Side Navigation & CTA */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gen18x-teal transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gen18x-teal transition-colors duration-200 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gen18x-teal transition-colors duration-200 font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gen18x-teal transition-colors duration-200 font-medium">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-gen18x-teal transition-colors duration-200" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-3">
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-700 hover:text-gen18x-teal hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-2 text-gray-700 hover:text-gen18x-teal hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-2 text-gray-700 hover:text-gen18x-teal hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-gray-700 hover:text-gen18x-teal hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white font-medium w-full py-2 rounded-lg transition-all duration-200">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
