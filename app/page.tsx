'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TopNavigation } from '@/components/top-navigation'
import { Bookmark, Play, ArrowRight, Search, ChevronRight } from 'lucide-react'

export default function DevotionalApp() {
  const [activeTab, setActiveTab] = useState('Related')

  const devotionalCards = [
    {
      id: 1,
      title: "Your Life Is The Real Message",
      date: "Mon, April 7th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Speaker"
    },
    {
      id: 2,
      title: "Your Life Is The Real Message",
      date: "Mon, April 7th 2020", 
      image: "/placeholder.svg?height=80&width=80&text=Speaker"
    }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="home" />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Study Streak Section */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="text-sm">Daily Study Streak</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                {"You've read 2 days in a row!"} 
                <span className="text-2xl">👏</span>
              </h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-foreground flex items-center gap-1">
                2 <span className="text-2xl">🔥</span>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Devotional Card */}
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white overflow-hidden relative border-0 transition-all duration-300">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full -translate-x-8 translate-y-8"></div>
            <div className="absolute bottom-0 left-8 w-24 h-24 bg-blue-300 rounded-full translate-y-4"></div>
          </div>
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium opacity-90">Today's Devotional</h3>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Bookmark className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Your Role In Building His Church In Today's World
            </h2>
            <p className="text-blue-100 leading-relaxed">
              To be filled with the fullness of God means to be filled with the totality of the divine essence, His ve...
            </p>
            <p className="text-blue-200 font-medium">Ephesians 6: 11-34</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                variant="ghost" 
                className="text-white border-white/30 hover:bg-white/20 justify-start"
              >
                <Play className="w-4 h-4 mr-2" />
                Listen to devotion
              </Button>
              <Button 
                className="bg-white text-blue-800 hover:bg-gray-100 justify-center"
              >
                Read devotion
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="bg-card rounded-lg shadow-sm border border-border transition-colors duration-300">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex space-x-6">
              {['Related', 'Past', 'Saved'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-[#DAA520] text-[#DAA520]'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Search</span>
            </div>
          </div>

          {/* Related Content */}
          <div className="p-4 space-y-4">
            {devotionalCards.map((card) => (
              <div key={card.id} className="flex items-center gap-4 p-3 hover:bg-accent rounded-lg cursor-pointer transition-colors">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt="Speaker"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
