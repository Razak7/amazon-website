import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'CSS/Tailwind', level: 88, color: 'from-green-400 to-green-600' },
        { name: 'Next.js', level: 82, color: 'from-gray-400 to-gray-600' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 87, color: 'from-green-400 to-green-600' },
        { name: 'Python', level: 83, color: 'from-blue-400 to-yellow-400' },
        { name: 'Express.js', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', level: 78, color: 'from-blue-500 to-blue-700' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-400 to-red-500' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 70, color: 'from-orange-400 to-orange-600' },
        { name: 'Figma', level: 85, color: 'from-purple-400 to-pink-500' },
        { name: 'Testing', level: 80, color: 'from-green-400 to-green-600' }
      ]
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

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Technologies
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
              A comprehensive toolkit for building modern, scalable web applications
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-effect p-8 rounded-2xl hover:bg-white/5 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-8 text-center gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  {category.title}
                </motion.h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                      }}
                    >
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <motion.span 
                          className="text-blue-400 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1 
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Progress Bar Background */}
                      <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                        {/* Progress Bar Fill */}
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} 
                                    rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                            ease: "easeOut"
                          }}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent 
                                     via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear",
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 2
                            }}
                          />
                        </motion.div>
                        
                        {/* Glowing Effect */}
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} 
                                    rounded-full blur-sm opacity-50`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.h3 
              className="text-2xl font-bold mb-8 gradient-text"
              whileHover={{ scale: 1.02 }}
            >
              Additional Technologies
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                'Redux', 'GraphQL', 'Firebase', 'Vercel', 'Webpack', 'Sass', 
                'Jest', 'Cypress', 'Stripe', 'Socket.io', 'Redis', 'Jenkins'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-6 py-3 glass-effect rounded-full text-gray-300 
                           hover:text-white hover:bg-white/10 transition-all duration-300 
                           border border-blue-500/30 hover:border-blue-400/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills