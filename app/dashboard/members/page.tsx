"use client"

import { motion } from "framer-motion"
import { Search, Filter, Edit2, Trash2 } from "lucide-react"

const members = [
  { id: 1, name: "Sarah Jenkins", role: "Volunteer", email: "sarah.j@example.com", status: "Active", joinDate: "2026-01-15" },
  { id: 2, name: "David Chen", role: "Donor", email: "david.c@example.com", status: "Active", joinDate: "2026-02-20" },
  { id: 3, name: "Elena Rodriguez", role: "Admin", email: "elena.r@inamigos.org", status: "Active", joinDate: "2025-11-10" },
  { id: 4, name: "Michael Chang", role: "Volunteer", email: "michael.c@example.com", status: "Inactive", joinDate: "2025-08-05" },
  { id: 5, name: "Anita Desai", role: "Member", email: "anita.d@example.com", status: "Active", joinDate: "2026-03-01" },
]

export default function MembersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Members</h1>
          <p className="text-muted-foreground">Manage your community members, volunteers, and donors.</p>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors">
          Add Member
        </button>
      </div>

      <div className="glass dark:glass-dark rounded-2xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search members..." className="w-full bg-muted/50 border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-primary transition-colors" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-muted/50 transition-colors w-full md:w-auto">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border text-muted-foreground text-sm">
                <th className="pb-4 font-medium">Name</th>
                <th className="pb-4 font-medium">Role</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Joined</th>
                <th className="pb-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, i) => (
                <motion.tr 
                  key={member.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary-foreground border border-secondary/20">
                      {member.role}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${member.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-muted text-muted-foreground'}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{member.joinDate}</td>
                  <td className="py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-2 text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
