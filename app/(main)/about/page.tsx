"use client"

import { motion } from "framer-motion"
import { MissionSection } from "@/sections/about/MissionSection"
import { TimelineSection } from "@/sections/about/TimelineSection"
import { ValuesSection } from "@/sections/about/ValuesSection"
import { FounderMessageSection } from "@/sections/about/FounderMessageSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We believe that every small act of kindness ripples out to create a massive wave of global change. Learn about our journey, our values, and the people behind the mission.
          </p>
        </motion.div>

        <MissionSection />
        <TimelineSection />
        <ValuesSection />
        <FounderMessageSection />
        
      </div>
    </div>
  )
}
