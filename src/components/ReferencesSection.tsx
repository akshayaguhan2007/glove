import { motion } from "framer-motion";

const references = [
  "SanjayRich. (2025). Sign-Language-Translation-Glove. GitHub.",
  "Workana. (2025). Sign Language Translator project description.",
  "He, W., et al. (2025). Deep learning-powered composite foam smart glove. ScienceDirect.",
  "IEEE. (2025). Sign Language to Speech: Role of Conversion Gloves. IEEE Xplore.",
  "pojesh. (2024). Sign-Language-Translator. GitHub.",
  "IEEE. (2025). LSTM Based Sign Language Recognition. IEEE Xplore.",
  "Electronics For You. (2025). Glovatrix: Turning Sign Language Into Speech.",
  "LAU. (2025). E-S.H.A.R.A. Capstone Project.",
  "Awang Abu Bakar, N. S., et al. (2025). LUNA: Bridging communication. IIUM Journal.",
  "Bodda, S. C., et al. (2020). A New Architecture for Hand-Worn Sign Language Translator. arXiv.",
];

const ReferencesSection = () => {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            📚 <span className="text-gradient">References</span>
          </h3>
          <ol className="space-y-3 list-decimal list-inside">
            {references.map((ref, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="text-sm text-muted-foreground font-body leading-relaxed"
              >
                {ref}
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferencesSection;
