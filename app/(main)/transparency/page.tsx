"use client"

import { motion } from "framer-motion"
import { PieChart, Download, FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const reports = [
  { year: "2025", name: "Annual Impact & Financial Report", size: "2.4 MB" },
  { year: "2024", name: "Annual Impact & Financial Report", size: "2.1 MB" },
  { year: "2023", name: "Annual Impact & Financial Report", size: "1.8 MB" },
]

export default function TransparencyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Accountability</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6">Financial <span className="text-gradient">Transparency</span></h1>
          <p className="text-muted-foreground text-lg">
            Trust is the foundation of everything we do. We believe you deserve to know exactly where every single dollar goes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">How Your Money is Spent</h2>
            <p className="text-muted-foreground">
              We are proud to maintain one of the highest efficiency ratios in the non-profit sector. By keeping our administrative and fundraising costs incredibly low, we ensure your donations have maximum impact.
            </p>
            
            <div className="space-y-6">
              {[
                { label: "Programs & Relief", percent: 85, color: "bg-primary" },
                { label: "Fundraising", percent: 10, color: "bg-secondary" },
                { label: "Administration", percent: 5, color: "bg-muted-foreground" },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>{stat.label}</span>
                    <span>{stat.percent}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className={`${stat.color} h-3 rounded-full`} style={{ width: `${stat.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass dark:glass-dark rounded-3xl p-12 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <PieChart className="w-64 h-64" />
            </div>
            <h3 className="text-6xl font-extrabold text-primary mb-4 relative z-10">85¢</h3>
            <p className="text-xl font-medium text-foreground relative z-10">
              Of every dollar donated goes directly to our programs.
            </p>
          </motion.div>
        </div>

        {/* Downloadable Reports */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Annual Reports</h2>
          <div className="space-y-4">
            {reports.map((report, i) => (
              <div key={i} className="glass dark:glass-dark p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{report.name}</h3>
                    <p className="text-sm text-muted-foreground">Published: {report.year} • PDF ({report.size})</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-xl group-hover:bg-primary group-hover:text-primary-foreground w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
