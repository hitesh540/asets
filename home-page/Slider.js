import React from "react";
import img1 from "./../../assets/pictures/1 (1).jpeg";
import img2 from "./../../assets/pictures/1 (2).jpeg";
import img3 from "./../../assets/pictures/1 (3).jpeg";
import img4 from "./../../assets/pictures/1 (4).jpeg";
import Coverflow from "react-coverflow";

/* will change the slider styling soon */
const Slider = () => {
  return (
    <div className='main-slider'>
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        infiniteScroll={true}
        enableScroll={false}
        enableHeading={false}>
        {/* <img
          src={img1}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
          
        /> */}
        {/* <img
          src={img2}
          alt='title or description'
          data-action='http://localhost:3000/category/606ece43ccf3ef0358bb32e4'
        />
        <img
          src={img3}
          alt='title or description'
          data-action='http://localhost:3000/category/606ece0accf3ef0358bb32e3'
        /> */}
        <img
          src={img1}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
          data-action='http://localhost:3000/category/xyzcategoryname'
        />
        <img
          src={img2}
          alt='title or description'
          data-action='http://localhost:3000/category/xyzcategoryname'
        />
        <img
          src={img3}
          alt='title or description'
          data-action='http://localhost:3000/category/xyzcategoryname'
        />
         <img
          src={img4}
          alt='title or description'
          data-action='http://localhost:3000/category/xyzcategoryname'
        />
      </Coverflow>
    </div>
  );
};

export default Slider;
