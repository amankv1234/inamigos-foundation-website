"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Users, Globe2, TrendingUp } from "lucide-react"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export function StatsSection() {
  return (
    <section className="cinematic-section relative overflow-hidden border-y border-white/10 py-24">
      <div className="absolute inset-0">
        <Image
          src="/ngo website photo/comunity.avif"
          alt="Community background"
          fill
          className="object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/88 to-background" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          {[
            { icon: Users, target: 50000, suffix: "+", label: "Lives Impacted", color: "from-primary/24 to-[#c8a65a]/18" },
            { icon: Globe2, target: 120, suffix: "+", label: "Communities Reached", color: "from-[#b6d86a]/24 to-primary/14" },
            { icon: Heart, target: 2, prefix: "$", suffix: "M+", label: "Funds Raised", color: "from-[#d5b46d]/24 to-primary/16" },
            { icon: TrendingUp, target: 350, suffix: "+", label: "Active Volunteers", color: "from-primary/22 to-[#826b35]/18" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariant} 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass dark:glass-dark group flex cursor-default flex-col items-center gap-4 rounded-3xl p-8 transition-colors hover:border-primary/24"
            >
              <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-foreground">
                <AnimatedCounter target={item.target} prefix={item.prefix} suffix={item.suffix} />
              </h3>
              <p className="text-muted-foreground font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
