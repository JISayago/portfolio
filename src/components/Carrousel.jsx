import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Carrousel({ props }) {
    const imagenes = props;
    console.log(imagenes)
    return (
        <div className="text-dark-orange">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {imagenes.map(
                    imagen =>
                        <SwiperSlide>
                            <img                              
                                className="object-fill w-full h-auto"
                                src={imagen}
                                alt="imagen.jpg"                                
                            />
                        </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}
export default Carrousel;
