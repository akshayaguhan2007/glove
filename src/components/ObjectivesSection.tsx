import { motion } from "framer-motion";
import { Zap, Bluetooth, Globe, Smartphone, Watch } from "lucide-react";

const objectives = [
  { icon: Zap, title: "Real-time Translation", desc: "Convert sign language gestures to text/speech instantly", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Bluetooth, title: "Wireless Connectivity", desc: "Seamless Bluetooth communication between glove and mobile device", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Globe, title: "Multi-lingual Support", desc: "Translate gestures into 15+ spoken languages", color: "from-emerald-500/20 to-teal-500/20" },
  { icon: Smartphone, title: "User-friendly Interface", desc: "Intuitive mobile app with clear visual feedback", color: "from-violet-500/20 to-purple-500/20" },
  { icon: Watch, title: "Portable Design", desc: "Lightweight, wearable device for daily use", color: "from-rose-500/20 to-pink-500/20" },
];

const IconWrapper = ({ children, gradient }: { children: React.ReactNode; gradient: string }) => (
  <motion.div
    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
    transition={{ duration: 0.5 }}
    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg relative overflow-hidden`}
  >
    <div className="absolute inset-0 bg-primary/5" />
    {children}
  </motion.div>
);

const ObjectivesSection = () => {
  return (
    <section id="overview" className="py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary block mb-4">
            Executive Summary
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Project <span className="text-gradient">Objectives</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body">
            An innovative assistive technology device that bridges communication gaps through a custom-built mobile application, integrating hardware sensors, embedded systems, and wireless communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 card-glow relative overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${obj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <IconWrapper gradient={obj.color}>
                  <obj.icon className="w-6 h-6 text-primary relative z-10" strokeWidth={1.5} />
                </IconWrapper>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 mt-5">{obj.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{obj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
