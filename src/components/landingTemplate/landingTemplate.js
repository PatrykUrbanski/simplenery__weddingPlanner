import React, {useEffect, useState} from 'react';
import {Banner} from "../banner/banner";
import {About} from "../mainSection/mainSection";
import {Contact} from "../contact/contact";
import LazyLoad from "react-lazyload";

export const LandingTemplate = () => {
    return (
        <>
            <Banner />
            <LazyLoad once={true} >
            <About />
            </LazyLoad>
            <LazyLoad offset={200} once={true} >
            <Contact />
            </LazyLoad>
        </>
    )
};
