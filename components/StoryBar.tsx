'use client'

import React from 'react'
import { Plus, Play } from 'lucide-react'

export default function StoryBar() {
  const stories = [
    {
      id: 1,
      user: "Sarah Chen",
      avatar: "/api/placeholder/60/60",
      title: "AI Assistant",
      isViewed: false
    },
    {
      id: 2,
      user: "Marcus Rodriguez",
      avatar: "/api/placeholder/60/60",
      title: "Furniture",
      isViewed: false
    },
    {
      id: 3,
      user: "Emma Thompson",
      avatar: "/api/placeholder/60/60",
      title: "Garden App",
      isViewed: true
    },
    {
      id: 4,
      user: "David Chen",
      avatar: "/api/placeholder/60/60",
      title: "Analytics",
      isViewed: false
    },
    {
      id: 5,
      user: "Maria Santos",
      avatar: "/api/placeholder/60/60",
      title: "Fashion App",
      isViewed: true
    }
  ]

  return (
    <div className="mb-6">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {/* Add Story Button */}
        <div className="flex-shrink-0">
          <button className="flex flex-col items-center space-y-2 group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs text-secondary-600 font-medium">Add Story</span>
          </button>
        </div>

        {/* Story Items */}
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0">
            <button className="flex flex-col items-center space-y-2 group">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg group-hover:scale-105 transition-transform ${
                story.isViewed 
                  ? 'border-secondary-300 bg-secondary-200' 
                  : 'border-gradient-to-br from-accent-400 to-accent-600 bg-white'
              }`}>
                {story.isViewed ? (
                  <span className="text-secondary-600 font-medium text-sm">
                    {story.user.split(' ').map(n => n[0]).join('')}
                  </span>
                ) : (
                  <div className="relative">
                    <span className="text-secondary-600 font-medium text-sm">
                      {story.user.split(' ').map(n => n[0]).join('')}
                    </span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center">
                      <Play className="h-2 w-2 text-white" />
                    </div>
                  </div>
                )}
              </div>
              <span className="text-xs text-secondary-600 font-medium max-w-16 truncate">
                {story.title}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
