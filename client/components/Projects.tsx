import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "HireHQ",
      description:
        "Smart Hiring & Job Management Platform for Employers and Job Seekers.",
      technologies: ["Node.js", "Fastify", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Simplify VMS",
      description:
        "Vendor Management System backend API for streamlined vendor operations and procurement processes.",
      technologies: ["Node.js", "Fastify", "TypeScript", "MongoDB"],
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description:
        "ERP is a system that automates and integrates core business processes like HR, finance, and inventory.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio showcasing creative design and smooth animations.",
      technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Tilt
              key={project.title}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.04}
              transitionSpeed={1500}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="rounded-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.25)' }}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-blue-400 rounded-full text-xs font-medium border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
