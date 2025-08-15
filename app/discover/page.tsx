"use client";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

interface ProjectListItem {
  id: string;
  title: string;
  tagline: string;
  skills_used: string[];
  is_open_to_collab: boolean;
}

export default function DiscoverPage() {
  const [skills, setSkills] = useState("");
  
  // Mock data for demonstration
  const mockResults: ProjectListItem[] = [
    {
      id: "1",
      title: "AI-Powered Design Assistant",
      tagline: "Revolutionary design tool that uses AI to help creators build better products",
      skills_used: ["React", "Python", "AI/ML", "Design"],
      is_open_to_collab: true
    },
    {
      id: "2", 
      title: "Sustainable Furniture Collection",
      tagline: "Handcrafted furniture made from reclaimed materials",
      skills_used: ["Woodworking", "Design", "Sustainability"],
      is_open_to_collab: false
    },
    {
      id: "3",
      title: "Community Garden App",
      tagline: "Mobile app for managing and connecting community gardens",
      skills_used: ["React Native", "Node.js", "UX Design"],
      is_open_to_collab: true
    },
    {
      id: "4",
      title: "Blockchain Voting System",
      tagline: "Secure and transparent voting platform built on blockchain",
      skills_used: ["Solidity", "React", "Web3", "Security"],
      is_open_to_collab: true
    }
  ];

  const filteredResults = skills 
    ? mockResults.filter(project => 
        project.skills_used.some(skill => 
          skill.toLowerCase().includes(skills.toLowerCase())
        )
      )
    : mockResults;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-secondary-200 p-6">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">Discover Builders</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-secondary-700 mb-2">
                Filter by skills
              </label>
              <input 
                id="skills"
                className="w-full rounded-lg border border-secondary-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                placeholder="e.g., React, Python, Design" 
                value={skills} 
                onChange={(e) => setSkills(e.target.value)} 
              />
            </div>
            <div className="text-sm text-secondary-600">
              🔍 Search through our community of builders
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-secondary-200 p-6">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">
            Found {filteredResults.length} builders
          </h2>
          <div className="space-y-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((project) => (
                <div key={project.id} className="border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary-900 text-lg">{project.title}</h3>
                      <p className="text-secondary-600 mt-1">{project.tagline}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-sm text-secondary-500">Skills:</span>
                        <div className="flex flex-wrap gap-2">
                          {project.skills_used.map((skill, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-sm text-secondary-500">
                        {project.is_open_to_collab ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Open to Collab
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                            Solo Project
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-secondary-500">
                No builders found. Try adjusting your search criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
