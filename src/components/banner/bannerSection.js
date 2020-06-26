import React from 'react';

export const BannerSection = ({title, subtitle, bgImgPath}) => {
    return (
        <>
            <div className={"bannerSection__title"} style={{backgroundImage: `url(${bgImgPath})`}}>
                {title}
                <div className={"subtitle"}>{subtitle}</div>
                <div className={"bgLine"}/>
            </div>
        </>
    )
};
