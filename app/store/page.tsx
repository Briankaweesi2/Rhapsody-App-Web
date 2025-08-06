'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TopNavigation } from '@/components/top-navigation'
import { ChevronRight } from 'lucide-react'

export default function StorePage() {
  const categories = ["All", "Children", "Prayer Books", "Holy Spirit books"]
  
  const books = [
    {
      id: 1,
      title: "Now That You Are Born Again",
      author: "By Pastor Chris Oyakhilo...",
      price: "$23",
      image: "/placeholder.svg?height=120&width=80&text=Book1"
    },
    {
      id: 2,
      title: "Your Rights in Christ",
      author: "By Pastor Chris Oyakhilo...",
      price: "$23",
      image: "/placeholder.svg?height=120&width=80&text=Book2"
    }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="store" />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Tab Navigation */}
        <div className="flex gap-4">
          <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium rounded-full px-6">
            Bookstore
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Products
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full px-6 whitespace-nowrap ${
                index === 0 
                  ? "bg-[#DAA520] hover:bg-[#B8941C] text-black" 
                  : "text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Devotionals Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Devotionals</h2>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">See all</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          {/* Hero Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=300&width=800&text=Field+with+flowers"
              alt="Find your faith with God"
              width={800}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white p-6">
              <h3 className="text-3xl font-bold mb-2">Find your faith with God</h3>
              <p className="text-xl">On the journey to heaven</p>
            </div>
          </div>
        </div>

        {/* New & Popular */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">New & Popular</h2>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">See all</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book) => (
              <div key={book.id} className="flex items-center gap-4 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  width={80}
                  height={120}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 leading-tight">{book.title}</h3>
                  <p className="text-lg font-bold text-foreground mb-1">{book.price}</p>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
                <Button className="bg-[#DAA520] hover:bg-[#B8941C] text-black font-medium">
                  Buy
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
