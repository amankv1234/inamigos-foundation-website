"use client"

import { HeroSection } from "@/sections/home/HeroSection"
import { StatsSection } from "@/sections/home/StatsSection"
import { FeaturedCampaignsSection } from "@/sections/home/FeaturedCampaignsSection"
import { TestimonialSection } from "@/sections/home/TestimonialSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-24 overflow-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturedCampaignsSection />
      <TestimonialSection />
    </div>
  )
}
