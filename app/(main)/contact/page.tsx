"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-muted-foreground text-lg">
            Have questions about our initiatives or want to partner with us? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: MapPin, title: "Headquarters", details: "123 Hope Avenue, New York, NY 10001, USA" },
              { icon: Mail, title: "Email Us", details: "contact@inamigos.org\npress@inamigos.org" },
              { icon: Phone, title: "Call Us", details: "+1 (555) 123-4567\nMon-Fri, 9am - 6pm EST" }
            ].map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass dark:glass-dark p-8 rounded-3xl flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass dark:glass-dark p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea rows={6} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Your message here..." />
              </div>
              <Button className="w-full rounded-xl h-14 text-lg group">
                Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "How are my donations used?", a: "100% of public donations go directly to our field programs. Our administrative costs are covered by private benefactors." },
              { q: "Can I volunteer internationally?", a: "Yes, we have international placement programs for medical professionals, educators, and engineers." },
              { q: "Do I get a tax receipt?", a: "All donations are tax-deductible. You will automatically receive a receipt via email immediately after your contribution." },
              { q: "How can my company partner with you?", a: "We offer corporate matching programs, team volunteer days, and sponsorship tiers. Contact us via the form to learn more." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass dark:glass-dark p-6 rounded-2xl flex gap-4"
              >
                <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 w-full h-[400px] glass dark:glass-dark rounded-3xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center text-muted-foreground">
            <MapPin className="w-12 h-12 mb-4 opacity-50" />
            <p className="font-medium">Interactive Map Placeholder</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
