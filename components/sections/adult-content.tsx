"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bookmark,
  Play,
  ArrowRight,
  Search,
  ChevronRight,
  Gift,
  Users,
  BookOpen,
  Clock,
  TrendingUp,
  Heart,
  MessageCircle,
  Radio,
  Eye,
  VolumeX,
  Volume2,
} from "lucide-react"

export function AdultContent() {
  const [activeTab, setActiveTab] = useState("Related")
  const [isMuted, setIsMuted] = useState(true)

  const devotionalCards = [
    {
      id: 1,
      title: "Your Life Is The Real Message",
      date: "Mon, April 7th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Speaker",
    },
    {
      id: 2,
      title: "Building Faith Through Prayer",
      date: "Sun, April 6th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Prayer",
    },
    {
      id: 3,
      title: "Walking in God's Purpose",
      date: "Sat, April 5th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Purpose",
    },
  ]

  const pastArticles = [
    {
      id: 1,
      title: "The Power of Consistent Prayer",
      date: "Fri, April 4th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Prayer",
    },
    {
      id: 2,
      title: "Understanding God's Grace",
      date: "Thu, April 3rd 2020",
      image: "/placeholder.svg?height=80&width=80&text=Grace",
    },
  ]

  const savedArticles = [
    {
      id: 1,
      title: "Finding Peace in Troubled Times",
      date: "Wed, April 2nd 2020",
      image: "/placeholder.svg?height=80&width=80&text=Peace",
    },
    {
      id: 2,
      title: "The Joy of Salvation",
      date: "Tue, April 1st 2020",
      image: "/placeholder.svg?height=80&width=80&text=Joy",
    },
  ]

  const getTabContent = () => {
    switch (activeTab) {
      case "Past":
        return pastArticles
      case "Saved":
        return savedArticles
      default:
        return devotionalCards
    }
  }

  const videoRef = useRef<HTMLVideoElement>(null)
  const videoSrc = "https://2nbyjxnbl53k-hls-live.5centscdn.com/RTV/59a49be6dc0f146c57cd9ee54da323b1.sdp/playlist.m3u8"

  useEffect(() => {
    async function loadHls() {
      if (videoRef.current) {
        const Hls = (await import("hls.js")).default
        if (Hls.isSupported()) {
          const hls = new Hls()
          hls.loadSource(videoSrc)
          hls.attachMedia(videoRef.current)
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            videoRef.current?.play()
          })
        } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
          videoRef.current.src = videoSrc
          videoRef.current.addEventListener("loadedmetadata", () => {
            videoRef.current?.play()
          })
        }
      }
    }
    loadHls()
  }, [videoSrc])

  const everydaySolutions = [
    {
      id: 7,
      title: "Finding True Peace and Tranquility Joy",
      price: "$0.50",
      days: "5 Days",
      category: "Peace",
      image: "/images/true-peace-and-joy-2.webp",
    },
    {
      id: 8,
      title: "Courage to Dare the Impossible",
      price: "$0.50",
      days: "5 Days",
      category: "Hope",
      image: "/images/courage-to-dare-the-impossible-square-min.webp",
    },
    {
      id: 9,
      title: "How to Raise Children in These Times",
      price: "$0.50",
      days: "5 Days",
      category: "Family",
      image: "/images/how-to-raise-children-in-these-times-2-min.webp",
    },
  ]

  const studyGroups = [
    {
      id: 1,
      name: "God's love is abundant story group",
      time: "5:30 PM",
      members: "464",
      topics: ["Tony Chap", "Dani"],
      avatar: "/placeholder.svg?height=40&width=40&text=GL",
      isActive: true,
    },
    {
      id: 2,
      name: "Daily Prayer Warriors",
      time: "6:00 PM",
      members: "328",
      topics: ["Sarah M", "John D"],
      avatar: "/placeholder.svg?height=40&width=40&text=PW",
      isActive: false,
    },
  ]

  const popularBooks = [
    {
      id: 1,
      title: "The Power of Tongues",
      author: "By Chris Oyakhilome D.Sc., D.D.",
      image: "/images/the-power-of-tongues.webp",
      price: "$10",
    },
    {
      id: 2,
      title: "Praying The Right Way",
      author: "By Chris Oyakhilome",
      image: "/images/praying-the-right-way.webp",
      price: "$10",
    },
    {
      id: 3,
      title: "The Holy Spirit & You",
      author: "By Chris Oyakhilome",
      image: "/images/the-holy-spirit-and-you.webp",
      price: "$10",
    },
  ]

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Study Streak Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-100 dark:to-gray-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <span className="text-sm sm:text-base">Daily Study Streak</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground flex items-center gap-2 flex-wrap">
                {"You've read 2 days in a row!"}
                <span className="text-xl sm:text-2xl lg:text-3xl">👏</span>
              </h2>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-1">
                2 <span className="text-xl sm:text-2xl lg:text-3xl">🔥</span>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Devotional Card */}
        <section className="bg-[#0101a8] text-white relative overflow-hidden rounded-2xl lg:rounded-3xl border border-border/50">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url('/images/abstract-background.png')` }}
          ></div>
          <div className="relative p-6 sm:p-8 lg:p-12 xl:p-16">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-white opacity-90 text-base sm:text-lg lg:text-xl font-medium">
                Today's Devotional
              </h3>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2 sm:p-3 rounded-full">
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </Button>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-3 space-y-4 sm:space-y-6 lg:space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
                  Your Role In Building His Church In Today's World
                </h2>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl max-w-3xl">
                  To be filled with the fullness of God means to be filled with the totality of the divine essence,
                  His very nature and character...
                </p>
                <p className="text-white/80 font-medium text-sm sm:text-base lg:text-lg">Ephesians 6: 11-34</p>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-6">
                <Button
                  variant="outline"
                  className="text-white border-2 border-white/50 hover:bg-white/20 justify-center text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-6 rounded-full bg-transparent"
                  size="lg"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                  Listen to devotion
                </Button>
                <Button
                  className="bg-white text-[#0A2351] hover:bg-white/90 justify-center text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-6 rounded-full"
                  size="lg"
                >
                  Read devotion
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related, Past, and Saved Articles Section */}
        <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto">
              {["Related", "Past", "Saved"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-2 text-sm sm:text-base lg:text-lg font-medium border-b-3 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? "border-[#DAA520] text-[#DAA520] scale-105"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                  }`}
                >
                  {tab} Articles
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <span className="text-sm sm:text-base text-muted-foreground hidden sm:inline">Search</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {getTabContent().map((article) => (
                <div
                  key={article.id}
                  className="bg-accent/30 rounded-xl p-4 sm:p-6 hover:bg-accent/60 cursor-pointer transition-all duration-300 group hover:scale-105 border border-border/30"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt="Article thumbnail"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base lg:text-lg line-clamp-2 group-hover:text-[#DAA520] transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{article.date}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-[#DAA520] mt-3 ml-auto transition-colors" />
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                className="w-full text-muted-foreground hover:text-[#DAA520] hover:bg-[#DAA520]/10 text-sm sm:text-base lg:text-lg py-4 rounded-xl"
                size="lg"
              >
                View all {activeTab.toLowerCase()} articles
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Every Day Solutions */}
        <section className="bg-muted/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground">
              Every day solutions!
            </h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-sm sm:text-base rounded-xl"
            >
              See all
            </Button>
          </div>
          <div className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {everydaySolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-300 group border border-border/50 flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] snap-start"
              >
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-foreground leading-tight text-sm sm:text-base lg:text-lg">
                      {solution.title}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs sm:text-sm px-2 py-1 rounded-full">
                        {solution.category}
                      </Badge>
                      <span className="text-muted-foreground text-xs sm:text-sm">•</span>
                      <span className="text-muted-foreground text-xs sm:text-sm">{solution.days}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{solution.price}</p>
                      <Button
                        className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium text-sm sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl"
                        size="sm"
                      >
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Study Groups */}
        <section className="bg-accent/30 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground flex items-center gap-3">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              Study groups
            </h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-sm sm:text-base rounded-xl"
            >
              See all
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {studyGroups.map((group) => (
              <div
                key={group.id}
                className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-300 cursor-pointer group border border-border/50"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="relative">
                    <Image
                      src={group.avatar || "/placeholder.svg"}
                      alt={group.name}
                      width={56}
                      height={56}
                      className="rounded-full ring-2 ring-border"
                    />
                    {group.isActive && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-background"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg line-clamp-2">
                      {group.name}
                    </h4>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {group.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        {group.members}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">{group.topics.join(", ")}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-[#DAA520] mt-4 ml-auto transition-colors" />
              </div>
            ))}
          </div>
        </section>

        {/* New & Popular Books */}
        <section className="bg-muted/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground flex items-center gap-3">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              New & Popular books
            </h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-sm sm:text-base rounded-xl"
            >
              See all
            </Button>
          </div>
          <div className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {popularBooks.map((book) => (
              <div
                key={book.id}
                className="group cursor-pointer flex-shrink-0 w-[160px] sm:w-[180px] lg:w-[200px] snap-start"
              >
                <div className="mb-3 sm:mb-4 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300 border border-border/50">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={160}
                    height={200}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                  />
                </div>
                <h4 className="font-semibold text-foreground text-xs sm:text-sm lg:text-base mb-1 sm:mb-2 leading-tight line-clamp-2">
                  {book.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{book.author}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm sm:text-base font-bold text-foreground">{book.price}</p>
                  <Button
                    className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium text-xs sm:text-sm px-3 py-1.5 rounded-xl"
                    size="sm"
                  >
                    Buy
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
