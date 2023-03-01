import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
 
export const Ratings = (newRating) => {
  console.log(newRating);
  render(
    <ReactStars
      count={5}
      onChange={Ratings}
      size={24}
      activeColor="#ffd700"
    />,
   
    
  );
};
 