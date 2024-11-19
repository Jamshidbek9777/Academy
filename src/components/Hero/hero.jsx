import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="opacity-5 absolute inset-0 bg-heroBg bg-cover bg-center -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd -z-20"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center pt-20 px-4 mx-auto max-w-7xl gap-8 text-center md:text-left">
        <div className="flex-1">
          <p className="text-3xl">Turkistan Academy</p>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
            Welcome to our website
          </h1>
          <Button color="primary" className="mt-5">
            Learn more
          </Button>
        </div>

        <div className="flex-1">
          <Swiper
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            // effect="fade"
            className="w-full h-auto max-w-sm md:max-w-lg lg:max-w-xl mx-auto"
          >
            <SwiperSlide>
              <img
                src="/imgs/slider1.png"
                alt="Hero Slide 1"
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/imgs/slider2.png"
                alt="Hero Slide 2"
                className="w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
