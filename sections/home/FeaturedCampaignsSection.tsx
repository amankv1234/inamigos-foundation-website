"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const campaigns = [
  {
    id: 1,
    title: "Education for All",
    description: "Providing basic education resources to children in remote villages.",
    raised: "$60,000",
    goal: "$100,000",
    progress: "60%",
    image: "/ngo website photo/donation 1.avif"
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description: "Building sustainable water wells and purification systems for communities in need.",
    raised: "$25,000",
    goal: "$50,000",
    progress: "50%",
    image: "/ngo website photo/donation 2.avif"
  },
  {
    id: 3,
    title: "Healthcare Access",
    description: "Delivering essential medical supplies and funding mobile clinics in underserved areas.",
    raised: "$80,000",
    goal: "$120,000",
    progress: "75%",
    image: "/ngo website photo/donation 3.avif"
  }
]

export function FeaturedCampaignsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Urgent <span className="text-gradient">Campaigns</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Your support can make an immediate difference. Help us reach our goals for these critical causes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="glass dark:glass-dark rounded-3xl overflow-hidden group border border-border/50 shadow-xl transition-all hover:shadow-primary/5">
              <div className="h-48 bg-muted relative overflow-hidden">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{campaign.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{campaign.description}</p>
                <div className="w-full bg-muted rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: campaign.progress }} />
                </div>
                <div className="flex justify-between text-sm font-medium mb-6">
                  <span className="text-primary">{campaign.raised} Raised</span>
                  <span className="text-muted-foreground">Goal: {campaign.goal}</span>
                </div>
                <Link href={`/campaigns/${campaign.id}`} className={buttonVariants({ className: "w-full rounded-xl shadow-md hover:shadow-lg transition-all" })}>
                  View Campaign
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/campaigns" className={buttonVariants({ variant: "ghost", className: "rounded-full text-primary hover:text-primary/80 group" })}>
          View all campaigns <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
