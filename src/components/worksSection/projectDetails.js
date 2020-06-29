import React from 'react';

export const ProjectDetails = ({project}) => {

    return (
        <>
            <section className={"projectDetails"}>
                <div className={"projectDetails__content container"}>
                    <div className={"projectDetails__content__title"}>
                        <h2 className={"description"}>asdasdads</h2>
                        <div className={"gallery"}>
                            <img className={"galleryElem"} />
                        </div>
                    </div>
                    <div className={"projectDetails__content__banner"}>
                        <img className={"bannerImg"} />
                    </div>
                </div>
            </section>
        </>
    )
};