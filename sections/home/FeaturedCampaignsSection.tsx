"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function FeaturedCampaignsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Urgent <span className="text-gradient">Campaigns</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Your support can make an immediate difference. Help us reach our goals for these critical causes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass dark:glass-dark rounded-3xl overflow-hidden group">
              <div className="h-48 bg-muted relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Education for All</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">Providing basic education resources to children in remote villages.</p>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full w-[60%]" />
                </div>
                <div className="flex justify-between text-sm font-medium mb-6">
                  <span className="text-primary">$60,000 Raised</span>
                  <span className="text-muted-foreground">Goal: $100,000</span>
                </div>
                <Link href={`/campaigns/${i}`} className={buttonVariants({ className: "w-full rounded-xl" })}>
                  View Campaign
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/campaigns" className={buttonVariants({ variant: "ghost", className: "rounded-full text-primary hover:text-primary/80" })}>
          View all campaigns <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
