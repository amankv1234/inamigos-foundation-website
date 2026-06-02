"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  { id: 1, title: "How Clean Water Changes Everything", category: "Impact Story", date: "Jun 1, 2026", author: "Sarah Jenkins", excerpt: "Discover the ripple effect of providing clean water to the village of Oloitokitok." },
  { id: 2, title: "Our Annual Report is Here", category: "Transparency", date: "May 28, 2026", author: "Alex Mercer", excerpt: "A detailed breakdown of how your donations were used in the past fiscal year." },
  { id: 3, title: "Empowering Women in Tech", category: "Initiatives", date: "May 15, 2026", author: "Priya Sharma", excerpt: "Highlighting our new vocational training program launched in Southeast Asia." },
  { id: 4, title: "5 Ways You Can Help Today", category: "Guide", date: "May 10, 2026", author: "Community Team", excerpt: "Don't have time to volunteer? Here are 5 quick ways you can support our mission." },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Latest <span className="text-gradient">Updates</span></h1>
          <p className="text-muted-foreground text-lg">
            Stories of impact, organization updates, and guides on how you can get more involved with our mission.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass dark:glass-dark rounded-3xl overflow-hidden mb-12 flex flex-col md:flex-row group"
        >
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-muted relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="text-primary font-semibold text-sm mb-4 bg-primary/10 w-fit px-3 py-1 rounded-full">Featured</div>
            <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
              The Future of Sustainable Agriculture
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              We recently partnered with local farmers to implement drought-resistant farming techniques. Read about the early successes and the challenges ahead.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Jun 2, 2026</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Editorial Team</span>
            </div>
            <Link href={`/blog/featured`} className="inline-flex items-center text-primary font-semibold hover:underline w-fit group/link">
              Read Full Story <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={post.id} 
              className="glass dark:glass-dark rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary z-10">
                  {post.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
