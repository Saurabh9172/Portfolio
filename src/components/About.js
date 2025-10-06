import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

function About() {
  const { isDark } = useTheme();

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-500">
                Education
              </h3>
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
                variants={fadeInUp}
                viewport={{ once: false, amount: 0.4 }}
              >
                <h4
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Post Graduation Diploma In Advance Computing(PG-DAC) CDAC
                </h4>
                <p
                  className={`mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Sunbeam Institute of Technology, Pune
                </p>

                <p
                  className={`text-sm mt-2 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Relevant Coursework: React, Spring Boot, Dot.NET, Data
                  Structures, Algorithms, DBMS, OS, Docker.
                </p>
              </motion.div>
            </div>

             {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">
                Achievements
              </h3>
              <motion.div
                className={`p-6 rounded-lg space-y-3 text-sm shadow-lg hover:shadow-xl transition ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {[
                  "🏆 Secured All India Rank 16 in CDAC C-CAT Entrance Exam (2024)",
                  "🎓 Achieved 1st Rank among Boys in M.Sc. Mathematics at Shivaji University",
                  "💻 Solved 100+ coding problems on LeetCode",
                ].map((ach, i) => (
                  <motion.p
                    key={i}
                    className={isDark ? "text-gray-300" : "text-gray-700"}
                    variants={fadeInUp}
                    custom={i}
                  >
                    {ach}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Personal Info */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-500">
                Personal Information
              </h3>
              <motion.div
                className={`p-6 rounded-lg space-y-4 shadow-lg hover:shadow-xl transition ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
                variants={fadeInUp}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div>
                  <p
                    className={
                      isDark ? "text-gray-400 mb-1" : "text-gray-600 mb-1"
                    }
                  >
                    Location
                  </p>
                  <p
                    className={`text-xl ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Kolhapur, Maharashtra
                  </p>
                </div>
                <div>
                  <p
                    className={
                      isDark ? "text-gray-400 mb-1" : "text-gray-600 mb-1"
                    }
                  >
                    Email
                  </p>
                  <p
                    className={`text-xl ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    saurabhmisal9172@gmail.com
                  </p>
                </div>
                <div>
                  <p
                    className={
                      isDark ? "text-gray-400 mb-1" : "text-gray-600 mb-1"
                    }
                  >
                    Phone
                  </p>
                  <p
                    className={`text-xl ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    +91 9172169879
                  </p>
                </div>
                <div>
                  <p
                    className={
                      isDark ? "text-gray-400 mb-1" : "text-gray-600 mb-1"
                    }
                  >
                    Languages
                  </p>
                  <p
                    className={`text-xl ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    English (Proficient), Hindi (Proficient), Marathi (Native)
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">
                Key Strengths
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {[
                  "Problem Solving",
                  "Full-Stack Development",
                  "Project Management",
                  "Team Collaboration",
                  "Analytical Thinking",
                  "Continuous Learning",
                  "Adaptability",
                ].map((skill, i) => (
                  <motion.span
                    key={i}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      isDark
                        ? "bg-blue-500 bg-opacity-20 text-blue-400 hover:bg-opacity-30"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    }`}
                    variants={fadeInUp}
                    custom={i}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
