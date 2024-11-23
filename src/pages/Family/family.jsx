import { GetInTouch } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectFade, FreeMode, Pagination } from "swiper/modules";
import { family } from "../../database/family";
export const Family = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">
            Aile Koçluğu ve Davranış Atölyeleri
          </h1>
          <p className="font-2xl font-semibold mb-3">Aile Koçluğu</p>
          <p className="mb-4">
            Ailelerin, çocuklarıyla olan iletişimlerini güçlendirmelerine ve
            aile içi dengeyi sağlamalarına yardımcı oluyoruz. Davranışsal
            rehberlik sunarak ailelerin çocuklarının gelişimine en iyi şekilde
            katkı sağlamalarını hedefliyoruz.
          </p>
          <p>
            • Çocuklarla İletişim Teknikleri <br /> • Aile İçi Problemlerin
            Çözüm Yolları <br />• Çocukların Akademik ve Sosyal Gelişimini
            Destekleme <br /> • Ebeveynlerin Rol Modelliği ve Liderlik
            Becerileri
          </p>
          <div>
            <h1 className="font-2xl font-semibold mb-3 mt-3">
              Davranış ve İletişim Atölyeleri
            </h1>
            <p className="font-xl mt-2 mb-2">
              Ailelere ve bireylere yönelik düzenlediğimiz atölyelerle, etkili
              iletişim, empati kurma ve problem çözme becerilerini
              geliştiriyoruz
            </p>
            <p>
              • Öfke Kontrolü <br />• Sağlıklı İletişim Kurma <br />• Pozitif
              Disiplin Yöntemleri <br />• Çatışma Çözme Teknikleri
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-bold">Our workshops</h1>
            <Swiper
              style={{
                height: "300px",
                marginTop: "50px",
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
              {family.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex flex-col items-center"
                  onClick={() => handleCardClick(item.id)}
                  style={{
                    overflow: "hidden",
                    width: "auto",
                    height: "fit-content",
                    // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
                    borderRadius: "25px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    className="w-full object-cover rounded-full shadow-lg"
                    src={item.img}
                    alt={""}
                    style={{
                      maxWidth: "270px",
                      height: "220px",
                      objectFit: "cover",
                      marginBottom: "10px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="px-3 text-center">
                    <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                    {/* <p className="text-sm text-gray-600">
                  {teacher.type} Teacher • {teacher.exp} years exp
                  </p> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
