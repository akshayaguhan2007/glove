import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, description, image, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-lg bg-card border border-border cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <div className="w-14 h-14 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-2 block">
          {category}
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-body line-clamp-2">
          {description}
        </p>
      </div>

      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ProjectCard;
