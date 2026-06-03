"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Volunteer",
    text: "Volunteering with InAmigos changed my perspective on life. The impact we make is real and immediate.",
    image: "/ngo website photo/volenteer 2.avif",
  },
  {
    name: "David Chen",
    role: "Donor",
    text: "The transparency and dedication of this team is unmatched. I know exactly where my donations go.",
    image: "/ngo website photo/education 2.avif",
  },
  {
    name: "Elena Rodriguez",
    role: "Community Leader",
    text: "They didn't just give us resources; they taught us how to sustain ourselves. Truly empowering.",
    image: "/ngo website photo/comunity 1.avif",
  },
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
            className="glass dark:glass-dark p-8 rounded-3xl relative border border-border/50 group hover:border-primary/20 transition-colors duration-300"
          >
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
            <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">&quot;{t.text}&quot;</p>
            <div className="flex items-center gap-4">
              {/* Avatar with real image */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <span className="text-sm text-primary font-medium">{t.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
