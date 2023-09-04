import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const Data = () => {
  const [textScope, animateText] = useAnimate();

  async function textAnimation() {
    await animateText(
      textScope.current,
      { opacity: 1 },
      { duration: 1.2, delay: 0.2 }
    );
    animateText(
      textScope.current,
      { x: 1, y: 1, scale: 1 },
      { type: "tween", duration: 0.6 }
    );
  }

  useEffect(() => {
    textAnimation();
  }, []);

  return (
    <div className="home_data">
      <motion.h1
        className="home_title"
        ref={textScope}
        initial={{ x: "30%", y: "50%", scale: 1.3, opacity: 0 }}
      >
        Liêm Truong
      </motion.h1>
      <motion.h3
        className="home_subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Software Engineer
      </motion.h3>
      <motion.h4
        className="home_description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        Fullstack developer,
      </motion.h4>
      <motion.h4
        className="home_description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
      >
        Idea-to-code translator,
      </motion.h4>
      <motion.h4
        className="home_description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.5 }}
      >
        Problem solver.
      </motion.h4>
      <br></br>

      <motion.a
        href="#contact"
        className="button button--flex"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        Let's talk
        <svg
          class="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
            fill="var(--container-color)"
          ></path>
          <path
            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </motion.a>
    </div>
  );
};

export default Data;
