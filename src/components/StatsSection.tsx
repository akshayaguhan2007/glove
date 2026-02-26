import { motion } from "framer-motion";

const stats = [
  { value: "95%+", label: "Gesture Accuracy" },
  { value: "<100ms", label: "Response Time" },
  { value: "30+", label: "Unique Gestures" },
  { value: "15+", label: "Languages Supported" },
];

const StatsSection = () => {
  return (
    <section id="performance" className="py-24 border-t border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="font-display text-4xl md:text-5xl font-bold text-gradient block mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-body tracking-widest uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
