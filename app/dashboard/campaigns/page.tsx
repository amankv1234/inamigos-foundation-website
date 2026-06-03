"use client"

import { motion } from "framer-motion"
import { Plus, MoreHorizontal } from "lucide-react"

const campaigns = [
  { id: 1, title: "Clean Water Initiative", category: "Health", raised: 45000, goal: 100000, status: "Active", volunteers: 24 },
  { id: 2, title: "Education for All", category: "Education", raised: 80000, goal: 120000, status: "Active", volunteers: 42 },
  { id: 3, title: "Emergency Relief Fund", category: "Emergency", raised: 150000, goal: 200000, status: "Active", volunteers: 68 },
  { id: 4, title: "Green Earth Project", category: "Environment", raised: 25000, goal: 50000, status: "Paused", volunteers: 15 },
  { id: 5, title: "Women Empowerment", category: "Social", raised: 60000, goal: 80000, status: "Completed", volunteers: 30 },
  { id: 6, title: "Youth Mentorship", category: "Education", raised: 10000, goal: 30000, status: "Draft", volunteers: 8 },
]

const statusColors: Record<string, string> = {
  Active: "bg-primary/10 text-primary border-primary/20",
  Paused: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  Completed: "bg-white/10 text-foreground border-white/15",
  Draft: "bg-muted text-muted-foreground border-border",
}

export default function CampaignsManagementPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Campaign Management</h1>
          <p className="text-muted-foreground">Monitor and manage all fundraising campaigns.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {campaigns.map((campaign, i) => {
          const progress = Math.round((campaign.raised / campaign.goal) * 100)
          return (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass dark:glass-dark rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow group"
            >
              <div className="flex justify-between items-start">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[campaign.status]}`}>
                  {campaign.status}
                </span>
                <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{campaign.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">{campaign.category}</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-primary font-semibold">${campaign.raised.toLocaleString()}</span>
                  <span className="text-muted-foreground">of ${campaign.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-right">{progress}% funded</p>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-border/50 text-sm text-muted-foreground">
                <span>{campaign.volunteers} volunteers</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs font-medium rounded-lg bg-muted/80 hover:bg-muted transition-colors">Edit</button>
                  <button className="px-3 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">View</button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
