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
  Sparkles,
  Smile,
} from "lucide-react"

export function KidsContent() {
  const [activeTab, setActiveTab] = useState("Daily")

  const dailyDevotionals = [
    {
      id: 1,
      title: "Jesus Loves Me",
      date: "Today",
      emoji: "❤️",
      color: "from-red-100 to-pink-100",
    },
    {
      id: 2,
      title: "Be Kind to Others",
      date: "Yesterday",
      emoji: "🤗",
      color: "from-yellow-100 to-orange-100",
    },
    {
      id: 3,
      title: "God Cares for You",
      date: "2 days ago",
      emoji: "🌟",
      color: "from-blue-100 to-cyan-100",
    },
  ]

  const games = [
    {
      id: 1,
      title: "Bible Verse Match Game",
      players: "1,234",
      emoji: "🎮",
      color: "from-purple-300 to-pink-300",
    },
    {
      id: 2,
      title: "Story of David",
      players: "892",
      emoji: "🏹",
      color: "from-orange-300 to-red-300",
    },
    {
      id: 3,
      title: "Noah's Ark Adventure",
      players: "756",
      emoji: "🚢",
      color: "from-blue-300 to-cyan-300",
    },
  ]

  const stories = [
    {
      id: 1,
      title: "Rhapsody Stories",
      chapters: "35",
      emoji: "📖",
      color: "from-pink-100 to-purple-100",
    },
    {
      id: 2,
      title: "Bible Adventures",
      chapters: "48",
      emoji: "🗺️",
      color: "from-green-100 to-cyan-100",
    },
    {
      id: 3,
      title: "Kid's Prayers",
      chapters: "26",
      emoji: "🙏",
      color: "from-blue-100 to-indigo-100",
    },
  ]

  const kidsGroups = [
    {
      id: 1,
      name: "Little Rhapsody Group 1",
      time: "4:00 PM",
      members: "24",
      emoji: "👶",
    },
    {
      id: 2,
      name: "Big Kids Bible Club",
      time: "5:00 PM",
      members: "42",
      emoji: "🧒",
    },
  ]

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-cyan-200 via-blue-200 to-teal-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden border-2 border-cyan-300">
          <div className="absolute -top-10 -right-10 text-6xl opacity-30">🎈</div>
          <div className="absolute -bottom-10 -left-10 text-6xl opacity-30">🌈</div>
          <div className="relative">
            <Badge className="mb-4 bg-white text-cyan-600 border-2 border-cyan-300 text-base font-bold">
              🌟 Welcome to Kids Rhapsody!
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-900 mb-4">
              Let's Learn About Jesus Today!
            </h2>
            <p className="text-cyan-800 text-lg mb-6 font-semibold">
              Fun devotions, games, and stories just for kids
            </p>
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Today's Fun
            </Button>
          </div>
        </section>

        {/* Daily Devotional Section */}
        <section className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-yellow-300">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900 mb-8 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            Today's Devotion
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-yellow-200">
              <div className="text-6xl mb-4">🌞</div>
              <h4 className="text-2xl font-bold text-orange-900 mb-4">Jesus is Always with You!</h4>
              <p className="text-orange-800 text-base sm:text-lg mb-6">
                Even when you feel alone, Jesus is right there with you. He loves you so much!
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl w-full">
                <Play className="w-5 h-5 mr-2" />
                Watch Story Video
              </Button>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-yellow-200 flex flex-col justify-center">
              <p className="text-4xl font-bold text-orange-600 mb-4">Golden Verse</p>
              <p className="text-xl text-orange-900 font-semibold mb-4">
                "I am with you always..." - Matthew 28:20
              </p>
              <p className="text-orange-800 text-base leading-relaxed mb-6">
                Jesus promised that he will always be with us. Isn't that amazing?
              </p>
              <Button
                variant="outline"
                className="border-2 border-orange-300 text-orange-700 font-bold hover:bg-orange-50 rounded-xl"
              >
                <Bookmark className="w-5 h-5 mr-2" />
                Save Verse
              </Button>
            </div>
          </div>
        </section>

        {/* Fun Games Section */}
        <section className="bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-purple-300">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-900 mb-8">
            🎮 Fun Games to Learn & Play
          </h3>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className={`bg-gradient-to-br ${game.color} rounded-2xl p-6 sm:p-8 border-2 border-white cursor-pointer hover:scale-105 transition-transform`}
              >
                <div className="text-5xl mb-4">{game.emoji}</div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{game.title}</h4>
                <p className="text-gray-700 text-sm sm:text-base font-semibold mb-4">{game.players} kids playing</p>
                <Button className="bg-white text-gray-800 hover:bg-gray-100 font-bold rounded-xl w-full">
                  Play Now
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Stories Section */}
        <section className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-green-300">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 mb-8 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-green-600" />
            Stories for Kids
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className={`bg-gradient-to-br ${story.color} rounded-xl p-6 border-2 border-white cursor-pointer hover:scale-105 transition-transform`}
              >
                <div className="text-4xl mb-3">{story.emoji}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h4>
                <p className="text-gray-700 font-semibold text-sm mb-4">{story.chapters} awesome stories</p>
                <Button className="bg-white text-gray-800 hover:bg-gray-100 font-bold rounded-lg w-full text-sm">
                  Read Stories
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Kids Groups */}
        <section className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-blue-300">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8 flex items-center gap-2">
            <Users className="w-8 h-8 text-blue-600" />
            Kids Groups & Friends
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {kidsGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-xl p-6 border-2 border-blue-200 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-2">{group.emoji}</div>
                    <h4 className="text-xl font-bold text-blue-900">{group.name}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-blue-700 font-semibold text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {group.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {group.members} kids
                  </span>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg w-full">
                  Join Group
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Checklist */}
        <section className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-pink-300">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-900 mb-8 flex items-center gap-2">
            <Smile className="w-8 h-8 text-pink-500" />
            Daily Checklist
          </h3>
          <div className="space-y-4">
            {[
              { task: "Read Today's Devotion", done: true },
              { task: "Play a Fun Game", done: true },
              { task: "Pray & Say Thank You", done: false },
              { task: "Share with a Friend", done: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-6 border-2 border-pink-200 flex items-center justify-between"
              >
                <label className="flex items-center gap-3 cursor-pointer flex-1">
                  <input
                    type="checkbox"
                    defaultChecked={item.done}
                    className="w-6 h-6 rounded-lg border-2 border-pink-400 cursor-pointer accent-pink-500"
                  />
                  <span
                    className={`font-semibold text-base sm:text-lg ${
                      item.done ? "text-gray-400 line-through" : "text-pink-900"
                    }`}
                  >
                    {item.task}
                  </span>
                </label>
                {item.done && <span className="text-2xl">✨</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Reward Badges */}
        <section className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-amber-300">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-8 flex items-center gap-2">
            <span className="text-4xl">🏆</span>
            Your Badges & Rewards
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { emoji: "📖", label: "Reader" },
              { emoji: "🎮", label: "Gamer" },
              { emoji: "⭐", label: "Star" },
              { emoji: "🌟", label: "Super Star" },
              { emoji: "❤️", label: "Loving" },
              { emoji: "🙏", label: "Faithful" },
              { emoji: "🌈", label: "Rainbow" },
              { emoji: "💫", label: "Champion" },
            ].map((badge, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border-2 border-amber-200 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">{badge.emoji}</div>
                <p className="text-amber-900 font-bold text-sm">{badge.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
