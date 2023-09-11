import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import ReactLogo from "../../assets/react_logo_icon_144942.svg";
import AngularLogo from "../../assets/angular_logo_icon_145496.svg";
import JSLogo from "../../assets/javascript_logo_icon_145155.svg";
import TSLogo from "../../assets/typescript_logo_icon_144782.svg";
import JavaLogo from "../../assets/2333414-code-java_85589.svg";
import PythonLogo from "../../assets/Python_icon-icons.com_68975.svg";
import NodeJSLogo from "../../assets/node_icon_196185.svg";
import MongoDBLogo from "../../assets/mongodb_logo_icon_248434.svg";
import { useInView } from "framer-motion";
import { RoughNotation } from "react-rough-notation";

const Skills = () => {
  const ref = useRef(null);
  const [roughAnimate, setRoughAnimate] = useState(false);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setRoughAnimate(true);
    }
  }, [isInView]);
  return (
    <section className="skills section container" id="skills">
      <div className="skills_header">
        Here are some of the{" "}
        <RoughNotation
          type="circle"
          color="#20B2AA"
          strokeWidth={3}
          padding={[40, 0, 10, 0]}
          show={roughAnimate}
          animationDelay={700}
        >
          <span className="section_title">Skills</span>
        </RoughNotation>{" "}
        and technologies that I use.
      </div>

      <div className="skills_container" ref={ref}>
        <div className="skills_group grid">
          <div className="skills_item">
            <img src={ReactLogo} alt="react logo" />
            <p>React</p>
          </div>
          <div className="skills_item">
            <img src={AngularLogo} alt="react logo" />
            <p>Angular</p>
          </div>
          <div className="skills_item">
            <img src={JSLogo} alt="react logo" />
            <p>Javascript</p>
          </div>
          <div className="skills_item">
            <img src={TSLogo} alt="react logo" />
            <p>Typescript</p>
          </div>
        </div>
        <div className="skills_group grid">
          <div className="skills_item">
            <img src={PythonLogo} alt="react logo" />
            <p>Python</p>
          </div>
          <div className="skills_item">
            <img src={JavaLogo} alt="react logo" />
            <p>Java</p>
          </div>
          <div className="skills_item">
            <img src={NodeJSLogo} alt="react logo" />
            <p>Node.js</p>
          </div>
          <div className="skills_item">
            <img src={MongoDBLogo} alt="react logo" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
