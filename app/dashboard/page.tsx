"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, Target, Activity, ArrowUpRight } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const areaData = [
  { name: "Jan", donations: 4000, volunteers: 2400 },
  { name: "Feb", donations: 3000, volunteers: 1398 },
  { name: "Mar", donations: 2000, volunteers: 9800 },
  { name: "Apr", donations: 2780, volunteers: 3908 },
  { name: "May", donations: 1890, volunteers: 4800 },
  { name: "Jun", donations: 2390, volunteers: 3800 },
  { name: "Jul", donations: 3490, volunteers: 4300 },
]

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Donations", value: "$45,231", icon: DollarSign, trend: "+20.1%" },
          { title: "Active Volunteers", value: "2,350", icon: Users, trend: "+15.2%" },
          { title: "Campaigns Reached", value: "85%", icon: Target, trend: "+4.1%" },
          { title: "Community Impact", value: "12,400+", icon: Activity, trend: "+12.5%" },
        ].map((kpi, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass dark:glass-dark p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary"><kpi.icon className="w-5 h-5" /></div>
              <span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                {kpi.trend} <ArrowUpRight className="w-3 h-3 ml-1" />
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-1">{kpi.value}</h3>
            <p className="text-sm text-muted-foreground">{kpi.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass dark:glass-dark p-6 rounded-2xl lg:col-span-2">
          <h3 className="text-lg font-bold mb-6">Growth Analytics</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorVolunteers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                <Area type="monotone" dataKey="donations" stroke="#10b981" fillOpacity={1} fill="url(#colorDonations)" />
                <Area type="monotone" dataKey="volunteers" stroke="#3b82f6" fillOpacity={1} fill="url(#colorVolunteers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass dark:glass-dark p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {[
              { title: "New donation received", time: "2 hours ago", desc: "$500 from Anonymous" },
              { title: "Volunteer signed up", time: "4 hours ago", desc: "Sarah J. joined Education Program" },
              { title: "Campaign milestone", time: "5 hours ago", desc: "Clean Water Initiative reached 50%" },
              { title: "Event published", time: "1 day ago", desc: "Annual Gala 2026 is live" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                <div>
                  <h4 className="text-sm font-bold">{activity.title}</h4>
                  <p className="text-xs text-muted-foreground my-1">{activity.desc}</p>
                  <span className="text-[10px] text-muted-foreground/60">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
