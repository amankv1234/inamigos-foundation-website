"use client"

import { Bell, Search, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#0b0d07]/[0.64] px-6 backdrop-blur-2xl lg:px-8">
      <div className="flex items-center gap-4 lg:hidden">
        <button className="rounded-full p-2 text-foreground hover:bg-white/10"><Menu className="w-6 h-6" /></button>
      </div>
      <div className="flex-1 flex items-center max-w-md ml-4 lg:ml-0">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search..." className="w-full rounded-full border border-white/[0.12] bg-white/[0.07] py-2 pl-10 pr-4 text-sm backdrop-blur-xl transition-colors focus:border-primary focus:outline-none" />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-4">
        <ThemeToggle />
        <button className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>
      </div>
    </header>
  )
}
