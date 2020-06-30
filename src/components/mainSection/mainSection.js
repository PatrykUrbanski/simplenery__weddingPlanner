import React from 'react';
import Reveal from "react-reveal/Reveal";
import {Link} from "react-router-dom";

export const About = () => {
    return (
        <>
          <section className={"about"}>
              <div className={"about__content"}>
                  <div className={"cardImageSection container"}>
                      <Reveal>
                      <div className={"card"}>
                          <h2 className={"card__title"}>Your truly personal</h2>
                          <h3 className={"card__subtitle"}>Wedding planner</h3>
                          <p className={"card__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci blanditiis ea expedita fugiat id qui reprehenderit velit. Accusamus corporis doloribus dolorum ex laboriosam modi officia possimus sapiente soluta velit?</p>
                      </div>
                      </Reveal>
                      <div className={"images"}>
                          <div className={"images__elem cutlery"} />
                          <div className={"images__elem candles"} />
                          <div className={"images__elem table"} />
                      </div>
                      <div className={"bgLine"}/>
                  </div>
                  <div className={"bgElem"}/>
                  <div className={"cardImageSection container"}>
                      <div className={"bgLine top"}/>
                      <Reveal>
                      <div className={"card"}>
                          <h2 className={"card__title"}>Made specially for you</h2>
                          <h3 className={"card__subtitle"}>Unique decorations</h3>
                          <p className={"card__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci blanditiis ea expedita fugiat id qui reprehenderit velit. Accusamus corporis doloribus dolorum ex laboriosam modi officia possimus sapiente soluta velit?</p>
                          <Link to={"/ourStory"} className={"card__link"}>Get to know us</Link>
                      </div>
                      </Reveal>
                      <div className={"images"}>
                          <div className={"images__elem flowers"} />
                          <div className={"images__elem window"} />
                      </div>
                      <div className={"bgLine"}/>
                  </div>
                  <div className={"bgElem second"}/>
                  <div className={"cardImageSection container"}>
                      <div className={"bgLine top"}/>
                      <Reveal>
                      <div className={"card"}>
                          <h2 className={"card__title"}>Your truly personal</h2>
                          <h3 className={"card__subtitle"}>Wedding planner</h3>
                          <p className={"card__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci blanditiis ea expedita fugiat id qui reprehenderit velit. Accusamus corporis doloribus dolorum ex laboriosam modi officia possimus sapiente soluta velit?</p>
                          <Link to={"/ourWorks"} className={"card__link"}>Have a look at our portfolio</Link>
                      </div>
                      </Reveal>
                      <div className={"images"}>
                          <div className={"images__elem cutlery"} />
                          <div className={"images__elem candles"} />
                      </div>
                      <div className={"bgLine"}/>
                  </div>
              </div>
          </section>
        </>
    )
};