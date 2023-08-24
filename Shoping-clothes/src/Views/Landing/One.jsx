import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const One = () => {
  return (
    <div id="one">
    <Splide options={{ type: "slide", perPage: 1 }}>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center">
          <img
            src="https://im.uniqlo.com/global-cms/spa/resf4a0180a90ba62ffac27b182806e0d42fr.jpg"
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
            src="https://im.uniqlo.com/global-cms/spa/resab60cafe1e5c00e28ecbf5e53a244c92fr.jpg"
            alt="Imagen 3"
            className="min-h-full w-full"
          />
        </div>
      </SplideSlide>
    </Splide>
    </div>
  );
};

export default One;
