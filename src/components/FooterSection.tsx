import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-display text-3xl font-bold text-gradient mb-2">
              SmartGlove
            </h3>
            <p className="text-muted-foreground font-body text-sm">
              Bridging communication gaps through innovative assistive technology.
            </p>
          </div>

          <div className="flex gap-8">
            {["GitHub", "Documentation", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body tracking-widest uppercase"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Smart Glove Sign Language Translator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
