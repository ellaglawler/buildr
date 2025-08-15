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
    <div className="space-y-6">
      {/* Stories/Highlights Bar */}
      <StoryBar />
      
      {/* Create Post Button */}
      <div className="bg-white rounded-xl border border-secondary-200 p-4">
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

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePost onClose={() => setShowCreatePost(false)} />
      )}
    </div>
  )
}
