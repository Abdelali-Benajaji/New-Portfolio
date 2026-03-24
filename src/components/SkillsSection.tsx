import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Terminal, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "ShadCN UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Django", "Django REST", "Laravel", "Node.js"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Redis"],
  },
  {
    icon: Brain,
    title: "Big Data & AI",
    skills: ["Data-Driven Products", "AI-Powered Systems", "Scalable Architecture"],
  },
  {
    icon: Terminal,
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "REST APIs"],
  },
  {
    icon: Globe,
    title: "Languages",
    skills: ["Arabic (Native)", "English (Professional)", "French (Professional)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative network-bg">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-foreground mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 group hover:glow-border transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
