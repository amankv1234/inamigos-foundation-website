"use client"

import { motion } from "framer-motion"
import { Hero3D } from "@/components/shared/Hero3D"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles } from "lucide-react"

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4">
      <Hero3D />
      
      <motion.div 
        className="text-center max-w-4xl mx-auto z-10 glass dark:glass-dark p-8 md:p-12 rounded-3xl"
        variants={containerVariant}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium border border-primary/20">
          <Sparkles className="w-4 h-4" />
          <span>Join our mission to create impact</span>
        </motion.div>
        
        <motion.h1 variants={itemVariant} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Empowering <span className="text-gradient">Communities.</span><br />
          Inspiring <span className="text-gradient">Change.</span>
        </motion.h1>
        
        <motion.p variants={itemVariant} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          InAmigos Foundation is dedicated to bringing sustainable development, education, and hope to underprivileged communities worldwide.
        </motion.p>
        
        <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/donate" className={buttonVariants({ size: "lg", className: "rounded-full h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/25" })}>
            <Heart className="mr-2 w-5 h-5" /> Donate Now
          </Link>
          <Link href="/volunteer" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full h-14 px-8 text-lg w-full sm:w-auto glass hover:bg-muted" })}>
            Become a Volunteer <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
