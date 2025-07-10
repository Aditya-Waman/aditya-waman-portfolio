import Navigation from "../components/Navigation";
import BackgroundParticles from "../components/BackgroundParticles";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundParticles />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />

        {/* Resume Section Placeholder */}
        <section id="resume" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Download my complete professional resume with detailed work
              experience, education, and achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Aditya%20WamanResume%201.pdf%20(2).pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download PDF Resume
              </a>
              <a
                href="/Aditya%20WamanResume%201.pdf%20(2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                View Online Resume
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              &copy; {new Date().getFullYear()} Aditya Waman. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
