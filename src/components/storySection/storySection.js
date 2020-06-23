import React, {useEffect, useState} from 'react';

export const OurStory = () => {


  return (
      <>
          <section className={"story"} >
              <div className={"story__title"}>
                  Our Story
                  <div className={"subtitle"}>Let us inspire you</div>
                  <div className={"bgLine"}/>
              </div>
              <div className={"story__content container"}>
                  <h2 className={"story__content__title"}>Some <span className={"hlText"}>romantic</span> stuff</h2>
                  <p className={"story__content__text"}>Lorem ipsum dolor sit amet, <span className={"hlText"}>consectetur</span> adipisicing elit. Ab culpa excepturi fugiat hic ipsa laudantium <span className={"hlText"}>pariatur</span> quam qui recusandae vero? Accusamus alias at expedita ipsum quae! Aperiam cum ea similique.</p>
              </div>
          </section>
      </>
  )
};