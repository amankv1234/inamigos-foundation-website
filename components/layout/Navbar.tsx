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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.12] bg-[#0d1009]/82 shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition-all duration-300">
      <nav className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-xl border border-primary/20 bg-primary/[0.12] p-2 text-primary shadow-lg shadow-primary/10"
          >
            <Heart className="h-5 w-5 fill-current" />
          </motion.div>
          <span className="text-gradient truncate text-xl font-bold tracking-tight sm:text-2xl">
            InAmigos
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-1 px-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-white/[0.72]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/[0.12]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <ThemeToggle />
          <Link href="/donate" className={buttonVariants({ className: "rounded-full px-6" })}>
            Donate Now
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="hidden shrink-0 rounded-full p-2 text-foreground transition-colors hover:bg-white/10 md:inline-flex lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="glass fixed left-3 right-3 top-24 flex flex-col gap-3 rounded-2xl p-4 shadow-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-medium ${
                pathname === link.path
                  ? "bg-primary/[0.12] text-primary"
                  : "text-white/[0.72] hover:bg-white/10 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="grid gap-3 border-t border-white/[0.12] pt-3 md:hidden">
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({ className: "w-full rounded-xl" })}
            >
              Donate Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
