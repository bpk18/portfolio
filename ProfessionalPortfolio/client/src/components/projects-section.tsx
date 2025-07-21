import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Movie Review Website",
      description: "A dynamic movie review platform where users can browse, rate, and review movies. Features include movie search, rating system, user reviews, and responsive design for optimal viewing experience.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      techColors: ["bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800"],
    },
    {
      title: "Sign Language Recognition",
      description: "An AI-powered application that recognizes sign language gestures in real-time using computer vision. Built with Python and machine learning libraries for accurate gesture detection and translation.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      techColors: ["bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-red-100 text-red-800"],
    },
    {
      title: "PaperPrep PDF Converter",
      description: "A web-based PDF converter tool that allows users to convert documents between various formats. Features drag-and-drop interface, batch conversion, and secure file processing.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      techColors: ["bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800"],
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden card-hover">
              <img
                src={project.image}
                alt={`${project.title} Project`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={project.techColors[techIndex]}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {(project.liveDemo && project.liveDemo !== "#") || (project.github && project.github !== "#") ? (
                  <div className="flex space-x-4">
                    {project.liveDemo && project.liveDemo !== "#" && (
                      <a
                        href={project.liveDemo}
                        className="text-primary hover:text-blue-700 font-semibold flex items-center"
                      >
                        <ExternalLink className="mr-1" size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-gray-800 flex items-center"
                      >
                        <Github className="mr-1" size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/bpk18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
