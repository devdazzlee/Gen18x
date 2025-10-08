"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, ShieldCheck, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gen18x-light-blue/10 via-white to-gen18x-light-green/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Legal</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gen18x-navy leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-gen18x-teal/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-gen18x-teal/10 p-3 rounded-full w-fit mx-auto">
                    <FileText className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Agreement</h3>
                  <p className="text-sm text-gray-600">Binding terms</p>
                </CardContent>
              </Card>
              <Card className="border-gen18x-teal/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-gen18x-teal/10 p-3 rounded-full w-fit mx-auto">
                    <Scale className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Fair Terms</h3>
                  <p className="text-sm text-gray-600">Equal rights</p>
                </CardContent>
              </Card>
              <Card className="border-gen18x-teal/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-gen18x-teal/10 p-3 rounded-full w-fit mx-auto">
                    <ShieldCheck className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Protection</h3>
                  <p className="text-sm text-gray-600">Your safety</p>
                </CardContent>
              </Card>
              <Card className="border-gen18x-teal/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-gen18x-teal/10 p-3 rounded-full w-fit mx-auto">
                    <AlertCircle className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Updates</h3>
                  <p className="text-sm text-gray-600">Stay informed</p>
                </CardContent>
              </Card>
            </div>

            {/* Terms Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to Gen18X Global Imports. By accessing or using our website, services, or placing an order
                  with us, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these
                  Terms, please do not use our services. These Terms constitute a legally binding agreement between you
                  and Gen18X Global Imports.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">2. Use of Services</h2>
                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Eligibility</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You must be at least 18 years old and have the legal capacity to enter into contracts to use our
                  services. By using our services, you represent and warrant that you meet these requirements.
                </p>
                
                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Account Registration</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When creating an account, you must provide accurate, complete, and current information. You are
                  responsible for maintaining the confidentiality of your account credentials and for all activities
                  that occur under your account.
                </p>

                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Prohibited Activities</h3>
                <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful code, viruses, or malware</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Engage in any fraudulent activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">3. Products and Services</h2>
                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Product Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We strive to provide accurate product descriptions, specifications, and pricing. However, we do not
                  warrant that product descriptions or other content is accurate, complete, reliable, or error-free.
                  Product images are for illustration purposes and may not represent the exact product.
                </p>

                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Pricing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All prices are subject to change without notice. We reserve the right to modify prices at any time.
                  The price charged will be the price in effect at the time of order placement. We are not responsible
                  for pricing errors on our website.
                </p>

                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Product availability is subject to change. We reserve the right to limit quantities, discontinue
                  products, or refuse orders at our sole discretion.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">4. Orders and Payment</h2>
                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Order Acceptance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your order constitutes an offer to purchase products from us. We reserve the right to accept or
                  decline your order for any reason. Order confirmation does not constitute acceptance of your order.
                  We will confirm acceptance when we ship the products.
                </p>

                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Payment Terms</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Payment must be made in full at the time of order unless otherwise agreed in writing. We accept
                  various payment methods as indicated on our website. You agree to provide current, complete, and
                  accurate payment information.
                </p>

                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Taxes and Fees</h3>
                <p className="text-gray-600 leading-relaxed">
                  You are responsible for all applicable taxes, duties, customs fees, and other charges associated
                  with your order. These may be added to your total at checkout or collected upon delivery.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">5. Shipping and Delivery</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Shipping times and costs vary based on destination and shipping method selected. We will provide
                  estimated delivery times, but these are not guaranteed. Risk of loss and title pass to you upon
                  delivery to the carrier. We are not responsible for delays caused by customs, weather, carrier
                  issues, or other circumstances beyond our control.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">6. Returns and Refunds</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our return policy allows returns within 30 days of delivery for most products, subject to conditions.
                  Products must be unused, in original packaging, and in resalable condition. Some products may be
                  non-returnable due to their nature. Refunds will be processed within 10 business days of receiving
                  the returned product. Shipping costs are generally non-refundable.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">7. Warranties and Disclaimers</h2>
                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Product Warranties</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Products may be covered by manufacturer warranties. We are not responsible for manufacturer warranty
                  claims. Please contact the manufacturer directly for warranty service.
                </p>

                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Disclaimer of Warranties</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  OUR SERVICES AND PRODUCTS ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                  DIRECTLY OR INDIRECTLY. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE PRODUCTS
                  OR SERVICES IN QUESTION.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">9. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All content on our website, including text, graphics, logos, images, and software, is the property
                  of Gen18X Global Imports or its licensors and is protected by intellectual property laws. You may
                  not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">10. Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Gen18X Global Imports, its officers, directors,
                  employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of
                  your use of our services, violation of these Terms, or infringement of any rights of another party.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">11. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                  which Gen18X Global Imports is registered, without regard to its conflict of law provisions. Any
                  disputes arising out of or relating to these Terms shall be resolved through binding arbitration in
                  accordance with applicable arbitration rules.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">12. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                  posting on our website. Your continued use of our services after changes are posted constitutes
                  acceptance of the modified Terms. We encourage you to review these Terms periodically.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">13. Severability</h2>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                  shall continue in full force and effect. The invalid or unenforceable provision shall be replaced
                  with a valid provision that most closely matches the intent of the original provision.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">14. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions or concerns about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gen18x-light-blue/5 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Gen18X Global Imports</strong></p>
                  <p className="text-gray-700">Email: legal@gen18x.com</p>
                  <p className="text-gray-700">Phone: +971 56 556 2134</p>
                  <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-700">Phone: +92 328 820 0999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

