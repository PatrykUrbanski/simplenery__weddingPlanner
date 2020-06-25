import React, {useEffect, useState} from 'react';
import {Contact} from "../contact/contact";

export const OurStory = () => {
    let counter = 1;
    const [displayWord, setDisplayWord] = useState(counter);

    useEffect(() => {
        setInterval(() => {
            counter ++;
            if (counter > 4) {
                counter = 1
            }
            setDisplayWord(prevState => counter);

        }, 8000)
    }, []);



  return (
      <>
          <section className={"story"} >
              <div className={"story__title"}>
                  Our Story
                  <div className={"subtitle"}>Let us inspire you</div>
                  <div className={"bgLine"}/>
              </div>
              <div className={"story__content container"}>
                  <section className={"story__content__title"}>
                      Some romantic:
                      <ul className="story__content__title__list">
                          <li className={`word ${displayWord === 1 ? "displayWord" : false}`}>stuff</li>
                          <li className={`word ${displayWord === 2 ? "displayWord" : false}`}>text</li>
                          <li className={`word ${displayWord === 3 ? "displayWord" : false}`}>whatever</li>
                          <li className={`word ${displayWord === 4 ? "displayWord" : false}`}>u want</li>
                      </ul>
                  </section>
                  <p className={"story__content__text"}>Lorem ipsum dolor sit amet, <span className={"hlText"}>consectetur</span> adipisicing elit. Ab culpa excepturi fugiat hic ipsa laudantium <span className={"hlText"}>pariatur</span> quam qui recusandae vero? Accusamus alias at expedita ipsum quae! Aperiam cum ea similique.</p>
                  <div className={"story__content__card"}>
                      <span className={"deco"}>2016</span>
                      <p className={"description"}>Odio quae reiciendis voluptate! Ab architecto asperiores, <span className={"hlText"}>eveniet facilis</span> ipsam minima molestias praesentium ratione soluta tempora tenetur.</p>
                      <img alt={"couple"} src={"/images/couple.jpg"} className={"image"}/>
                      <img alt={"couple"} src={"/images/sunset.jpg"} className={"image tabletView"}/>
                      <div className={"bgLine"} />
                  </div>
                  <div className={"story__content__card"}>
                      <img alt={"couple"} src={"/images/flowers.jpg"} className={"image"}/>
                      <span className={"deco"}>2018</span>
                      <p className={"description"}>Eveniet facilis ipsam minima molestias praesentium ratione soluta tempora tenetur.</p>
                      <div className={"bgLine"} />
                  </div>
                  <div className={"story__content__card"}>
                      <img alt={"couple"} src={"/images/aboutSec-3.jpg"} className={"image tabletView"}/>
                      <img alt={"couple"} src={"/images/aboutSec-2.jpg"} className={"image tabletView"}/>
                      <img alt={"couple"} src={"/images/aboutSec-1.jpg"} className={"image"}/>
                      <span className={"deco"}>2019</span>
                      <p className={"description"}>Ab architecto asperiores, eveniet facilis ipsam minima molestias praesentium ratione soluta tempora tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum ea enim et facilis illo ipsum iure magnam neque odio, pariatur perspiciatis placeat praesentium quaerat ratione,
                          <a href={"#"} className={"card__link"}>sunt velit voluptas voluptatem.</a>
                      </p>
                  </div>
              </div>
          </section>
          <Contact />
      </>
  )
};