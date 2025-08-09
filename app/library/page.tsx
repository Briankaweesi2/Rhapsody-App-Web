"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TopNavigation } from "@/components/top-navigation"
import { ChevronRight, Download, MoreHorizontal, Grid3X3, List, Search, Filter } from "lucide-react"

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
      hasAudioIcon: true,
      duration: "2h 45m",
    },
    {
      id: 2,
      type: "Prayer",
      title: "The Power of Tongues",
      author: "By Pastor Chris Oyakhilome",
      progress: 12,
      image: "/placeholder.svg?height=80&width=60&text=Book2",
      duration: "1h 30m",
    },
    {
      id: 3,
      type: "Holy Spirit",
      title: "Your Rights in Christ",
      author: "By Pastor Chris Oyakhilome",
      progress: 78,
      image: "/placeholder.svg?height=80&width=60&text=Book3",
      duration: "3h 15m",
    },
    {
      id: 4,
      type: "Devotional",
      title: "How to Receive a Miracle",
      author: "By Pastor Chris Oyakhilome",
      progress: 45,
      image: "/placeholder.svg?height=80&width=60&text=Book4",
      duration: "2h 20m",
    },
  ]

  const recentlyAdded = [
    {
      id: 5,
      title: "Walking in the Spirit",
      author: "By Pastor Chris Oyakhilome",
      image: "/placeholder.svg?height=80&width=60&text=Book5",
      addedDate: "2 days ago",
    },
    {
      id: 6,
      title: "Faith's Confession",
      author: "By Pastor Chris Oyakhilome",
      image: "/placeholder.svg?height=80&width=60&text=Book6",
      addedDate: "1 week ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="library" />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header Section */}

          {/* Filter Tabs and Controls */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <div className="flex gap-3">
                <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-xl px-6">All</Button>
                <Button
                  variant="outline"
                  className="rounded-xl px-6 text-muted-foreground border-border hover:text-foreground hover:bg-accent bg-transparent"
                >
                  Downloaded
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl px-6 text-muted-foreground border-border hover:text-foreground hover:bg-accent bg-transparent"
                >
                  Favourites
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                  <Button variant="ghost" size="sm" className="p-2 bg-background rounded-md">
                    <List className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-md">
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Library Stats */}
          

          {/* Recently Added */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">Recently Added</h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl">
                See all
              </Button>
            </div>
            <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
              {recentlyAdded.map((item) => (
                <div
                  key={item.id}
                  className="bg-accent/30 rounded-xl p-4 sm:p-6 flex items-center gap-4 hover:bg-accent/60 transition-all duration-300 group border border-border/30"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={60}
                    height={80}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 leading-tight group-hover:text-[#DAA520] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.author}</p>
                    <p className="text-xs text-muted-foreground">Added {item.addedDate}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Library Items */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">All Library Items</h3>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground text-sm sm:text-base">Showing {libraryItems.length} items</p>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
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
            </div>
            <div className="p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                {libraryItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-accent/30 rounded-xl p-4 sm:p-6 hover:bg-accent/60 transition-all duration-300 group border border-border/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
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

                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="min-w-0">
                            <p className="text-sm text-muted-foreground mb-1">
                              {item.type} • {item.duration}
                            </p>
                            <h4 className="font-semibold text-foreground mb-1 leading-tight group-hover:text-[#DAA520] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{item.author}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl flex-shrink-0">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          {item.progress > 0 ? (
                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">{item.progress}% complete</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-[#DAA520] hover:text-[#B8941C] p-0 text-sm"
                                >
                                  Continue
                                </Button>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-[#DAA520] h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${item.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">{item.progress}% complete</span>
                              <div className="flex items-center gap-1">
                                <Download className="w-3 h-3 text-green-600" />
                                <span className="text-sm text-green-600">{item.status}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#DAA520] transition-colors flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
