"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Hand, MessageSquare, Sparkles, User, BookOpen, Phone, Info } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Hand className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">The Smart Sign Translator</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="hidden sm:flex">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
            <Link href="/login">
              <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="floating-animation mb-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              The Smart Sign Translator
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
            {
              "Breaking communication barriers with AI-powered sign language translation. Connect, communicate, and understand in real-time using advanced hand gesture recognition."
            }
          </p>

          <Link href="/translate">
            <Button
              size="lg"
              className="gradient-button text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="w-5 h-5 mr-2" />
              Start Translation
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {
                "Our AI-powered system uses MediaPipe Hands to recognize sign language gestures and converts them to text in real-time"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="gradient-card p-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Capture</h3>
              <p className="text-muted-foreground">
                {"Use your camera to capture sign language gestures with MediaPipe hand tracking"}
              </p>
            </Card>

            <Card className="gradient-card p-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Process</h3>
              <p className="text-muted-foreground">
                {"Advanced AI algorithms analyze hand landmarks and interpret the sign language"}
              </p>
            </Card>

            <Card className="gradient-card p-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Translate</h3>
              <p className="text-muted-foreground">{"Get instant text translations displayed on your screen"}</p>
            </Card>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore More Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {"Discover additional tools and resources to enhance your sign language communication experience"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/learn">
              <Card className="gradient-card p-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  {"Learn new sign language gestures with step-by-step guidance and feedback"}
                </p>
              </Card>
            </Link>

            <Link href="/about">
              <Card className="gradient-card p-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Info className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">About Project</h3>
                <p className="text-muted-foreground">
                  {"Learn about the technology and purpose behind this graduation project"}
                </p>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="gradient-card p-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-muted-foreground">
                  {"Get in touch with feedback, questions, or collaboration opportunities"}
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20">
        <div className="text-center text-muted-foreground">
          <p>© 2025 The Smart Sign Translator - Graduation Project</p>
          <p className="text-sm mt-2">{"Empowering communication for everyone"}</p>
        </div>
      </footer>
    </div>
  )
}
