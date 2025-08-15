'use client'

import React, { useState } from 'react'
import { X, Image, MapPin, Hash, Users, Calendar, Plus } from 'lucide-react'

interface CreatePostProps {
  onClose: () => void
}

export default function CreatePost({ onClose }: CreatePostProps) {
  const [content, setContent] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [location, setLocation] = useState('')

  const categories = [
    'WebApp', 'MobileApp', 'Hardware', 'Design', 'Woodworking', 
    'AI/ML', 'Sustainability', 'Community', 'Art', 'Music'
  ]

  const statuses = [
    'Idea', 'Planning', 'In Progress', 'Testing', 'Shipped', 'Completed', 'Looking for Team'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post creation logic here
    console.log('Creating post:', { content, projectTitle, category, status, location })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-secondary-200">
          <h2 className="text-xl font-bold text-secondary-900">Share Your Build</h2>
          <button 
            onClick={onClose}
            className="text-secondary-400 hover:text-secondary-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              What are you building?
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your journey, progress, or ask for help..."
              className="w-full h-32 px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Project Details */}
          <div className="bg-secondary-50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-secondary-900">Project Details</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="e.g., AI Design Assistant"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select status</option>
                  {statuses.map((stat) => (
                    <option key={stat} value={stat}>{stat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., San Francisco, CA"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Media Upload */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Add Media
            </label>
            <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image className="h-12 w-12 text-secondary-400 mx-auto mb-2" />
              <p className="text-secondary-600">Click to upload images or drag and drop</p>
              <p className="text-sm text-secondary-500">PNG, JPG up to 10MB</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
            <div className="flex items-center space-x-4">
              <button type="button" className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-800 transition-colors">
                <Hash className="h-4 w-4" />
                <span>Add tags</span>
              </button>
              <button type="button" className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-800 transition-colors">
                <Users className="h-4 w-4" />
                <span>Tag people</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                type="button" 
                onClick={onClose}
                className="px-6 py-2 border border-secondary-300 rounded-lg text-secondary-700 hover:bg-secondary-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="btn-primary px-6 py-2"
              >
                Share Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
