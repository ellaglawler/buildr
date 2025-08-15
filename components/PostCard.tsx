'use client'

import React, { useState } from 'react'
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Calendar, Users } from 'lucide-react'

interface PostUser {
  name: string
  username: string
  avatar: string
  verified: boolean
}

interface Project {
  title: string
  category: string
  status: string
  image: string
}

interface Post {
  id: number
  user: PostUser
  content: string
  project: Project
  likes: number
  comments: number
  shares: number
  timeAgo: string
  isLiked: boolean
  isBookmarked: boolean
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shipped':
      case 'Completed':
        return 'bg-accent-100 text-accent-800'
      case 'In Progress':
        return 'bg-primary-100 text-primary-800'
      case 'Looking for Team':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-secondary-100 text-secondary-800'
    }
  }

  return (
    <div className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Post Header */}
      <div className="p-4 border-b border-secondary-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center">
              <span className="text-secondary-600 font-medium">
                {post.user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-secondary-900">{post.user.name}</span>
                {post.user.verified && (
                  <span className="text-primary-600">✓</span>
                )}
              </div>
              <div className="text-sm text-secondary-500">{post.user.username} • {post.timeAgo}</div>
            </div>
          </div>
          <button className="text-secondary-400 hover:text-secondary-600 transition-colors">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <p className="text-secondary-900 mb-4 leading-relaxed">
          {post.content}
        </p>

        {/* Project Showcase */}
        <div className="bg-secondary-50 rounded-lg p-4 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-secondary-900">{post.project.title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`badge ${getStatusColor(post.project.status)} text-xs`}>
                  {post.project.status}
                </span>
                <span className="text-xs text-secondary-500">#{post.project.category}</span>
              </div>
            </div>
          </div>
          
          {/* Project Image Placeholder */}
          <div className="bg-secondary-200 rounded-lg h-48 mb-3 flex items-center justify-center">
            <span className="text-secondary-500">Project Image</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-secondary-600">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                San Francisco, CA
              </span>
              <span className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                Started 2 weeks ago
              </span>
            </div>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View Project →
            </button>
          </div>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-3 border-t border-secondary-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors ${
                isLiked ? 'text-red-500' : 'text-secondary-600 hover:text-red-500'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors">
              <Share2 className="h-5 w-5" />
              <span className="text-sm font-medium">{post.shares}</span>
            </button>
          </div>
          
          <button 
            onClick={handleBookmark}
            className={`transition-colors ${
              isBookmarked ? 'text-accent-500' : 'text-secondary-600 hover:text-accent-500'
            }`}
          >
            <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  )
}
