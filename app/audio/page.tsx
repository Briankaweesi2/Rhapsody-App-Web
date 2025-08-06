'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TopNavigation } from '@/components/top-navigation'
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react'
import { useState } from 'react'

export default function AudioPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)

  const audioItems = [
    {
      id: 1,
      title: "Your Role In Building His Church In Today's World",
      date: "Mon 2nd, June",
      description: "At our times of prayer today, we'll pray fervidly in tongues of the spirit and for...",
      image: "/placeholder.svg?height=80&width=80&text=Speaker1"
    },
    {
      id: 2,
      title: "Your Role In Building His Church In Today's World",
      date: "Mon 2nd, June", 
      description: "At our times of prayer today, we'll pray fervidly in tongues of the spirit and for...",
      image: "/placeholder.svg?height=80&width=80&text=Couple"
    },
    {
      id: 3,
      title: "Your Role In Building His Church In Today's World",
      date: "Mon 2nd, June",
      description: "At our times of prayer today, we'll pray fervidly in tongues of the spirit and for...",
      image: "/placeholder.svg?height=80&width=80&text=Hands"
    }
  ]

  const last30DaysItems = [
    {
      id: 4,
      title: "Your Role In Building His Church In Today's World",
      date: "Mon 2nd, June",
      description: "At our times of prayer today, we'll pray fervidly in tongues of the spirit and for...",
      image: "/placeholder.svg?height=80&width=80&text=Sky"
    }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="audio" />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/* Last 7 days */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Last 7 days</h2>
          <div className="space-y-6">
            {audioItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Audio thumbnail"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <Button
                    size="sm"
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/70 hover:bg-black/80 text-white shadow-lg"
                    onClick={() => {
                      setCurrentTrack(item)
                      setIsPlaying(!isPlaying)
                    }}
                  >
                    <Play className="w-5 h-5 ml-0.5" fill="white" />
                  </Button>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                  <h3 className="font-semibold text-foreground mb-2 leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last 30 days */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Last 30 days</h2>
          <div className="space-y-6">
            {last30DaysItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Audio thumbnail"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <Button
                    size="sm"
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/70 hover:bg-black/80 text-white shadow-lg"
                    onClick={() => {
                      setCurrentTrack(item)
                      setIsPlaying(!isPlaying)
                    }}
                  >
                    <Play className="w-5 h-5 ml-0.5" fill="white" />
                  </Button>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                  <h3 className="font-semibold text-foreground mb-2 leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Audio Player (Fixed Bottom) */}
      {currentTrack && (
        <div className="fixed bottom-4 left-4 right-4 bg-card/95 backdrop-blur border border-border shadow-lg rounded-lg p-4 z-40 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <Image
              src={currentTrack.image || "/placeholder.svg"}
              alt="Current track"
              width={50}
              height={50}
              className="rounded"
            />
            
            <div className="flex-1">
              <h4 className="font-medium text-sm leading-tight text-foreground">Your Role In Building His C...</h4>
              <p className="text-xs text-muted-foreground">Ephesians 6: 11-34</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 rounded-full hover:bg-accent">
                <SkipForward className="w-4 h-4" />
              </Button>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border">
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
