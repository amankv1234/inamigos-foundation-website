"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

export function FounderMessageSection() {
  return (
    <motion.div 
      className="glass dark:glass-dark rounded-3xl overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
          <Image
            src="/ngo website photo/social work.avif"
            alt="Founder in the field"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 md:bg-gradient-to-l" />
        </div>

        {/* Quote Side */}
        <div className="relative p-8 md:p-12 flex flex-col justify-center">
          <Quote className="absolute top-8 right-8 w-20 h-20 text-primary/10 rotate-180" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A Message from the Founder</h2>
            <p className="text-lg text-muted-foreground italic mb-8 leading-relaxed">
              &quot;When we started InAmigos, it wasn&apos;t about creating a massive organization. It was about solving one small problem in our local community. Today, seeing how that vision has scaled to impact thousands of lives worldwide is both humbling and deeply inspiring. Our work is far from done, but together, we&apos;re proving that compassion combined with action can change the world.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-tr from-primary to-secondary rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Alex Mercer</h4>
                <span className="text-sm text-primary font-medium">Founder &amp; CEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
