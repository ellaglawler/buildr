'use client'

import React from 'react'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  
  const getPageTitle = () => {
    switch (pathname) {
      case '/':
        return 'Home'
      case '/discover':
        return 'Discover Builders'
      case '/notifications':
        return 'Notifications'
      case '/messages':
        return 'Messages'
      case '/bookmarks':
        return 'Bookmarks'
      case '/communities':
        return 'Communities'
      case '/profile':
        return 'Profile'
      default:
        return 'Dashboard'
    }
  }

  return (
    <div className="flex min-h-screen bg-secondary-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Page Title */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-secondary-900">{getPageTitle()}</h2>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                <button className="p-2 text-secondary-400 hover:text-secondary-600 transition-colors relative">
                  <div className="w-5 h-5 bg-secondary-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-secondary-600">🔔</span>
                  </div>
                </button>
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-medium text-sm">AK</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
