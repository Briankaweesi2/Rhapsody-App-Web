'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TopNavigation } from '@/components/top-navigation'
import { ChevronRight } from 'lucide-react'

export default function SolutionsPage() {
  const categories = [
    { name: "Healing", icon: "🌿", color: "bg-green-100 dark:bg-green-900/30" },
    { name: "Love", icon: "❤️", color: "bg-pink-100 dark:bg-pink-900/30" },
    { name: "Anxiety", icon: "⚡", color: "bg-purple-100 dark:bg-purple-900/30" },
    { name: "Peace", icon: "🌸", color: "bg-blue-100 dark:bg-blue-900/30" }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="solutions" />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Tab Navigation */}
        <div className="flex gap-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            My Solutions
          </Button>
          <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-full px-6">
            Browse Solutions
          </Button>
        </div>

        {/* Hero Banner */}
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=300&width=800&text=Field+with+flowers"
            alt="Find your faith with God"
            width={800}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold mb-2">Find your faith with God</h2>
            <p className="text-xl">On the journey to heaven</p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className={`${category.color} border-0 h-20 rounded-2xl flex items-center justify-center gap-3 flex-col md:flex-row hover:scale-105 transition-all duration-200`}
            >
              <span className="text-3xl">{category.icon}</span>
              <span className="font-medium text-foreground">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Popular Categories */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-foreground">Popular categories</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-foreground">Wisdom (23)</h4>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">See all</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="bg-accent/50 rounded-2xl p-4 flex items-center gap-4 hover:bg-accent transition-colors">
              <Image
                src="/placeholder.svg?height=80&width=60&text=Book"
                alt="Courage to Dare the Impossible"
                width={60}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h5 className="font-semibold text-foreground mb-1">Courage to Dare the Impossible</h5>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 text-sm">Hope</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-muted-foreground text-sm">3 Days</span>
                </div>
                <p className="text-lg font-bold text-foreground">$23</p>
              </div>
              <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
