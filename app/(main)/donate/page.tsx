"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShieldCheck, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DonatePage() {
  const [amount, setAmount] = useState<number | null>(50)
  const [isMonthly, setIsMonthly] = useState(true)

  const presetAmounts = [10, 25, 50, 100, 250, 500]

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium">
            <Heart className="w-4 h-4 fill-primary" />
            <span>Make a difference today</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6">Support Our <span className="text-gradient">Mission</span></h1>
          <p className="text-muted-foreground text-lg">
            Your generous donation helps us fund critical projects, provide emergency relief, and sustain long-term development in communities worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Donation Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass dark:glass-dark rounded-3xl p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            
            <div className="flex bg-muted/50 p-1 rounded-xl mb-8">
              <button 
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${!isMonthly ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Give Once
              </button>
              <button 
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${isMonthly ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Monthly <span className="text-primary ml-1">♥</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {presetAmounts.map(preset => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset)}
                  className={`py-4 rounded-xl text-lg font-bold transition-all border ${
                    amount === preset 
                      ? "border-primary bg-primary/10 text-primary" 
                      : "border-border bg-background hover:border-primary/50 text-foreground"
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>

            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
              <input 
                type="number"
                value={amount || ""}
                onChange={(e) => setAmount(e.target.value ? parseInt(e.target.value) : null)}
                placeholder="Custom Amount"
                className="w-full bg-background border border-border rounded-xl py-4 pl-10 pr-4 text-lg font-bold focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <Button className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20 mb-4">
              Donate {amount ? `$${amount}` : ""} {isMonthly ? "Monthly" : ""}
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Secure, encrypted transaction</span>
            </div>
          </motion.div>

          {/* Impact Breakdown */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <h2 className="text-3xl font-bold">Your Impact Matters</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Provides Clean Water</h3>
                  <p className="text-muted-foreground text-sm">A $25 donation can provide a family with clean, safe drinking water for an entire month.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Funds Education</h3>
                  <p className="text-muted-foreground text-sm">A $50 donation supplies a rural classroom with essential learning materials for a year.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Emergency Relief</h3>
                  <p className="text-muted-foreground text-sm">A $100 donation delivers emergency food and medical kits to disaster-struck regions instantly.</p>
                </div>
              </div>
            </div>

            <div className="glass dark:glass-dark p-6 rounded-2xl mt-4 border border-primary/20 bg-primary/5">
              <p className="font-medium italic text-foreground/80">
                &quot;We pledge that 90% of all public donations go directly toward funding our charitable programs and initiatives.&quot;
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}
