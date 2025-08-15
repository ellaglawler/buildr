import React from 'react'
import { MapPin, Users, Filter, Search, Map, Calendar, Star } from 'lucide-react'

export default function LocalBuilderFinder() {
  const nearbyBuilders = [
    {
      id: 1,
      name: "Alex Kim",
      avatar: "/api/placeholder/60/60",
      location: "San Francisco, CA",
      distance: "0.5 miles",
      skills: ["React", "Node.js", "UI/UX"],
      currentProject: "AI Chatbot Platform",
      openToMeetups: true,
      rating: 4.8,
      projectsCompleted: 12
    },
    {
      id: 2,
      name: "Maria Santos",
      avatar: "/api/placeholder/60/60",
      location: "San Francisco, CA",
      distance: "1.2 miles",
      skills: ["Product Design", "Figma", "User Research"],
      currentProject: "Sustainable Fashion App",
      openToMeetups: true,
      rating: 4.9,
      projectsCompleted: 8
    },
    {
      id: 3,
      name: "David Chen",
      avatar: "/api/placeholder/60/60",
      location: "San Francisco, CA",
      distance: "2.1 miles",
      skills: ["Python", "Machine Learning", "Data Science"],
      currentProject: "Predictive Analytics Tool",
      openToMeetups: false,
      rating: 4.7,
      projectsCompleted: 15
    }
  ]

  const popularSkills = [
    "React", "Python", "UI/UX", "Machine Learning", "Mobile Development",
    "Product Management", "Data Science", "DevOps", "Design", "Backend"
  ]

  return (
    <section id="find-builders" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Find Builders Near You
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover talented builders in your area, see their current projects, 
            and connect for local collaboration and meetups.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-6 mb-12 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search by skills, projects, or names..."
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Enter your location..."
                className="input-field pl-10"
              />
            </div>
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Popular Skills */}
          <div className="flex flex-wrap gap-2">
            {popularSkills.map((skill, index) => (
              <button
                key={index}
                className="badge badge-secondary hover:badge-primary cursor-pointer transition-colors"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Map View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button className="px-4 py-2 rounded-md bg-primary-100 text-primary-700 font-medium">
              List View
            </button>
            <button className="px-4 py-2 rounded-md text-secondary-600 hover:text-secondary-800 font-medium">
              <Map className="h-4 w-4 inline mr-2" />
              Map View
            </button>
          </div>
        </div>

        {/* Builders Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {nearbyBuilders.map((builder) => (
            <div key={builder.id} className="card hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center">
                    <span className="text-secondary-600 font-medium">
                      {builder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">{builder.name}</h3>
                    <div className="flex items-center text-sm text-secondary-600">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{builder.distance}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-secondary-600 mb-1">
                    <Star className="h-3 w-3 mr-1 text-accent-500 fill-current" />
                    <span>{builder.rating}</span>
                  </div>
                  <div className="text-xs text-secondary-500">
                    {builder.projectsCompleted} projects
                  </div>
                </div>
              </div>

              {/* Current Project */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-secondary-900 mb-2">Current Project</h4>
                <p className="text-sm text-secondary-600 bg-secondary-50 rounded-lg p-3">
                  {builder.currentProject}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-secondary-900 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {builder.skills.map((skill, index) => (
                    <span key={index} className="badge badge-primary text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meetup Status */}
              <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                <div className="flex items-center space-x-2">
                  {builder.openToMeetups ? (
                    <span className="badge badge-accent text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      Open to Meetups
                    </span>
                  ) : (
                    <span className="badge badge-secondary text-xs">
                      Remote Only
                    </span>
                  )}
                </div>
                <button className="btn-primary text-sm px-4 py-2">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-3">
            View All Nearby Builders
          </button>
        </div>
      </div>
    </section>
  )
}
