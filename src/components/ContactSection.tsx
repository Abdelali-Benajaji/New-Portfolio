import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-foreground mb-12"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 max-w-2xl"
        >
          <p className="text-muted-foreground mb-8">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <a href="mailto:abdelalibenajaji@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              abdelalibenajaji@gmail.com
            </a>
            <a href="tel:+212772347488" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              +212 772 347 488
            </a>
            <div className="flex items-center gap-3 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              Rabat, Morocco
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
