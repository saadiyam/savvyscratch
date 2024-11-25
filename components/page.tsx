"use client"

import Image from 'next/image'
import { DM_Sans } from 'next/font/google'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Youtube, ArrowRight, CheckCircle2, Play, Timer, BarChartIcon as ChartBar, Trophy, Menu, X } from 'lucide-react'

const dmSans = DM_Sans({ subsets: ['latin'] })


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function BlockPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
     
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-[#255800]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
            <Image 
      src="/images/savvylogo.png" 
      alt="Description of the image" 
      width={50} 
      height={50} 
      className="relative z-20 rounded-sm" // Ensure the image is above the background
    />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-[#255800]">Features</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-[#255800]">Pricing</a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-[#255800]">Testimonials</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-[#255800]">FAQ</a>
              <Button className="bg-[#255800] hover:bg-[#255800]/90 text-white">Start Winning Now</Button>
            </nav>
            <button 
              className="md:hidden text-[#255800]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            <Link href="#features" className="text-lg text-gray-600 hover:text-[#255800] py-2" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#pricing" className="text-lg text-gray-600 hover:text-[#255800] py-2" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="#testimonials" className="text-lg text-gray-600 hover:text-[#255800] py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
            <Link href="#faq" className="text-lg text-gray-600 hover:text-[#255800] py-2" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Button className="bg-[#255800] hover:bg-[#255800]/90 text-white mt-4" onClick={() => setIsMenuOpen(false)}>Start Winning Now</Button>
          </nav>
        </div>
      )}

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#255800] mb-6">
                  Make Every{' '}
                  <span className="highlight-brush text-[#255800]">Scratch</span>
                  {' '}Count
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Stop guessing and start winning. Savvy Scratch gives you the data you need to play smarter, save time, and stretch your lottery budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-[#255800] hover:bg-[#255800]/90 text-white text-lg h-12 px-8">
                    Start Winning Smarter Now
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-12 px-8 border-[#255800] text-[#255800] hover:bg-[#255800]/10 text-lg"
                  >
                    Watch Demo
                    <Play className="ml-2" size={20} />
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="relative"
              >
               <div className="relative aspect-square max-w-md mx-auto">
    {/* Move the z-index of the image above the background */}
    <div className="absolute inset-0 bg-[#D4CA4A]/20 rounded-3xl transform rotate-6 z-10"></div>
    <Image 
      src="/images/savvy2.png" 
      alt="Description of the image" 
      width={500} 
      height={500} 
      className="relative z-20 rounded-sm" // Ensure the image is above the background
    />
  </div>
                
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-[#255800]/5">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#255800] mb-6">
                Why Waste Money on Bad Tickets?
              </h2>
              <p className="text-xl text-gray-600">
                Let's face it: most players lose money because they pick tickets randomly. Without the right data, you're leaving your odds to chance—and your budget at risk. That's why we created Savvy Scratch.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">No More Jackpots</h3>
                <p className="text-gray-600">Buying tickets with all the jackpots already gone.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Timer className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Wasted</h3>
                <p className="text-gray-600">Spending hours analyzing lottery data on confusing websites.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <ChartBar className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Budget Gone</h3>
                <p className="text-gray-600">Running out of budget before you get a single win.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#255800] mb-6">
                <span className='highlight-brush'>Savvy Scratch </span>  Does the Hard Work For You
              </h2>
              <p className="text-xl text-gray-600">
                Savvy Scratch uses real-time lottery data to identify the best tickets to play, helping you save time and increase your chances of winning.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="order-2 lg:order-1">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4CA4A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-[#255800]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Find Best Odds in Seconds</h3>
                      <p className="text-gray-600">Quick access to tickets with the highest winning potential.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4CA4A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-[#255800]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Avoid Bad Tickets</h3>
                      <p className="text-gray-600">Never waste money on tickets with no top prizes left.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4CA4A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-[#255800]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                      <p className="text-gray-600">Make decisions based on the latest lottery data.</p>
                    </div>
                  </li>
                </ul>
                <Button className="mt-8 bg-[#255800] hover:bg-[#255800]/90 text-white">
                  See How It Works
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-[#D4CA4A]/20 rounded-3xl transform -rotate-6"></div>
                  <Image 
      src="/images/savvy1.png" 
      alt="Description of the image" 
      width={500} 
      height={500} 
      className="relative z-20 rounded-sm" // Ensure the image is above the background
    />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#255800]/5">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#255800] mb-6">
                Features That Make Every{' '}
                <span className="highlight-brush">Scratch</span>
                {' '}Smarter
              </h2>
              <p className="text-xl text-gray-600">
                From real-time statistics to detailed game breakdowns, Savvy Scratch is packed with features designed to help you win more, lose less, and have fun doing it.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Real-Time Odds",
                  description: "Updated ticket statistics for smarter choices",
                  icon: ChartBar
                },
                {
                  title: "Detailed Breakdown",
                  description: "Insights into every ticket—prizes remaining, odds, and more",
                  icon: Trophy
                },
                {
                  title: "Easy Interface",
                  description: "Play smarter without hours of research",
                  icon: Timer
                },
                {
                  title: "Maximize Wins",
                  description: "Play tickets with improved odds and avoid bad ones",
                  icon: CheckCircle2
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-[#D4CA4A]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="text-[#255800]" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Button className="bg-[#255800] hover:bg-[#255800]/90 text-white">
                Explore All Features
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Before & After Section */}
        <section className="py-20">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-center mb-16 text-[#255800]"
            >
              Playing Smarter with {' '}
              <span className="highlight-brush">{' '}Savvy{' '}Scratch</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeInUp}
                className="bg-red-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-red-700 mb-6">Before Savvy Scratch</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-red-500" size={24} />
                    <span>Played blindly, hoping for the best</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-red-500" size={24} />
                    <span>Bought tickets with no remaining jackpots</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-red-500" size={24} />
                    <span>Wasted time researching lottery data</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="bg-[#255800]/10 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-[#255800] mb-6">After Savvy Scratch</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#255800]" size={24} />
                    <span>Only play tickets with the best odds</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#255800]" size={24} />
                    <span>Never waste money on bad tickets</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#255800]" size={24} />
                    <span>Save time and maximize your wins</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-[#255800]/5">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-center mb-16 text-[#255800]"
            >
              See What Our Users Are Saying
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-600 italic mb-6">
                  "Savvy Scratch has completely changed the way I play! I've hit more wins in the last month than I did all year. It's so easy to use, and I love the insights it provides. A must-have for scratch-off players!"
                </p>
                <p className="font-semibold">— Jessica L., Texas</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-600 italic mb-6">
                  "Before Savvy Scratch, I wasted so much money on bad tickets. Now I only play the ones with great odds—and it's paying off big time!"
                </p>
                <p className="font-semibold">— Mark H., Dallas</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#255800] mb-6">
                Play Smarter for Just Pennies a Day
              </h2>
              <p className="text-xl text-gray-600">
                Savvy Scratch offers flexible pricing to fit any budget.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeInUp}>
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <CardTitle>Monthly Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$5</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#255800]" size={20} />
                        <span>Real-time odds updates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#255800]" size={20} />
                        <span>Detailed game insights</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#255800]" size={20} />
                        <span>Basic support</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-[#255800] hover:bg-[#255800]/90 text-white">Subscribe Monthly</Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="relative overflow-hidden border-[#255800] border-2">
                  <div className="absolute top-0 right-0 bg-[#255800] text-white px-4 py-1 rounded-bl-lg text-sm">
                    Best Value
                  </div>
                  <CardHeader>
                    <CardTitle>Yearly Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$50</span>
                      <span className="text-gray-600">/year</span>
                      <p className="text-[#255800] font-semibold">Save $10!</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#255800]" size={20} />
                        <span>All Monthly Plan features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#255800]" size={20} />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#255800]" size={20} />
                        <span>Early access to new features</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-[#255800] hover:bg-[#255800]/90 text-white">Subscribe Yearly</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="text-center mt-12">
              <p className="text-xl font-semibold text-[#255800] mb-4">🎉 Holiday Special Offer!</p>
              <Button className="bg-[#D4CA4A] text-[#255800] hover:bg-[#D4CA4A]/90">
                Buy one month get one month free now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-[#255800]/5">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-center mb-16 text-[#255800]"
            >
              Got Questions? We've Got Answers
            </motion.h2>
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Savvy Scratch?</AccordionTrigger>
                  <AccordionContent>
                    Savvy Scratch is a lottery scratch-off companion app that helps you make smarter choices by showing you real-time ticket odds.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does it work?</AccordionTrigger>
                  <AccordionContent>
                    We use public data from the Texas Lottery to analyze ticket odds and highlight the best plays for you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What makes Savvy Scratch different?</AccordionTrigger>
                  <AccordionContent>
                    Unlike other apps, we help you decide what to play, not just check your winnings.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is Savvy Scratch only for Texas?</AccordionTrigger>
                  <AccordionContent>
                    Currently, yes. But we're expanding to other states soon!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What does Savvy Scratch cost?</AccordionTrigger>
                  <AccordionContent>
                    You can subscribe for $5/month or $50/year, with a 7-day free trial.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </section>

        {/* Meet the Creator Section */}
        <section className="py-20">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div variants={fadeInUp} className="md:w-1/3">
                <img 
                  src="/placeholder.svg?height=300&width=300" 
                  alt="Doug, Creator of Savvy Scratch" 
                  className="rounded-full shadow-xl"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-[#255800]">Meet Doug, the Creator of Savvy Scratch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  "Hi, I'm Doug, and I created Savvy Scratch to make playing lottery scratch-offs smarter, easier, and more fun. After years of struggling with confusing odds and bad tickets, I realized there had to be a better way. That's why I built Savvy Scratch—to help lottery players like you make every scratch count."
                </p>
                <Button className="bg-[#255800] hover:bg-[#255800]/90 text-white">
                  Start Playing Smarter Today
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-[#255800] text-white">
          <motion.div 
            className="container mx-auto px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-center mb-16"
            >
              Get in Touch
            </motion.h2>
            <motion.div 
              className="max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-white text-gray-900" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-white text-gray-900" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <Textarea id="message" placeholder="Your message" className="bg-white text-gray-900" />
                </div>
                <Button className="w-full bg-[#D4CA4A] text-[#255800] hover:bg-[#D4CA4A]/90">Send Message</Button>
              </form>
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#255800] to-[#1e4600] text-white">
          <motion.div 
            className="container mx-auto px-4 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold mb-8"
            >
              Ready to Improve Your Odds?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-12"
            >
              Join Savvy Scratch today and start making smarter plays!
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button className="bg-[#D4CA4A] text-[#255800] hover:bg-[#D4CA4A]/90 text-lg px-8 py-6">
                Get Started Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-[#255800] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
              <Image 
      src="/images/savvylogo.png" 
      alt="Description of the image" 
      width={100} 
      height={100} 
      className="relative z-20 rounded-sm" // Ensure the image is above the background
    />
              </div>
              <p className="text-[#D4CA4A]">Making every scratch count.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-[#D4CA4A]">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#D4CA4A]">Pricing</a></li>
                <li><a href="#faq" className="hover:text-[#D4CA4A]">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#D4CA4A]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D4CA4A]">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/channel/UCkb75-NN1UyCIZMGXhrwrhQ" className="hover:text-[#D4CA4A]">
                  <Youtube size={24} />
                </a>
               
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-[#D4CA4A]">&copy; 2024 Savvy Scratch. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}