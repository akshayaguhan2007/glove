import { motion } from "framer-motion";
import { Wrench, Code, Bluetooth, Smartphone, TestTube } from "lucide-react";

const phases = [
  { icon: Wrench, title: "Hardware Prototyping", items: ["Component selection based on research", "Initial breadboard circuit build", "Individual sensor testing with Arduino"] },
  { icon: Code, title: "Arduino Programming", items: ["Simultaneous sensor reading", "Binary conversion for flex sensors", "MPU6050 integration for orientation"] },
  { icon: Bluetooth, title: "Bluetooth Communication", items: ["HC-05 configured at 9600 baud", "Serial communication established", "Data string formatting for parsing"] },
  { icon: Smartphone, title: "Flutter App Development", items: ["Cross-platform mobile app built", "Bluetooth scanning & connection", "Gesture recognition + TTS + multi-language"] },
  { icon: TestTube, title: "Testing & Calibration", items: ["Real ASL gesture testing", "Sensor threshold calibration", "Recognition accuracy optimization"] },
];

const challenges = [
  { challenge: "Sensor noise/interference", solution: "Moving average filtering + binary thresholding" },
  { challenge: "Bluetooth disconnections", solution: "Auto-reconnect logic in app" },
  { challenge: "Different hand sizes", solution: "Calibration mode for each user" },
  { challenge: "Similar gestures (YES/THANKYOU)", solution: "MPU6050 orientation data distinguishes them" },
  { challenge: "Real-time processing", solution: "Efficient binary matching instead of complex ML" },
];

const future = [
  "Machine Learning Integration (LSTM/CNN)",
  "Cloud Database for gesture patterns",
  "Two-way Communication (speech-to-text)",
  "Emergency GPS Alerts via SMS",
  "Gesture Learning Mode for custom signs",
  "Smartwatch companion app",
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-32 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary block mb-4">
            Journey
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Development <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        {/* Phases */}
        <div className="relative mb-24">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex gap-6 mb-10 md:ml-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                <phase.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 p-6 rounded-lg bg-card border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Phase {i + 1}: {phase.title}</h3>
                <ul className="space-y-1">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            Challenges & <span className="text-gradient">Solutions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-lg bg-card border border-border"
              >
                <p className="text-sm text-destructive font-body mb-2">⚠ {c.challenge}</p>
                <p className="text-sm text-primary font-body">✓ {c.solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            Future <span className="text-gradient">Enhancements</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {future.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-4 rounded-lg bg-card border border-border border-dashed hover:border-primary/40 transition-all"
              >
                <span className="text-sm text-muted-foreground font-body">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
