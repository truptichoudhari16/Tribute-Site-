import "locomotive-scroll/dist/locomotive-scroll.css";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Career from "./sections/Career";

import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Quotes from "./sections/Quotes";
import Awards from "./sections/Awards";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options

            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>

          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Career />
              <Quotes />
              <Awards />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
