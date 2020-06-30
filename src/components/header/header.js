import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Link} from "react-router-dom";

export const Header = () => {
    const isMobile = useMediaQuery({query: "(max-device-width: 768px)"});
    const [openMenu, setOpenMenu] = useState(false);
    const [headerOnTop, setHeaderOnTop] = useState(true);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
              window.pageYOffset !== 0 ? setHeaderOnTop(false) : setHeaderOnTop(true)
        })
    }, []);

    return (
        <>
            <header className={`header ${headerOnTop ? false : "markHeader"}`}>
                <div className={"header__content container"}>
                    <img className={"logo"} alt={"logo"} src={"/images/logo.svg"} />
                    <div className={"header__content__menuIcon"} onClick={handleOpenMenu} >
                        <span className={"header__content__menuIcon__elem"} style={{opacity: `${openMenu ? "0" : "1"}`}}/>
                        <span className={"header__content__menuIcon__elem"} style={{transform: `${openMenu ? "translate(0%, 175%) rotate(-45deg)" : "none"}`}}/>
                        <span className={"header__content__menuIcon__elem"} style={{transform: `${openMenu ? "rotate(45deg)" : "none"}`}}/>
                        <span className={"header__content__menuIcon__elem"} style={{opacity: `${openMenu ? "0" : "1"}`}}/>
                    </div>
                    <div className={"menu"} style={{height: `${isMobile ? openMenu ? "100vh" : "0" : "auto"}`}}>
                        <div className={"bgLine"}/>
                        <Link className={"menu__elem"} to={"/"} onClick={handleOpenMenu}>Home</Link>
                        <Link className={"menu__elem"} to={"/ourStory"} onClick={handleOpenMenu}>Our story</Link>
                        <Link className={"menu__elem"} to={"/ourWorks"} onClick={handleOpenMenu}>Our works</Link>
                        <Link className={"menu__elem"} to={"/contact"} onClick={handleOpenMenu}>Contact us</Link>
                        <div className={"bgLine"}/>
                    </div>
                </div>
            </header>
        </>
    )
};
