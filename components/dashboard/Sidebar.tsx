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
    <aside className="w-64 flex-shrink-0 hidden lg:flex flex-col border-r border-border bg-background/50 backdrop-blur-xl h-screen sticky top-0">
      <div className="p-6 border-b border-border/50">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-xl text-primary">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gradient">InAmigos</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
              <item.icon className="w-5 h-5 z-10" />
              <span className="font-medium z-10">{item.label}</span>
              {isActive && (
                <motion.div layoutId="sidebar-indicator" className="absolute inset-0 bg-primary/10 rounded-xl" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
            </Link>
          )
        })}
      </nav>
      <div className="p-6 border-t border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary" />
          <div>
            <p className="text-sm font-bold text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@inamigos.org</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
