import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center network-bg overflow-hidden">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
              <img
                src={profileImg}
                alt="Abdelali Benajaji"
                className="relative w-80 md:w-[420px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Abdelali Benajaji
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Full-Stack<br />Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Architecting Scalable AI-Ready Systems.<br />
              2.5+ Years Experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[var(--glow-primary)] transition-shadow"
              >
                Explore My Work
              </a>
              <a
                href="/Abdelali_Benajaji_CV.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-foreground/30 text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Download My CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
