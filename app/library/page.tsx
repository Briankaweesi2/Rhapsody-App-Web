'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TopNavigation } from '@/components/top-navigation'
import { ChevronRight, Download } from 'lucide-react'

export default function LibraryPage() {
  const libraryItems = [
    {
      id: 1,
      type: "Audio Book",
      title: "Now That You Are Born Again",
      author: "By Pastor Chris Oyakhilome",
      progress: 0,
      status: "Available offline",
      image: "/placeholder.svg?height=80&width=60&text=Book1",
      hasAudioIcon: true
    },
    {
      id: 2,
      type: "Prayer",
      title: "The Power of Tongues",
      author: "By Pastor Chris Oyakhilome",
      progress: 12,
      image: "/placeholder.svg?height=80&width=60&text=Book2"
    },
    {
      id: 3,
      type: "Holy Spirit",
      title: "Your Rights in Christ",
      author: "By Pastor Chris Oyakhilome",
      progress: 78,
      image: "/placeholder.svg?height=80&width=60&text=Book3"
    }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="library" />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Filter Tabs */}
        <div className="flex gap-3">
          <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-full px-6">
            All
          </Button>
          <Button variant="outline" className="rounded-full px-6 text-muted-foreground border-border hover:text-foreground">
            Downloaded
          </Button>
          <Button variant="outline" className="rounded-full px-6 text-muted-foreground border-border hover:text-foreground">
            Favourites
          </Button>
        </div>

        {/* Items Count and Sort */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Showing 12 items</p>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent">
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              </div>
              <div className="flex gap-0.5">
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              </div>
            </div>
          </Button>
        </div>

        {/* Library Items */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <div className="space-y-6">
            {libraryItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b border-border last:border-b-0 hover:bg-accent/50 rounded-lg px-2 transition-colors">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={60}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  {item.hasAudioIcon && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{item.type}</p>
                  <h3 className="font-semibold text-foreground mb-1 leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.author}</p>
                  
                  {item.progress > 0 ? (
                    <p className="text-sm text-muted-foreground">{item.progress}% complete</p>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{item.progress}% complete</span>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{item.status}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
