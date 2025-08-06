import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Lightbulb, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

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

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly learning and implementing cutting-edge technologies and methodologies.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects that exceed expectations.'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              whileHover={{ scale: 1.02 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold text-white mb-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Crafting Digital Experiences
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I'm a passionate full-stack developer with over 5 years of experience creating 
                web applications that combine beautiful design with robust functionality. 
                My journey started with curiosity about how websites work, and it has evolved 
                into a deep love for creating digital solutions that make a difference.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring. 
                I believe in continuous learning and staying at the forefront of web development trends.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                variants={itemVariants}
              >
                {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                             text-blue-300 rounded-full text-sm border border-blue-500/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Animated Visual */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                className="relative w-full h-96 glass-effect rounded-2xl p-8 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Code Lines */}
                <div className="space-y-3">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-4 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded"
                      initial={{ width: 0, opacity: 0 }}
                      animate={inView ? { 
                        width: `${Math.random() * 60 + 40}%`, 
                        opacity: 1 
                      } : { width: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.8 + i * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-lg"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                />
                
                <motion.div
                  className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/20 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-600/20 
                         rounded-2xl blur-xl opacity-75"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-3xl font-bold text-center mb-12 gradient-text"
              whileHover={{ scale: 1.02 }}
            >
              What Drives Me
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-effect p-6 rounded-xl text-center group hover:bg-white/5 
                           transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-600 
                             rounded-lg flex items-center justify-center group-hover:animate-pulse"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:gradient-text 
                               transition-all duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About