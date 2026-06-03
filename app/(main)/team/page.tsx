"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Link2, MessageCircle, Mail } from "lucide-react"

const team = [
  { name: "Alex Mercer",       role: "Founder & CEO",              bio: "Former tech executive turned philanthropist, dedicated to bridging the global inequality gap.",                               image: "/ngo website photo/social work.avif" },
  { name: "Sarah Jenkins",     role: "Chief Operating Officer",     bio: "15+ years experience in managing international development programs and NGO operations.",                                    image: "/ngo website photo/comunity.avif" },
  { name: "Dr. Aisha Rahman",  role: "Head of Health Initiatives",  bio: "Public health expert leading our clean water and rural clinic programs across three continents.",                            image: "/ngo website photo/education 3.avif" },
  { name: "David Chen",        role: "Director of Education",       bio: "Passionate educator focused on digital literacy and building sustainable school infrastructure.",                            image: "/ngo website photo/rular education.avif" },
  { name: "Elena Rodriguez",   role: "Community Outreach Lead",     bio: "Grassroots organizer specializing in empowering local leaders and women entrepreneurs.",                                     image: "/ngo website photo/comunity 1.avif" },
  { name: "Marcus Johnson",    role: "CFO",                         bio: "Ensuring 100% financial transparency and maximizing the impact of every donated dollar.",                                   image: "/ngo website photo/social work 12.avif" },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Meet Our <span className="text-gradient">Team</span></h1>
          <p className="text-muted-foreground text-lg">
            A diverse group of passionate professionals united by a single mission: to create lasting, positive change in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass dark:glass-dark rounded-3xl overflow-hidden group text-center flex flex-col items-center border border-border/50 shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Team member photo */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col items-center flex-1">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{member.bio}</p>
                
                <div className="flex gap-4 mt-auto">
                  <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Link2 className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Message" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Email" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
