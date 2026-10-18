
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const experiences = [
  {
    role: "Software Developer",
    company: "CRN Technosoft Pvt. Ltd.",
    period: "Sep 2026 – Present",
    location: "Pune, Maharashtra",
    type: "Full-time · On-site",
    current: true,
    points: [
      "Developed and maintained Azure solutions using Logic Apps, Function Apps, and Service Bus for message-based processing and workflow integration.",
      "Diagnosed and resolved dead-letter issues in Service Bus queues connected to Function Apps by tracing failures through Application Insights and writing Kusto (KQL) log queries.",
      "Monitored application health and exceptions with Application Insights; managed secrets and connection strings in Azure Key Vault.",
      "Worked in Azure DevOps: source code in Repos, CI/CD pipelines, and tracking of tasks and bugs through to resolution.",
    ],
    tech: [
      ".NET",
      "Azure Logic Apps",
      "Function Apps",
      "Service Bus",
      "Application Insights",
      "Key Vault",
      "Azure DevOps",
      "CI/CD",
    ],
  },
  {
    role: "Trainee Associate Software Engineer",
    company: "Octaware Technologies Pvt. Ltd.",
    period: "Jan 2026 – Jun 2026",
    location: "Pune, Maharashtra",
    type: "6 Months · Microsoft Partner",
    points: [
      "Developed C# plugins using .NET Core on Dynamics 365 CE for custom business logic (Pre-Validation, Pre-Operation, Post-Operation stages).",
      "Wrote JavaScript web resources on CRM forms (OnLoad, OnChange, OnSave) for field validation, auto-populate, and show/hide controls.",
      "Built Canvas Apps and Model-Driven Apps in Power Apps on Dataverse; created Power Automate cloud flows for workflow automation and approvals.",
      "Managed D365 solutions (managed/unmanaged) and security roles; used Plugin Registration Tool and XrmToolBox for deployment and testing.",
    ],
    tech: [
      "Dynamics 365 CE",
      "C# / .NET Core",
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "JavaScript",
    ],
  },
  {
    role: "Full-Stack Intern (.NET)",
    company: "Sunbeam Infotech Pvt. Ltd.",
    period: "Aug 2025 – Sep 2025",
    location: "Pune, Maharashtra",
    type: "2 Months · Grade A",
    points: [
      "Built a Feedback Management System using ASP.NET Core REST API, React.js frontend, Entity Framework Core, and MS SQL Server.",
      "Implemented role-based authentication (Admin, Staff, Student) with secure login and password management; designed the database schema for courses, staff, students, and feedback.",
      "Built modules for feedback form creation, submission tracking, form expiry control, and admin report generation across all roles.",
    ],
    tech: [
      "ASP.NET Core",
      "React.js",
      "EF Core",
      "MS SQL Server",
      "REST API",
    ],
  },
];

function Experience() {
  const { isDark } = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="experience"
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          Work <span className="text-blue-500">Experience</span>
        </motion.h2>

        <motion.p
          className={`text-center mb-16 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          Where I've worked and what I've built along the way
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-3 md:left-4 top-2 bottom-2 w-0.5 ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-10 md:pl-14"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* Timeline dot */}
                <span
                  className={`absolute left-0 md:left-1 top-7 w-6 h-6 rounded-full border-4 ${
                    isDark
                      ? "border-gray-900"
                      : "border-white"
                  } ${
                    exp.current
                      ? "bg-blue-500"
                      : "bg-gray-400"
                  }`}
                  aria-hidden="true"
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-60" />
                  )}
                </span>

                <motion.div
                  className={`p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 ${
                    isDark
                      ? "bg-gray-800 hover:shadow-2xl"
                      : "bg-gray-50 hover:shadow-xl"
                  }`}
                  whileHover={{ y: -6 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                        exp.current
                          ? "bg-blue-500 text-white"
                          : isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-blue-500">
                    {exp.company}
                  </p>

                  <p
                    className={`text-sm mb-4 ${
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {exp.location} · {exp.type}
                  </p>

                  <ul
                    className={`list-disc pl-5 space-y-2 text-sm md:text-base ${
                      isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tech.map((technology, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs md:text-sm rounded-full ${
                          isDark
                            ? "bg-blue-500 bg-opacity-20 text-blue-400"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
