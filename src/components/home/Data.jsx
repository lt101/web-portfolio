import React from "react";
import { motion } from "framer-motion";

const Data = () => {
  return (
    <div className="home_data">
      <motion.h1
        className="home_title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Liêm Truong
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="home_subtitle">Software Engineer</div>
        <h4 className="home_description">Fullstack developer,</h4>
        <h4 className="home_description">Idea-to-code translator,</h4>
        <h4 className="home_description">Problem solver.</h4>
      </motion.div>
      <motion.h4
        className="home_welcome"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        Nice to meet you!
      </motion.h4>
    </div>
  );
};

export default Data;
