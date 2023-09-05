import React, { useEffect } from "react";
import "./home.css";
import Data from "./Data";
import DownArrow from "../../assets/arrow-down.png";
import { motion, useAnimate } from "framer-motion";

const Home = () => {
  // const [imgScope, animateImg] = useAnimate();

  // async function imageAnimation() {
  //   await animateImg(
  //     imgScope.current,
  //     { opacity: 1 },
  //     { duration: 1.2, delay: 0.2 }
  //   );
  //   animateImg(
  //     imgScope.current,
  //     { x: 1, y: 1, scale: 1 },
  //     { type: "tween", duration: 0.6 }
  //   );
  // }

  // useEffect(() => {
  //   imageAnimation();
  // }, []);

  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content">
          <div />
          <motion.div
            class="steaming-coffee"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 3 }}
          >
            <div class="cup"></div>
            <div class="test">
              <motion.div
                class="steam"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 2.5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div class="one"></div>
                <div class="two"></div>
              </motion.div>
              <motion.div
                class="steam-2"
                variants={{
                  hidden: { opacity: 1 },
                  visible: { opacity: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 1.7,
                  delay: 0,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div class="one"></div>
                <div class="two"></div>
              </motion.div>
              <motion.div
                class="steam-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div class="one"></div>
                <div class="two"></div>
              </motion.div>
            </div>
          </motion.div>
          <Data />
        </div>
      </div>
      <motion.a href="#about" className="down-arrow">
        <motion.img
          src={DownArrow}
          alt="scroll down"
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 0.3, y: 5 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.7,
            delay: 2.9,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.a>
    </section>
  );
};

export default Home;
