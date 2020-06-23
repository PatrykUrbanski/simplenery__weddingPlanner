import React, {useEffect, useState} from 'react';
import {Banner} from "./components/banner/banner";
import {About} from "./components/mainSection/mainSection";
import {Header} from "./components/header/header";
import {Contact} from "./components/contact/contact";
import {LoadingPage} from "./components/loadingPage/loadingPage";
import LazyLoad from 'react-lazyload';
import {OurStory} from "./components/storySection/storySection";

export const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(!loaded)
        }, 5000);
    }, []);

  return (
      <>
          <Header/>
          <OurStory />
          {/*{loaded ? <>*/}
          {/*    <Header/>*/}
          {/*    <Banner/>*/}
          {/*    <LazyLoad once={true}>*/}
          {/*        <About />*/}
          {/*    </LazyLoad>*/}
          {/*    <LazyLoad offset={200} once={true}>*/}
          {/*        <Contact />*/}
          {/*    </LazyLoad>*/}
          {/*    </>*/}
          {/*: <LoadingPage /> }*/}
      </>
  )
};

