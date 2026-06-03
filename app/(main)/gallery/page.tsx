"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/ngo website photo/children.avif",        alt: "Children in school",           title: "Hope Through Education",   height: "h-96" },
  { src: "/ngo website photo/children 2.avif",       alt: "Children learning",            title: "Classroom Moments",        height: "h-64" },
  { src: "/ngo website photo/childeren 3.avif",      alt: "Children playing",             title: "Joy & Community",          height: "h-80" },
  { src: "/ngo website photo/comunity.avif",         alt: "Community gathering",          title: "Community Spirit",         height: "h-64" },
  { src: "/ngo website photo/comunity 1.avif",       alt: "Community support",            title: "Together We Rise",         height: "h-96" },
  { src: "/ngo website photo/education 1.avif",      alt: "Education program",            title: "Learning for Life",        height: "h-80" },
  { src: "/ngo website photo/education 2.avif",      alt: "Students studying",            title: "Future Leaders",           height: "h-64" },
  { src: "/ngo website photo/education 3.avif",      alt: "Teacher in classroom",         title: "Dedicated Educators",      height: "h-96" },
  { src: "/ngo website photo/education 4.avif",      alt: "Rural school",                 title: "Rural Schools Initiative", height: "h-64" },
  { src: "/ngo website photo/rular education.avif",  alt: "Rural education",              title: "Reaching Remote Areas",    height: "h-80" },
  { src: "/ngo website photo/rular educaion 2.avif", alt: "Rural students",               title: "Every Child Matters",      height: "h-64" },
  { src: "/ngo website photo/rular education 3.avif",alt: "Rural classroom",              title: "Building Tomorrow",        height: "h-96" },
  { src: "/ngo website photo/social work.avif",      alt: "Social workers",               title: "On The Ground",            height: "h-64" },
  { src: "/ngo website photo/social work 12.avif",   alt: "Community work",               title: "Impact In Action",         height: "h-80" },
  { src: "/ngo website photo/donation 4.avif",       alt: "Donation impact",              title: "Your Donations At Work",   height: "h-64" },
  { src: "/ngo website photo/help  hand.avif",       alt: "Helping hands",                title: "A Helping Hand",           height: "h-96" },
]

export default function GalleryPage() {
  const [selected, setSelected] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Our <span className="text-gradient">Gallery</span></h1>
          <p className="text-muted-foreground text-lg">
            A visual journey of the impact we&apos;ve made, the lives we&apos;ve touched, and the beautiful moments captured in the field.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              onClick={() => setSelected(img)}
              className={`relative break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer ${img.height} bg-muted shadow-md hover:shadow-2xl transition-shadow duration-300`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6 px-4 text-white">
                <span className="font-semibold text-center text-sm leading-snug">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[85vh]">
                  <Image src={selected.src} alt={selected.alt} fill className="object-contain" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-xl">{selected.title}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
