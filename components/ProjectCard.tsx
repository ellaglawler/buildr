'use client'

import React from 'react'
import { Clock, Users, FolderOpen } from 'lucide-react'

interface Project {
  id: number
  title: string
  status: string
  progress: number
  lastUpdate: string
  collaborators: number
  category: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-accent-100 text-accent-800'
      case 'In Progress':
        return 'bg-primary-100 text-primary-800'
      case 'Planning':
        return 'bg-secondary-100 text-secondary-800'
      default:
        return 'bg-secondary-100 text-secondary-800'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-secondary-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className={`badge ${getStatusColor(project.status)} text-xs`}>
          {project.status}
        </span>
        <span className="text-xs text-secondary-500">
          #{project.category}
        </span>
      </div>
      
      <h3 className="font-semibold text-secondary-900 mb-2">
        {project.title}
      </h3>
      
      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-secondary-600 mb-1">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-secondary-200 rounded-full h-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Project Meta */}
      <div className="flex items-center justify-between text-sm text-secondary-600">
        <div className="flex items-center space-x-3">
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {project.lastUpdate}
          </span>
          <span className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {project.collaborators}
          </span>
        </div>
        <button className="text-primary-600 hover:text-primary-700 font-medium">
          View →
        </button>
      </div>
    </div>
  )
}
