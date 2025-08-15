import React from 'react'
import { Trophy, Star, Users, Target, Award, TrendingUp, Heart, MessageCircle } from 'lucide-react'

export default function Achievements() {
  const achievementCategories = [
    {
      title: "Project Completion",
      icon: Trophy,
      color: "text-accent-600",
      bgColor: "bg-accent-100",
      achievements: [
        { name: "First Build", description: "Complete your first project", earned: true },
        { name: "Serial Builder", description: "Complete 10 projects", earned: true },
        { name: "Master Creator", description: "Complete 50 projects", earned: false }
      ]
    },
    {
      title: "Collaboration",
      icon: Users,
      color: "text-primary-600",
      bgColor: "bg-primary-100",
      achievements: [
        { name: "Team Player", description: "Collaborate on 5 projects", earned: true },
        { name: "Bridge Builder", description: "Connect 20 builders", earned: false },
        { name: "Community Leader", description: "Lead 10 collaborative projects", earned: false }
      ]
    },
    {
      title: "Community Engagement",
      icon: Heart,
      color: "text-secondary-600",
      bgColor: "bg-secondary-100",
      achievements: [
        { name: "Active Member", description: "Post weekly for 1 month", earned: true },
        { name: "Helpful Builder", description: "Receive 50 helpful votes", earned: false },
        { name: "Community Pillar", description: "Be active for 1 year", earned: false }
      ]
    }
  ]

  const topBuilders = [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "/api/placeholder/50/50",
      projects: 23,
      endorsements: 156,
      badge: "🏆 Builder of the Month"
    },
    {
      rank: 2,
      name: "Alex Kim",
      avatar: "/api/placeholder/50/50",
      projects: 19,
      endorsements: 134,
      badge: "🥈 Top Collaborator"
    },
    {
      rank: 3,
      name: "Marcus Rodriguez",
      avatar: "/api/placeholder/50/50",
      projects: 17,
      endorsements: 98,
      badge: "🥉 Community Champion"
    }
  ]

  const recentBadges = [
    {
      user: "Emma Thompson",
      badge: "First Build",
      project: "Community Garden App",
      date: "2 days ago"
    },
    {
      user: "David Chen",
      badge: "Team Player",
      project: "AI Analytics Platform",
      date: "1 week ago"
    },
    {
      user: "Maria Santos",
      badge: "Active Member",
      project: "Sustainable Fashion App",
      date: "2 weeks ago"
    }
  ]

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Earn badges for your contributions, track your progress, and get recognized 
            by the community for your building skills and collaboration.
          </p>
        </div>

        {/* Achievement Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {achievementCategories.map((category, index) => (
            <div key={index} className="card">
              <div className={`${category.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className={`h-8 w-8 ${category.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <div>
                      <div className="font-medium text-secondary-900">
                        {achievement.name}
                      </div>
                      <div className="text-sm text-secondary-600">
                        {achievement.description}
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-accent-100 text-accent-600' : 'bg-secondary-200 text-secondary-400'
                    }`}>
                      {achievement.earned ? (
                        <Star className="h-4 w-4 fill-current" />
                      ) : (
                        <Target className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Top Builders Leaderboard */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-accent-600" />
              Top Builders This Month
            </h3>
            <button className="btn-secondary">
              View Full Leaderboard
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            {topBuilders.map((builder, index) => (
              <div key={builder.rank} className={`flex items-center justify-between py-4 ${
                index !== topBuilders.length - 1 ? 'border-b border-secondary-200' : ''
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                    builder.rank === 1 ? 'bg-accent-100 text-accent-700' :
                    builder.rank === 2 ? 'bg-secondary-200 text-secondary-700' :
                    'bg-primary-100 text-primary-700'
                  }`}>
                    {builder.rank}
                  </div>
                  <div className="w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center">
                    <span className="text-secondary-600 font-medium">
                      {builder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{builder.name}</div>
                    <div className="text-sm text-secondary-600">
                      {builder.projects} projects • {builder.endorsements} endorsements
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="badge badge-accent text-xs mb-2">
                    {builder.badge}
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Badge Awards */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary-600" />
              Recent Badge Awards
            </h3>
            <button className="btn-secondary">
              View All Badges
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentBadges.map((badge, index) => (
              <div key={index} className="card text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-600" />
                </div>
                
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {badge.badge}
                </h4>
                
                <p className="text-secondary-600 mb-3">
                  Awarded to <span className="font-medium">{badge.user}</span>
                </p>
                
                <div className="text-sm text-secondary-500 mb-4">
                  for {badge.project}
                </div>
                
                <div className="text-xs text-secondary-400">
                  {badge.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Start Building Your Achievement Collection
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Every project, collaboration, and community contribution brings you closer to earning 
              badges and recognition from your fellow builders.
            </p>
            <button className="btn-primary text-lg px-8 py-3">
              Start Building
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
