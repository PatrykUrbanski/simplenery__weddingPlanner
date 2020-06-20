import React, {useState} from 'react';

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };

    return (
        <>
            <header className={"header"}>
                <div className={"header__content container"}>
                    <img className={"logo"} alt={"logo"} src={"/images/logo.svg"} />
                    <div className={"header__content__menuIcon"} onClick={handleOpenMenu} style={{color: `${openMenu ? "white" : "black"}`}}>
                        <span className={"header__content__menuIcon__elem"} style={{opacity: `${openMenu ? "0" : "1"}`}}/>
                        <span className={"header__content__menuIcon__elem"} style={{transform: `${openMenu ? "translate(0%, 175%) rotate(-45deg)" : "none"}`}}/>
                        <span className={"header__content__menuIcon__elem"} style={{transform: `${openMenu ? "rotate(45deg)" : "none"}`}}/>
                        <span className={"header__content__menuIcon__elem"} style={{opacity: `${openMenu ? "0" : "1"}`}}/>
                    </div>
                    <div className={"menu"}>
                        <a className={"menu__elem"} href={"#"}>Content</a>
                        <a className={"menu__elem"} href={"#"}>Content</a>
                        <a className={"menu__elem"} href={"#"}>Content</a>
                        <a className={"menu__elem"} href={"#"}>Content</a>
                    </div>
                </div>
            </header>
        </>
    )
};