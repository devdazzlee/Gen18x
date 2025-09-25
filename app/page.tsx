"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, CheckCircle, Laptop, Cpu, Monitor, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HomePage() {
  const heroVideos = [
    {
      src: "/videos/video1.mp4",
      alt: "Technology Showcase Video 1",
    },
    {
      src: "/videos/video3.mp4",
      alt: "Technology Showcase Video 2",
    },
    {
      src: "/videos/video3.mp4",
      alt: "Technology Showcase Video 3",
    },
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1))
    }, 8000) // Change video every 8 seconds (longer for videos)

    return () => clearInterval(interval)
  }, [heroVideos.length])

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? heroVideos.length - 1 : prevIndex - 1))
  }

  const goToSpecificVideo = (index: number) => {
    setCurrentVideoIndex(index)
  }
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner Slider */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full"
      >
        {" "}
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          {" "}
          {heroVideos.map((video, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {" "}
              <video
                src={video.src}
                className="w-full h-full object-contain object-center md:object-cover md:object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />{" "}
              <div className="absolute inset-0 bg-black/30"></div>{" "}
            </div>
          ))}
          {/* Navigation Arrows */}
          <button
            onClick={goToPreviousVideo}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gen18x-navy p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous video"
          >
            {" "}
            <ChevronLeft className="h-6 w-6" />{" "}
          </button>{" "}
          <button
            onClick={goToNextVideo}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gen18x-navy p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next video"
          >
            {" "}
            <ChevronRight className="h-6 w-6" />{" "}
          </button>{" "}
          {/* Dots Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {" "}
            {heroVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSpecificVideo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </motion.section>

      {/* Global Network Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-gen18x-light-blue/5 to-gen18x-light-green/5"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Global Reach</Badge>
              <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">
                Connecting Markets Worldwide
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our extensive global network spans across 50+ countries, connecting you directly with manufacturers,
                distributors, and technology innovators. From Silicon Valley startups to established Asian
                manufacturers, we maintain strategic partnerships that ensure access to the latest technology at
                competitive prices.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gen18x-teal">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gen18x-teal">15</div>
                  <div className="text-gray-600">Regional Offices</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gen18x-teal">1000+</div>
                  <div className="text-gray-600">Supplier Partners</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gen18x-teal">24/7</div>
                  <div className="text-gray-600">Global Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/global-network.jpg"
                alt="Global Technology Network"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-light-green/20 text-gen18x-teal border-gen18x-teal/20">Our Services</Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              From global sourcing to local delivery, we provide end-to-end technology solutions that drive your
              business forward. Our comprehensive service portfolio covers every aspect of technology procurement and
              distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Laptop className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Enterprise Laptop Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Premium business laptops from Dell, HP, Lenovo, and Apple. Bulk procurement for enterprises with
                    custom configurations, imaging services, and comprehensive warranty packages. Volume discounts
                    available for orders over 100 units.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom hardware configurations</li>
                    <li>• Pre-installed software imaging</li>
                    <li>• Extended warranty options</li>
                    <li>• White-glove deployment services</li>
                  </ul>
                  <div className="flex items-center text-gen18x-teal font-medium hover:text-gen18x-navy transition-colors cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Cpu className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">High-Performance Components</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Latest processors from Intel and AMD, high-speed memory modules, NVMe storage solutions, and
                    professional graphics cards. Direct partnerships with manufacturers ensure authentic products,
                    competitive pricing, and priority allocation during shortages.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Intel & AMD latest generation CPUs</li>
                    <li>• DDR5 memory and NVMe storage</li>
                    <li>• Professional GPU solutions</li>
                    <li>• Bulk pricing and priority allocation</li>
                  </ul>
                  <div className="flex items-center text-gen18x-teal font-medium hover:text-gen18x-navy transition-colors cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Globe className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Global Sourcing & Logistics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Worldwide supplier network providing access to the latest technology products. Streamlined import
                    processes, customs clearance, and quality assurance at every step. Full supply chain visibility and
                    tracking from manufacturer to your door.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Direct manufacturer relationships</li>
                    <li>• Customs and compliance handling</li>
                    <li>• Real-time shipment tracking</li>
                    <li>• Quality inspection services</li>
                  </ul>
                  <div className="flex items-center text-gen18x-teal font-medium hover:text-gen18x-navy transition-colors cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Monitor className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">
                    Professional Display Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    4K and 8K monitors, ultra-wide displays, gaming monitors with high refresh rates, and digital
                    signage solutions. From single units to large-scale deployments for trading floors, control rooms,
                    and corporate environments.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 4K/8K professional monitors</li>
                    <li>• Gaming displays up to 360Hz</li>
                    <li>• Digital signage solutions</li>
                    <li>• Multi-monitor configurations</li>
                  </ul>
                  <div className="flex items-center text-gen18x-teal font-medium hover:text-gen18x-navy transition-colors cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product Showcase Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Product Showcase</Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">
              Premium Technology Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Explore our curated selection of high-quality technology products from world-renowned manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/laptop-showcase.jpg"
                    alt="Premium Business Laptops"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gen18x-teal/20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-2">Business Laptops</h3>
                  <p className="text-gray-600 mb-4">
                    Premium laptops for professional use with enterprise-grade security and performance.
                  </p>
                  <Button className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white">View Collection</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/computer-components.jpg"
                    alt="High-Performance Components"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gen18x-teal/20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-2">PC Components</h3>
                  <p className="text-gray-600 mb-4">
                    Latest processors, graphics cards, and memory modules for high-performance systems.
                  </p>
                  <Button className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white">View Collection</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image src="/images/mobile-devices.jpg" alt="Mobile Devices" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gen18x-teal/20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-2">Computers & Gaming PCs</h3>
                  <p className="text-gray-600 mb-4">
                    Powerful desktops and gaming PCs built for performance, reliability, and next-level experiences from
                    global manufacturers.
                  </p>
                  <Button className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white">View Collection</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Why Choose Gen18X</Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">
              Your Trusted Technology Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              We deliver excellence through experience, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-gen18x-teal p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-2">
                    Experienced and Certified Professionals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team brings decades of experience in global technology sourcing, quality assurance, and supply
                    chain management with industry certifications from major manufacturers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-gen18x-teal p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-2">
                    Innovative Solutions Tailored to Your Needs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Custom sourcing solutions, flexible payment terms, and personalized service that adapts to your
                    business requirements from startups to Fortune 500 companies.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-gen18x-teal p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-2">
                    Commitment to Excellence and Customer Satisfaction
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    99.9% customer satisfaction rate with comprehensive warranty support, quality guarantees, and
                    responsive customer service with dedicated account managers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-gen18x-teal p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-2">
                    Global Network, Local Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Worldwide supplier partnerships combined with local expertise and 24/7 support teams in key markets
                    around the globe ensuring your operations never stop.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Professional Team Meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="bg-gen18x-teal text-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-gen18x-light-blue">Global Partners</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="bg-gen18x-navy text-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold">99.9%</div>
                      <div className="text-gray-300">Quality Assured</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="bg-gen18x-light-blue text-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-white/90">Years Experience</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="bg-gen18x-light-green text-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-white/90">Support Available</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quality Assurance Section */}
      {/* <section className=\"py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5\">\n        <div className=\"container mx-auto px-4\">\n          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center\">\n            <div className=\"relative\">\n              <Image\n                src=\"/images/quality-testing.jpg\"\n                alt=\"Quality Testing Laboratory\"\n                width={600}\n                height={400}\n                className=\"w-full h-auto object-cover rounded-2xl shadow-xl\"\n              />\n            </div>\n            <div className=\"space-y-6\">\n              <Badge className=\"bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20\">Quality Assurance</Badge>\n              <h2 className=\"text-4xl font-heading font-bold text-gen18x-navy text-balance\">\n                Rigorous Testing & Quality Control\n              </h2>\n              <p className=\"text-lg text-gray-600 leading-relaxed\">\n                Every product that passes through our facilities undergoes comprehensive testing and quality\n                verification. Our state-of-the-art testing laboratories and certified technicians ensure that only the\n                highest quality products reach our customers.\n              </p>\n              <div className=\"space-y-4\">\n                <div className=\"flex items-center gap-3\">\n                  <CheckCircle className=\"h-5 w-5 text-gen18x-teal\" />\n                  <span className=\"text-gray-700\">ISO 9001:2015 certified quality management</span>\n                </div>\n                <div className=\"flex items-center gap-3\">\n                  <CheckCircle className=\"h-5 w-5 text-gen18x-teal\" />\n                  <span className=\"text-gray-700\">100% functional testing on all products</span>\n                </div>\n                <div className=\"flex items-center gap-3\">\n                  <CheckCircle className=\"h-5 w-5 text-gen18x-teal\" />\n                  <span className=\"text-gray-700\">Authenticity verification and anti-counterfeit measures</span>\n                </div>\n                <div className=\"flex items-center gap-3\">\n                  <CheckCircle className=\"h-5 w-5 text-gen18x-teal\" />\n                  <span className=\"text-gray-700\">Comprehensive warranty and return policies</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section> */}

      {/* Logistics Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Logistics Excellence</Badge>
              <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">
                Streamlined Supply Chain Management
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our advanced logistics network ensures efficient, secure, and timely delivery of your technology
                products. From our strategically located warehouses to our partnerships with leading shipping companies,
                we optimize every step of the supply chain.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gen18x-teal">98%</div>
                  <div className="text-gray-600">On-time Delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gen18x-teal">5</div>
                  <div className="text-gray-600">Continental Warehouses</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gen18x-teal">48hrs</div>
                  <div className="text-gray-600">Average Processing</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gen18x-teal">100%</div>
                  <div className="text-gray-600">Shipment Tracking</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/warehouse-logistics.jpg"
                alt="Modern Warehouse Operations"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      {/* <section className=\"py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5\">\n        <div className=\"container mx-auto px-4\">\n          <div className=\"text-center space-y-4 mb-16\">\n            <Badge className=\"bg-gen18x-light-green/20 text-gen18x-teal border-gen18x-teal/20\">\n              Client Testimonials\n            </Badge>\n            <h2 className=\"text-4xl font-heading font-bold text-gen18x-navy text-balance\">What Our Clients Say</h2>\n            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto text-pretty\">\n              Don\'t just take our word for it. Here\'s what businesses around the world say about their experience with\n              Gen18X Global Imports.\n            </p>\n          </div>\n\n          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">\n            <Card className=\"bg-gradient-to-br from-gen18x-light-blue/5 to-white border-gen18x-teal/20\">\n              <CardContent className=\"p-8 space-y-4\">\n                <div className=\"flex items-center gap-1 mb-4\">\n                  {[...Array(5)].map((_, i) => (\n                    <Star key={i} className=\"h-5 w-5 fill-yellow-400 text-yellow-400\" />\n                  ))}\n                </div>\n                <Quote className=\"h-8 w-8 text-gen18x-teal/40\" />\n                <p className=\"text-gray-600 leading-relaxed\">\n                  \"Gen18X has been our go-to partner for computer imports for over 3 years. Their quality assurance and\n                  timely delivery have been exceptional. The team\'s expertise in global sourcing has helped us expand\n                  our product offerings significantly.\"\n                </p>\n                <div className=\"border-t pt-4\">\n                  <div className=\"font-semibold text-gen18x-navy\">Sarah Johnson</div>\n                  <div className=\"text-sm text-gray-500\">CEO, TechFlow Solutions</div>\n                </div>\n              </CardContent>\n            </Card>\n\n            <Card className=\"bg-gradient-to-br from-gen18x-light-green/5 to-white border-gen18x-teal/20\">\n              <CardContent className=\"p-8 space-y-4\">\n                <div className=\"flex items-center gap-1 mb-4\">\n                  {[...Array(5)].map((_, i) => (\n                    <Star key={i} className=\"h-5 w-5 fill-yellow-400 text-yellow-400\" />\n                  ))}\n                </div>\n                <Quote className=\"h-8 w-8 text-gen18x-teal/40\" />\n                <p className=\"text-gray-600 leading-relaxed\">\n                  \"The global reach and local support combination is unmatched. We\'ve expanded our product line\n                  significantly thanks to their sourcing expertise. Their 24/7 support has been invaluable for our\n                  international operations.\"\n                </p>\n                <div className=\"border-t pt-4\">\n                  <div className=\"font-semibold text-gen18x-navy\">Michael Chen</div>\n                  <div className=\"text-sm text-gray-500\">Procurement Manager, Digital Dynamics</div>\n                </div>\n              </CardContent>\n            </Card>\n\n            <Card className=\"bg-gradient-to-br from-gen18x-teal/5 to-white border-gen18x-teal/20\">\n              <CardContent className=\"p-8 space-y-4\">\n                <div className=\"flex items-center gap-1 mb-4\">\n                  {[...Array(5)].map((_, i) => (\n                    <Star key={i} className=\"h-5 w-5 fill-yellow-400 text-yellow-400\" />\n                  ))}\n                </div>\n                <Quote className=\"h-8 w-8 text-gen18x-teal/40\" />\n                <p className=\"text-gray-600 leading-relaxed\">\n                  \"Professional service, competitive pricing, and reliable delivery. Gen18X has helped us stay\n                  competitive in the fast-moving tech market. Their quality control processes give us complete\n                  confidence in every order.\"\n                </p>\n                <div className=\"border-t pt-4\">\n                  <div className=\"font-semibold text-gen18x-navy\">Emma Rodriguez</div>\n                  <div className=\"text-sm text-gray-500\">Operations Director, Global Tech Hub</div>\n                </div>\n              </CardContent>\n            </Card>\n          </div>\n        </div>\n      </section> */}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-gen18x-navy text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-balance">
              Trusted by businesses worldwide
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed text-pretty">
              Gen18X delivers global-quality tech, competitive pricing, and reliable support you can count on
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white px-8 py-4 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
