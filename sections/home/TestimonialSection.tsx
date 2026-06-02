"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  { name: "Sarah Jenkins", role: "Volunteer", text: "Volunteering with InAmigos changed my perspective on life. The impact we make is real and immediate." },
  { name: "David Chen", role: "Donor", text: "The transparency and dedication of this team is unmatched. I know exactly where my donations go." },
  { name: "Elena Rodriguez", role: "Community Leader", text: "They didn't just give us resources; they taught us how to sustain ourselves. Truly empowering." }
]

export function TestimonialSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Voices of <span className="text-gradient">Impact</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Hear from the people who make our mission possible and those whose lives have been transformed.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass dark:glass-dark p-8 rounded-3xl relative"
          >
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
            <p className="text-lg italic text-muted-foreground mb-6">&quot;{t.text}&quot;</p>
            <div>
              <h4 className="font-bold text-foreground">{t.name}</h4>
              <span className="text-sm text-primary">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
