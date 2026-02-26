import { motion } from "framer-motion";
import { Download, Smartphone, Sparkles } from "lucide-react";
import qrCode from "@/assets/qr-code.png";

const AppDownloadSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary tracking-wider uppercase">Download Now</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Get The <span className="text-gradient">App</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto font-body">
            Scan the QR code with your phone to download the SmartGlove companion app instantly.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* QR Code with animated frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative group"
          >
            {/* Animated orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-2xl border border-dashed border-primary/30 pointer-events-none"
            />

            {/* Outer glow ring */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px hsl(38 92% 55% / 0.15), 0 0 60px hsl(38 92% 55% / 0.05)",
                  "0 0 50px hsl(38 92% 55% / 0.3), 0 0 100px hsl(38 92% 55% / 0.1)",
                  "0 0 30px hsl(38 92% 55% / 0.15), 0 0 60px hsl(38 92% 55% / 0.05)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl p-1 bg-gradient-to-br from-primary/40 via-primary/10 to-primary/40"
            >
              {/* Inner container */}
              <div className="relative rounded-xl bg-card p-4 border border-border overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl" />

                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 pointer-events-none"
                />

                <motion.img
                  src={qrCode}
                  alt="Download SmartGlove App - Scan QR Code"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-lg relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
                className="absolute w-2 h-2 rounded-full bg-primary/60"
                style={{
                  top: `${15 + i * 25}%`,
                  left: i % 2 === 0 ? "-12px" : "calc(100% + 4px)",
                }}
              />
            ))}
          </motion.div>

          {/* Info badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground font-body">Android & iOS</span>
            </div>
            <a
              href="https://github.com/akshayaguhan2007/koniyaku-glove/releases/tag/v1.01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:shadow-md transition-shadow"
            >
              <Download className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground font-body">Free Download</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-xs text-muted-foreground font-body text-center max-w-sm"
          >
            Point your phone's camera at the QR code to begin downloading the SmartGlove companion app.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
