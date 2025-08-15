import React from 'react'
import { Heart, MessageCircle, Share2, Clock, User, MapPin } from 'lucide-react'

export default function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Design Assistant",
      creator: "Sarah Chen",
      location: "San Francisco, CA",
      status: "In Progress",
      description: "Building an AI tool that helps designers create better user interfaces by analyzing user behavior patterns and suggesting improvements.",
      image: "/api/placeholder/400/300",
      skills: ["AI/ML", "UI/UX", "React", "Python"],
      progress: [
        { date: "2024-01-15", update: "Initial concept and wireframes completed" },
        { date: "2024-01-22", update: "Core AI model architecture designed" },
        { date: "2024-01-29", update: "Frontend prototype with basic functionality" }
      ],
      likes: 127,
      comments: 23,
      category: "WebApp"
    },
    {
      id: 2,
      title: "Sustainable Furniture Collection",
      creator: "Marcus Rodriguez",
      location: "Portland, OR",
      status: "Completed",
      description: "A collection of handcrafted furniture pieces made from reclaimed wood and sustainable materials, focusing on both aesthetics and environmental responsibility.",
      image: "/api/placeholder/400/300",
      skills: ["Woodworking", "Design", "Sustainability", "Carpentry"],
      progress: [
        { date: "2024-01-01", update: "Design sketches and material sourcing" },
        { date: "2024-01-08", update: "First prototype - dining chair" },
        { date: "2024-01-15", update: "Collection completed and photographed" }
      ],
      likes: 89,
      comments: 15,
      category: "Woodworking"
    },
    {
      id: 3,
      title: "Community Garden App",
      creator: "Emma Thompson",
      location: "Austin, TX",
      status: "Idea",
      description: "An app that connects urban gardeners, helps them find community garden spaces, and provides resources for sustainable urban farming.",
      image: "/api/placeholder/400/300",
      skills: ["Mobile Development", "Community", "Sustainability", "Flutter"],
      progress: [
        { date: "2024-01-20", update: "Market research and user interviews completed" },
        { date: "2024-01-27", update: "App wireframes and user flow designed" }
      ],
      likes: 45,
      comments: 8,
      category: "MobileApp"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover amazing projects from our community. Each project tells a story of creation, 
            collaboration, and progress through threaded updates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card hover:shadow-lg transition-shadow duration-300">
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`badge ${
                    project.status === 'Completed' ? 'badge-accent' : 
                    project.status === 'In Progress' ? 'badge-primary' : 'badge-secondary'
                  }`}>
                    {project.status}
                  </span>
                  <span className="badge badge-secondary">
                    #{project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-sm text-secondary-600 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-3">{project.creator}</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Project Image Placeholder */}
              <div className="bg-secondary-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span className="text-secondary-500">Project Image</span>
              </div>

              {/* Description */}
              <p className="text-secondary-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span key={index} className="badge badge-primary">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Progress Updates */}
              <div className="mb-4">
                <h4 className="font-medium text-secondary-900 mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Progress Updates
                </h4>
                <div className="space-y-2">
                  {project.progress.slice(-2).map((update, index) => (
                    <div key={index} className="text-sm bg-secondary-50 rounded-lg p-3">
                      <div className="text-secondary-500 text-xs mb-1">
                        {new Date(update.date).toLocaleDateString()}
                      </div>
                      <div className="text-secondary-700">{update.update}</div>
                    </div>
                  ))}
                </div>
                {project.progress.length > 2 && (
                  <button className="text-sm text-primary-600 hover:text-primary-700 mt-2">
                    View all {project.progress.length} updates →
                  </button>
                )}
              </div>

              {/* Engagement */}
              <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-secondary-600 hover:text-primary-600 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{project.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-secondary-600 hover:text-primary-600 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{project.comments}</span>
                  </button>
                </div>
                <button className="text-secondary-600 hover:text-secondary-800 transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-3">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
