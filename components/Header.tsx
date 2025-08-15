'use client'

import { useState } from 'react'
import { Menu, X, Search, User, Plus } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">
                Builder
              </h1>
            </div>
            <p className="ml-2 text-sm text-secondary-600 hidden sm:block">
              Build Together. Build Better.
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Projects
            </a>
            <a href="#collaborate" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Collaborate
            </a>
            <a href="#find-builders" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Find Builders
            </a>
            <a href="#community" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Community
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-secondary-400 hover:text-secondary-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Project</span>
            </button>
            <button className="p-2 text-secondary-400 hover:text-secondary-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-secondary-400 hover:text-secondary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-secondary-200">
              <a href="#projects" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md">
                Projects
              </a>
              <a href="#collaborate" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md">
                Collaborate
              </a>
              <a href="#find-builders" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md">
                Find Builders
              </a>
              <a href="#community" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md">
                Community
              </a>
              <div className="pt-4 pb-3 border-t border-secondary-200">
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>New Project</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
