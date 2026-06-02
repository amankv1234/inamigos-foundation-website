"use client"

import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"

// Cloudinary placeholder logic would go here
// For now, generating a masonry grid of placeholders
const images = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  height: i % 3 === 0 ? 'h-96' : i % 2 === 0 ? 'h-64' : 'h-80',
  title: `Gallery Image ${i + 1}`,
}))

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Our <span className="text-gradient">Gallery</span></h1>
          <p className="text-muted-foreground text-lg">
            A visual journey of the impact we&apos;ve made, the lives we&apos;ve touched, and the beautiful moments captured in the field.
          </p>
        </div>

        {/* Masonry Layout via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className={`relative break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer ${img.height} bg-muted`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="font-semibold">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
