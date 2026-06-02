"use client"

import { motion } from "framer-motion"
import { Users, Target, Shield, Heart } from "lucide-react"

const containerVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export function ValuesSection() {
  return (
    <motion.div 
      className="mb-24"
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 variants={itemVariant} className="text-4xl font-bold text-center mb-12">Core <span className="text-gradient">Values</span></motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Compassion", desc: "Acting with empathy in everything we do.", icon: Heart },
          { title: "Transparency", desc: "100% accountability for every donation received.", icon: Shield },
          { title: "Community", desc: "Building strong, supportive networks.", icon: Users },
          { title: "Impact", desc: "Focusing on sustainable, long-term results.", icon: Target },
        ].map((val, i) => (
          <motion.div key={i} variants={itemVariant} className="bg-background/50 border border-border/50 p-8 rounded-3xl text-center hover:bg-primary/5 transition-colors">
            <div className="inline-block p-4 bg-primary/10 rounded-2xl text-primary mb-6">
              <val.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">{val.title}</h3>
            <p className="text-muted-foreground text-sm">{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
