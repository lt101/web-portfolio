import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "./about.css";
import Info from "./Info";
import CV from "../../assets/Liem_Truong_CV.pdf";

const About = () => {
  const ref = useRef(null);
  const [roughAnimate, setRoughAnimate] = useState(false);
  const isInView = useInView(ref, { once: true });

  const textControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
      setRoughAnimate(true);
    }
  }, [isInView]);

  return (
    <section className="about section container" id="about">
      <RoughNotationGroup show={roughAnimate}>
        <div className="about_header">
          A little bit{" "}
          <RoughNotation
            type="underline"
            color="#000080"
            strokeWidth={3}
            iterations={3}
            animationDelay={300}
          >
            <span className="section_title">About Me</span>
          </RoughNotation>
        </div>

        <div className="about_container container grid">
          <Info />
          <motion.div
            ref={ref}
            className="about_description"
            variants={{
              hidden: { x: "50%", opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={textControls}
            transition={{ delay: 0.2 }}
          >
            <div>
              Hi, my name is Liêm. I'm a software engineer and{" "}
              <p className="highlight">Polytechnique Montreal</p> graduate.
            </div>
            <div>
              Whether I'm starting from a blank canvas or a matured product, I
              enjoy bringing ideas to life, translating{" "}
              <RoughNotation
                type="highlight"
                multiline={true}
                color="#FFA07A"
                animationDelay={700}
              >
                <span className="highlight">
                  thoughts to code and code to experiences
                </span>
              </RoughNotation>
              . I am always up for a challenge, and constantly seek to push my
              limits.
            </div>

            <div className="download_container" id="skills">
              <a
                download=""
                href={CV}
                className="download_button button button-flex"
              >
                Download CV{" "}
                <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                    fill="#000"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </RoughNotationGroup>
    </section>
  );
};

export default About;
