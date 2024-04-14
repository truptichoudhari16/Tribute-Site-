import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from "../assets/Images/I1.webp";
import img2 from "../assets/Images/I2.webp";
import img3 from "../assets/Images/I3.webp";
import img4 from "../assets/Images/I4.webp";
import img5 from "../assets/Images/I5.webp";
import img6 from "../assets/Images/I6.webp";
import img7 from "../assets/Images/I7.webp";
import img8 from "../assets/Images/I8.webp";
import img9 from "../assets/Images/I9.webp";
import img10 from "../assets/Images/I10.webp";
import img11 from "../assets/Images/I11.webp";
import img12 from "../assets/Images/I12.webp";
import img13 from "../assets/Images/I13.jpg";
import img14 from "../assets/Images/I14.webp";
import img15 from "../assets/Images/I15.webp";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 0.5;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    top: 0;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

// Left part

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    margin-top: 30%;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: 60%;
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
      margin-top: 60%;
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

// Right part

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

// Images section

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 110%;
    height: 40vh;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    font-weight: 500;
    text-align: center;
    width: fit-content;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 12rem;

    img {
      width: 100%;
      height: 30vh;
      cursor: pointer;
    }
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(70%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Career = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //Horinzontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,

          // markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      //Lets clear instances

      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="career">
      <Title data-scroll data-scroll-speed="-0.7">
        Career
      </Title>

      <Left>
        <p>
          Albert Einstein, born in Ulm, Germany, in 1879, reshaped physics with
          his groundbreaking theory of relativity, challenging traditional views
          of space and time. His pioneering work earned him global recognition,
          culminating in the 1921 Nobel Prize in Physics for his explanation of
          the photoelectric effect.
          <br />
          <br />
          Einstein championed humanitarian causes, advocating for peace, civil
          rights, and international cooperation. His legacy reflects the
          enduring power of intellect and compassion, inspiring generations to
          strive for a harmonious world.
        </p>
      </Left>

      <Right ref={horizontalRef}>
        <Product img={img1} title="Einstein in 1882, age 3" />
        <Product img={img2} title="Einstein in 1893, age 14" />
        <Product img={img3} title="Albert Einstein with friends , age 24" />
        <Product img={img4} title="Einstein in 1905, age 26" />
        <Product
          img={img5}
          title="Albert Einstein and Mileva Marić Einstein, 1912 "
        />
        <Product img={img7} title="Einstein in 1921, age 42" />
        <Product img={img6} title="Albert Einstein and Elsa Einstein, 1930" />
        <Product
          img={img12}
          title="Einstein and Charlie Chaplin at the Opera, 1931, age 52 "
        />

        <Product
          img={img13}
          title="Portrait of Einstein taken in 1935 at Princeton"
        />
        <Product img={img14} title="Einstein in 1939, age 60" />
        <Product
          img={img8}
          title="Einstein and David Rothman in 1939, age 60 "
        />
        <Product img={img9} title="Einstein in 1948, age 69" />
        <Product img={img15} title="Einstein favorite photo in 1951, age 72" />
        <Product img={img10} title="Einstein in 1953, age 74" />

        <Product
          img={img11}
          title="The day Albert Einstein died, April 18, 1955, age 76"
        />
      </Right>
    </Section>
  );
};

export default Career;
