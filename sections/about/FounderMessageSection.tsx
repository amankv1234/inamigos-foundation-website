"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function FounderMessageSection() {
  return (
    <motion.div 
      className="glass dark:glass-dark rounded-3xl p-8 md:p-12 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Quote className="absolute top-8 left-8 w-24 h-24 text-primary/10 rotate-180" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">A Message from the Founder</h2>
        <p className="text-lg text-muted-foreground italic mb-6">
          &quot;When we started InAmigos, it wasn&apos;t about creating a massive organization. It was about solving one small problem in our local community. Today, seeing how that vision has scaled to impact thousands of lives worldwide is both humbling and deeply inspiring. Our work is far from done, but together, we&apos;re proving that compassion combined with action can change the world.&quot;
        </p>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-full mb-4" />
          <h4 className="font-bold text-lg">Alex Mercer</h4>
          <span className="text-sm text-primary font-medium">Founder & CEO</span>
        </div>
      </div>
    </motion.div>
  )
}
