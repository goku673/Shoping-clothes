import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Two from "./Two"; // Asegúrate de importar el componente Two correctamente

const One = () => {
  return (
   
      <Splide options={{ direction: "ttb", perPage: 1, height: "500px"  }}>
        <SplideSlide>
          <Two style={{ width: "100%", height: "100%" }}/>
        </SplideSlide>
        <SplideSlide>
          <Two style={{ width: "100%", height: "100%" }}/>
        </SplideSlide>
        {/* Agrega más SplideSlide según sea necesario */}
      </Splide>
  );
};

export default One;
