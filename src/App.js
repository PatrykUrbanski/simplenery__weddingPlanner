import React, {useEffect, useState} from 'react';
import {Banner} from "./components/banner/banner";
import {About} from "./components/aboutSection/aboutSection";
import {Header} from "./components/header/header";
import {Contact} from "./components/contact/contact";
import {LoadingPage} from "./components/loadingPage/loadingPage";

export const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(!loaded)
        }, 5000);
    }, []);

  return (
      <>
          {loaded ? <>
              <Header/>
              <Banner/>
              <About />
              <Contact />
              </>
          : <LoadingPage /> }
      </>
  )
};

