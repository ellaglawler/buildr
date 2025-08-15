import React from 'react'
import { Calendar, Star, Users, TrendingUp, MessageCircle, Heart } from 'lucide-react'

export default function CommunityTools() {
  const weeklyPrompts = [
    {
      id: 1,
      title: "Show Your Progress This Week",
      description: "Share what you've accomplished, learned, or built in the past 7 days. Progress, no matter how small, is worth celebrating!",
      hashtag: "#WeeklyProgress",
      participants: 127,
      endsIn: "3 days"
    },
    {
      id: 2,
      title: "Collaboration Spotlight",
      description: "Highlight a project where you collaborated with someone else. What did you learn? How did it make the project better?",
      hashtag: "#Collaboration",
      participants: 89,
      endsIn: "1 week"
    }
  ]

  const featuredProjects = [
    {
      id: 1,
      title: "Eco-Friendly Smart Home System",
      creator: "GreenTech Team",
      location: "Portland, OR",
      description: "A complete smart home solution that reduces energy consumption by 40% while maintaining comfort and convenience.",
      image: "/api/placeholder/300/200",
      likes: 234,
      comments: 45,
      category: "Hardware"
    },
    {
      id: 2,
      title: "Mental Health Support App",
      creator: "Wellness Collective",
      location: "Remote",
      description: "An app that connects people with mental health resources and provides daily wellness check-ins and exercises.",
      image: "/api/placeholder/300/200",
      likes: 189,
      comments: 32,
      category: "MobileApp"
    }
  ]

  const recentEndorsements = [
    {
      id: 1,
      endorser: "Sarah Chen",
      endorsed: "Alex Kim",
      skill: "React Development",
      message: "Alex helped me debug a complex state management issue. His React knowledge is exceptional!",
      date: "2 days ago"
    },
    {
      id: 2,
      endorser: "Marcus Rodriguez",
      endorsed: "Emma Thompson",
      skill: "Product Strategy",
      message: "Emma's strategic thinking transformed our project roadmap. Highly recommend!",
      date: "1 week ago"
    }
  ]

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Community Engagement Tools
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Stay connected with weekly challenges, discover featured projects, 
            and build your reputation through peer endorsements.
          </p>
        </div>

        {/* Weekly Build Prompts */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-primary-600" />
              Weekly Build Prompts
            </h3>
            <button className="btn-primary">
              View All Prompts
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {weeklyPrompts.map((prompt) => (
              <div key={prompt.id} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                      {prompt.title}
                    </h4>
                    <p className="text-secondary-600 mb-3">
                      {prompt.description}
                    </p>
                    <span className="badge badge-primary text-sm">
                      {prompt.hashtag}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                  <div className="flex items-center space-x-4 text-sm text-secondary-600">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {prompt.participants} participants
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Ends in {prompt.endsIn}
                    </span>
                  </div>
                  <button className="btn-secondary">
                    Participate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 flex items-center">
              <Star className="h-6 w-6 mr-2 text-accent-600" />
              Featured Projects
            </h3>
            <button className="btn-secondary">
              View All Featured
            </button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="bg-secondary-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-secondary-500">Project Image</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="badge badge-secondary">
                      #{project.category}
                    </span>
                    <span className="text-sm text-secondary-500">
                      {project.location}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-secondary-600 mb-3">
                    {project.description}
                  </p>
                  
                  <div className="text-sm text-secondary-500">
                    by {project.creator}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                  <div className="flex items-center space-x-4 text-sm text-secondary-600">
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {project.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {project.comments}
                    </span>
                  </div>
                  <button className="btn-primary">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Endorsements */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-primary-600" />
              Recent Skill Endorsements
            </h3>
            <button className="btn-secondary">
              View All Endorsements
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentEndorsements.map((endorsement) => (
              <div key={endorsement.id} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge badge-primary">
                      {endorsement.skill}
                    </span>
                    <span className="text-sm text-secondary-500">
                      {endorsement.date}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm text-secondary-600 mb-1">
                      <span className="font-medium">{endorsement.endorser}</span> endorsed{' '}
                      <span className="font-medium">{endorsement.endorsed}</span>
                    </div>
                    <p className="text-secondary-700 italic">
                      &ldquo;{endorsement.message}&rdquo;
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                  <button className="btn-secondary text-sm">
                    Endorse Skills
                  </button>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
