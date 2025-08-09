"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  RefreshCw,
  Home,
  Lightbulb,
  Store,
  BookOpen,
  Users,
  Headphones,
} from "lucide-react"

interface TopNavigationProps {
  currentPage?: string
}

export function TopNavigation({ currentPage = "home" }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { label: "Home", href: "/", key: "home", icon: Home },
    { label: "Solutions", href: "/solutions", key: "solutions", icon: Lightbulb },
    { label: "Store", href: "/store", key: "store", icon: Store },
    { label: "Library", href: "/library", key: "library", icon: BookOpen },
    { label: "Socials", href: "/socials", key: "socials", icon: Users },
    { label: "Audio", href: "/audio", key: "audio", icon: Headphones },
  ]

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50 transition-colors duration-300 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-[#DAA520]/20">
              <Image
                src="/placeholder.svg?height=48&width=48&text=Logo"
                alt="Rhapsody Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl lg:text-2xl font-bold text-foreground hidden sm:block">Adult's Rhapsody</h1>
              <h1 className="text-lg font-bold text-foreground sm:hidden">Rhapsody</h1>
              <Button variant="ghost" size="sm" className="p-1 hidden sm:flex hover:bg-accent">
                <RefreshCw className="w-4 h-4 lg:w-5 lg:h-5" />
              </Button>
            </div>
          </div>

          {/* Centered Navigation Group - Desktop */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center bg-card border border-border rounded-full p-1 gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex items-center gap-2 text-sm lg:text-base font-medium transition-all duration-200 px-4 lg:px-6 py-2.5 lg:py-3 rounded-full ${
                    currentPage === item.key
                      ? "text-white bg-[#DAA520]"
                      : "text-muted-foreground hover:text-[#DAA520] hover:bg-accent"
                  }`}
                >
                  <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Search */}
            <Button variant="ghost" size="sm" className="p-2 hidden sm:flex hover:bg-accent rounded-full">
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>

            {/* Shopping Cart (for Store page) */}
            {currentPage === "store" && (
              <Button variant="ghost" size="sm" className="p-2 relative hidden sm:flex hover:bg-accent rounded-full">
                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
                <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs lg:text-sm text-white font-medium">3</span>
                </div>
              </Button>
            )}

            {/* Plan Badge */}
            <Badge className="bg-[#DAA520] hover:bg-[#B8941C] text-black px-3 lg:px-4 py-1 lg:py-2 rounded-full hidden sm:flex text-xs lg:text-sm">
              <div className="w-2 h-2 bg-[#B8941C] rounded-full mr-2"></div>
              Basic
            </Badge>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2 md:hidden hover:bg-accent rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 bg-background/95 backdrop-blur w-full">
            <nav className="grid grid-cols-3 gap-2 px-2 mb-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex flex-col items-center gap-2 text-xs font-medium transition-all duration-200 px-3 py-4 rounded-xl ${
                    currentPage === item.key
                      ? "text-white bg-[#DAA520]"
                      : "text-muted-foreground hover:text-[#DAA520] hover:bg-accent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center justify-between px-4 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-accent"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
              </Button>

              <Badge className="bg-[#DAA520] hover:bg-[#B8941C] text-black px-3 py-1 rounded-full text-xs">
                <div className="w-2 h-2 bg-[#B8941C] rounded-full mr-2"></div>
                Basic plan
              </Badge>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
