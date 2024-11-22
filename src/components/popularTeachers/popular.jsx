import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectFade, FreeMode, Pagination } from "swiper/modules";
import { popularTeachers } from "../../database/popularTeachers";
import { useNavigate } from "react-router-dom";

export const PopularTeachers = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/teachers/${id}`);
  };

  return (
    <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold  text-gray-800 mb-8">
          Popular teachers
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
            320: { slidesPerView: 2 },
            375: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {popularTeachers.map((teacher) => (
            <SwiperSlide
              key={teacher.id}
              className="flex flex-col items-center"
              onClick={() => handleCardClick(teacher.id)}
              style={{
                overflow: "hidden",
                width: "auto",
                height: "fit-content",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              <img
                className="w-full object-cover rounded-full shadow-lg"
                src={teacher.pic}
                alt={`${teacher.name} - ${teacher.type}`}
                style={{
                  maxWidth: "270px",
                  height: "220px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  borderRadius: "50%",
                }}
              />
              <div className="px-3 text-center">
                <h3 className="text-lg font-semibold mt-2">{teacher.name}</h3>
                <p className="text-sm text-gray-600">
                  {teacher.type} Teacher • {teacher.exp} years exp
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
