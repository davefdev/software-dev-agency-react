import React from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/hero.jpeg";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero_content">
            <div>
              <h2>We're MAKE PERFECT</h2>
              <h2>digital products</h2>

              <h2 className="highlight">Promote your brand</h2>
            </div>
            <p className="description">
              you make a lot of money doing various tasks
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Start NOW</button>
              <button className="secondary__btn">Discover MORE</button>
            </div>
          </div>
          <div className="hero__img">
            <img src={heroDarkImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
