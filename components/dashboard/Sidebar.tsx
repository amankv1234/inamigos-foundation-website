"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, Users, Megaphone, 
  Calendar, FileText, Settings, Heart 
} from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Users, label: "Members", href: "/dashboard/members" },
  { icon: Megaphone, label: "Campaigns", href: "/dashboard/campaigns" },
  { icon: Calendar, label: "Events", href: "/dashboard/events" },
  { icon: FileText, label: "Blog", href: "/dashboard/blog" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 flex-col border-r border-white/10 bg-[#0b0d07]/[0.72] backdrop-blur-2xl lg:flex">
      <div className="border-b border-white/10 p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl border border-primary/20 bg-primary/[0.12] p-2 text-primary shadow-lg shadow-primary/10">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gradient">InAmigos</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className={`relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${isActive ? "text-primary" : "text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"}`}>
              <item.icon className="w-5 h-5 z-10" />
              <span className="font-medium z-10">{item.label}</span>
              {isActive && (
                <motion.div layoutId="sidebar-indicator" className="absolute inset-0 rounded-xl border border-primary/15 bg-primary/[0.12]" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-white/10 p-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-primary/15" />
          <div>
            <p className="text-sm font-bold text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@inamigos.org</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
