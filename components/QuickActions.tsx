'use client'

import React from 'react'
import { Plus, Users, MapPin, MessageSquare, Calendar, Star } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    {
      title: "Start New Project",
      description: "Create a new project and share your journey",
      icon: Plus,
      color: "bg-primary-100 text-primary-600",
      action: "Create Project"
    },
    {
      title: "Find Collaborators",
      description: "Discover builders with the skills you need",
      icon: Users,
      color: "bg-accent-100 text-accent-600",
      action: "Search"
    },
    {
      title: "Local Meetups",
      description: "Find and join local builder meetups",
      icon: MapPin,
      color: "bg-secondary-100 text-secondary-600",
      action: "Discover"
    },
    {
      title: "Weekly Challenge",
      description: "Participate in this week's build prompt",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      action: "Join"
    },
    {
      title: "Endorse Skills",
      description: "Recognize your peers' contributions",
      icon: Star,
      color: "bg-purple-100 text-purple-600",
      action: "Endorse"
    },
    {
      title: "Community Chat",
      description: "Connect with builders in real-time",
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-600",
      action: "Chat"
    }
  ]

  return (
    <section>
      <h3 className="text-xl font-semibold text-secondary-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <div key={index} className="bg-white rounded-lg border border-secondary-200 p-4 hover:shadow-md transition-shadow cursor-pointer group">
            <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <action.icon className="h-6 w-6" />
            </div>
            
            <h4 className="font-semibold text-secondary-900 mb-2">
              {action.title}
            </h4>
            
            <p className="text-sm text-secondary-600 mb-3">
              {action.description}
            </p>
            
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline">
              {action.action} →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
