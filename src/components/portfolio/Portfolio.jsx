import React from "react";
import IMG1 from "../../assets/gpt-mockup.png";
import IMG2 from "../../assets/timer-mockup.png";
import IMG3 from "../../assets/shoppingcart-mockup.png";
import IMG4 from "../../assets/foodshop-mockup.png";
import IMG5 from "../../assets/cars-mockup.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio example",
    github: "https://tatyanasimchenko.github.io/gpt/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Timer",
    github: "https://tatyanasimchenko.github.io/timer/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Shopping Cart",
    github: "https://tatyanasimchenko.github.io/soppingcart/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Shop",
    github: "https://tatyanasimchenko.github.io/fooddelivery",
  },
  {
    id: 5,
    image: IMG5,
    title: "Begin design in React",
    github: "https://tatyanasimchenko.github.io/cars/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Will be my next work",
    github: "https://github.com/TatyanaSimchenko",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
