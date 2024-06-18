import React from "react";
import Star from "./StarGenerator.jsx";

const StarRating = ({rating}) => {


var starArr = []; // generating an array where 1 = fullyfilled star, 0 = outline star and value between 0-1 = partially filled star (one quarter, half or three quarters)

if (rating === 0) {
  starArr = [0,0,0,0,0];
}
var fullyFilledCount = Math.floor(rating);
for (var i = 0; i < fullyFilledCount; i++) {
  starArr.push(1);
}
if (rating - fullyFilledCount !==0) {
  starArr.push(rating - fullyFilledCount);
}
while (starArr.length < 5) {
  starArr.push(0);
}

return (
  <div>
    {starArr.map((fill, index) => {return <Star fillRating={fill} key={index} />})}
  </div>
)

};

export default StarRating;