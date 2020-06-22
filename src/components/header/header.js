import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';

export const Header = () => {
    const isMobile = useMediaQuery({query: "(max-device-width: 768px)"});
    const [openMenu, setOpenMenu] = useState(false);
    const [headerOnTop, setHeaderOnTop] = useState(true);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };

    useEffect(() => {
        const headerHandler = window.addEventListener("scroll", () => {
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
                        <a className={"menu__elem"} href={"#"} onClick={handleOpenMenu}>Home</a>
                        <a className={"menu__elem"} href={"#"} onClick={handleOpenMenu}>Our story</a>
                        <a className={"menu__elem"} href={"#"} onClick={handleOpenMenu}>Our works</a>
                        <a className={"menu__elem"} href={"#"} onClick={handleOpenMenu}>Contact us</a>
                        <div className={"bgLine"}/>
                    </div>
                </div>
            </header>
        </>
    )
};