import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/IMG3.jpg";
import img2 from "../assets/Images/IMG2.webp";
import img3 from "../assets/Images/IMG6.jpg";

const Section = styled.section`
  position: relative;
  min-height: 130vh;
  width: 80vw;

  display: flex;
  margin: 0 auto;

  /* about section width  */

  @media (max-width: 48em) {
    width: 90vw;
    min-height: 100vh;
  }

  @media (max-width: 30em) {
    width: 100vw;
    min-height: 100vh;
  }
`;

// Heading of About us

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
    color: white;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
    color: white;
  }
`;

// information section
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 16%;

  /* Text width  */

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;

// Image section of about

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .img1 {
    height: 100%;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 90%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 82%;
    bottom: 40%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 20%;
    }

    .small-img-2 {
      width: 30%;
      height: auto;
      left: 65%;
      bottom: 20%;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Albert Einstein, born in 1879 in Ulm, Germany, is revered in the
        scientific world for his unparalleled intellect and visionary theories.
        His work, including the iconic E=mc², revolutionized our comprehension
        of the cosmos, revealing the profound connection between mass and
        energy.
        <br /> <br />
        Yet, Einstein's legacy extends far beyond the realms of science.
        Throughout his life, he passionately advocated for peace, social
        justice, and human rights, using his platform to champion causes that
        transcend borders and ideologies.
        <br />
        <br />
        Albert Einstein's name illuminates history as a beacon of hope,
        reminding us that with imagination, perseverance, and dedication to
        truth, we can overcome ignorance and forge a brighter future for all
        humanity.
      </Left>
      <Right>
        <img src={img1} alt="About Us" className="img1" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img3}
          alt="About Us"
          className="small-img-1"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img2}
          alt="About Us"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About;
