import React, { useRef, useState, useEffect } from "react";
import "./portfolio.css";
import Works from "./Works";
import { useInView } from "framer-motion";
import { RoughNotation } from "react-rough-notation";

const Portfolio = () => {
  const ref = useRef(null);
  const [roughAnimate, setRoughAnimate] = useState(false);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setRoughAnimate(true);
    }
  }, [isInView]);
  return (
    <section className="portfolio section container" id="portfolio" ref={ref}>
      <div className="work_header">
        Feel free to explore some of{" "}
        <RoughNotation
          type="underline"
          color="#A52A2A"
          multiline={true}
          padding={[25, 15, 10, 0]}
          strokeWidth={3}
          animationDelay={1100}
          show={roughAnimate}
        >
          <span className="section_title">My Work</span>
        </RoughNotation>
      </div>

      <Works />
    </section>
  );
};

export default Portfolio;
