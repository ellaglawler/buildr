import { ArrowRight, Users, Lightbulb, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            Build Together.{' '}
            <span className="text-primary-600">Build Better.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            A community-driven platform for makers, founders, and creatives to showcase what they&apos;re building, 
            exchange advice, and find collaborators — locally or globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2">
              <span>Start Building</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Explore Projects
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Community First
              </h3>
              <p className="text-secondary-600">
                Connect with like-minded builders and get feedback on your projects
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Find Collaborators
              </h3>
              <p className="text-secondary-600">
                Discover people with the right skills for your next project
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Local & Global
              </h3>
              <p className="text-secondary-600">
                Connect with builders in your area or around the world
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
    </section>
  )
}
