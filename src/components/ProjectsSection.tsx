import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Urban Vision 2050",
    category: "Smart City",
    description:
      "A revolutionary smart city infrastructure project that reimagines urban living through connected technologies and sustainable design.",
    image: project1,
  },
  {
    title: "DataFlow Engine",
    category: "AI Platform",
    description:
      "Real-time data processing platform powered by advanced AI algorithms, transforming raw data into actionable intelligence at scale.",
    image: project2,
  },
  {
    title: "Nexus Mobile Suite",
    category: "Mobile App",
    description:
      "Award-winning mobile application suite with premium UI/UX that sets new standards for user engagement and cross-platform performance.",
    image: project3,
  },
  {
    title: "EcoHab Complex",
    category: "Architecture",
    description:
      "Sustainable architectural marvel featuring vertical gardens, smart energy systems, and biophilic design principles for modern living.",
    image: project4,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary block mb-4">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Featured
            <br />
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg font-body">
            Each project is a testament to our commitment to innovation,
            quality, and pushing the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
