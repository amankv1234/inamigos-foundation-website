"use client"

import { motion } from "framer-motion"
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
    <section className="py-24 bg-muted/50 border-y border-border/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          {[
            { icon: Users, target: 50000, suffix: "+", label: "Lives Impacted", color: "from-blue-500/20 to-cyan-500/20" },
            { icon: Globe2, target: 120, suffix: "+", label: "Communities Reached", color: "from-emerald-500/20 to-green-500/20" },
            { icon: Heart, target: 2, prefix: "$", suffix: "M+", label: "Funds Raised", color: "from-pink-500/20 to-rose-500/20" },
            { icon: TrendingUp, target: 350, suffix: "+", label: "Active Volunteers", color: "from-purple-500/20 to-violet-500/20" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariant} 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass dark:glass-dark p-8 rounded-3xl flex flex-col items-center gap-4 cursor-default group"
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

