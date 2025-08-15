'use client'

import React, { useState } from 'react'
import { Plus, Search, Bell, User, Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react'
import PostCard from './PostCard'
import StoryBar from './StoryBar'
import CreatePost from './CreatePost'

export default function SocialFeed() {
  const [showCreatePost, setShowCreatePost] = useState(false)

  const user = {
    name: "Alex Kim",
    username: "@alexkim",
    avatar: "/api/placeholder/40/40",
    location: "San Francisco, CA"
  }

  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        username: "@sarahchen",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Just shipped the first version of our AI-powered design assistant! 🚀 The journey from idea to MVP has been incredible. Here's what we learned...",
      project: {
        title: "AI Design Assistant",
        category: "WebApp",
        status: "Shipped",
        image: "/api/placeholder/400/300"
      },
      likes: 127,
      comments: 23,
      shares: 8,
      timeAgo: "2 hours ago",
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      user: {
        name: "Marcus Rodriguez",
        username: "@marcusrodriguez",
        avatar: "/api/placeholder/40/40",
        verified: false
      },
      content: "Finally finished this sustainable furniture collection! Each piece tells a story of reclaimed materials and careful craftsmanship. What do you think?",
      project: {
        title: "Sustainable Furniture Collection",
        category: "Woodworking",
        status: "Completed",
        image: "/api/placeholder/400/300"
      },
      likes: 89,
      comments: 15,
      shares: 12,
      timeAgo: "5 hours ago",
      isLiked: true,
      isBookmarked: false
    },
    {
      id: 3,
      user: {
        name: "Emma Thompson",
        username: "@emmathompson",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Looking for a UX designer to help with our community garden app! Anyone interested in sustainable urban farming and community building?",
      project: {
        title: "Community Garden App",
        category: "MobileApp",
        status: "Looking for Team",
        image: "/api/placeholder/400/300"
      },
      likes: 45,
      comments: 8,
      shares: 3,
      timeAgo: "1 day ago",
      isLiked: false,
      isBookmarked: true
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-primary-600">Builder</h1>
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md mx-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
              <input
                type="text"
                placeholder="Search builders, projects, skills..."
                className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowCreatePost(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Post</span>
              </button>
              <button className="p-2 text-secondary-400 hover:text-secondary-600 transition-colors relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-medium text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stories/Highlights Bar */}
        <StoryBar />
        
        {/* Create Post Button */}
        <div className="bg-white rounded-xl border border-secondary-200 p-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-medium">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <button 
              onClick={() => setShowCreatePost(true)}
              className="flex-1 text-left text-secondary-500 hover:text-secondary-700 transition-colors"
            >
              What are you building today?
            </button>
            <button className="btn-primary">
              Share
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePost onClose={() => setShowCreatePost(false)} />
      )}
    </div>
  )
}
