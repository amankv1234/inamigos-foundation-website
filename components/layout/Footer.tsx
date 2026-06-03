import Link from "next/link"
import { Heart, Globe, MessageCircle, Hash, Link2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-[#0b0d07]/[0.88] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(132,204,22,0.12),transparent_24rem),radial-gradient(circle_at_86%_0%,rgba(191,145,66,0.12),transparent_22rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="group mb-4 flex items-center gap-2">
              <div className="rounded-xl border border-primary/20 bg-primary/[0.12] p-2 text-primary shadow-lg shadow-primary/10">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <span className="text-gradient text-xl font-bold tracking-tight">InAmigos</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-6 text-muted-foreground">
              Empowering communities through action, transparency, and care. Join
              us in building better tomorrows with grounded, human-first impact.
            </p>
            <div className="flex gap-3">
              {[Globe, MessageCircle, Hash, Link2].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/[0.12] hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/campaigns" className="hover:text-primary transition-colors">Campaigns</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/transparency" className="hover:text-primary transition-colors">Transparency</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Get Involved</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/volunteer" className="hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
