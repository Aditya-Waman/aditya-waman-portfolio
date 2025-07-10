import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import Tilt from 'react-parallax-tilt';
import { useIsMobile } from "../hooks/use-mobile";

const certifications = [
  {
    name: "Node.js Certificate",
    issuer: "Node.js Foundation",
    date: "2025",
    image: "/nodejs.pdf",
    type: "pdf",
  },
  {
    name: "React Certificate",
    issuer: "React.js",
    date: "2025",
    image: "/react.pdf",
    type: "pdf",
  },
  // Add more certificates here as you upload images
];

const Certifications = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  const handleClick = (cert: typeof certifications[0], idx: number) => {
    if (cert.type === "pdf") {
      window.open(cert.image, "_blank");
    } else {
      setSelected(idx);
    }
  };

  const handleClose = () => setSelected(null);

  return (
    <section id="certifications" className="py-20 bg-gray-900/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Certifications{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
              Section
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>
        <div className="grid gap-4 justify-center sm:grid-cols-1 md:grid-cols-2 place-items-center">
          {certifications.map((cert, idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.04}
              transitionSpeed={1500}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="rounded-xl"
            >
              <motion.button
                onClick={() => handleClick(cert, idx)}
                animate={isMobile ? { scale: 1.08, rotate: -2, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.25)' } : {}}
                whileHover={!isMobile ? { scale: 1.08, rotate: -2, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.25)' } : {}}
                whileTap={!isMobile ? { scale: 0.97 } : {}}
                className="bg-gray-800/80 rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:bg-blue-900/40 transition border border-gray-700 hover:border-blue-500/50"
              >
                <motion.h3
                  className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
                  initial={{ backgroundPosition: '0% 50%' }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  {cert.name}
                </motion.h3>
                <p className="text-gray-300 mb-1">{cert.issuer}</p>
                <span className="text-sm text-gray-400">{cert.date}</span>
              </motion.button>
            </Tilt>
          ))}
        </div>
        {/* Modal for image certificates */}
        {selected !== null && certifications[selected].type === "image" && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg p-6 relative max-w-2xl w-full">
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={certifications[selected].image}
                alt={certifications[selected].name}
                className="w-full h-auto rounded-lg border border-gray-700 bg-white"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{certifications[selected].name}</h3>
                <p>{certifications[selected].issuer}</p>
                <span className="text-sm text-gray-400">{certifications[selected].date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications; 