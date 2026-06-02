"use client"

import { motion } from "framer-motion"
import { Camera, Bell, Globe, Shield, Moon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and platform settings.</p>
      </div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass dark:glass-dark rounded-2xl p-6 space-y-6"
      >
        <h2 className="text-lg font-bold border-b border-border/50 pb-4">Profile Information</h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary" />
            <button className="absolute bottom-0 right-0 bg-background border border-border w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h3 className="font-bold text-xl">Admin User</h3>
            <p className="text-sm text-muted-foreground">admin@inamigos.org</p>
            <span className="text-xs px-2 py-1 mt-1 inline-block bg-primary/10 text-primary rounded-full font-medium">SuperAdmin</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Full Name", placeholder: "Admin User" },
            { label: "Email Address", placeholder: "admin@inamigos.org" },
            { label: "Phone", placeholder: "+1 (555) 000-0000" },
            { label: "Location", placeholder: "New York, USA" },
          ].map((field, i) => (
            <div key={i} className="space-y-2">
              <label className="text-sm font-medium">{field.label}</label>
              <input
                type="text"
                defaultValue={field.placeholder}
                className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors text-sm">
            Save Changes
          </button>
        </div>
      </motion.div>

      {/* Appearance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass dark:glass-dark rounded-2xl p-6 space-y-6"
      >
        <h2 className="text-lg font-bold border-b border-border/50 pb-4">Appearance</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-muted rounded-xl"><Moon className="w-5 h-5 text-primary" /></div>
            <div>
              <p className="font-medium text-sm">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Toggle between light and dark theme</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass dark:glass-dark rounded-2xl p-6 space-y-6"
      >
        <h2 className="text-lg font-bold border-b border-border/50 pb-4">Notifications</h2>
        <div className="space-y-4">
          {[
            { icon: Bell, title: "Email Notifications", desc: "Receive alerts for new donations, signups, and milestones" },
            { icon: Globe, title: "Campaign Updates", desc: "Get notified when campaigns hit key milestones" },
            { icon: Shield, title: "Security Alerts", desc: "Important alerts about account security" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-muted rounded-xl"><item.icon className="w-5 h-5 text-primary" /></div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground max-w-xs">{item.desc}</p>
                </div>
              </div>
              <button
                role="switch"
                aria-checked={i !== 2}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${i !== 2 ? "bg-primary" : "bg-muted"}`}
              >
                <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${i !== 2 ? "translate-x-6" : "translate-x-1"}`} />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl p-6 border border-destructive/30 bg-destructive/5 space-y-4"
      >
        <h2 className="text-lg font-bold text-destructive">Danger Zone</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="font-medium text-sm">Delete Account</p>
            <p className="text-xs text-muted-foreground">Permanently delete your account and all data. This cannot be undone.</p>
          </div>
          <button className="px-6 py-2 text-sm font-medium rounded-xl border border-destructive text-destructive hover:bg-destructive hover:text-white transition-colors shrink-0">
            Delete Account
          </button>
        </div>
      </motion.div>
    </div>
  )
}
