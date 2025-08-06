import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'An intelligent analytics dashboard that provides insights using machine learning algorithms and beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'A modern social media platform with real-time messaging, post sharing, and social networking features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'WebSockets'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'A comprehensive crypto tracking app with portfolio management, price alerts, and market analysis tools.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'CoinGecko API', 'Vuex', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              whileHover={{ scale: 1.02 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A showcase of my recent work, demonstrating expertise in modern web technologies 
              and innovative problem-solving approaches.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className={`group relative glass-effect rounded-2xl overflow-hidden 
                          ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.liveUrl}
                          className="p-2 glass-effect rounded-lg text-white hover:text-blue-400 
                                   transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          className="p-2 glass-effect rounded-lg text-white hover:text-blue-400 
                                   transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      </div>
                      {project.featured && (
                        <motion.span
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 
                                   text-white text-sm rounded-full font-medium"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:gradient-text 
                             transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 text-sm leading-relaxed mb-4 
                             group-hover:text-gray-300 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full 
                                 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 + 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 to-purple-600/0 
                           rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 
                           blur-sm -z-10"
                  whileHover={{
                    background: 'linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
                    opacity: 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              className="inline-flex items-center px-8 py-3 glass-effect rounded-lg 
                       text-blue-400 hover:text-white border border-blue-500/30 
                       hover:border-blue-400/50 transition-all duration-300 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={20} className="mr-2" />
              View All Projects
              <motion.span
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects