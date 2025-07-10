import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML", level: 90 },
        { name: "CSS ", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Fastify", level: 80 },
        { name: "Core Java", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 93 },
        { name: "Postman", level: 80 },
        { name: "VS Code", level: 92 },
        { name: "Jest/Testing", level: 85 },
        { name: "Jira", level: 78 },
        { name: "GitHub", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Tilt
              key={category.title}
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
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.25)' }}
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          }}
                          className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Projects Completed" },
              { number: "1+", label: "Years Internship" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
