'use client'

import React from 'react'
import { Home, Search, Bell, MessageCircle, Bookmark, Users, User, Plus, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  const user = {
    name: "Alex Kim",
    username: "@alexkim",
    avatar: "/api/placeholder/40/40"
  }

  const navigationItems = [
    { icon: Home, label: 'Home', href: '/', active: pathname === '/' },
    { icon: Search, label: 'Discover', href: '/discover', active: pathname === '/discover' },
    { icon: Bell, label: 'Notifications', href: '/notifications', active: pathname === '/notifications' },
    { icon: MessageCircle, label: 'Messages', href: '/messages', active: pathname === '/messages' },
    { icon: Bookmark, label: 'Bookmarks', href: '/bookmarks', active: pathname === '/bookmarks' },
    { icon: Users, label: 'Communities', href: '/communities', active: pathname === '/communities' },
    { icon: User, label: 'Profile', href: '/profile', active: pathname === '/profile' },
  ]

  return (
    <div className="w-64 h-screen bg-white border-r border-secondary-200 flex flex-col fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="p-6 border-b border-secondary-200">
        <h1 className="text-2xl font-bold text-primary-600">Builder</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                    item.active
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Create Post Button */}
      <div className="px-4 pb-6">
        <button className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Create Post</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="border-t border-secondary-200 p-4">
        <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-secondary-50 cursor-pointer transition-colors">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-medium text-sm">
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-secondary-900 truncate">{user.name}</p>
            <p className="text-xs text-secondary-500 truncate">{user.username}</p>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-1 text-secondary-400 hover:text-secondary-600 transition-colors">
              <Settings className="h-4 w-4" />
            </button>
            <button className="p-1 text-secondary-400 hover:text-secondary-600 transition-colors">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
