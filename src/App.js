import React, {useEffect, useState} from 'react';
import {Header} from "./components/header/header";
import {LoadingPage} from "./components/loadingPage/loadingPage";
import {OurStory} from "./components/storySection/storySection";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {LandingTemplate} from "./components/landingTemplate/landingTemplate";
import {Contact} from "./components/contact/contact";
import {ScrollToTop} from "./components/router/scrollToTop";
import {OurWorks} from "./components/worksSection/worksSection";

export const App = () => {
  return (
      <>
              <BrowserRouter>
                  <ScrollToTop />
                  <Header/>
                  <Switch>
                      <Route exact path="/" component={LandingTemplate} />
                      <Route path="/ourStory" component={OurStory} />
                      <Route path="/ourWorks" component={OurWorks} />
                      <Route path="/contact" component={Contact} />
                  </Switch>
              </BrowserRouter>
      </>
  )
};
