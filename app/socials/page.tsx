'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TopNavigation } from '@/components/top-navigation'
import { ChevronRight, Play, Heart, MessageCircle, Plus } from 'lucide-react'

export default function SocialsPage() {
  const inspiredStories = [
    { name: "Jane Sullivan", image: "/placeholder.svg?height=60&width=60&text=JS", color: "border-[#DAA520]" },
    { name: "Aaliyah Carter", image: "/placeholder.svg?height=60&width=60&text=AC", color: "border-green-400" },
    { name: "Tom Brady", image: "/placeholder.svg?height=60&width=60&text=TB", color: "border-orange-400" },
    { name: "James Cameron", image: "/placeholder.svg?height=60&width=60&text=JC", color: "border-pink-400" }
  ]

  const rhapsodyShorts = [
    {
      id: 1,
      title: "Bless the Lord Oh my Soul, and all th...",
      image: "/placeholder.svg?height=200&width=150&text=Video1"
    },
    {
      id: 2,
      title: "How Well Do you Know Christ Emba...",
      image: "/placeholder.svg?height=200&width=150&text=Video2"
    },
    {
      id: 3,
      title: "Faith Over Fear: Conquering Anx...",
      image: "/placeholder.svg?height=200&width=150&text=Video3"
    }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="socials" />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/* Inspired Stories */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Inspired Stories</h2>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {inspiredStories.map((story, index) => (
              <div key={index} className="flex flex-col items-center gap-3 min-w-0">
                <div className={`w-20 h-20 rounded-full border-3 ${story.color} p-0.5`}>
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={76}
                    height={76}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-sm text-foreground text-center leading-tight">{story.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rhapsody Shorts */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Rhapsody Shorts</h2>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rhapsodyShorts.map((video) => (
              <div key={video.id} className="relative group">
                <div className="w-full h-64 rounded-2xl overflow-hidden relative">
                  <Image
                    src={video.image || "/placeholder.svg"}
                    alt="Video thumbnail"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <Button
                    size="sm"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#DAA520] hover:bg-[#B8941C] text-black shadow-lg"
                  >
                    <Play className="w-6 h-6 ml-0.5" fill="black" />
                  </Button>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 mb-3"></div>
                    <p className="text-white text-sm font-medium leading-tight">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonies */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Testimonies</h2>
            <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium">
              <Plus className="w-4 h-4 mr-2" />
              Share yours
            </Button>
          </div>
          
          <div className="bg-accent/50 rounded-2xl p-6 hover:bg-accent transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/placeholder.svg?height=50&width=50&text=DA"
                alt="Dr. Andriette"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-foreground">Dr. Andriette</h3>
                <p className="text-sm text-muted-foreground">olivia@untitledui.com</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              For years, I suffered from back pain. During prayer night, I felt God's presence and warmth over my body. The next morning, the pain was gone! Doctor...
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                <Heart className="w-5 h-5" />
                <span className="text-sm">24</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">45</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
