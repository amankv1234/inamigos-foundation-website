"use client"

import { Bell, Search, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function TopNav() {
  return (
    <header className="h-20 border-b border-border bg-background/50 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center gap-4 lg:hidden">
        <button className="p-2 text-foreground"><Menu className="w-6 h-6" /></button>
      </div>
      <div className="flex-1 flex items-center max-w-md ml-4 lg:ml-0">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search..." className="w-full bg-muted/50 border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors" />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-4">
        <ThemeToggle />
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>
      </div>
    </header>
  )
}
