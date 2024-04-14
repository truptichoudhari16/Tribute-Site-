import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

import Award1 from "../assets/Images/A1.webp";
import Award2 from "../assets/Images/A2.jpg";
import Award3 from "../assets/Images/A3.png";
import Award4 from "../assets/Images/A4.jpg";
import Award5 from "../assets/Images/A5.jpg";
import Award6 from "../assets/Images/A6.jpg";
import Award7 from "../assets/Images/A7.jpg";
import Award8 from "../assets/Images/A8.jpg";
import Award9 from "../assets/Images/A9.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 500;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    top: 0;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

// middle box

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }

  @media (max-width: 48em) {
    width: 60vw;
  }

  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

// Right Text means information of Awards

const Text = styled.div`
  width: 30%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 1rem;
  top: 0;
  right: 2rem;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

// Container of Images section

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }

  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

// Item section

const Item = styled.div`
  /* width: 20rem;
  margin-right: 6rem; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const Awards = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          //   markers: true,
        },

        // we have to increase scrolling height of this section same as the scrolling element width

        ease: "none",
      });

      //Vertical Scrolling
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App", //locomotive element
            scrub: true,
          },

          // we have to increase scrolling height of this section same as the scrolling element width
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      //Lets clear instances

      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="awards">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Awards
      </Title>
      {/* Images section  */}
      <Container ref={ScrollingRef}>
        <Product img={Award1} title="Albert Einstein - Nobel Prize Winner" />
        <Product img={Award2} title="Award of Theoretical Physics" />
        <Product img={Award3} title="Albert Einstein World Award of Science" />
        <Product
          img={Award4}
          title="100th anniversary of Albert Einstein's Nobel Prize"
        />

        <Product img={Award6} title="Benjamin Franklin Medal" />
        <Product img={Award7} title="Max-Planck-Medal " />
        <Product img={Award8} title="Medal - Albert Einstein - Israel  " />
        <Product img={Award5} title="Israeli postage stamp, 1956." />
        <Product img={Award9} title="U.S. postage stamp (1966)." />
      </Container>
      {/* text section  */}
      <Text data-scroll data-scroll-speed="-4">
        Albert Einstein's legacy includes prestigious awards like the Nobel
        Prize in Physics in 1921 for his work on the photoelectric effect,
        alongside honors such as the Matteucci Medal, the Copley Medal, and the
        Max Planck Medal, all recognizing his exceptional contributions to
        theoretical physics. Additionally, his recognition as Time magazine's
        Person of the Century in 1999 underscores his enduring influence on
        global culture and intellectual discourse.
        <br />
        <br />
        These accolades stand as a testament to Einstein's unparalleled
        intellect and lasting legacy, shaping the course of physics and
        inspiring generations worldwide.
      </Text>
    </Section>
  );
};

export default Awards;
