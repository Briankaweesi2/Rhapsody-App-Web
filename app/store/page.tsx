"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TopNavigation } from "@/components/top-navigation"
import { ChevronRight, Search, Filter, Star } from "lucide-react"

export default function StorePage() {
  const categories = ["All", "Children", "Prayer Books", "Holy Spirit books"]

  const books = [
    {
      id: 1,
      title: "Now That You Are Born Again",
      author: "By Pastor Chris Oyakhilome",
      price: "$23",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=120&width=80&text=Book1",
      category: "Spiritual Growth",
    },
    {
      id: 2,
      title: "Your Rights in Christ",
      author: "By Pastor Chris Oyakhilome",
      price: "$23",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=120&width=80&text=Book2",
      category: "Christian Living",
    },
    {
      id: 3,
      title: "The Power of Tongues",
      author: "By Pastor Chris Oyakhilome",
      price: "$20",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=120&width=80&text=Book3",
      category: "Prayer",
    },
    {
      id: 4,
      title: "How to Receive a Miracle",
      author: "By Pastor Chris Oyakhilome",
      price: "$25",
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=120&width=80&text=Book4",
      category: "Faith",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      title: "Rhapsody of Realities Annual Collection",
      price: "$45",
      originalPrice: "$60",
      image: "/placeholder.svg?height=160&width=120&text=Collection",
      badge: "Best Seller",
    },
    {
      id: 2,
      title: "Prayer Essentials Bundle",
      price: "$35",
      originalPrice: "$50",
      image: "/placeholder.svg?height=160&width=120&text=Bundle",
      badge: "Limited Time",
    },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="store" />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header Section */}

          {/* Tab Navigation */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <div className="flex gap-4">
                <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-xl px-6">
                  Bookstore
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-xl">
                  Products
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

          {/* Category Filters */}
          <section className="bg-muted/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 border border-border/50">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
              Browse Categories
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-xl px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap ${
                    index === 0
                      ? "bg-[#DAA520] hover:bg-[#B8941C] text-black"
                      : "text-muted-foreground border-border hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-100 dark:to-gray-200 text-foreground relative overflow-hidden rounded-2xl lg:rounded-3xl border border-border/50">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gray-200 rounded-full -translate-x-8 sm:-translate-x-16 -translate-y-8 sm:-translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-gray-300 rounded-full translate-x-16 sm:translate-x-24 translate-y-16 sm:translate-y-24"></div>
            </div>
            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Featured Collections</h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-accent rounded-xl">
                  View All
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-accent/30 backdrop-blur rounded-xl p-4 sm:p-6 hover:bg-accent/60 transition-all duration-300 border border-border/50"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={80}
                        height={120}
                        className="rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <Badge className="bg-[#DAA520] text-black mb-2 text-xs px-2 py-1 rounded-full">
                          {product.badge}
                        </Badge>
                        <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base leading-tight">
                          {product.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-lg sm:text-xl font-bold text-foreground">{product.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

          {/* New & Popular Books */}
          <section className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">New & Popular</h3>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm sm:text-base">See all</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {books.map((book) => (
                  <div
                    key={book.id}
                    className="bg-accent/30 rounded-xl p-4 sm:p-6 hover:bg-accent/60 transition-all duration-300 group hover:scale-105 border border-border/30"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden">
                        <Image
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          width={200}
                          height={240}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <Badge variant="outline" className="text-xs px-2 py-1 rounded-full w-fit">
                          {book.category}
                        </Badge>
                        <h4 className="font-semibold text-foreground leading-tight text-sm sm:text-base group-hover:text-[#DAA520] transition-colors">
                          {book.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{book.author}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#DAA520] text-[#DAA520]" />
                            <span className="text-xs sm:text-sm font-medium text-foreground">{book.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">({book.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-lg sm:text-xl font-bold text-foreground">{book.price}</p>
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
        </div>
      </main>
    </div>
  )
}
