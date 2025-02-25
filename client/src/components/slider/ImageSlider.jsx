"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ImageSlider({ images }) {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showThumbs={false}
      infiniteLoop
      stopOnHover
      showStatus={false}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="w-full aspect-square rounded-sm overflow-hidden relative"
        >
          <Image
            src={img}
            alt={`comprehensive crm solution slider ${i}`}
            placeholder="blur"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageSlider;
