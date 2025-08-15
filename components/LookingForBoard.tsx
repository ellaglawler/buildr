import React from 'react'
import { Users, MapPin, Clock, ArrowRight, Briefcase } from 'lucide-react'

export default function LookingForBoard() {
  const opportunities = [
    {
      id: 1,
      title: "UX Designer for Mobile App",
      company: "TechStart Inc.",
      location: "Remote",
      type: "Contract",
      description: "Looking for a talented UX designer to help redesign our mobile app interface. Experience with Figma and mobile design principles required.",
      skills: ["UX Design", "Figma", "Mobile Design", "User Research"],
      budget: "$3,000 - $5,000",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Developer for E-commerce",
      company: "CraftWorks",
      location: "New York, NY",
      type: "Part-time",
      description: "Need a React developer to help build a modern e-commerce platform. Experience with Next.js and TypeScript preferred.",
      skills: ["React", "Next.js", "TypeScript", "E-commerce"],
      budget: "$4,000 - $6,000/month",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Mechanical Engineer for Hardware",
      company: "InnovateLab",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Seeking a mechanical engineer to join our hardware team developing sustainable energy solutions.",
      skills: ["Mechanical Engineering", "CAD", "Prototyping", "Sustainability"],
      budget: "$80,000 - $120,000/year",
      posted: "3 days ago"
    }
  ]

  return (
    <section id="collaborate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Looking For Board
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Find your next collaboration opportunity or post what you're looking for. 
            Connect with builders who have the skills you need.
          </p>
        </div>

        {/* Post Opportunity CTA */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <Briefcase className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Have a Project That Needs Help?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Post a project brief and find the perfect collaborators. Include what you're building, 
              skills needed, and location preferences.
            </p>
            <button className="btn-primary text-lg px-8 py-3 flex items-center mx-auto space-x-2">
              <span>Post Opportunity</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Featured Opportunities */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="card hover:shadow-lg transition-shadow duration-300 group">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`badge ${
                    opportunity.type === 'Full-time' ? 'badge-accent' : 
                    opportunity.type === 'Part-time' ? 'badge-primary' : 'badge-secondary'
                  }`}>
                    {opportunity.type}
                  </span>
                  <span className="text-sm text-secondary-500">
                    {opportunity.posted}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {opportunity.title}
                </h3>
                
                <div className="flex items-center text-sm text-secondary-600 mb-2">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="mr-3">{opportunity.company}</span>
                </div>
                
                <div className="flex items-center text-sm text-secondary-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{opportunity.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary-600 mb-4 leading-relaxed">
                {opportunity.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.skills.map((skill, index) => (
                  <span key={index} className="badge badge-primary">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Budget */}
              <div className="bg-secondary-50 rounded-lg p-3 mb-4">
                <div className="text-sm font-medium text-secondary-900 mb-1">
                  Budget
                </div>
                <div className="text-lg font-semibold text-primary-600">
                  {opportunity.budget}
                </div>
              </div>

              {/* Action */}
              <button className="w-full btn-primary">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Browse All CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-3">
            Browse All Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}
