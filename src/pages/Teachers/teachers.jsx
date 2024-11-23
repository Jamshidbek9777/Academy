import { GetInTouch } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectFade, FreeMode, Pagination } from "swiper/modules";
import { teachers } from "../../database/teachers";

export const Teachers = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd py-16 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">
            Öğretmen Eğitim Seminerleri
          </h1>
          <p className="font-2xl font-semibold mb-3">
            Öğretmenlerin mesleki gelişimlerine katkı sağlayarak, modern eğitim
            yöntemlerini ve teknolojilerini kullanabilmelerini sağlıyoruz. Bu
            seminerler sayesinde öğretmenlerin sınıf içi performanslarını
            artırarak öğrencilerine daha etkili bir eğitim sunmalarına yardımcı
            oluyoruz.
          </p>
          <p className="mb-4">Verdiğimiz Eğitimler:</p>
          <p>
            • Dikkat Eğitimi: Öğrencilerin dikkat sürelerini artırmak için
            öğretmenlere yönelik dikkat toplama stratejileri. <br /> • Aktif
            Öğrenme Teknikleri: Öğrencileri öğrenme sürecine aktif olarak dahil
            etmek için yenilikçi öğretim yöntemleri. <br />• Beceri Temelli Ders
            Programları: 21. yüzyıl becerilerine (eleştirel düşünme, problem
            çözme, yaratıcılık) dayalı ders programları geliştirme. <br /> •
            Sınıf Yönetimi: Öğrenci davranışlarını yönetme, sınıf içi düzeni
            sağlama ve etkili öğretim ortamı oluşturma teknikleri. <br /> •
            Eğitim Teknolojileri: Dijital araçlar, online eğitim platformları ve
            eğitim teknolojilerinin etkili kullanımı.
          </p>
          <div className="mt-8">
            <h1 className="text-4xl font-bold">
              The list of training we provide
            </h1>
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
              {teachers.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex flex-col items-center"
                  onClick={() => handleCardClick(item.id)}
                  style={{
                    overflow: "hidden",
                    width: "auto",
                    height: "fit-content",
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
