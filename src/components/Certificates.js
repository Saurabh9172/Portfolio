import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

function Certificates() {
  const { isDark } = useTheme();
  
  const certificates = [
    {
      icon: "📜",
      title: "PreCAT - Preparatory Course for CDAC Entrance Exam",
      description: "Completed the PreCAT course covering Computer Fundamentals, Networking, Operating System Concepts, C Programming, Data Structures, OOP using C++, General Aptitude, and Basics of Big Data & AI.",
      issuer: "CDAC",
      year: "2024",
      color: "from-yellow-400 to-orange-500",
      link: "https://drive.google.com/file/d/1-eM2lPRErwnq-fmdtVaTiY-E2Eu_Dkdf/view?usp=sharing" // replace with actual certificate link if any
    },
    {
       icon: "💼",
       title: "Internship in MS.NET Full Stack Development",
       description: "Successfully completed a 2-month internship in MS.NET Full Stack Development at Sunbeam Infotech Pvt. Ltd., Pune, gaining hands-on experience in software design, web development, and real-world project implementation. Awarded Grade 'A' for performance.",
       issuer: "Sunbeam Infotech Pvt. Ltd., Pune",
       year: "2025",
       color: "from-blue-500 to-cyan-400",
       link: "https://drive.google.com/file/d/19LnR85wxu4mulUaVwnDJUA0FQ8ZPSdaP/view?usp=sharing" // replace with actual certificate link
    }
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
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    <section 
      id="certificates" 
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
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
          My <span className="text-blue-500">Certificates</span>
        </motion.h2>

        <motion.p
          className={`text-center mb-16 max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          Certificates and courses that validate my knowledge and skills in Software Development and Advanced Computing
        </motion.p>
        
        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-900 hover:shadow-2xl' 
                  : 'bg-gray-50 hover:shadow-xl'
              }`}
              custom={index * 0.2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              whileHover={cardHover}
              viewport={{ once: false, amount: 0.25 }}
            >
              {/* Certificate Header with Icon */}
              <motion.div
                className={`h-32 bg-gradient-to-br ${certificate.color} flex items-center justify-center`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-6xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {certificate.icon}
                </motion.div>
              </motion.div>

              {/* Certificate Content */}
              <div className="p-6">
                <motion.h3
                  className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {certificate.title}
                </motion.h3>

                <motion.p
                  className={`text-sm leading-relaxed mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  Issued by: {certificate.issuer} | Year: {certificate.year}
                </motion.p>

                <motion.p
                  className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {certificate.description}
                </motion.p>

                {/* View Certificate Button */}
                {certificate.link && (
                  <div className="mt-2">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-colors duration-300"
                    >
                      View Certificate
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

export default Certificates;
