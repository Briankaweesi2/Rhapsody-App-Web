"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bookmark,
  Play,
  ArrowRight,
  Search,
  ChevronRight,
  Users,
  BookOpen,
  Clock,
  Heart,
  MessageCircle,
  TrendingUp,
  Zap,
} from "lucide-react"

export function TeensContent() {
  const [activeTab, setActiveTab] = useState("Featured")

  const featuredContent = [
    {
      id: 1,
      title: "Building Your Identity in Christ",
      date: "Today",
      image: "/placeholder.svg?height=80&width=80&text=Identity",
    },
    {
      id: 2,
      title: "Friendships That Matter",
      date: "Yesterday",
      image: "/placeholder.svg?height=80&width=80&text=Friends",
    },
    {
      id: 3,
      title: "Navigating Peer Pressure",
      date: "2 days ago",
      image: "/placeholder.svg?height=80&width=80&text=Pressure",
    },
  ]

  const challenges = [
    {
      id: 1,
      title: "30-Day Faith Challenge",
      participants: "2,341",
      progress: 65,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Bible Reading Marathon",
      participants: "1,856",
      progress: 42,
      color: "from-blue-500 to-purple-500",
    },
  ]

  const teensBooks = [
    {
      id: 1,
      title: "Real Talk for Teens",
      author: "By Chris Oyakhilome",
      image: "/placeholder.svg?height=200&width=160&text=RealTalk",
      price: "$8",
    },
    {
      id: 2,
      title: "Purpose & Dreams",
      author: "Teen Edition",
      image: "/placeholder.svg?height=200&width=160&text=Purpose",
      price: "$8",
    },
    {
      id: 3,
      title: "Faith in Your 20s",
      author: "Young Adults",
      image: "/placeholder.svg?height=200&width=160&text=Faith20s",
      price: "$8",
    },
  ]

  const mentors = [
    {
      id: 1,
      name: "Youth Leader Group",
      time: "6:00 PM",
      members: "234",
      avatar: "/placeholder.svg?height=40&width=40&text=YL",
      isActive: true,
    },
    {
      id: 2,
      name: "Teen Devotional Circle",
      time: "7:00 PM",
      members: "156",
      avatar: "/placeholder.svg?height=40&width=40&text=TD",
      isActive: false,
    },
  ]

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Featured Hero */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden rounded-2xl lg:rounded-3xl border border-purple-500/30">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="relative p-6 sm:p-8 lg:p-12">
            <Badge className="mb-4 bg-white/20 text-white border border-white/30">New This Week</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Your Role in Building His Church
            </h2>
            <p className="text-purple-100 text-lg mb-6 max-w-2xl">
              Discover how you can make a real difference in your faith journey and your community
            </p>
            <Button
              className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-base sm:text-lg px-8 py-4 rounded-full"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Now
            </Button>
          </div>
        </section>

        {/* Quarterly Challenge */}
        <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-purple-400/30">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Quarterly Rhapsody Challenge</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-4">{challenge.title}</h4>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">{challenge.participants} joining</span>
                    <span className="text-sm font-semibold">{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2 transition-all duration-500"
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                </div>
                <Button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-semibold rounded-lg">
                  Join Challenge
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Featured & Trending */}
        <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
            <div className="flex space-x-4 sm:space-x-6">
              {["Featured", "Trending", "For You"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-2 text-sm sm:text-base lg:text-lg font-medium border-b-3 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? "border-purple-500 text-purple-500 scale-105"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 group border border-purple-200 dark:border-purple-800 cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.date}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 ml-auto transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Books for Teens */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-purple-200 dark:border-purple-800">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            Trending Books
          </h3>
          <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4">
            {teensBooks.map((book) => (
              <div key={book.id} className="flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[180px] group cursor-pointer">
                <div className="mb-3 overflow-hidden rounded-lg border border-purple-200 dark:border-purple-800 group-hover:scale-105 transition-transform">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={160}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </div>
                <h4 className="font-semibold text-sm text-foreground line-clamp-2 mb-1">{book.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-600">{book.price}</span>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-1 rounded-lg h-auto">
                    Buy
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Youth Groups & Mentors */}
        <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Users className="w-8 h-8 text-purple-600" />
            Youth Groups & Mentors
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {mentors.map((group) => (
              <div
                key={group.id}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-purple-200 dark:border-purple-800 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Image
                      src={group.avatar}
                      alt={group.name}
                      width={56}
                      height={56}
                      className="rounded-full ring-2 ring-purple-300"
                    />
                    {group.isActive && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{group.name}</h4>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {group.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {group.members}
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm">
                  Join
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips Carousel */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white border border-purple-400/30">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6" />
            <h3 className="text-2xl sm:text-3xl font-bold">Quick Tips for Your Week</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <h4 className="font-semibold mb-2">Study Tip</h4>
              <p className="text-sm text-white/90">Set aside 15 minutes each morning for devotion</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <h4 className="font-semibold mb-2">Community Tip</h4>
              <p className="text-sm text-white/90">Share your faith journey with a friend</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
