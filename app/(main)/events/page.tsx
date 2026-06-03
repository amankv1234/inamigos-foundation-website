"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: "Oct 15, 2026",
    time: "7:00 PM",
    location: "Grand Plaza Hotel, NY",
    desc: "Join us for an evening of inspiration and fundraising to support our education initiatives.",
    image: "/ngo website photo/education 3.avif",
    badge: "Fundraiser",
  },
  {
    id: 2,
    title: "Community Beach Cleanup",
    date: "Nov 2, 2026",
    time: "9:00 AM",
    location: "Sunny Isles Beach, FL",
    desc: "Help us protect marine life and keep our oceans clean. Gloves and bags provided.",
    image: "/ngo website photo/volenteer 1.avif",
    badge: "Volunteer",
  },
  {
    id: 3,
    title: "Global Health Symposium",
    date: "Dec 10, 2026",
    time: "10:00 AM",
    location: "Virtual Event",
    desc: "Expert panels discussing sustainable health solutions in developing nations.",
    image: "/ngo website photo/children 2.avif",
    badge: "Virtual",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Upcoming <span className="text-gradient">Events</span></h1>
          <p className="text-muted-foreground text-lg">
            Connect with our community, learn from experts, and make a hands-on difference at our events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={event.id} 
              className="glass dark:glass-dark rounded-3xl overflow-hidden flex flex-col group border border-border/50 shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {event.badge}
                </div>
                {/* Date badge floating on image */}
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-xl">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{event.desc}</p>
                
                <div className="space-y-2 mb-6 text-sm text-foreground/80">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <Link href={`/events/${event.id}`} className={buttonVariants({ className: "w-full rounded-xl group/btn" })}>
                  Register Now <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
