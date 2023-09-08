import React, { useState, useRef } from "react";
import "./timeline.css";
import { motion, useScroll } from "framer-motion";

const Experience = ({ exp }) => {
  const [openModal1, setOpenModal1] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "2.3 1"],
  });

  return (
    <motion.div
      className="timeline_item"
      ref={ref}
      style={{ opacity: scrollYProgress }}
    >
      <motion.div
        className="timeline_content"
        onClick={() =>
          openModal1 ? setOpenModal1(false) : setOpenModal1(true)
        }
        whileHover={{ scale: 1.1 }}
      >
        <h3>{exp.title}</h3>
        <p>{exp.subtitle}</p>
        {openModal1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline_description">{exp.description}</div>

            {exp.tasks && exp.tasks.map((task) => <li>{task}</li>)}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
