"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Target,
  Zap,
  Users,
  Award,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Calendar,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gen18x-light-blue/10 via-white to-gen18x-light-green/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">
                About Gen18X Global Imports
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-heading font-bold text-gen18x-navy leading-tight text-balance"
              variants={itemVariants}
            >
              Connecting the World Through Technology
            </motion.h1>
            <motion.p className="text-xl text-gray-600 leading-relaxed text-pretty" variants={itemVariants}>
              At Gen18X Global Imports, we believe technology connects the world. Founded with the vision of making
              global-quality computer systems and parts accessible, we are committed to delivering reliability,
              affordability, and trust in every shipment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gen18x-teal p-3 rounded-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-gen18x-navy">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At Gen18x, our mission is to empower businesses, retailers, and individuals by delivering world-class
                  computer systems, IT hardware, and technology solutions. We create a seamless bridge between global
                  suppliers and local markets, ensuring accessibility, affordability, and reliability.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-gen18x-teal mt-1" />
                  <div>
                    <h3 className="font-semibold text-gen18x-navy mb-1">Global Accessibility</h3>
                    <p className="text-gray-600">
                      We make cutting-edge technology products available worldwide, helping businesses and consumers
                      stay ahead in today’s fast-paced digital landscape.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-gen18x-teal mt-1" />
                  <div>
                    <h3 className="font-semibold text-gen18x-navy mb-1">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Every product undergoes strict quality control to guarantee premium performance, durability, and
                      compliance with international standards.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-gen18x-teal mt-1" />
                  <div>
                    <h3 className="font-semibold text-gen18x-navy mb-1">Reliable Partnership</h3>
                    <p className="text-gray-600">
                      We believe in long-term partnerships built on trust, transparency, and consistent delivery,
                      enabling growth for our clients and suppliers alike.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gen18x-light-blue/10 to-gen18x-light-green/10 p-8 rounded-2xl"
              variants={itemVariants}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gen18x-navy">2018</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gen18x-navy">500+</div>
                    <div className="text-sm text-gray-600">Global Partners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gen18x-navy">50K+</div>
                    <div className="text-sm text-gray-600">Products Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gen18x-navy">25+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gen18x-navy">99.9%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Our Core Values</Badge>
            </motion.div>
            <motion.h2
              className="text-4xl font-heading font-bold text-gen18x-navy text-balance"
              variants={itemVariants}
            >
              What Drives Us Forward
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty" variants={itemVariants}>
              Our values are the foundation of everything we do, guiding our decisions and shaping our relationships
              with partners and clients worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40 bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Shield className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Trust First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe strong partnerships are built on transparency, honesty, and reliable communication at
                    every step.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40 bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Globe className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Global Reach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From sourcing to delivery, we bring the world closer to you through our extensive international
                    network.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40 bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <Zap className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Innovation & Technology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Staying ahead in a fast-moving digital era by embracing new technologies and innovative solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40 bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto group-hover:bg-gen18x-teal group-hover:text-white transition-colors">
                    <TrendingUp className="h-8 w-8 text-gen18x-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Customer Success</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your growth is our growth. We measure our success by the success of our partners and clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-gen18x-light-green/20 text-gen18x-teal border-gen18x-teal/20">
                Why Choose Gen18X
              </Badge>
            </motion.div>
            <motion.h2
              className="text-4xl font-heading font-bold text-gen18x-navy text-balance"
              variants={itemVariants}
            >
              What Sets Us Apart
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty" variants={itemVariants}>
              We don't just import products — we import possibilities, growth, and trust. Here's what makes Gen18X your
              ideal technology partner.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={cardVariants}>
              <Card className="bg-gradient-to-br from-gen18x-light-blue/10 to-white border-gen18x-teal/20">
                <CardContent className="p-8 space-y-6">
                  <div className="bg-gen18x-teal p-4 rounded-lg w-fit">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">
                    Direct Partnerships with Trusted Global Suppliers
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We maintain direct relationships with over 500 manufacturers and distributors worldwide, ensuring
                    authentic products, competitive pricing, and reliable supply chains.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">Verified manufacturer partnerships</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">Exclusive distribution agreements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">Priority access to new products</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-gradient-to-br from-gen18x-light-green/10 to-white border-gen18x-teal/20">
                <CardContent className="p-8 space-y-6">
                  <div className="bg-gen18x-teal p-4 rounded-lg w-fit">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">
                    Focus on Quality-Tested Imports
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every product undergoes rigorous testing and quality assurance processes. We specialize in laptops,
                    computer parts, and tech accessories that meet international standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">Multi-point quality inspection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">Compliance certification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">Performance benchmarking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-gradient-to-br from-gen18x-teal/10 to-white border-gen18x-teal/20">
                <CardContent className="p-8 space-y-6">
                  <div className="bg-gen18x-teal p-4 rounded-lg w-fit">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy">
                    Strong Commitment to Timely Delivery and Customer Satisfaction
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our logistics network and customer service team ensure on-time delivery and comprehensive support
                    throughout your entire experience with us.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">99.9% on-time delivery rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">24/7 customer support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal" />
                      <span className="text-sm text-gray-600">Comprehensive warranty support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Our Journey</Badge>
            </motion.div>
            <motion.h2
              className="text-4xl font-heading font-bold text-gen18x-navy text-balance"
              variants={itemVariants}
            >
              Building the Future Together
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty" variants={itemVariants}>
              From a small startup to a global technology import leader, here's how we've grown alongside our partners
              and clients.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="flex items-start gap-6" variants={itemVariants}>
                <div className="bg-gen18x-teal p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy">2018</h3>
                    <Badge variant="outline" className="border-gen18x-teal text-gen18x-teal">
                      Foundation
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Gen18X Global Imports was founded with the vision of making global-quality computer systems
                    accessible to businesses worldwide. Started with 5 team members and partnerships with 10 suppliers.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-6" variants={itemVariants}>
                <div className="bg-gen18x-teal p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy">2020</h3>
                    <Badge variant="outline" className="border-gen18x-teal text-gen18x-teal">
                      Expansion
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded operations to serve 15 countries with over 100 global supplier partnerships. Launched our
                    quality assurance program and achieved ISO certification for our processes.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-6" variants={itemVariants}>
                <div className="bg-gen18x-teal p-3 rounded-full">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy">2022</h3>
                    <Badge variant="outline" className="border-gen18x-teal text-gen18x-teal">
                      Global Reach
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Reached 25+ countries with 500+ supplier partnerships. Delivered over 50,000 products and
                    established regional offices in key markets to provide local support.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-6" variants={itemVariants}>
                <div className="bg-gen18x-teal p-3 rounded-full">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-heading font-semibold text-gen18x-navy">2024</h3>
                    <Badge variant="outline" className="border-gen18x-teal text-gen18x-teal">
                      Innovation
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Launched our digital platform for real-time inventory tracking and automated ordering. Achieved
                    99.9% customer satisfaction rate and expanded into emerging technology categories.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gen18x-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-balance" variants={itemVariants}>
              Ready to Partner with Gen18X?
            </motion.h2>
            <motion.p className="text-xl text-gray-300 leading-relaxed text-pretty" variants={itemVariants}>
              Join hundreds of businesses worldwide who trust us for their technology needs. Let's build the future
              together with reliable, quality technology solutions.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <Button size="lg" className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white px-8 py-4 text-lg">
                Start Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gen18x-navy px-8 py-4 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
