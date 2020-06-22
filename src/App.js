import React, {useEffect, useState} from 'react';
import {Banner} from "./components/banner/banner";
import {About} from "./components/aboutSection/aboutSection";
import {Header} from "./components/header/header";
import {Contact} from "./components/contact/contact";
import {LoadingPage} from "./components/loadingPage/loadingPage";
import LazyLoad from 'react-lazyload';

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
              <LazyLoad>
                  <About />
              </LazyLoad>
              <LazyLoad offset={200}>
                  <Contact />
              </LazyLoad>
              </>
          : <LoadingPage /> }
      </>
  )
};

