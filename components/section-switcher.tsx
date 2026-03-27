"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, X } from "lucide-react"

export type Section = "adult" | "teens" | "kids"

interface SectionSwitcherProps {
  currentSection?: Section
  onSectionChange?: (section: Section) => void
}

const sectionConfig: Record<Section, { label: string; icon: string }> = {
  adult: {
    label: "Adults Rhapsody",
    icon: "👨‍👩‍👧‍👦",
  },
  teens: {
    label: "Teens Rhapsody",
    icon: "👦",
  },
  kids: {
    label: "Kids Rhapsody",
    icon: "🧒",
  },
}

export function SectionSwitcher({ currentSection = "adult", onSectionChange }: SectionSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionChange = (section: Section) => {
    onSectionChange?.(section)
    setIsOpen(false)
  }

  const current = sectionConfig[currentSection]

  return (
    <div className="relative">
      {/* Trigger Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 hover:bg-accent hover:bg-[#DAA520]/10 rounded-lg transition-colors"
      >
        <span className="text-lg lg:text-xl font-bold text-foreground">{current.label}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#DAA520] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} aria-hidden="true" />
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Select Section</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-accent rounded transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="p-2 space-y-2">
            {(["adult", "teens", "kids"] as Section[]).map((section) => {
              const config = sectionConfig[section]
              const isActive = section === currentSection

              return (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 border-2 ${
                    isActive
                      ? `border-[#DAA520] bg-[#DAA520]/10`
                      : "border-transparent hover:bg-accent"
                  }`}
                >
                  <span className="text-2xl">{config.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{config.label}</p>
                    {isActive && (
                      <p className="text-xs text-[#DAA520] font-semibold">Active</p>
                    )}
                  </div>
                  {isActive && (
                    <div className="w-2 h-2 bg-[#DAA520] rounded-full" />
                  )}
                </button>
              )
            })}
          </div>

          <div className="p-3 border-t border-border bg-muted/20">
            <p className="text-xs text-muted-foreground text-center">
              Switch to a different section to see personalized content
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
