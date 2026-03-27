"use client"

import { TopNavigation } from "@/components/top-navigation"
import { SectionContent } from "@/components/section-content"

export default function DevotionalApp() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopNavigation currentPage="home" />
      <SectionContent />
    </div>
  )
}
