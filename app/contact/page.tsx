import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Users, Headphones, Building } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gen18x-light-blue/10 via-white to-gen18x-light-green/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Contact Gen18X</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gen18x-navy leading-tight text-balance">
              Get in Touch with Us Today
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty">
              Ready to transform your technology supply chain? Our team of experts is here to help you access
              global-quality computer systems and parts. Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy">Send Us a Message</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours. We're here to help with all
                  your technology sourcing needs.
                </p>
              </div>

              <Card className="border-gen18x-teal/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">First Name</label>
                        <Input placeholder="John" className="border-gen18x-teal/20 focus:border-gen18x-teal" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gen18x-navy">Last Name</label>
                        <Input placeholder="Doe" className="border-gen18x-teal/20 focus:border-gen18x-teal" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gen18x-navy">Email Address</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        className="border-gen18x-teal/20 focus:border-gen18x-teal"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gen18x-navy">Company Name</label>
                      <Input placeholder="Your Company" className="border-gen18x-teal/20 focus:border-gen18x-teal" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gen18x-navy">Phone Number</label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        className="border-gen18x-teal/20 focus:border-gen18x-teal"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gen18x-navy">Subject</label>
                      <Input
                        placeholder="Technology Sourcing Inquiry"
                        className="border-gen18x-teal/20 focus:border-gen18x-teal"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gen18x-navy">Message</label>
                      <Textarea
                        placeholder="Tell us about your technology needs, quantity requirements, and timeline..."
                        rows={5}
                        className="border-gen18x-teal/20 focus:border-gen18x-teal"
                      />
                    </div>

                    <Button className="w-full bg-gen18x-teal hover:bg-gen18x-teal/90 text-white py-3">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  Multiple ways to reach us. Choose the method that works best for you, and we'll respond promptly to
                  discuss your technology needs.
                </p>
              </div>

              <div className="space-y-6">
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

                <Card className="border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gen18x-teal/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-gen18x-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gen18x-navy mb-1">Visit Us</h3>
                        <p className="text-gray-600 mb-2">Global headquarters</p>
                        <div className="space-y-1">
                          <p className="text-gen18x-teal font-medium">123 Technology Drive</p>
                          <p className="text-gen18x-teal font-medium">Global Business Center</p>
                          <p className="text-gen18x-teal font-medium">New York, NY 10001</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gen18x-teal/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-gen18x-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gen18x-navy mb-1">Business Hours</h3>
                        <p className="text-gray-600 mb-2">When we're available</p>
                        <div className="space-y-1">
                          <p className="text-gen18x-teal font-medium">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                          <p className="text-gen18x-teal font-medium">Saturday: 10:00 AM - 4:00 PM EST</p>
                          <p className="text-gen18x-teal font-medium">Sunday: Closed</p>
                          <p className="text-sm text-gray-500 mt-2">24/7 Emergency Support Available</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Support Options</Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">Multiple Ways to Get Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Whether you need immediate assistance or want to schedule a consultation, we offer various support
              channels to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-light-green/20 text-gen18x-teal border-gen18x-teal/20">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">Common Questions Answered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Find quick answers to the most common questions about our services, processes, and partnerships.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-gen18x-teal/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gen18x-navy mb-2">
                  What types of technology products do you source?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in laptops, computer components (CPUs, memory, storage, graphics cards), displays,
                  mobile devices, and tech accessories from leading global manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gen18x-teal/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gen18x-navy mb-2">
                  How do you ensure product quality and authenticity?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product undergoes rigorous multi-point quality inspection, compliance certification, and
                  performance benchmarking. We maintain direct partnerships with verified manufacturers to guarantee
                  authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gen18x-teal/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gen18x-navy mb-2">What are your minimum order quantities?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Minimum order quantities vary by product category and manufacturer. We work with businesses of all
                  sizes, from small retailers to large enterprises. Contact us to discuss your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gen18x-teal/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gen18x-navy mb-2">How long does delivery typically take?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Delivery times depend on product availability and destination. Typically, we deliver within 7-14
                  business days for in-stock items. We provide real-time tracking for all shipments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gen18x-teal/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gen18x-navy mb-2">
                  Do you offer warranty and support services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we provide comprehensive warranty programs with extended support options, replacement services,
                  and 24/7 technical assistance for all our products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Global Presence</Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">Our Worldwide Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              With offices and partners around the globe, we provide local support and expertise wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
