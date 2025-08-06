'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function VerifyPage() {
  const [language, setLanguage] = useState('English')

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-8 text-center space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-orange-600">
              Let's confirm you are human
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Complete the security check before continuing. This step verifies that you are not 
              a bot, which helps to protect your account and prevent spam.
            </p>
          </div>

          {/* Begin Button */}
          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg"
            size="lg"
          >
            Begin
          </Button>

          {/* Language Selector */}
          <div className="pt-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="German">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
