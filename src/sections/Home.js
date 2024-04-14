import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <div>
      <Section id="home">
        <CoverVideo />
        <Logo />
        <Navbar />
      </Section>
    </div>
  );
};

export default Home;
