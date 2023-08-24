import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Two = () => {
  return (
    <Splide options={{ perPage: 1 }}>
      <SplideSlide>
        <img
          src="https://im.uniqlo.com/global-cms/spa/res14d4f3130de0a49816a9f42c76de003bfr.jpg"
          alt="Primera imagen horizontal"
          style={{ width: "100%", height: "100%" }}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://www.aquimoda.com/wp-content/uploads/2011/06/norteamerican2.jpg"
          alt="Segunda imagen horizontal"
          style={{ width: "100%", height: "100%" }}
        />
      </SplideSlide>
    </Splide>
  );
};

export default Two;
