import React from 'react';

export const About = () => {
    return (
        <>
          <section className={"about"}>
              <div className={"about__content container"}>
                  <div className={"cardImageSection"}>
                      <div className={"card"}>
                          <h2 className={"card__title"}>Your truly personal</h2>
                          <h3 className={"card__subtitle"}>Wedding planner</h3>
                          <p className={"card__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci blanditiis ea expedita fugiat id qui reprehenderit velit. Accusamus corporis doloribus dolorum ex laboriosam modi officia possimus sapiente soluta velit?</p>
                          <a href={"#"} className={"card__link"}>Discover our recent works.</a>
                      </div>

                      <div className={"images"}>
                          <div className={"images__elem cutlery"} />
                          <div className={"images__elem candles"} />
                          <div className={"images__elem table"} />
                      </div>
                  </div>
                  <div className={"cardImageSection"}>
                      <div className={"card"}>
                          <h2 className={"card__title"}>Made specially for you</h2>
                          <h3 className={"card__subtitle"}>Unique decorations</h3>
                          <p className={"card__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci blanditiis ea expedita fugiat id qui reprehenderit velit. Accusamus corporis doloribus dolorum ex laboriosam modi officia possimus sapiente soluta velit?</p>
                          <a href={"#"} className={"card__link"}>content</a>
                      </div>
                      <div className={"images"}>
                          <div className={"images__elem flowers"} />
                          <div className={"images__elem window"} />
                      </div>
                  </div>
                  <div className={"cardImageSection"}>
                      <div className={"card"}>
                          <h2 className={"card__title"}>Your truly personal</h2>
                          <h3 className={"card__subtitle"}>Wedding planner</h3>
                          <p className={"card__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci blanditiis ea expedita fugiat id qui reprehenderit velit. Accusamus corporis doloribus dolorum ex laboriosam modi officia possimus sapiente soluta velit?</p>
                          <a href={"#"} className={"card__link"}>Have a look at our portfolio</a>
                      </div>
                      <div className={"images"}>
                          <div className={"images__elem cutlery"} />
                          <div className={"images__elem candles"} />
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
};