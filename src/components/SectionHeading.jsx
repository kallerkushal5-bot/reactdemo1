import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div className="section-heading" initial="hidden" animate="visible" variants={headingVariants}>
      {eyebrow && <div className="section-sub" style={{ marginBottom: 12 }}>{eyebrow}</div>}
      <h2 className="section-title" style={{ marginBottom: description ? 18 : 0 }}>{title}</h2>
      {description && <p style={{ color: "#7f5a74", maxWidth: 640, lineHeight: 1.75, margin: "0 auto" }}>{description}</p>}
    </motion.div>
  );
}

export default SectionHeading;
