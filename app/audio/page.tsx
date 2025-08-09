"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TopNavigation } from "@/components/top-navigation"
import { Play, Pause, SkipForward, RotateCcw, Download, Heart, Share, Clock } from "lucide-react"
import { useState } from "react"

export default function AudioPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)

  const audioItems = [
    {
      id: 1,
      title: "Your Role In Building His Church In Today's World",
      date: "Mon 2nd, June",
      duration: "45:30",
      description: "At our times of prayer today, we'll pray fervidly in tongues of the spirit and for...",
      image: "/placeholder.svg?height=80&width=80&text=Speaker1",
      category: "Sermon",
      plays: "2.3K",
    },
    {
      id: 2,
      title: "Walking in Divine Purpose",
      date: "Sun 1st, June",
      duration: "38:15",
      description: "Discover God's unique plan for your life and how to align with His divine purpose...",
      image: "/placeholder.svg?height=80&width=80&text=Couple",
      category: "Teaching",
      plays: "1.8K",
    },
    {
      id: 3,
      title: "The Power of Faith-Filled Words",
      date: "Sat 31st, May",
      duration: "52:20",
      description: "Learn how your words can shape your reality and bring God's promises to pass...",
      image: "/placeholder.svg?height=80&width=80&text=Hands",
      category: "Prayer",
      plays: "3.1K",
    },
  ]

  const last30DaysItems = [
    {
      id: 4,
      title: "Healing Through God's Word",
      date: "Wed 15th, May",
      duration: "41:45",
      description: "Experience the healing power of God's word in every area of your life...",
      image: "/placeholder.svg?height=80&width=80&text=Sky",
      category: "Healing",
      plays: "2.7K",
    },
    {
      id: 5,
      title: "Living in God's Abundance",
      date: "Mon 13th, May",
      duration: "36:30",
      description: "Understand how to receive and walk in God's abundant blessings...",
      image: "/placeholder.svg?height=80&width=80&text=Blessing",
      category: "Prosperity",
      plays: "1.9K",
    },
  ]

  const featuredSeries = [
    {
      id: 1,
      title: "Faith Foundations Series",
      episodes: 12,
      totalDuration: "8h 45m",
      image: "/placeholder.svg?height=120&width=120&text=Series1",
      description: "Build your faith on solid biblical foundations",
    },
    {
      id: 2,
      title: "Prayer & Worship Collection",
      episodes: 8,
      totalDuration: "5h 20m",
      image: "/placeholder.svg?height=120&width=120&text=Series2",
      description: "Deepen your relationship with God through prayer",
    },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="audio" />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header Section */}

          {/* Audio Stats */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">New Audio</h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl">
                View All
              </Button>
            </div>
            <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
              {audioItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-accent/30 rounded-xl p-4 sm:p-6 hover:bg-accent/60 transition-all duration-300 group border border-border/30"
                >
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt="Audio thumbnail"
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <Button
                        size="sm"
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/70 hover:bg-black/80 text-white"
                        onClick={() => {
                          setCurrentTrack(item)
                          setIsPlaying(!isPlaying)
                        }}
                      >
                        <Play className="w-5 h-5 ml-0.5" fill="white" />
                      </Button>
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs px-2 py-1 rounded-full">
                              {item.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          </div>
                          <h4 className="font-semibold text-foreground mb-2 leading-tight group-hover:text-[#DAA520] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                            <Share className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration}</span>
                        </div>
                        <span>•</span>
                        <span>{item.plays} plays</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Last 30 days */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">Last 30 days</h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl">
                View All
              </Button>
            </div>
            <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
              {last30DaysItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-accent/30 rounded-xl p-4 sm:p-6 hover:bg-accent/60 transition-all duration-300 group border border-border/30"
                >
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt="Audio thumbnail"
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <Button
                        size="sm"
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/70 hover:bg-black/80 text-white"
                        onClick={() => {
                          setCurrentTrack(item)
                          setIsPlaying(!isPlaying)
                        }}
                      >
                        <Play className="w-5 h-5 ml-0.5" fill="white" />
                      </Button>
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs px-2 py-1 rounded-full">
                              {item.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          </div>
                          <h4 className="font-semibold text-foreground mb-2 leading-tight group-hover:text-[#DAA520] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                            <Share className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration}</span>
                        </div>
                        <span>•</span>
                        <span>{item.plays} plays</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Audio Player (Fixed Bottom) */}
      {currentTrack && (
        <div className="fixed bottom-4 left-4 right-4 bg-card/95 backdrop-blur border border-border rounded-2xl p-4 z-40 transition-colors duration-300 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Image
              src={currentTrack.image || "/placeholder.svg"}
              alt="Current track"
              width={50}
              height={50}
              className="rounded-lg flex-shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm leading-tight text-foreground line-clamp-1">
                {currentTrack.title.length > 30 ? currentTrack.title.substring(0, 30) + "..." : currentTrack.title}
              </h4>
              <p className="text-xs text-muted-foreground">Ephesians 6: 11-34</p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 rounded-full hover:bg-accent">
                <SkipForward className="w-4 h-4" />
              </Button>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-accent transition-colors cursor-pointer">
                <span className="text-xs font-medium">30</span>
                <RotateCcw className="w-3 h-3 ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
