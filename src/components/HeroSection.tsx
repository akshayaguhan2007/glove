import { motion } from "framer-motion";
import { Play, Hand } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [showFullVideo, setShowFullVideo] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {!showFullVideo && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/img report/WhatsApp Video 2026-02-26 at 6.49.11 PM.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-background/50" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <Hand className="w-12 h-12 text-primary mx-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base font-body tracking-[0.3em] uppercase text-primary mb-6"
            >
              Assistive Technology Innovation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
            >
              Smart Glove
              <br />
              <span className="text-gradient">Sign Language Translator</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 font-body"
            >
              Bridging communication gaps for individuals with hearing and speech
              impairments through real-time gesture-to-speech translation.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFullVideo(true)}
              className="group relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse-glow cursor-pointer"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
            </motion.button>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4 text-sm text-muted-foreground tracking-widest uppercase font-body"
            >
              Watch Project Demo
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </>
      )}

      {showFullVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-50 bg-background flex items-center justify-center"
        >
          <button
            onClick={() => setShowFullVideo(false)}
            className="absolute top-6 right-6 z-50 text-foreground text-lg font-display tracking-widest hover:text-primary transition-colors"
          >
            ✕ CLOSE
          </button>
          <video autoPlay controls className="w-full h-full object-contain">
            <source
              src="/img report/WhatsApp Video 2026-02-26 at 6.49.11 PM.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
