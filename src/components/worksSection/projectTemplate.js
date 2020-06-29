import React from 'react';
import {useMediaQuery} from 'react-responsive';


export const ProjectTemplate = ({project, flexSide}) => {
    const isMobile = useMediaQuery({query: "(max-device-width: 768px)"});
    const {name, projectImgPath} = project;

    return (
        <>
            <div className={"project"} style={{justifyContent: `${isMobile ? "center" : flexSide}`}}>
                <span className={"project__bgText"}>{name}</span>
                <div className={"project__card"}>
                    <img alt={"projectDemo"} src={projectImgPath} />
                    <p className={"project__card__details"}>{name}</p>
                    <p className={"project__card__details cta"}>Click to discover</p>
                </div>
            </div>
        </>
    )
};
