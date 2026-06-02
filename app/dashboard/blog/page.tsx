"use client"

import { motion } from "framer-motion"
import { Plus, Eye, Edit2, Trash2, Search } from "lucide-react"

const posts = [
  { id: 1, title: "How Clean Water Changed Everything in Mwanza", author: "Elena R.", category: "Health", status: "Published", date: "2026-05-20", views: 1420 },
  { id: 2, title: "Meet Our 2026 Volunteer of the Year", author: "Sarah J.", category: "People", status: "Published", date: "2026-05-15", views: 865 },
  { id: 3, title: "The Green Earth Project: 6-Month Update", author: "Admin", category: "Environment", status: "Draft", date: "2026-06-01", views: 0 },
  { id: 4, title: "Annual Report 2025 – Key Highlights", author: "David C.", category: "Report", status: "Published", date: "2026-04-30", views: 3210 },
  { id: 5, title: "Why Youth Mentorship is Our Most Impactful Program", author: "Elena R.", category: "Education", status: "Review", date: "2026-06-02", views: 0 },
]

const statusColors: Record<string, string> = {
  Published: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  Draft: "bg-muted text-muted-foreground border-border",
  Review: "bg-amber-500/10 text-amber-500 border-amber-500/20",
}

export default function BlogManagementPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <p className="text-muted-foreground">Create, manage and publish stories and news articles.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Posts", value: "34" },
          { label: "Published", value: "28" },
          { label: "Drafts", value: "4" },
          { label: "Total Views", value: "52.4K" },
        ].map((s, i) => (
          <div key={i} className="glass dark:glass-dark rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="glass dark:glass-dark rounded-2xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search posts..." className="w-full bg-muted/50 border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-primary transition-colors" />
          </div>
          <select className="bg-muted/50 border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary w-full md:w-auto">
            <option>All Statuses</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Review</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-border text-muted-foreground text-sm">
                <th className="pb-4 font-medium">Title</th>
                <th className="pb-4 font-medium">Author</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">Views</th>
                <th className="pb-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <motion.tr
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 pr-4">
                    <p className="font-medium text-foreground line-clamp-1">{post.title}</p>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">{post.category}</span>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{post.author}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[post.status]}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{post.date}</td>
                  <td className="py-4 text-sm text-muted-foreground">{post.views > 0 ? post.views.toLocaleString() : "—"}</td>
                  <td className="py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors"><Eye className="w-4 h-4" /></button>
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
