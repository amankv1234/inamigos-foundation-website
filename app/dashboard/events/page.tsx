"use client"

import { motion } from "framer-motion"
import { Plus, Calendar, MapPin, Clock, Users } from "lucide-react"

const events = [
  { id: 1, title: "Annual Charity Gala", date: "Oct 15, 2026", time: "7:00 PM", location: "Grand Plaza Hotel, NY", attendees: 150, status: "Upcoming", spots: 50 },
  { id: 2, title: "Community Beach Cleanup", date: "Nov 2, 2026", time: "9:00 AM", location: "Sunny Isles Beach, FL", attendees: 45, status: "Upcoming", spots: 80 },
  { id: 3, title: "Global Health Symposium", date: "Dec 10, 2026", time: "10:00 AM", location: "Virtual Event", attendees: 320, status: "Upcoming", spots: 200 },
  { id: 4, title: "Youth Leadership Workshop", date: "Sep 8, 2026", time: "2:00 PM", location: "InAmigos HQ, NY", attendees: 30, status: "Completed", spots: 0 },
]

const statusColors: Record<string, string> = {
  Upcoming: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  Completed: "bg-primary/10 text-primary border-primary/20",
  Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
}

const months = ["Oct", "Nov", "Dec"]

export default function EventsManagementPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Events Management</h1>
          <p className="text-muted-foreground">Schedule, manage, and track all NGO events.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> Create Event
        </button>
      </div>

      {/* Mini Calendar Strip */}
      <div className="glass dark:glass-dark rounded-2xl p-6">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> Q4 2026 Schedule</h2>
        <div className="grid grid-cols-3 gap-4">
          {months.map((month, mi) => (
            <div key={month} className="bg-muted/40 rounded-xl p-4">
              <p className="font-semibold text-primary mb-3">{month} 2026</p>
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-2">
                {["S","M","T","W","T","F","S"].map((d, i) => <span key={i}>{d}</span>)}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {Array.from({ length: 30 }, (_, k) => k + 1).map(day => (
                  <span key={day} className={`p-1 rounded-full cursor-pointer hover:bg-primary/20 transition-colors ${
                    (mi === 0 && day === 15) || (mi === 1 && day === 2) || (mi === 2 && day === 10)
                      ? "bg-primary text-primary-foreground font-bold" : "text-muted-foreground"
                  }`}>{day}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass dark:glass-dark rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg leading-tight pr-4">{event.title}</h3>
              <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${statusColors[event.status]}`}>
                {event.status}
              </span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {event.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {event.time}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {event.location}</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> {event.attendees} registered {event.spots > 0 && `- ${event.spots} spots left`}</div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-border/50">
              <button className="flex-1 py-2 text-sm font-medium rounded-xl bg-muted/80 hover:bg-muted transition-colors">Edit</button>
              <button className="flex-1 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Manage</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
