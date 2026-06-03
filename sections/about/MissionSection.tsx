"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Shield } from "lucide-react"

const containerVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export function MissionSection() {
  return (
    <motion.div
      className="grid lg:grid-cols-3 gap-8 mb-24"
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Mission + Vision stacked on left two columns */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
        <motion.div variants={itemVariant} className="glass dark:glass-dark p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-32 h-32 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Target className="text-primary" /> Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
            To empower underprivileged communities by providing access to quality education, sustainable resources, and emergency relief, ensuring no one is left behind in the pursuit of a better tomorrow.
          </p>
        </motion.div>

        <motion.div variants={itemVariant} className="glass dark:glass-dark p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Shield className="w-32 h-32 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Shield className="text-primary" /> Our Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
            A world where equitable opportunities exist for all, where compassion drives innovation, and communities are self-sustaining, resilient, and thriving together.
          </p>
        </motion.div>
      </div>

      {/* Community image on the right */}
      <motion.div
        variants={itemVariant}
        className="relative rounded-3xl overflow-hidden min-h-[320px] lg:min-h-0 group shadow-2xl"
      >
        <Image
          src="/ngo website photo/comunity.avif"
          alt="InAmigos community impact"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="font-bold text-lg leading-tight">Building Communities Together</p>
          <p className="text-sm text-white/70 mt-1">Across 30+ countries worldwide</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

