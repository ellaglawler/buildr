'use client'

import React from 'react'
import { Briefcase, Clock, DollarSign } from 'lucide-react'

interface CollaborationRequest {
  id: number
  title: string
  company: string
  type: string
  budget: string
  skills: string[]
  posted: string
}

interface CollaborationCardProps {
  request: CollaborationRequest
}

export default function CollaborationCard({ request }: CollaborationCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-accent-100 text-accent-800'
      case 'Part-time':
        return 'bg-primary-100 text-primary-800'
      case 'Contract':
        return 'bg-secondary-100 text-secondary-800'
      default:
        return 'bg-secondary-100 text-secondary-800'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-secondary-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className={`badge ${getTypeColor(request.type)} text-xs`}>
          {request.type}
        </span>
        <span className="text-xs text-secondary-500">
          {request.posted}
        </span>
      </div>
      
      <h3 className="font-semibold text-secondary-900 mb-2">
        {request.title}
      </h3>
      
      <div className="flex items-center text-sm text-secondary-600 mb-3">
        <Briefcase className="h-4 w-4 mr-2" />
        <span>{request.company}</span>
      </div>
      
      {/* Skills */}
      <div className="mb-3">
        <div className="flex flex-wrap gap-1">
          {request.skills.map((skill, index) => (
            <span key={index} className="badge badge-primary text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Budget */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-sm text-secondary-600">
          <DollarSign className="h-4 w-4 mr-1" />
          <span className="font-medium">{request.budget}</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-secondary-200">
        <button className="btn-secondary text-sm px-4 py-2">
          Save
        </button>
        <button className="btn-primary text-sm px-4 py-2">
          Apply Now
        </button>
      </div>
    </div>
  )
}
