"use client"

import { useSection } from "@/components/section-context"
import { AdultContent } from "@/components/sections/adult-content"
import { TeensContent } from "@/components/sections/teens-content"
import { KidsContent } from "@/components/sections/kids-content"

export function SectionContent() {
  const { currentSection } = useSection()

  switch (currentSection) {
    case "teens":
      return <TeensContent />
    case "kids":
      return <KidsContent />
    case "adult":
    default:
      return <AdultContent />
  }
}
