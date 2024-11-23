import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectFade, FreeMode, Pagination } from "swiper/modules";
import { Button } from "@nextui-org/react";
import { services } from "../../database/services";
import { useNavigate } from "react-router-dom";

export const PopularServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 pt-3">
          Our services
        </h2>
        <Swiper
          style={{
            height: "300px",
          }}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay, EffectFade]}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide
              key={service.id}
              className="flex justify-center items-center cursor-pointer"
              onClick={() => navigate(`/service/${service.id}`)}
              style={{
                borderRadius: "",
                overflow: "hidden",
                width: "auto",
                height: "fit-content",
              }}
            >
              <img
                className="w-full h-full object-cover rounded-xl shadow-lg"
                src={service.image || "/imgs/service.png"}
                alt={service.type}
                style={{
                  maxWidth: "270px",
                  height: "220px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  borderRadius: "50%",
                }}
              />
              <div className="px-3 text-center">
                <h3 className="text-lg font-semibold mt-2">{service.type}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
