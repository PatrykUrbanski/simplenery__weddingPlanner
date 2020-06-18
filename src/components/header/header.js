import React from 'react';

export const Header = () => {
    return (
        <>
            <header className={"header"}>
                <div className={"header__content container"}>
                    <div className={"logo"}>logo</div>
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