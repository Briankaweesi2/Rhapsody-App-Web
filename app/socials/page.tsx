"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TopNavigation } from "@/components/top-navigation"
import { ChevronRight, Play, Heart, MessageCircle, Plus, Share, Users, Calendar } from "lucide-react"

export default function SocialsPage() {
  const inspiredStories = [
    {
      name: "Jane Sullivan",
      image: "/placeholder.svg?height=60&width=60&text=JS",
      color: "border-[#DAA520]",
      isActive: true,
    },
    {
      name: "Aaliyah Carter",
      image: "/placeholder.svg?height=60&width=60&text=AC",
      color: "border-green-400",
      isActive: false,
    },
    {
      name: "Tom Brady",
      image: "/placeholder.svg?height=60&width=60&text=TB",
      color: "border-orange-400",
      isActive: true,
    },
    {
      name: "James Cameron",
      image: "/placeholder.svg?height=60&width=60&text=JC",
      color: "border-pink-400",
      isActive: false,
    },
  ]

  const rhapsodyShorts = [
    {
      id: 1,
      title: "Bless the Lord Oh my Soul, and all th...",
      views: "12.5K",
      duration: "0:45",
      image: "/placeholder.svg?height=200&width=150&text=Video1",
    },
    {
      id: 2,
      title: "How Well Do you Know Christ Emba...",
      views: "8.2K",
      duration: "1:20",
      image: "/placeholder.svg?height=200&width=150&text=Video2",
    },
    {
      id: 3,
      title: "Faith Over Fear: Conquering Anx...",
      views: "15.7K",
      duration: "2:10",
      image: "/placeholder.svg?height=200&width=150&text=Video3",
    },
  ]

  const testimonies = [
    {
      id: 1,
      author: "Dr. Andriette",
      email: "olivia@untitledui.com",
      title: "A week of tremendous anointing",
      content:
        "For years, I suffered from back pain. During prayer night, I felt God's presence and warmth over my body. The next morning, the pain was gone! Doctor...",
      likes: 24,
      comments: 45,
      timeAgo: "2 hours ago",
      avatar: "/placeholder.svg?height=50&width=50&text=DA",
    },
    {
      id: 2,
      author: "Sarah Mitchell",
      email: "sarah@example.com",
      title: "Miraculous healing testimony",
      content:
        "After months of prayer and faith, God completely healed my daughter from a rare condition. The doctors were amazed at her recovery. Glory to God!",
      likes: 67,
      comments: 23,
      timeAgo: "5 hours ago",
      avatar: "/placeholder.svg?height=50&width=50&text=SM",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Global Prayer Night",
      date: "Tomorrow, 8:00 PM",
      participants: "2.3K",
      image: "/placeholder.svg?height=60&width=60&text=Prayer",
    },
    {
      id: 2,
      title: "Youth Bible Study",
      date: "Friday, 6:00 PM",
      participants: "456",
      image: "/placeholder.svg?height=60&width=60&text=Study",
    },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="socials" />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Community Stats */}
          

          {/* Inspired Stories */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">Inspired Stories</h3>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-6 sm:p-8">
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
                      {story.isActive && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <span className="text-sm text-foreground text-center leading-tight">{story.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rhapsody Shorts */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">Rhapsody Shorts</h3>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {rhapsodyShorts.map((video) => (
                  <div key={video.id} className="relative group bg-accent/30 rounded-xl border border-border/30">
                    <div className="w-full h-64 rounded-xl overflow-hidden relative">
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
                        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#DAA520] hover:bg-[#B8941C] text-black"
                      >
                        <Play className="w-6 h-6 ml-0.5" fill="black" />
                      </Button>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500 mb-3"></div>
                        <p className="text-white text-sm font-medium leading-tight">{video.title}</p>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{video.views} views</span>
                      <span>•</span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="bg-muted/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground flex items-center gap-3">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:w-10" />
                Upcoming Events
              </h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl">
                See all
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-card rounded-xl p-4 sm:p-6 flex items-center gap-4 hover:scale-105 transition-all duration-300 group border border-border/50"
                >
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 leading-tight group-hover:text-[#DAA520] transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#DAA520] transition-colors flex-shrink-0" />
                </div>
              ))}
            </div>
          </section>

          {/* Testimonies */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 p-6 sm:p-8 lg:p-12">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground flex items-center gap-3">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                Latest testimonies
              </h3>
              <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-xl px-4 sm:px-6 py-2 sm:py-3">
                <Plus className="w-4 h-4 mr-2" />
                Share yours
              </Button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
              {testimonies.map((testimony) => (
                <div
                  key={testimony.id}
                  className="bg-accent/30 rounded-xl p-6 sm:p-8 hover:bg-accent/50 transition-all duration-300 border border-border/30"
                >
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <Image
                      src={testimony.avatar || "/placeholder.svg"}
                      alt={testimony.author}
                      width={50}
                      height={50}
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-base sm:text-lg">{testimony.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{testimony.author}</span>
                        <span>•</span>
                        <span>{testimony.timeAgo}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 text-sm sm:text-base">{testimony.content}</p>
                  <div className="flex items-center gap-6 sm:gap-8">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-red-500 p-0 rounded-xl"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="text-sm sm:text-base">{testimony.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-blue-500 p-0 rounded-xl"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="text-sm sm:text-base">{testimony.comments}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
