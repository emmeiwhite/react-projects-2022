import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const handlePrev = () => {
    if (index <= 0) {
      setIndex(people.length - 1);
    } else {
      setIndex((prevIndex) => {
        return prevIndex - 1;
      });
    }
  };

  const handleNext = () => {
    if (index >= people.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => {
        return prevIndex + 1;
      });
    }
  };

  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            handlePrev();
          }}
        >
          <FaChevronLeft />
        </button>

        <button
          className="next-btn"
          onClick={() => {
            handleNext();
          }}
        >
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
