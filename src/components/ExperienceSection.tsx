import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TamTech Solution",
    location: "Rabat, Morocco",
    roles: [
      {
        title: "Frontend Developer – Next.js",
        period: "Apr 2025 – Present",
        bullets: [
          "Lead frontend development of production-grade EdTech platforms using Next.js, Tailwind CSS, and ShadCN UI.",
          "Integrated REST and GraphQL APIs, reducing data-fetching latency and improving page load times.",
          "Enforced security best practices and code review standards across the engineering team.",
        ],
      },
      {
        title: "Django Developer",
        period: "Dec 2024 – Apr 2025",
        bullets: [
          "Architected full platform migration from Laravel to Django, enabling AI-ready backend infrastructure.",
          "Developed backend features for education management using Django REST Framework.",
        ],
      },
      {
        title: "Laravel Developer",
        period: "Mar 2024 – Nov 2024",
        bullets: [
          "Maintained and enhanced Laravel-based LMS platforms serving active student and instructor user bases.",
        ],
      },
      {
        title: "Software Engineering Intern",
        period: "Nov 2023 – Feb 2024",
        bullets: [
          "Implemented BigBlueButton API integration to enable live virtual classroom functionality.",
        ],
      },
    ],
  },
  {
    company: "3wdev l'agence",
    location: "Rabat, Morocco",
    roles: [
      {
        title: "Full-Stack Developer",
        period: "Aug 2023 – Nov 2023",
        bullets: [
          "Delivered full-stack web solutions for client projects using modern web technologies.",
        ],
      },
    ],
  },
  {
    company: "DIGENCY – Agence Digitale",
    location: "Rabat, Morocco",
    roles: [
      {
        title: "Full-Stack Developer",
        period: "Apr 2023 – May 2023",
        bullets: [
          "Built and deployed digital web products for agency clients, contributing to end-to-end development.",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-foreground mb-12"
        >
          Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary hidden md:block" />

                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                  <div className="space-y-6">
                    {exp.roles.map((role) => (
                      <div key={role.title + role.period}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-base font-semibold text-primary">{role.title}</h4>
                          <span className="text-xs font-mono text-muted-foreground">{role.period}</span>
                        </div>
                        <ul className="space-y-1">
                          {role.bullets.map((b, j) => (
                            <li key={j} className="text-sm text-secondary-foreground flex gap-2">
                              <span className="text-primary mt-1.5 shrink-0">▹</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
