"use client"

import { motion } from "framer-motion"

const milestones = [
  { year: "2018", title: "Foundation Established", desc: "InAmigos was born with a mission to help 100 children in local communities." },
  { year: "2020", title: "Global Expansion", desc: "Launched our first international clean water initiative in three countries." },
  { year: "2023", title: "Education Milestone", desc: "Built 50 schools and provided resources to over 10,000 students." },
  { year: "2026", title: "Sustainable Future", desc: "Pioneering green energy projects in rural villages to ensure self-sufficiency." }
]

export function TimelineSection() {
  return (
    <motion.div 
      className="mb-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-4xl font-bold text-center mb-16">Our <span className="text-gradient">Timeline</span></h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full md:text-right">
                <div className={`glass dark:glass-dark p-6 rounded-3xl ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <h3 className="text-2xl font-bold mb-2">{m.title}</h3>
                  <p className="text-muted-foreground">{m.desc}</p>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center text-primary font-bold z-10 shrink-0">
                {m.year}
              </div>
              <div className="flex-1 w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
