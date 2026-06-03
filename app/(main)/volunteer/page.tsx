"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, HandHeart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const volunteerImages = [
  { src: "/ngo website photo/volenteer 1.avif", alt: "Volunteer helping community" },
  { src: "/ngo website photo/volenteer 2.avif", alt: "Volunteer in the field" },
  { src: "/ngo website photo/volenteer 3.avif", alt: "Volunteer team" },
]

export default function VolunteerPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium">
              <HandHeart className="w-4 h-4" />
              <span>Join our volunteer network</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Be the <span className="text-gradient">Change</span> You Wish to See
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our volunteers are the heartbeat of InAmigos Foundation. Whether you have a few hours a month or want to make a long-term commitment, your skills and passion can help transform lives.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Gain hands-on experience in global development",
                "Join a global network of passionate changemakers",
                "Directly impact underserved communities",
                "Receive training and certification for your work"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Volunteer Image Strip */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {volunteerImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="relative h-28 rounded-2xl overflow-hidden group shadow-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="glass dark:glass-dark p-8 md:p-12 rounded-3xl relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-6 -right-6 bg-primary/10 p-4 rounded-3xl rotate-12">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-8">Volunteer Application</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input type="text" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input type="text" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input type="email" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Area of Interest</label>
                <select className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground">
                  <option>Education &amp; Teaching</option>
                  <option>Event Organization</option>
                  <option>Medical &amp; Healthcare</option>
                  <option>Fundraising &amp; Marketing</option>
                  <option>General Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tell us about yourself</label>
                <textarea rows={4} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="I'm passionate about..." />
              </div>
              
              <Button className="w-full rounded-xl h-14 text-lg">Submit Application</Button>
            </form>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="mt-32 border-t border-border/50 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteer <span className="text-gradient">Process</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From your initial application to your first day in the field, here is what you can expect.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />
            {[
              { step: "01", title: "Apply", desc: "Submit the application form with your interests and availability." },
              { step: "02", title: "Interview", desc: "A brief chat with our volunteer coordinator to align expectations." },
              { step: "03", title: "Training", desc: "Complete our comprehensive onboarding and orientation program." },
              { step: "04", title: "Make an Impact", desc: "Start volunteering and making a real difference in the community." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-background border-4 border-primary rounded-full flex items-center justify-center text-xl font-bold mb-6 text-primary">
                  {s.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
