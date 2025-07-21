import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Users,
  Gift,
  DollarSign,
  Zap,
  TrendingUp,
  Mail,
  UserPlus,
  Video,
  Package,
  Upload,
  CheckCircle,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0080FF] via-[#00AAFF] to-[#00CFFF] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Try K-beauty, Shine on TikTok — For Free!
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium opacity-95 max-w-3xl mx-auto">
              Get exclusive free K-beauty products, make fun TikTok content, and earn the highest commissions ever.
              Cosduck is your backstage pass to K-beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://apps.apple.com/us/app/cosduck/id6737409665"
                className="inline-flex items-center gap-3 bg-white text-[#0080FF] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Smartphone className="w-6 h-6" />
                App Store
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.cosduck&pcampaignid=web_share"
                className="inline-flex items-center gap-3 bg-white text-[#0080FF] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Smartphone className="w-6 h-6" />
                Play Store
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Cosduck Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Why Cosduck? 💜</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Created by young Korean founders who are passionate about spreading K-beauty worldwide and supporting
                real, authentic creators like you!
              </p>
              <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                    <h3 className="text-2xl font-bold text-gray-800">Perfect for TikTok Creators!</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You just need to be a <strong>TikTok affiliate with $100+ GMV</strong> — no need for millions of
                    followers! We care about creators who can move products and connect with their audience
                    authentically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Your Exclusive Benefits ✨</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0080FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Free K-beauty Products</h3>
                <p className="text-gray-600">Get exclusive products delivered to your door — completely free!</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6600] rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">30% Commission</h3>
                <p className="text-gray-600">Higher than anywhere else! Earn more from every sale you generate.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#00AAFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Early Access</h3>
                <p className="text-gray-600">Be the first to try and showcase the latest K-beauty innovations.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#00BFFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Grow Your TikTok</h3>
                <p className="text-gray-600">
                  Boost engagement with trending K-beauty content that your audience loves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">How It Works 🚀</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started is super easy! Just 6 simple steps to join the K-beauty revolution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6600] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Sign Up</h3>
                <p className="text-gray-600">Create your account with just your email address.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0080FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">2. Connect TikTok</h3>
                <p className="text-gray-600">Link your TikTok account — only takes 15 seconds to review!</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">3. Apply for Campaigns</h3>
                <p className="text-gray-600">Browse and apply for exciting K-beauty campaigns.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFB84D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">4. Get Invitation</h3>
                <p className="text-gray-600">Receive your TikTok campaign invitation.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#00AAFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">5. Create Content</h3>
                <p className="text-gray-600">Get samples & create 5 amazing videos per campaign.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#00BFFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">6. Submit & Earn</h3>
                <p className="text-gray-600">
                  Submit video links and codes through the app, then watch your earnings grow!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Ask Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">What We Ask in Return 🤝</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Fair and simple requirements to keep our community thriving!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0080FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Marketing Usage</h3>
                      <p className="text-gray-600">
                        All videos can be used for Cosduck's marketing purposes (secondary use)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00AAFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Code Duration</h3>
                      <p className="text-gray-600">Video code is active for 180 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF8800] rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Feed Duration</h3>
                      <p className="text-gray-600">Videos should stay on TikTok feed for at least 180 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0080FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Showcase Duration</h3>
                      <p className="text-gray-600">
                        Showcase videos should remain in your showcase for at least 90 days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Need Help? We're Here! 💬</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Our friendly team is ready to support you every step of the way.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#0080FF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Email Support</h3>
                  <Link
                    href="mailto:support@cosduck.com"
                    className="text-[#0080FF] hover:text-[#00AAFF] font-semibold text-lg"
                  >
                    support@cosduck.com
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                  <Link
                    href="https://wa.me/12139448683"
                    className="text-[#FF8800] hover:text-[#FFA500] font-semibold text-lg"
                  >
                    +1 213 944 8683
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0080FF] via-[#00AAFF] to-[#00CFFF] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Join the Cosduck Community! 🌟</h2>
          <p className="text-xl md:text-2xl mb-12 font-medium opacity-95 max-w-3xl mx-auto">
            Be part of the K-beauty wave, inspire your followers, and earn more than ever — all while having fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://apps.apple.com/us/app/cosduck/id6737409665"
              className="inline-flex items-center gap-3 bg-white text-[#0080FF] px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              <Smartphone className="w-7 h-7" />
              Try Now - App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.cosduck&pcampaignid=web_share"
              className="inline-flex items-center gap-3 bg-white text-[#0080FF] px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              <Smartphone className="w-7 h-7" />
              Try Now - Play Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
