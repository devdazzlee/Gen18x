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
  Smartphone,
  Headphones,
  Globe,
  Shield,
  Truck,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Settings,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gen18x-light-blue/10 via-white to-gen18x-light-green/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gen18x-navy leading-tight text-balance">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty">
              From global sourcing to local delivery, we provide end-to-end technology solutions that drive your
              business forward. Discover our full range of services designed to meet your technology needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors">
                  <Laptop className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Laptop Distribution</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Premium laptops from top global manufacturers including business laptops, gaming systems, and
                    ultrabooks with comprehensive warranty support.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Business & Enterprise Laptops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Gaming & High-Performance Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Ultrabooks & Portable Solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Workstation & Creative Systems</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors">
                  <Cpu className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Computer Components</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    High-performance processors, memory, storage, and graphics cards. Direct partnerships ensure
                    authentic products and competitive pricing.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">CPUs & Processors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Memory & RAM Modules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Graphics Cards & GPUs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Motherboards & Chipsets</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors">
                  <HardDrive className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Storage Solutions</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Enterprise and consumer storage solutions including SSDs, HDDs, and network storage systems for all
                    your data needs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Solid State Drives (SSDs)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Hard Disk Drives (HDDs)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Network Attached Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">External & Portable Storage</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors">
                  <Monitor className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Display Solutions</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Professional monitors, gaming displays, and digital signage solutions. From 4K displays to
                    ultra-wide monitors for every application.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">4K & Ultra HD Monitors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Gaming & High Refresh Displays</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Professional & Creative Monitors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Digital Signage Solutions</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors">
                  <Smartphone className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Mobile Devices</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Smartphones, tablets, and mobile accessories from leading brands. Enterprise mobility solutions and
                    consumer devices with full support.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Enterprise Smartphones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Tablets & 2-in-1 Devices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Mobile Accessories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Rugged & Industrial Devices</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gen18x-teal/20 hover:border-gen18x-teal/40">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gen18x-teal/10 p-4 rounded-lg w-fit group-hover:bg-gen18x-teal transition-colors">
                  <Headphones className="h-8 w-8 text-gen18x-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gen18x-navy mb-3">Audio & Accessories</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Professional audio equipment, gaming peripherals, and tech accessories. Complete ecosystem solutions
                    for enhanced productivity and entertainment.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Professional Audio Equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Gaming Peripherals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Keyboards & Mice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gen18x-teal transition-colors" />
                      <span className="text-sm text-gray-600">Cables & Adapters</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full border-gen18x-teal text-gen18x-teal bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gen18x-light-blue/5 to-gen18x-light-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Additional Services</Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">
              Complete Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Beyond product sourcing, we offer comprehensive services to support your entire technology supply chain
              and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto">
                  <Globe className="h-8 w-8 text-gen18x-teal" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Global Sourcing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Worldwide supplier network providing access to the latest technology products with streamlined import
                  processes and quality assurance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto">
                  <Shield className="h-8 w-8 text-gen18x-teal" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive testing and certification processes ensure every product meets international standards
                  and performance requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto">
                  <Truck className="h-8 w-8 text-gen18x-teal" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Logistics & Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Efficient logistics network ensuring timely delivery with real-time tracking and secure packaging for
                  all shipments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto">
                  <Users className="h-8 w-8 text-gen18x-teal" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Customer Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 multilingual customer support with dedicated account managers and technical assistance for all
                  your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto">
                  <Settings className="h-8 w-8 text-gen18x-teal" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Custom Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored technology solutions designed to meet specific business requirements with flexible terms and
                  personalized service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gen18x-teal/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-gen18x-teal/10 p-4 rounded-full w-fit mx-auto">
                  <Award className="h-8 w-8 text-gen18x-teal" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gen18x-navy">Warranty & Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive warranty programs with extended support options and replacement services for peace of
                  mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gen18x-light-green/20 text-gen18x-teal border-gen18x-teal/20">Our Process</Badge>
            <h2 className="text-4xl font-heading font-bold text-gen18x-navy text-balance">How We Deliver Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Our streamlined process ensures quality, reliability, and timely delivery from initial consultation to
              final delivery and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
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
            </div>

            <div className="text-center space-y-4">
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
            </div>

            <div className="text-center space-y-4">
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
            </div>

            <div className="text-center space-y-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gen18x-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-balance">
              Ready to Access Global Technology Solutions?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed text-pretty">
              Let's discuss your technology needs and how our comprehensive services can help you access the best
              products from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gen18x-teal hover:bg-gen18x-teal/90 text-white px-8 py-4 text-lg">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gen18x-navy px-8 py-4 text-lg bg-transparent"
              >
                View Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
