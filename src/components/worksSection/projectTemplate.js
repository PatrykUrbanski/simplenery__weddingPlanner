import React from 'react';
import {useMediaQuery} from 'react-responsive';


export const ProjectTemplate = ({name, projectImgPath, flexSide}) => {
    const isMobile = useMediaQuery({query: "(max-device-width: 768px)"});



    return (
        <>
            <div className={"project"} style={{justifyContent: `${isMobile ? "center" : flexSide}`}}>
                <span className={"project__bgText"}>{name}</span>
                <div className={"project__card"}>
                    <img src={projectImgPath} />
                    <p className={"project__card__details"}>{name}</p>
                    <p className={"project__card__details cta"}>Click to discover</p>
                </div>
            </div>
        </>
    )
};
