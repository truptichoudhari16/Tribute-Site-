import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MainVideo from "../assets/video3.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }

  @media (max-width: 30em) {
    object-position: center 50%;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    letter-spacing: 0.4rem;
    line-height: 6rem;

    @media (max-width: 30em) {
      font-size: calc(4rem + 5vw);
      text-align: center;
      /* margin-top: 40%; */
    }
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontlg};
      margin-top: -1.5rem;
    }
  }
`;

// Animation for Title

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5, //2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
const CoverVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Video ki speed ko aadha karne ke liye
    }
  }, []);
  return (
    <div>
      <VideoContainer>
        <DarkOverlay />

        <Title variants={container} initial="hiddden" animate="show">
          <div>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              Albert Einstein
            </motion.h1>
          </div>

          <motion.h2
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Theoretical physicist
          </motion.h2>
        </Title>
        <video
          ref={videoRef}
          src={MainVideo}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </VideoContainer>
    </div>
  );
};

export default CoverVideo;
