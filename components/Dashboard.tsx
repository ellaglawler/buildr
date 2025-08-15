'use client'

import React, { useState } from 'react'
import { Plus, Search, Bell, User, Home, FolderOpen, Users, MapPin, Award, Settings } from 'lucide-react'
import ProjectCard from './ProjectCard'
import CollaborationCard from './CollaborationCard'
import ActivityFeed from './ActivityFeed'
import QuickActions from './QuickActions'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const user = {
    name: "Alex Kim",
    avatar: "/api/placeholder/40/40",
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "UI/UX"],
    projectsCompleted: 12,
    endorsements: 34
  }

  const recentProjects = [
    {
      id: 1,
      title: "AI Chatbot Platform",
      status: "In Progress",
      progress: 65,
      lastUpdate: "2 hours ago",
      collaborators: 3,
      category: "WebApp"
    },
    {
      id: 2,
      title: "Sustainable Fashion App",
      status: "Planning",
      progress: 25,
      lastUpdate: "1 day ago",
      collaborators: 1,
      category: "MobileApp"
    }
  ]

  const collaborationRequests = [
    {
      id: 1,
      title: "UX Designer for Mobile App",
      company: "TechStart Inc.",
      type: "Contract",
      budget: "$3,000 - $5,000",
      skills: ["UX Design", "Figma", "Mobile Design"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Developer for E-commerce",
      company: "CraftWorks",
      type: "Part-time",
      budget: "$4,000 - $6,000/month",
      skills: ["React", "Next.js", "TypeScript"],
      posted: "1 week ago"
    }
  ]

  const navigation = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'projects', label: 'My Projects', icon: FolderOpen },
    { id: 'collaborate', label: 'Collaborate', icon: Users },
    { id: 'discover', label: 'Discover', icon: MapPin },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Search */}
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-primary-600">Builder</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
                <input
                  type="text"
                  placeholder="Search projects, builders, skills..."
                  className="w-80 pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>New Project</span>
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
                <span className="text-secondary-900 font-medium">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-6">
          {/* Left Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* User Stats */}
            <div className="mt-8 p-4 bg-white rounded-lg border border-secondary-200">
              <h3 className="font-semibold text-secondary-900 mb-3">Your Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Projects</span>
                  <span className="font-medium text-secondary-900">{user.projectsCompleted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Endorsements</span>
                  <span className="font-medium text-secondary-900">{user.endorsements}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Location</span>
                  <span className="font-medium text-secondary-900">{user.location}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                    Welcome back, {user.name}! 👋
                  </h2>
                  <p className="text-secondary-600">
                    Ready to build something amazing today? Here's what's happening in your world.
                  </p>
                </div>

                {/* Quick Actions */}
                <QuickActions />

                {/* Recent Projects */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary-900">Recent Projects</h3>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      View All →
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {recentProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </section>

                {/* Collaboration Opportunities */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary-900">Collaboration Opportunities</h3>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Browse All →
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {collaborationRequests.map((request) => (
                      <CollaborationCard key={request.id} request={request} />
                    ))}
                  </div>
                </section>

                {/* Activity Feed */}
                <section>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">Recent Activity</h3>
                  <ActivityFeed />
                </section>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">My Projects</h2>
                <p className="text-secondary-600">Project management interface coming soon...</p>
              </div>
            )}

            {activeTab === 'collaborate' && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Collaborate</h2>
                <p className="text-secondary-600">Collaboration tools coming soon...</p>
              </div>
            )}

            {activeTab === 'discover' && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Discover</h2>
                <p className="text-secondary-600">Builder discovery interface coming soon...</p>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Achievements</h2>
                <p className="text-secondary-600">Achievement system coming soon...</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Settings</h2>
                <p className="text-secondary-600">Settings interface coming soon...</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
