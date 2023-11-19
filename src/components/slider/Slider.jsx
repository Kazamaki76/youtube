import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Slider = () => {
  const data = [
    "https://www.yugioh-card.com/eu/wp-content/uploads/2022/10/New-to-YGO-Hero-Banner-Card-EN.webp",
    "https://farm9.staticflickr.com/8500/8312661685_23447519b0_o.jpg",

  ];
  return (
    <div>
      {" "}
      <div className="container">
        <img src={data[0]}></img>
        <img src={data[1]}></img>
        <img src={data[0]}></img>
      </div>{" "}
      <div className="icons">
        <div className="icon"> <KeyboardDoubleArrowLeftIcon/> </div>
        <div className="icon"> <KeyboardDoubleArrowRightIcon/> </div>
     
      </div>
    </div>
  );
};

export default Slider;
