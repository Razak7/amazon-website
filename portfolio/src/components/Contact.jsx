import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'hover:text-blue-300'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <section id="contact" className="py-20 relative">
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
              Get In Touch
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
              Ready to bring your ideas to life? Let's discuss your next project and 
              create something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Let's Connect
              </motion.h3>

              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I'm always interested in new opportunities, challenging projects, 
                and meaningful collaborations. Whether you have a project in mind 
                or just want to say hello, feel free to reach out!
              </motion.p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 glass-effect rounded-lg 
                             hover:bg-white/5 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 
                               rounded-lg flex items-center justify-center group-hover:animate-pulse"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:gradient-text 
                                   transition-all duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="flex space-x-6 pt-8"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`p-3 glass-effect rounded-lg text-gray-400 transition-all duration-300 
                              ${social.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.form 
                onSubmit={handleSubmit}
                className="glass-effect p-8 rounded-2xl space-y-6"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6 gradient-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Send a Message
                </motion.h3>

                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 
                             rounded-lg text-white placeholder-gray-400 focus:border-blue-400 
                             focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    whileFocus={{ 
                      borderColor: '#3b82f6',
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 
                             rounded-lg text-white placeholder-gray-400 focus:border-blue-400 
                             focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    whileFocus={{ 
                      borderColor: '#3b82f6',
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                    }}
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 
                             rounded-lg text-white placeholder-gray-400 focus:border-blue-400 
                             focus:outline-none transition-all duration-300"
                    placeholder="Project discussion"
                    whileFocus={{ 
                      borderColor: '#3b82f6',
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                    }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 
                             rounded-lg text-white placeholder-gray-400 focus:border-blue-400 
                             focus:outline-none resize-none transition-all duration-300"
                    placeholder="Tell me about your project..."
                    whileFocus={{ 
                      borderColor: '#3b82f6',
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white rounded-lg font-semibold glow-effect 
                           hover:scale-105 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <Send size={20} />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="text-center mt-16 pt-8 border-t border-gray-700"
            variants={itemVariants}
          >
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              © 2024 John Doe. Built with React, Tailwind CSS, and Framer Motion.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact