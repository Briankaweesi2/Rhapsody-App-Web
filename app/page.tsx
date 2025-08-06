'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { RefreshCw, Bookmark, Play, ArrowRight, Search, Home, Leaf, Store, BookOpen, Users, Headphones, ChevronRight } from 'lucide-react'

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=48&width=48&text=Profile"
                alt="Profile"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-gray-900">Adult's Rhapsody</h1>
              <Button variant="ghost" size="sm" className="p-1">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full">
            <div className="w-4 h-4 bg-yellow-600 rounded mr-2"></div>
            Basic plan
          </Badge>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Study Streak Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <span className="text-sm">Daily Study Streak</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                {"You've read 2 days in a row!"} 
                <span className="text-2xl">👏</span>
              </h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 flex items-center gap-1">
                2 <span className="text-2xl">🔥</span>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Devotional Card */}
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden relative">
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
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex space-x-6">
              {['Related', 'Past', 'Saved'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-yellow-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Search</span>
            </div>
          </div>

          {/* Related Content */}
          <div className="p-4 space-y-4">
            {devotionalCards.map((card) => (
              <div key={card.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
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
                  <h4 className="font-semibold text-gray-900 mb-1">{card.title}</h4>
                  <p className="text-sm text-gray-500">{card.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation - Hidden on larger screens */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden">
        <div className="flex items-center justify-around">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Leaf, label: 'Solutions' },
            { icon: Store, label: 'Store' },
            { icon: BookOpen, label: 'Library' },
            { icon: Users, label: 'Socials' },
            { icon: Headphones, label: 'Audio' }
          ].map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg ${
                item.active ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <aside className="hidden md:block fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 pt-20">
        <nav className="p-4 space-y-2">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Leaf, label: 'Solutions' },
            { icon: Store, label: 'Store' },
            { icon: BookOpen, label: 'Library' },
            { icon: Users, label: 'Socials' },
            { icon: Headphones, label: 'Audio' }
          ].map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                item.active 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Add padding for desktop sidebar */}
      <div className="hidden md:block w-64"></div>
    </div>
  )
}
