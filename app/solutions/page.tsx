"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TopNavigation } from "@/components/top-navigation"
import { ChevronRight, Search, Filter } from "lucide-react"

export default function SolutionsPage() {
  const categories = [
    { name: "Healing", icon: "🌿", color: "bg-green-100 dark:bg-green-900/30" },
    { name: "Love", icon: "❤️", color: "bg-pink-100 dark:bg-pink-900/30" },
    { name: "Anxiety", icon: "⚡", color: "bg-purple-100 dark:bg-purple-900/30" },
    { name: "Peace", icon: "🌸", color: "bg-blue-100 dark:bg-blue-900/30" },
  ]

  const solutions = [
    {
      id: 1,
      title: "Courage to Dare the Impossible",
      category: "Hope",
      days: "3 Days",
      price: "$23",
      image: "/placeholder.svg?height=120&width=80&text=Book1",
      description: "Find strength in God's promises and overcome life's challenges",
    },
    {
      id: 2,
      title: "Finding Inner Peace",
      category: "Peace",
      days: "5 Days",
      price: "$18",
      image: "/placeholder.svg?height=120&width=80&text=Book2",
      description: "Discover tranquility through prayer and meditation",
    },
    {
      id: 3,
      title: "Healing Through Faith",
      category: "Healing",
      days: "7 Days",
      price: "$25",
      image: "/placeholder.svg?height=120&width=80&text=Book3",
      description: "Experience God's healing power in your life",
    },
    {
      id: 4,
      title: "Love Without Limits",
      category: "Love",
      days: "4 Days",
      price: "$20",
      image: "/placeholder.svg?height=120&width=80&text=Book4",
      description: "Understanding God's unconditional love",
    },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="solutions" />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header Section */}

          {/* Tab Navigation */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <div className="flex gap-4">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-xl">
                  My Solutions
                </Button>
                <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-xl px-6">
                  Browse Solutions
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-accent rounded-xl">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Hero Banner */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-100 dark:to-gray-200 text-foreground relative overflow-hidden rounded-2xl lg:rounded-3xl border border-border/50">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gray-200 rounded-full -translate-x-8 sm:-translate-x-16 translate-y-8 sm:translate-y-16"></div>
              <div className="absolute top-0 right-0 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-gray-300 rounded-full translate-x-16 sm:translate-x-24 -translate-y-16 sm:-translate-y-24"></div>
            </div>
            <div className="relative p-6 sm:p-8 lg:p-12 xl:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
                Find your faith with God
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                On the journey to heaven
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="bg-muted/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
              Browse by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`${category.color} border-0 h-20 sm:h-24 lg:h-28 rounded-xl lg:rounded-2xl flex items-center justify-center gap-3 flex-col hover:scale-105 transition-all duration-200`}
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl">{category.icon}</span>
                  <span className="font-medium text-foreground text-sm sm:text-base lg:text-lg">{category.name}</span>
                </Button>
              ))}
            </div>
          </section>

          {/* Popular Solutions */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">Popular Solutions</h3>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm sm:text-base">See all</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {solutions.map((solution) => (
                  <div
                    key={solution.id}
                    className="bg-accent/30 rounded-xl p-4 sm:p-6 hover:bg-accent/60 transition-all duration-300 group hover:scale-105 border border-border/30"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden">
                        <Image
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          width={200}
                          height={160}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground leading-tight text-sm sm:text-base lg:text-lg group-hover:text-[#DAA520] transition-colors">
                          {solution.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{solution.description}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs px-2 py-1 rounded-full">
                            {solution.category}
                          </Badge>
                          <span className="text-muted-foreground text-xs">•</span>
                          <span className="text-muted-foreground text-xs">{solution.days}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-lg sm:text-xl font-bold text-foreground">{solution.price}</p>
                          <Button
                            className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium text-sm px-4 py-2 rounded-xl"
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
            </div>
          </section>

          {/* Wisdom Category Highlight */}
          <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-100 dark:to-gray-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">Wisdom (23)</h3>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm sm:text-base">See all</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="bg-card rounded-xl p-4 sm:p-6 flex items-center gap-4 hover:scale-105 transition-all duration-300 border border-border/50">
              <Image
                src="/placeholder.svg?height=80&width=60&text=Book"
                alt="Courage to Dare the Impossible"
                width={60}
                height={80}
                className="rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base lg:text-lg">
                  Courage to Dare the Impossible
                </h4>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                    Hope
                  </Badge>
                  <span className="text-muted-foreground text-xs sm:text-sm">•</span>
                  <span className="text-muted-foreground text-xs sm:text-sm">3 Days</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-foreground">$23</p>
              </div>
              <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-xl px-4 sm:px-6 py-2 sm:py-3">
                Buy
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
