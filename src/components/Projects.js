import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

function Projects() {
  const { isDark } = useTheme();

  const projects = [
    {
      title: "Airline Reservation System",
      description:
        "A full-stack web application developed using Java, Spring Boot, and React.js to manage flight bookings efficiently with advanced search, filtering, and role-based access control.",
      tech: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "Hibernate",
        "Bootstrap",
        "JSON Web Token (JWT)",
      ],
      features: [
        "User Login with Role-Based Access Control",
        "Advanced Flight Search & Filtering",
        "Booking Management with CRUD Operations",
        "RESTful APIs with Spring Boot",
        "Interactive and Responsive UI using React.js",
        "Secure Authentication using JWT",
        "Database Interaction using Hibernate ORM",
      ],
      color: "from-green-500 to-green-700",
      emoji: "✈️",
      link: "https://github.com/Saurabh9172/Airline_Reservation_System", // replace with actual link
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <motion.p
          className={`text-center mb-16 max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          Here are some projects that demonstrate my skills and experience in
          full-stack development, AI integration, and problem-solving
        </motion.p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-900 hover:shadow-2xl"
                  : "bg-gray-50 hover:shadow-xl"
              }`}
              custom={index * 0.2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              whileHover={cardHover}
              viewport={{ once: false, amount: 0.25 }}
            >
              {/* Project Header with Emoji */}
              <motion.div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-6xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.emoji}
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-500 mb-2">
                    Key Features:
                  </h4>
                  <motion.ul
                    className={`text-sm space-y-1 transition-colors duration-300 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {project.features.map((feature, i) => (
                      <motion.li key={i} variants={fadeInUp} custom={i}>
                        • {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        isDark
                          ? "bg-blue-500 bg-opacity-20 text-blue-400 hover:bg-opacity-40"
                          : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                      }`}
                      variants={fadeInUp}
                      custom={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* View Project Button */}
                {project.link && (
                  <div className="mt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
