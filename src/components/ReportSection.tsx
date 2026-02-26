import { motion } from "framer-motion";

const reportImages = [
  "/img report/Screenshot 2026-02-26 183323.png.jpeg",
  "/img report/Screenshot 2026-02-26 183336.png",
  "/img report/Screenshot 2026-02-26 183347.png",
  "/img report/Screenshot 2026-02-26 183358.png",
  "/img report/Screenshot 2026-02-26 183407.png",
];

const ReportSection = () => {
  return (
    <section id="report" className="py-32 px-6 relative overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          style={{ 
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden"
          }}
        >
          <source src="/img report/WhatsApp Video 2026-02-26 at 6.49.11 PM.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary block mb-4">
            Report
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Project <span className="text-gradient">Video & Report</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto font-body">
            Watch the project demo and explore detailed documentation
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-lg overflow-hidden border border-border bg-card shadow-2xl"
        >
          <video
            controls
            controlsList="nodownload"
            preload="metadata"
            className="w-full h-auto max-h-[600px] object-contain bg-background"
            style={{ 
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden"
            }}
              poster="/img report/Screenshot 2026-02-26 183323.png.jpeg"
          >
            <source src="/img report/WhatsApp Video 2026-02-26 at 6.49.11 PM.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reportImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-card border border-border"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={image}
                  alt={`Report image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
              </div>

              {/* Corner accents on hover */}
              <motion.div
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
