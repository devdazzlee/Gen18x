"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gen18x-light-blue/10 via-white to-gen18x-light-green/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-gen18x-teal/10 text-gen18x-teal border-gen18x-teal/20">Legal</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gen18x-navy leading-tight">
              Privacy Policy
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
                    <Shield className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Data Protection</h3>
                  <p className="text-sm text-gray-600">Your data is secure</p>
                </CardContent>
              </Card>
              <Card className="border-gen18x-teal/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-gen18x-teal/10 p-3 rounded-full w-fit mx-auto">
                    <Lock className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Encryption</h3>
                  <p className="text-sm text-gray-600">SSL/TLS secured</p>
                </CardContent>
              </Card>
              <Card className="border-gen18x-teal/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-gen18x-teal/10 p-3 rounded-full w-fit mx-auto">
                    <Eye className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Transparency</h3>
                  <p className="text-sm text-gray-600">Clear data usage</p>
                </CardContent>
              </Card>
              <Card className="border-gen18x-teal/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-gen18x-teal/10 p-3 rounded-full w-fit mx-auto">
                    <FileText className="h-6 w-6 text-gen18x-teal" />
                  </div>
                  <h3 className="font-semibold text-gen18x-navy">Your Rights</h3>
                  <p className="text-sm text-gray-600">Full control</p>
                </CardContent>
              </Card>
            </div>

            {/* Policy Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Gen18X Global Imports ("we," "our," or "us"), we are committed to protecting your privacy and
                  ensuring the security of your personal information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gen18x-navy mb-3">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Register for an account</li>
                  <li>Place an order or make a purchase</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our website</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  This information may include: name, email address, phone number, shipping address, billing
                  information, company details, and business requirements.
                </p>

                <h3 className="text-xl font-semibold text-gen18x-navy mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device and
                  browsing actions, including: IP address, browser type, operating system, referring URLs, pages
                  viewed, and dates/times of visits.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about products, services, and promotions</li>
                  <li>Improve our website and services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Detect and prevent fraud or security issues</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze website usage and trends</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment processing, shipping, etc.)</li>
                  <li><strong>Business Partners:</strong> Trusted partners who help us operate our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include encryption, secure servers, firewalls, and regular security assessments. However, no method
                  of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Restrict or object to certain processing of your data</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze
                  website traffic, and personalize content. You can control cookie preferences through your browser
                  settings. However, disabling cookies may limit your ability to use certain features of our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">8. International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place to protect your information in accordance with this Privacy
                  Policy and applicable data protection laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect
                  personal information from children. If you believe we have collected information from a child,
                  please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of any material changes by posting the updated policy on our
                  website and updating the "Last Updated" date. Your continued use of our services after such changes
                  constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-gen18x-navy mb-4">11. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                  practices, please contact us at:
                </p>
                <div className="bg-gen18x-light-blue/5 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Gen18X Global Imports</strong></p>
                  <p className="text-gray-700">Email: privacy@gen18x.com</p>
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

