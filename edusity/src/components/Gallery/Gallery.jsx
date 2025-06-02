import React from "react";
import Title from "../Title/Title";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import Button from "../Button/Button";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 pt-14 pb-14">
      <Title subtitle="Gallery" title="Explore Photos Here" />
      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="">
          <img className="rounded-2xl" src={gallery_1} alt="" />
        </div>
        <div className="">
          <img className="rounded-2xl" src={gallery_2} alt="" />
        </div>
        <div className="">
          <img className="rounded-2xl" src={gallery_3} alt="" />
        </div>
        <div className="">
          <img className="rounded-2xl" src={gallery_4} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <Button text="See More Here" />
      </div>
    </div>
  );
};

export default Gallery;
