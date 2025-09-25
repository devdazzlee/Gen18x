"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Laptop,
  Cpu,
  HardDrive,
  Monitor,
  Globe,
  Shield,
  Truck,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Settings,
} from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Increased stagger for more noticeable effect
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const slideInFromLeft = {
  hidden: { opacity: 0, x: -150 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
}

const slideInFromRight = {
  hidden: { opacity: 0, x: 150 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
}

const slideInFromTop = {
  hidden: { opacity: 0, y: -70 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const slideInFromBottom = {
  hidden: { opacity: 0, y: 70 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const mainServiceCardVariants = {
  hidden: { opacity: 0, y: 100, rotateZ: -5 },
  show: { opacity: 1, y: 0, rotateZ: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)", transition: { duration: 0.3 } },
}

const mainServiceCardContentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3, // Delay content animation until card is in place
    },
  },
}

const mainServiceCardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const additionalServiceCardVariants = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -200 : 200, scale: 0.8 }, // Increased x value for more pronounced slide
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, delay: i * 0.1 } }, // Added delay based on index
  hover: { scale: 1.05, y: -5, boxShadow: "0 8px 16px rgba(0,0,0,0.1)", transition: { duration: 0.3 } },
})

const processStepVariants = {
  hidden: { opacity: 0, y: 70, rotateX: -30 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      stiffness: 100,
      damping: 10,
      duration: 0.7,
    },
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gen18x-light-blue/10 via-white to-gen18x-light-green/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={slideInFromTop}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Our Services</Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-heading font-bold text-gen18x-navy leading-tight text-balance"
              variants={slideInFromLeft}
            >
              Comprehensive Technology Solutions
            </motion.h1>
            <motion.p className="text-xl text-gray-600 leading-relaxed text-pretty" variants={slideInFromRight}>
              From global sourcing to local delivery, we provide end-to-end technology solutions that drive your
              business forward. Discover our full range of services designed to meet your technology needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }} // Adjusted viewport amount
            variants={containerVariants}
          >
            <motion.div variants={mainServiceCardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <motion.div variants={mainServiceCardContentVariants}>
                  <CardContent className="p-8 space-y-6">
                    <motion.div
                      variants={mainServiceCardItemVariants}
                      className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors"
                    >
                      <Laptop className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <motion.h3
                        variants={mainServiceCardItemVariants}
                        className="text-xl font-heading font-semibold text-gen18x-navy mb-3"
                      >
                        Laptop Distribution
                      </motion.h3>
                      <motion.p variants={mainServiceCardItemVariants} className="text-gray-600 leading-relaxed mb-4">
                        Premium laptops from top global manufacturers including business laptops, gaming systems, and
                        ultrabooks with comprehensive warranty support.
                      </motion.p>
                      <motion.ul variants={mainServiceCardContentVariants} className="space-y-2 mb-6">
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Business & Enterprise Laptops</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Gaming & High-Performance Systems</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Ultrabooks & Portable Solutions</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Workstation & Creative Systems</span>
                        </motion.li>
                      </motion.ul>
                    </div>
                    <motion.div variants={mainServiceCardItemVariants}>
                      <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div variants={mainServiceCardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <motion.div variants={mainServiceCardContentVariants}>
                  <CardContent className="p-8 space-y-6">
                    <motion.div
                      variants={mainServiceCardItemVariants}
                      className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors"
                    >
                      <Cpu className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <motion.h3
                        variants={mainServiceCardItemVariants}
                        className="text-xl font-heading font-semibold text-gen18x-navy mb-3"
                      >
                        Computer Components
                      </motion.h3>
                      <motion.p variants={mainServiceCardItemVariants} className="text-gray-600 leading-relaxed mb-4">
                        High-performance processors, memory, storage, and graphics cards. Direct partnerships ensure
                        authentic products and competitive pricing.
                      </motion.p>
                      <motion.ul variants={mainServiceCardContentVariants} className="space-y-2 mb-6">
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">CPUs & Processors</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Memory & RAM Modules</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Graphics Cards & GPUs</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Motherboards & Chipsets</span>
                        </motion.li>
                      </motion.ul>
                    </div>
                    <motion.div variants={mainServiceCardItemVariants}>
                      <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div variants={mainServiceCardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <motion.div variants={mainServiceCardContentVariants}>
                  <CardContent className="p-8 space-y-6">
                    <motion.div
                      variants={mainServiceCardItemVariants}
                      className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors"
                    >
                      <HardDrive className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <motion.h3
                        variants={mainServiceCardItemVariants}
                        className="text-xl font-heading font-semibold text-gen18x-navy mb-3"
                      >
                        Storage Solutions
                      </motion.h3>
                      <motion.p variants={mainServiceCardItemVariants} className="text-gray-600 leading-relaxed mb-4">
                        Enterprise and consumer storage solutions including SSDs, HDDs, and network storage systems for
                        all your data needs.
                      </motion.p>
                      <motion.ul variants={mainServiceCardContentVariants} className="space-y-2 mb-6">
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Solid State Drives (SSDs)</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Hard Disk Drives (HDDs)</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Network Attached Storage</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">External & Portable Storage</span>
                        </motion.li>
                      </motion.ul>
                    </div>
                    <motion.div variants={mainServiceCardItemVariants}>
                      <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div variants={mainServiceCardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <motion.div variants={mainServiceCardContentVariants}>
                  <CardContent className="p-8 space-y-6">
                    <motion.div
                      variants={mainServiceCardItemVariants}
                      className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors"
                    >
                      <Monitor className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <motion.h3
                        variants={mainServiceCardItemVariants}
                        className="text-xl font-heading font-semibold text-gen18x-navy mb-3"
                      >
                        Display Solutions
                      </motion.h3>
                      <motion.p variants={mainServiceCardItemVariants} className="text-gray-600 leading-relaxed mb-4">
                        Professional monitors, gaming displays, and digital signage solutions. From 4K displays to
                        ultra-wide monitors for every application.
                      </motion.p>
                      <motion.ul variants={mainServiceCardContentVariants} className="space-y-2 mb-6">
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">4K & Ultra HD Monitors</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Gaming & High Refresh Displays</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Professional & Creative Monitors</span>
                        </motion.li>
                        <motion.li variants={mainServiceCardItemVariants} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                          <span className="text-sm text-gray-600">Digital Signage Solutions</span>
                        </motion.li>
                      </motion.ul>
                    </div>
                    <motion.div variants={mainServiceCardItemVariants}>
                      <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }} // Increased viewport amount for earlier trigger
            variants={containerVariants}
          >
            <motion.div variants={slideInFromTop}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Additional Services</Badge>
            </motion.div>
            <motion.h2
              className="text-4xl font-heading font-bold text-gen18x-navy text-balance"
              variants={slideInFromLeft}
            >
              Complete Technology Solutions
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty" variants={slideInFromRight}>
              Beyond product sourcing, we offer comprehensive services to support your entire technology supply chain
              and business operations.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }} // Increased viewport amount for earlier trigger
            variants={containerVariants}
          >
            {[
              {
                icon: Globe,
                title: "Global Sourcing",
                description:
                  "Worldwide supplier network providing access to the latest technology products with streamlined import processes and quality assurance.",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Comprehensive testing and certification processes ensure every product meets international standards and performance requirements.",
              },
              {
                icon: Truck,
                title: "Logistics & Delivery",
                description:
                  "Efficient logistics network ensuring timely delivery with real-time tracking and secure packaging for all shipments.",
              },
              {
                icon: Users,
                title: "Customer Support",
                description:
                  "24/7 multilingual customer support with dedicated account managers and technical assistance for all your needs.",
              },
              {
                icon: Settings,
                title: "Custom Solutions",
                description:
                  "Tailored technology solutions designed to meet specific business requirements with flexible terms and personalized service.",
              },
              {
                icon: Award,
                title: "Warranty & Support",
                description:
                  "Comprehensive warranty programs with extended support options and replacement services for peace of mind.",
              },
            ].map((service, i) => (
              <motion.div key={service.title} custom={i} variants={additionalServiceCardVariants(i)} whileHover="hover">
                <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto">
                      <service.icon className="h-8 w-8 text-gen18x-teal" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={slideInFromTop}>
              <Badge className="bg-gen18x-light-green/20 text-gen18x-teal border-gen18x-teal/20">Our Process</Badge>
            </motion.div>
            <motion.h2
              className="text-4xl font-heading font-bold text-gen18x-navy text-balance"
              variants={slideInFromLeft}
            >
              How We Deliver Excellence
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty" variants={slideInFromRight}>
              Our streamlined process ensures quality, reliability, and timely delivery from initial consultation to
              final delivery and ongoing support.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }} // Adjusted viewport amount
            variants={containerVariants}
          >
            <motion.div variants={processStepVariants} className="text-center space-y-4">
              <div className="bg-gen18x-teal/10 p-6 rounded-full w-fit mx-auto">
                <Users className="h-10 w-10 text-gen18x-teal" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gen18x-navy">01</div>
                <h3 className="text-lg font-heading font-semibold text-gen18x-navy">Consultation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Understanding your specific technology needs and requirements
                </p>
              </div>
            </motion.div>

            <motion.div variants={processStepVariants} className="text-center space-y-4">
              <div className="bg-gen18x-teal/10 p-6 rounded-full w-fit mx-auto">
                <Globe className="h-10 w-10 text-gen18x-teal" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gen18x-navy">02</div>
                <h3 className="text-lg font-heading font-semibold text-gen18x-navy">Sourcing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Leveraging our global network to find the best products and prices
                </p>
              </div>
            </motion.div>

            <motion.div variants={processStepVariants} className="text-center space-y-4">
              <div className="bg-gen18x-teal/10 p-6 rounded-full w-fit mx-auto">
                <Shield className="h-10 w-10 text-gen18x-teal" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gen18x-navy">03</div>
                <h3 className="text-lg font-heading font-semibold text-gen18x-navy">Quality Check</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rigorous testing and quality assurance before shipment
                </p>
              </div>
            </motion.div>

            <motion.div variants={processStepVariants} className="text-center space-y-4">
              <div className="bg-gen18x-teal/10 p-6 rounded-full w-fit mx-auto">
                <Truck className="h-10 w-10 text-gen18x-teal" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gen18x-navy">04</div>
                <h3 className="text-lg font-heading font-semibold text-gen18x-navy">Delivery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Secure packaging and timely delivery with tracking support
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gen18x-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-balance" variants={slideInFromLeft}>
              Ready to Access Global Technology Solutions?
            </motion.h2>
            <motion.p className="text-xl text-gray-300 leading-relaxed text-pretty" variants={slideInFromRight}>
              Let's discuss your technology needs and how our comprehensive services can help you access the best
              products from around the world.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={containerVariants}>
              <motion.div variants={slideInFromBottom}>
                <Button size="lg" className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white px-8 py-4 text-lg">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div variants={slideInFromBottom}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gen18x-navy px-8 py-4 text-lg bg-transparent"
                >
                  View Catalog
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
