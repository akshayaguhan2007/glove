import { motion } from "framer-motion";
import { Smartphone, Scan, MessageSquare, Volume2, Languages, History, Settings, Target } from "lucide-react";

const techStack = [
  { label: "Flutter 3.41.1", purpose: "Cross-platform app development" },
  { label: "Provider", purpose: "Reactive state management" },
  { label: "flutter_bluetooth_serial", purpose: "HC-05 connectivity" },
  { label: "TensorFlow Lite", purpose: "Gesture classification" },
  { label: "flutter_tts", purpose: "Multi-language speech output" },
  { label: "Shared Preferences", purpose: "Local settings & history" },
];

const features = [
  { icon: Scan, title: "Real-time Gesture Display", desc: "Shows detected gesture with confidence level", gradient: "from-amber-500/20 to-yellow-500/20" },
  { icon: MessageSquare, title: "Finger Status Indicators", desc: "Visual representation of each finger state (0/1)", gradient: "from-blue-500/20 to-cyan-500/20" },
  { icon: Smartphone, title: "Bluetooth Scanning", desc: "Automatically detects nearby HC-05 devices", gradient: "from-indigo-500/20 to-blue-500/20" },
  { icon: Languages, title: "15+ Languages", desc: "Full multi-language support for text and speech", gradient: "from-emerald-500/20 to-teal-500/20" },
  { icon: History, title: "Translation History", desc: "Stores recent gestures with timestamps", gradient: "from-orange-500/20 to-red-500/20" },
  { icon: Target, title: "Calibration Mode", desc: "Adjusts sensor thresholds per user", gradient: "from-rose-500/20 to-pink-500/20" },
  { icon: Settings, title: "Settings Panel", desc: "Configure TTS, language, and theme", gradient: "from-violet-500/20 to-purple-500/20" },
  { icon: Volume2, title: "Text-to-Speech", desc: "Speaks translated gestures aloud", gradient: "from-sky-500/20 to-blue-500/20" },
];

const pipeline = [
  "Sensor Data Collection (100ms intervals)",
  "Data Formatting → [f1,f2,f3,f4,f5,ax,ay,az]",
  "Bluetooth Transmission via HC-05",
  "Flutter App Reception & Parsing",
  "Gesture Matching (binary pattern lookup)",
  "Translation to selected language",
  "Display text + Speak via TTS",
];

const languages = [
  { lang: "English", code: "en-US", flag: "🇺🇸" },
  { lang: "Spanish", code: "es-ES", flag: "🇪🇸" },
  { lang: "French", code: "fr-FR", flag: "🇫🇷" },
  { lang: "German", code: "de-DE", flag: "🇩🇪" },
  { lang: "Italian", code: "it-IT", flag: "🇮🇹" },
  { lang: "Portuguese", code: "pt-PT", flag: "🇵🇹" },
  { lang: "Russian", code: "ru-RU", flag: "🇷🇺" },
  { lang: "Japanese", code: "ja-JP", flag: "🇯🇵" },
  { lang: "Korean", code: "ko-KR", flag: "🇰🇷" },
  { lang: "Chinese", code: "zh-CN", flag: "🇨🇳" },
  { lang: "Hindi", code: "hi-IN", flag: "🇮🇳" },
  { lang: "Arabic", code: "ar-SA", flag: "🇸🇦" },
  { lang: "Dutch", code: "nl-NL", flag: "🇳🇱" },
  { lang: "Swedish", code: "sv-SE", flag: "🇸🇪" },
  { lang: "Turkish", code: "tr-TR", flag: "🇹🇷" },
];

const AppArchitectureSection = () => {
  return (
    <section id="app" className="py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary block mb-4">
            Software
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Mobile App <span className="text-gradient">Architecture</span>
          </h2>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
              >
                <span className="text-primary font-display font-semibold text-sm">{tech.label}</span>
                <p className="text-xs text-muted-foreground mt-1 font-body">{tech.purpose}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`relative z-10 w-10 h-10 rounded-lg bg-gradient-to-br ${feat.gradient} flex items-center justify-center mb-3`}
                >
                  <feat.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </motion.div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-1 relative z-10">{feat.title}</h4>
                <p className="text-xs text-muted-foreground font-body relative z-10">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Data Processing Pipeline</h3>
          <div className="relative">
            {pipeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 mb-4"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
                >
                  <span className="text-primary font-display font-bold text-sm">{i + 1}</span>
                </motion.div>
                <div className="flex-1 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                  <span className="text-sm text-foreground font-body">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Supported Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.code}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/40 transition-all cursor-default"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-xs text-foreground font-body">{lang.lang}</span>
                <span className="text-[10px] text-muted-foreground font-mono">{lang.code}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppArchitectureSection;
