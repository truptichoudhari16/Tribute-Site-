import React from "react";
import styled from "styled-components";

// Quotes section

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

// Container of quotes section

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

// Black boxes of Quotes

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontlg};
    /* margin: 1rem 0; */
    top: 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    /* margin: 0.5rem 0; */
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
    margin-top: 2rem;
  }

  .margin {
    margin-bottom: 2rem;
  }
`;

const Quotes = () => {
  return (
    <Section id="quotes">
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            " Imagination is more important than knowledge"
          </span>
        </BannerComponent>

        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-8"
            data-scroll-target="#up"
          >
            "Knowledge is limited"
          </span>
        </BannerComponent>

        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            "Imagination circles the world "
          </span>
        </BannerComponent>

        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            "The only source of knowledge is experience"
          </span>
        </BannerComponent>

        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-target="#up"
          >
            “Out of clutter, find simplicity "
          </span>
        </BannerComponent>

        <BannerComponent>
          <span
            className="margin"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            "In the middle of difficulty lies opportunity"
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Quotes;
