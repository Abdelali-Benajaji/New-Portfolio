import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Mohammed V University in Rabat",
    degree: "Bachelor of Technology – Big Data & Artificial Intelligence",
    period: "Dec 2025 – Present",
  },
  {
    school: "ISTA Hay Nahda, Rabat",
    degree: "Specialized Technician Diploma – Full-Stack Web Development",
    period: "Oct 2021 – Jul 2023",
  },
];

const EducationSection = () => {
  return (
    <section className="relative network-bg">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-foreground mb-12"
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-300"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
              <p className="text-sm text-primary mt-1">{edu.degree}</p>
              <p className="text-xs font-mono text-muted-foreground mt-2">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
