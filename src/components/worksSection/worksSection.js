import React from 'react';
import {BannerSection} from "../banner/bannerSection";
import {ProjectTemplate} from "./projectTemplate";
import {Contact} from "../contact/contact";
import {projects} from "./projectsData";

export const OurWorks = () => {

    return (
        <>
            <section className={"mainSectionWrap works"}>
                <BannerSection title={"Our works"} subtitle={"Our contribution in your most important day"} bgImgPath={"/images/flowers.jpg"} />
                <div className={"works__content container"}>
                    <ProjectTemplate project={projects.no_1} flexSide={"flex-end"}/>
                    <ProjectTemplate  project={projects.no_2} flexSide={"flex-start"} />
                    <ProjectTemplate project={projects.no_3} flexSide={"flex-end"} />
                </div>
            </section>
            <Contact />
        </>
    )
};
