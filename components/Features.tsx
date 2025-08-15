import { Code, Users, MapPin, MessageSquare, Award, Calendar } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Code,
      title: "Project Showcases",
      description: "Post builds (idea, in-progress, or completed) with images, descriptions, skills used, and categories. Add threaded progress logs to show your full journey.",
      tags: ["#WebApp", "#Woodworking", "#AI", "#Design"]
    },
    {
      icon: Users,
      title: "Looking For Board",
      description: "Post project briefs including what you're building, skills needed, and location preferences. Browse opportunities and apply to join exciting projects.",
      tags: ["Collaboration", "Project Briefs", "Skill Matching"]
    },
    {
      icon: MapPin,
      title: "Local Builder Finder",
      description: "Search and filter by location and skills. Map view showing nearby builders and their current projects with 'Open to Meetups' badges.",
      tags: ["Local Discovery", "Map View", "Meetups"]
    },
    {
      icon: MessageSquare,
      title: "Community Engagement",
      description: "Weekly build prompts, featured projects (local and global), and skill endorsements from peers to keep the community vibrant.",
      tags: ["Weekly Prompts", "Featured Projects", "Endorsements"]
    },
    {
      icon: Award,
      title: "Achievements & Badges",
      description: "Earn recognition for skills used and projects completed. Badges for collaborative contributions and community engagement.",
      tags: ["Recognition", "Skills", "Community"]
    },
    {
      icon: Calendar,
      title: "Progress Tracking",
      description: "Document and share progress through ongoing updates. Keep all your progress updates threaded neatly into your original project post.",
      tags: ["Progress Logs", "Storytelling", "Updates"]
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Everything You Need to Build Together
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Builder combines project showcases, collaboration tools, and community features 
            to help you connect, create, and grow with fellow builders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-secondary-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Builder Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Why Builder?
            </h3>
            <p className="text-lg text-secondary-600 max-w-4xl mx-auto mb-6">
              Unlike portfolio platforms or general social networks, Builder is community-first and collaboration-focused. 
              It not only celebrates what you've built but actively helps you find who you need to build with — 
              locally or globally — while keeping all your progress updates threaded neatly into your original project post for easy storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Join the Community
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
