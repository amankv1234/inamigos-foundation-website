"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const campaigns = [
  { id: 1, title: "Clean Water Initiative", category: "Health", raised: 45000, goal: 100000, desc: "Building wells in remote villages to provide safe, clean drinking water.", image: "/ngo website photo/comunity 1.avif" },
  { id: 2, title: "Education for All", category: "Education", raised: 80000, goal: 120000, desc: "Providing school supplies and building classrooms for underprivileged children.", image: "/ngo website photo/education 1.avif" },
  { id: 3, title: "Emergency Relief Fund", category: "Emergency", raised: 150000, goal: 200000, desc: "Rapid response funding for natural disasters and humanitarian crises.", image: "/ngo website photo/help  hand.avif" },
  { id: 4, title: "Green Earth Project", category: "Environment", raised: 25000, goal: 50000, desc: "Planting trees and promoting sustainable farming practices.", image: "/ngo website photo/rular education.avif" },
  { id: 5, title: "Women Empowerment", category: "Social", raised: 60000, goal: 80000, desc: "Vocational training and micro-loans for women entrepreneurs.", image: "/ngo website photo/social work 12.avif" },
  { id: 6, title: "Youth Mentorship", category: "Education", raised: 10000, goal: 30000, desc: "Connecting successful professionals with at-risk youth.", image: "/ngo website photo/education 2.avif" },
]

const categories = ["All", "Education", "Health", "Environment", "Social", "Emergency"]

export default function CampaignsPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredCampaigns = campaigns.filter(c => 
    (activeCategory === "All" || c.category === activeCategory) &&
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Explore <span className="text-gradient">Campaigns</span></h1>
          <p className="text-muted-foreground text-lg">
            Discover causes you care about and help us reach our goals. Every contribution makes a tangible difference.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 glass dark:glass-dark p-4 rounded-2xl">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Campaign Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCampaigns.map((campaign) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={campaign.id} 
                className="glass dark:glass-dark rounded-3xl overflow-hidden flex flex-col border border-border/50 shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="h-48 bg-muted relative overflow-hidden">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary z-10">
                    {campaign.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl mb-2">{campaign.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{campaign.desc}</p>
                  
                  <div className="mt-auto">
                    <div className="w-full bg-muted rounded-full h-2 mb-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-primary h-full rounded-full" 
                      />
                    </div>
                    <div className="flex justify-between text-sm font-medium mb-6">
                      <span className="text-primary">${campaign.raised.toLocaleString()}</span>
                      <span className="text-muted-foreground">of ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <Link href={`/campaigns/${campaign.id}`} className={buttonVariants({ className: "w-full rounded-xl group" })}>
                      View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No campaigns found matching your criteria.</p>
          </div>
        )}

      </div>
    </div>
  )
}

