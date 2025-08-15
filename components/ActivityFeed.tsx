'use client'

import React from 'react'
import { Heart, MessageCircle, Plus, Star, Users, Calendar } from 'lucide-react'

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: 'project_update',
      user: 'Sarah Chen',
      action: 'updated their project',
      target: 'AI Design Assistant',
      time: '2 hours ago',
      icon: Plus,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'endorsement',
      user: 'Marcus Rodriguez',
      action: 'endorsed you for',
      target: 'React Development',
      time: '4 hours ago',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      id: 3,
      type: 'collaboration',
      user: 'Emma Thompson',
      action: 'invited you to collaborate on',
      target: 'Community Garden App',
      time: '1 day ago',
      icon: Users,
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'weekly_challenge',
      user: 'Builder Community',
      action: 'posted a new weekly challenge',
      target: 'Show Your Progress This Week',
      time: '2 days ago',
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      id: 5,
      type: 'comment',
      user: 'David Chen',
      action: 'commented on your project',
      target: 'AI Chatbot Platform',
      time: '3 days ago',
      icon: MessageCircle,
      color: 'text-gray-600'
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'project_update':
        return Plus
      case 'endorsement':
        return Star
      case 'collaboration':
        return Users
      case 'weekly_challenge':
        return Calendar
      case 'comment':
        return MessageCircle
      default:
        return Plus
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'project_update':
        return 'text-blue-600'
      case 'endorsement':
        return 'text-yellow-600'
      case 'collaboration':
        return 'text-green-600'
      case 'weekly_challenge':
        return 'text-purple-600'
      case 'comment':
        return 'text-gray-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-secondary-200">
      <div className="p-4 border-b border-secondary-200">
        <h4 className="font-semibold text-secondary-900">Recent Activity</h4>
      </div>
      
      <div className="divide-y divide-secondary-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-secondary-50 transition-colors">
            <div className="flex items-start space-x-3">
              <div className={`${getActivityColor(activity.type)} w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0`}>
                <activity.icon className="h-4 w-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-sm text-secondary-900">
                  <span className="font-medium">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium">{activity.target}</span>
                </div>
                <div className="text-xs text-secondary-500 mt-1">
                  {activity.time}
                </div>
              </div>
              
              <button className="text-secondary-400 hover:text-secondary-600 transition-colors">
                <span className="sr-only">View details</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-secondary-200">
        <button className="w-full text-center text-primary-600 hover:text-primary-700 font-medium text-sm">
          View All Activity →
        </button>
      </div>
    </div>
  )
}
