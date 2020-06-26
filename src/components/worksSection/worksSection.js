import React from 'react';
import {BannerSection} from "../banner/bannerSection";
import {ProjectTemplate} from "./projectTemplate";
import {Contact} from "../contact/contact";

export const OurWorks = () => {

    return (
        <>
            <section className={"mainSectionWrap works"}>
                <BannerSection title={"Our works"} subtitle={"Our contribution in your most important day"} bgImgPath={"/images/flowers.jpg"} />
                <div className={"works__content container"}>
                    <ProjectTemplate name={"Alice & Jack 2019"} projectImgPath={"/images/aboutSec-1.jpg"} flexSide={"flex-end"}/>
                    <ProjectTemplate name={"Johny & Johny 2020"} projectImgPath={"/images/aboutSec-3.jpg"} flexSide={"flex-start"} />
                    <ProjectTemplate name={"Jesse & Julia & Jessica 2021"} projectImgPath={"/images/aboutSec-5.jpg"} flexSide={"flex-end"} />
                </div>
            </section>
            <Contact />
        </>
    )
};
