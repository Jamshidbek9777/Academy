import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectFade, FreeMode, Pagination } from "swiper/modules";
import { Button } from "@nextui-org/react";

export const PopularTeachers = () => {
  return (
    <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Popular teachers
        </h2>
        <Swiper
          style={{
            height: "300px",
          }}
          spaceBetween={20} // Adjusted space between slides for better view on smaller screens
          freeMode={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay, EffectFade]}
          breakpoints={{
            320: {
              slidesPerView: 2, // For mobile screens, only 2 slides are visible
            },
            375: {
              slidesPerView: 2, // Up to 3 slides on slightly larger mobile screens
            },
            480: {
              slidesPerView: 3, // 4 slides visible on small tablets
            },
            768: {
              slidesPerView: 4, // 5 slides on medium screens like tablets in landscape mode
            },
            1024: {
              slidesPerView: 5, // 6 slides visible on desktop screens
            },
          }}
        >
          {Array(15)
            .fill()
            .map((_, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
                style={{
                  borderRadius: "",
                  overflow: "hidden",
                  width: "auto",
                  height: "fit-content",
                }}
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  src="imgs/teacher.jpg"
                  alt="Popular item"
                  style={{
                    maxWidth: "270px",
                    height: "220px",
                    objectFit: "cover",
                    marginBottom: "10px",
                    borderRadius: "50%",
                  }}
                />
                <div className="flex justify-center mt-1 mb-2">
                  <Button color="primary" style={{ width: "100%" }}>
                    More
                  </Button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
