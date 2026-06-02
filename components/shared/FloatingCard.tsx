"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  amplitude?: number
}

export function FloatingCard({ children, className = "", delay = 0, amplitude = 10 }: FloatingCardProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  )
}
