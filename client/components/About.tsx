import { motion } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Palette, Zap, Server } from "lucide-react";
import { useInView } from "../hooks/useInView";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern CSS frameworks",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Proficient in Node.js, Express, and database design",
    },
    {
      icon: Database,
      title: "Database",
      description: "Database Management System",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Emerging Full-Stack Developer with Real-World Project Experience
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Detail-oriented Full-Stack Developer with practical internship experience in
                 building robust web applications and APIs. 
                Proficient in developing dynamic, user-centric interfaces 
                using React.js and creating scalable backend services with Node.js and Express.
              </p>
              <p>
              Successfully contributed to multiple real-world projects during internships,
               taking ownership of both individual components and end-to-end full-stack features.
                Skilled in writing clean, maintainable code, 
              integrating third-party APIs, and enhancing application performance and user experience.
              </p>
              <p>
              Adept at working in cross-functional Agile teams, collaborating with designers, QA,
               and backend engineers to deliver high-quality solutions on time.
               Continuously learning and adapting to new technologies 
               to stay ahead in a fast-evolving tech landscape.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="/Aditya%20WamanResume%201.pdf%20(2).pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
