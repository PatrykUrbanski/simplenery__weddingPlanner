import React from 'react';

export const ProjectDetails = ({project}) => {

    return (
        <>
            <section className={"projectDetails"}>
                <div className={"projectDetails__content container"}>
                    <div className={"projectDetails__content__title"}>
                        <h2 className={"description"}>asdasdads</h2>
                        <div className={"gallery"}>
                            <img alt="projectImage" className={"galleryElem"} />
                        </div>
                    </div>
                    <div className={"projectDetails__content__banner"}>
                        <img alt="banner" className={"bannerImg"} />
                    </div>
                </div>
            </section>
        </>
    )
};