import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Two = () => {
  return (
    <div id="two">
    <Splide options={{ type: "slide", perPage: 1 }}>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center"> 
          <img
            src="https://im.uniqlo.com/global-cms/spa/resa070a891d6302d5b44a7cd9883981d5ffr.jpg"
            alt="Imagen 1"    
            className="min-h-full w-full"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center">
          <img
            src="https://im.uniqlo.com/global-cms/spa/res14d4f3130de0a49816a9f42c76de003bfr.jpg"
            alt="Imagen 2"
            className="min-h-full w-full"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center">
          <img
            src="https://im.uniqlo.com/global-cms/spa/res254ed4634afa501498ab2c7281344f57fr.jpg"
            alt="Imagen 3"
            className="min-h-full w-full"
          />
        </div>
      </SplideSlide>
    </Splide>
    </div>
  );
};

export default Two;
