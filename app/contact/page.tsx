"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageSquare, Send, Users, Headphones, Building } from "lucide-react"

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
        viewport={{ once: true, amount: 0.3 }}
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
                    <motion.form className="space-y-6" variants={containerVariants}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={inputVariants} className="space-y-2">
                          <label className="text-sm font-medium text-gen18x-navy">First Name</label>
                          <Input placeholder="John" className="border-gen18x-teal/20 focus:border-gen18x-teal" />
                        </motion.div>
                        <motion.div variants={inputVariants} className="space-y-2">
                          <label className="text-sm font-medium text-gen18x-navy">Last Name</label>
                          <Input placeholder="Doe" className="border-gen18x-teal/20 focus:border-gen18x-teal" />
                        </motion.div>
                      </div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Email Address</label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          className="border-gen18x-teal/20 focus:border-gen18x-teal"
                        />
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Company Name</label>
                        <Input placeholder="Your Company" className="border-gen18x-teal/20 focus:border-gen18x-teal" />
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Phone Number</label>
                        <Input
                          placeholder="+1 (555) 123-4567"
                          className="border-gen18x-teal/20 focus:border-gen18x-teal"
                        />
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Subject</label>
                        <Input
                          placeholder="Technology Sourcing Inquiry"
                          className="border-gen18x-teal/20 focus:border-gen18x-teal"
                        />
                      </motion.div>

                      <motion.div variants={inputVariants} className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Message</label>
                        <Textarea
                          placeholder="Tell us about your technology needs, quantity requirements, and timeline..."
                          rows={5}
                          className="border-gen18x-teal/20 focus:border-gen18x-teal"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button className="w-full bg-gen18x-teal hover:bg-gen18x-teal/90 text-white py-3">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
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
                            <p className="text-gen18x-teal font-medium">sales@gen18x.com</p>
                            <p className="text-gen18x-teal font-medium">support@gen18x.com</p>
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
                            <p className="text-gen18x-teal font-medium">+1 (555) 123-4567</p>
                            <p className="text-gen18x-teal font-medium">+1 (555) 123-4568</p>
                            <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
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
        viewport={{ once: true, amount: 0.3 }}
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
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-white border-gen18x-teal/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Headphones className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">24/7 Support</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Round-the-clock technical support and customer service for urgent inquiries and existing orders.
                    </p>
                    <Button
                      variant="outline"
                      className="border-gen18x-teal text-gen18x-teal hover:bg-gen18x-teal hover:text-white bg-transparent"
                    >
                      Get Immediate Help
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-white border-gen18x-teal/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Users className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Schedule Consultation</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Book a personalized consultation with our technology experts to discuss your specific requirements
                      and solutions.
                    </p>
                    <Button
                      variant="outline"
                      className="border-gen18x-teal text-gen18x-teal hover:bg-gen18x-teal hover:text-white bg-transparent"
                    >
                      Book Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-white border-gen18x-teal/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <MessageSquare className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Live Chat</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Start an instant conversation with our support team for quick questions and real-time assistance.
                    </p>
                    <Button
                      variant="outline"
                      className="border-gen18x-teal text-gen18x-teal hover:bg-gen18x-teal hover:text-white bg-transparent"
                    >
                      Start Chat
                    </Button>
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
        viewport={{ once: true, amount: 0.3 }}
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
                    <h3 className="font-semibold text-gen18x-navy">North America HQ</h3>
                    <p className="text-sm text-gray-600">New York, USA</p>
                    <p className="text-sm text-gen18x-teal">+1 (555) 123-4567</p>
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
                    <h3 className="font-semibold text-gen18x-navy">Europe Office</h3>
                    <p className="text-sm text-gray-600">London, UK</p>
                    <p className="text-sm text-gen18x-teal">+44 20 7123 4567</p>
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
                    <h3 className="font-semibold text-gen18x-navy">Asia Pacific</h3>
                    <p className="text-sm text-gray-600">Singapore</p>
                    <p className="text-sm text-gen18x-teal">+65 6123 4567</p>
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
