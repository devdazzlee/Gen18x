"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageSquare, Send, Users, Headphones, Building, Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { getApiUrl, API_CONFIG } from "@/lib/config"

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Increased stagger duration
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Increased initial y offset
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Smoother transition
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  }

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, // Added initial y offset and reduced scale
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } }, // Smoother and more pronounced entry
    hover: { scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3 } }, // More distinct hover
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -50 }, // Increased initial x offset
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Smoother transition
  }

  // Form state
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData)

      // Send email to backend API
      const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.SEND_EMAIL), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.',
      })

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation errors
        const fieldErrors: Record<string, string> = {}
        error.issues.forEach((issue: z.ZodIssue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message
          }
        })
        setErrors(fieldErrors)
        toast.error('Please check the form for errors')
      } else {
        // API or network errors
        toast.error('Failed to send message', {
          description: 'Please try again or contact us directly via email or phone.',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-gen18x-light-blue/10 via-white to-gen18x-light-green/10 py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div variants={slideInFromLeft}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Contact Gen18X</Badge>
            </motion.div>
            <motion.h1
              variants={slideInFromLeft}
              className="text-4xl md:text-6xl font-heading font-bold text-gen18x-navy leading-tight text-balance"
            >
              Get in Touch with Us Today
            </motion.h1>
            <motion.p variants={slideInFromRight} className="text-xl text-gray-600 leading-relaxed text-pretty">
              Ready to transform your technology supply chain? Our team of experts is here to help you access
              global-quality computer systems and parts. Let's start the conversation.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy">Send Us a Message</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours. We're here to help with all
                  your technology sourcing needs.
                </p>
              </motion.div>

              <motion.div variants={slideInFromLeft} whileHover="hover">
                <Card className="border-gen18x-teal/20">
                  <CardContent className="p-8">
                    <motion.form onSubmit={handleSubmit} className="space-y-6" variants={containerVariants}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={inputVariants} className="space-y-2">
                          <label className="text-sm font-medium text-gen18x-navy">First Name *</label>
                          <Input 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John" 
                            className={`border-gen18x-teal/20 focus:border-gen18x-teal ${errors.firstName ? 'border-red-500' : ''}`}
                            disabled={isLoading}
                          />
                          {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                        </motion.div>
                        <motion.div variants={inputVariants} className="space-y-2">
                          <label className="text-sm font-medium text-gen18x-navy">Last Name *</label>
                          <Input 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe" 
                            className={`border-gen18x-teal/20 focus:border-gen18x-teal ${errors.lastName ? 'border-red-500' : ''}`}
                            disabled={isLoading}
                          />
                          {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                        </motion.div>
                      </div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`border-gen18x-teal/20 focus:border-gen18x-teal ${errors.email ? 'border-red-500' : ''}`}
                          disabled={isLoading}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Company Name *</label>
                        <Input 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company" 
                          className={`border-gen18x-teal/20 focus:border-gen18x-teal ${errors.company ? 'border-red-500' : ''}`}
                          disabled={isLoading}
                        />
                        {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Phone Number *</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className={`border-gen18x-teal/20 focus:border-gen18x-teal ${errors.phone ? 'border-red-500' : ''}`}
                          disabled={isLoading}
                        />
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Subject *</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Technology Sourcing Inquiry"
                          className={`border-gen18x-teal/20 focus:border-gen18x-teal ${errors.subject ? 'border-red-500' : ''}`}
                          disabled={isLoading}
                        />
                        {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your technology needs, quantity requirements, and timeline..."
                          rows={5}
                          className={`border-gen18x-teal/20 focus:border-gen18x-teal ${errors.message ? 'border-red-500' : ''}`}
                          disabled={isLoading}
                        />
                        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button 
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gen18x-teal hover:bg-gen18x-teal/90 hover:text-white text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  Multiple ways to reach us. Choose the method that works best for you, and we'll respond promptly to
                  discuss your technology needs.
                </p>
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={slideInFromRight}>
                  <Card className="border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gen18x-teal/10 p-3 rounded-lg">
                          <Mail className="h-6 w-6 text-gen18x-teal" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gen18x-navy mb-1">Email Us</h3>
                          <p className="text-gray-600 mb-2">Send us an email anytime</p>
                          <div className="space-y-1">
                            <p className="text-gen18x-teal font-medium">info@gen18x.com</p>
                            <p className="text-gen18x-teal font-medium">Jrazi@gen18x.com</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={slideInFromRight}>
                  <Card className="border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gen18x-teal/10 p-3 rounded-lg">
                          <Phone className="h-6 w-6 text-gen18x-teal" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gen18x-navy mb-1">Call Us</h3>
                          <p className="text-gray-600 mb-2">Speak with our team directly</p>
                          <div className="space-y-1">  
                            <p className="text-gen18x-teal font-medium">+971 56 556 2134</p>
                            <p className="text-gen18x-teal font-medium">+92 328 820 0999</p>
                            {/* <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM GST</p> */}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Support Options */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div variants={itemVariants}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Support Options</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-heading font-bold text-gen18x-navy text-balance"
            >
              Multiple Ways to Get Help
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Whether you need immediate assistance or want to schedule a consultation, we offer various support
              channels to meet your needs.
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={cardVariants} whileHover="hover" className="h-full">
              <Card className="h-full bg-white border-gen18x-teal/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="h-full p-8 text-center space-y-6 flex flex-col">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Headphones className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">24/7 Support</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                      Round-the-clock technical support and customer service for urgent inquiries and existing orders.
                    </p>
                    <a href="tel:+971565562134" className="block">
                      <Button
                        variant="outline"
                        className="border-gen18x-teal text-gen18x-teal bg-transparent w-full"
                      >
                        <span className="text-inherit">Call Now</span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover" className="h-full">
              <Card className="h-full bg-white border-gen18x-teal/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="h-full p-8 text-center space-y-6 flex flex-col">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Users className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Schedule Consultation</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                      Book a personalized consultation with our technology experts to discuss your specific requirements
                      and solutions.
                    </p>
                    <a href="mailto:info@gen18x.com?subject=Schedule Consultation" className="block">
                      <Button
                        variant="outline"
                        className="border-gen18x-teal text-gen18x-teal bg-transparent w-full"
                      >
                        <span className="text-inherit">Email Us</span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover" className="h-full">
              <Card className="h-full bg-white border-gen18x-teal/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="h-full p-8 text-center space-y-6 flex flex-col">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <MessageSquare className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Live Chat</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                      Start an instant conversation with our support team for quick questions and real-time assistance.
                    </p>
                    <a href="mailto:info@gen18x.com?subject=Live Chat Inquiry" className="block">
                      <Button
                        variant="outline"
                        className="border-gen18x-teal text-gen18x-teal bg-transparent w-full"
                      >
                        <span className="text-inherit">Send Message</span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Global Offices */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div variants={itemVariants}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Global Presence</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-heading font-bold text-gen18x-navy text-balance"
            >
              Our Worldwide Offices
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              With offices and partners around the globe, we provide local support and expertise wherever you are.
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={slideInFromLeft} whileHover="hover">
              <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-gen18x-teal/10 p-3 rounded-lg w-fit mx-auto">
                    <Building className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gen18x-navy">United States</h3>
                    <p className="text-sm text-gray-600">North America</p>
                    {/* <p className="text-sm text-gen18x-teal">+971 56 556 2134</p> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={slideInFromRight} whileHover="hover">
              <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-gen18x-teal/10 p-3 rounded-lg w-fit mx-auto">
                    <Building className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gen18x-navy">Dubai</h3>
                    <p className="text-sm text-gray-600">Middle East</p>
                    <p className="text-sm text-gen18x-teal">+971 56 556 2134</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={slideInFromLeft} whileHover="hover">
              <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-gen18x-teal/10 p-3 rounded-lg w-fit mx-auto">
                    <Building className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gen18x-navy">Pakistan</h3>
                    <p className="text-sm text-gray-600">South Asia</p>
                    <p className="text-sm text-gen18x-teal">+92 328 820 0999</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
