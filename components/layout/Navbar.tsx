"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Heart, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Campaigns", path: "/campaigns" },
  { name: "Events", path: "/events" },
  { name: "Volunteer", path: "/volunteer" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="glass flex items-center justify-between rounded-[1.25rem] px-5 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl border border-primary/20 bg-primary/[0.12] p-2 text-primary shadow-lg shadow-primary/10"
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.div>
            <span className="font-bold text-xl tracking-tight text-gradient">InAmigos</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-white/[0.72]"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-primary/[0.12] rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center gap-4 border-l border-white/[0.12] pl-4">
              <ThemeToggle />
              <Link href="/donate" className={buttonVariants({ className: "rounded-full px-6" })}>
                Donate Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-foreground transition-colors hover:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass absolute left-4 right-4 top-20 flex flex-col gap-4 rounded-2xl p-4 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium ${
                  pathname === link.path
                    ? "bg-primary/[0.12] text-primary"
                    : "text-white/[0.72] hover:bg-white/10 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/donate" className={buttonVariants({ className: "w-full rounded-xl mt-2" })}>
              Donate Now
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  )
}
