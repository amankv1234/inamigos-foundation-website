"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, GraduationCap, Handshake, Heart, Sparkles } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 28, delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
}

const stats = [
  { icon: Users, value: "12,500+", label: "Lives Impacted" },
  { icon: GraduationCap, value: "250+", label: "Education Support" },
  { icon: Handshake, value: "150+", label: "Volunteers" },
  { icon: Heart, value: "50+", label: "Communities" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#101309] text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/ngo website photo/homepage.png"
          alt="InAmigos Foundation volunteers spending time with children in a community learning space"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="scale-[1.18] object-cover object-[72%_center] brightness-[0.88] saturate-[1.08] md:scale-[1.12] lg:scale-[1.08] lg:object-[68%_center]"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_72%_36%,rgba(255,216,151,0.18),transparent_30%),linear-gradient(90deg,rgba(8,10,5,0.96)_0%,rgba(13,16,8,0.84)_34%,rgba(13,16,8,0.4)_62%,rgba(7,8,4,0.34)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,7,4,0.68)_0%,rgba(6,7,4,0.1)_33%,rgba(6,7,4,0.36)_74%,rgba(6,7,4,0.94)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_52%,rgba(132,204,22,0.2),transparent_34%)] mix-blend-soft-light" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-5 pt-32 sm:px-8 md:pb-7 lg:px-10">
        <div className="grid flex-1 items-end gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)]">
          <div className="max-w-3xl pb-4 sm:pb-8 lg:pb-12">
            <motion.div
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a9d85c]/35 bg-[#d8ff8a]/10 px-4 py-2 text-sm font-semibold text-[#d7ff8a] shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4" />
              Making a difference, one life at a time
            </motion.div>

            <motion.h1
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl text-5xl font-extrabold leading-[0.98] text-white drop-shadow-[0_18px_44px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl"
            >
              Empowering{" "}
              <span className="text-[#9fd333]">Lives.</span>
              <span className="block">Building Better</span>
              <span className="text-[#9fd333]">Tomorrows.</span>
            </motion.h1>

            <motion.p
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-xl text-base font-medium leading-8 text-white/[0.82] drop-shadow-[0_8px_26px_rgba(0,0,0,0.7)] sm:text-lg"
            >
              InAmigos Foundation works across education, healthcare, community
              development and social welfare to create lasting impact where it is
              needed most.
            </motion.p>

            <motion.div
              custom={0.65}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/volunteer"
                className="inline-flex h-13 items-center gap-2 rounded-full bg-[#95c92f] px-7 text-sm font-bold text-[#111506] shadow-[0_20px_55px_rgba(149,201,47,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a7db3f]"
              >
                Join Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/campaigns"
                className="inline-flex h-13 items-center gap-2 rounded-full border border-white/[0.34] bg-white/10 px-7 text-sm font-bold text-white shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.18]"
              >
                Explore Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            custom={0.75}
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="hidden items-end justify-end pb-12 lg:flex"
          >
            <div className="max-w-sm rounded-[2rem] border border-white/[0.14] bg-black/[0.18] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d7ff8a]/85">
                Community first
              </p>
              <p className="mt-3 text-xl font-bold leading-snug text-white">
                Warmth, trust and grassroots action woven into every program.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          custom={0.85}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.14] bg-white/[0.075] shadow-[0_30px_90px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0.16),rgba(255,255,255,0.045)_42%,rgba(132,204,22,0.14))]" />
          <div className="relative grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={0.9 + i * 0.08}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="group flex items-center gap-3 border-white/10 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 md:border-l md:first:border-l-0"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d6ff74]/28 bg-[#95c92f]/86 text-white shadow-[0_14px_38px_rgba(132,204,22,0.26)] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-extrabold leading-none text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/[0.72] sm:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
