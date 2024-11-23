import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectFade, FreeMode, Pagination } from "swiper/modules";

import { GetInTouch } from "../../components";
import { languages } from "../../database/languages";

export const Students = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd py-16 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">
            Öğrenci Koçluğu ve Birebir Dersler
          </h1>
          <p className="font-2xl font-semibold mb-3">Öğrenci Koçluğu</p>
          <p className="mb-4">
            Öğrencilerimize yalnızca akademik başarıyı değil, kişisel ve sosyal
            gelişimi de hedefleyen rehberlik sunuyoruz. Öğrenci koçluğu
            programımız, motivasyon artırma, özgüven geliştirme, zaman yönetimi,
            sınav kaygısı ile başa çıkma ve hedef belirleme gibi alanlarda
            destek vererek öğrencilerin potansiyellerini en iyi şekilde
            kullanmalarını sağlıyor.
          </p>
          <p>
            • Hedef Belirleme ve Planlama <br />• Zaman Yönetimi Teknikleri{" "}
            <br /> • Sınav Stresi ve Kaygı Yönetimi <br />• Özgüven Artırıcı
            Yöntemler <br /> • Kariyer Planlaması
          </p>
          <div>
            <h1 className="font-2xl font-semibold mb-3 mt-3">Dil Dersleri</h1>
            <p className="font-xl mt-2 mb-2">
              Özbekistan’daki öğrencilere yönelik çeşitli dil programları
              sunuyoruz. Dil becerilerini geliştirerek, akademik ve profesyonel
              alanlarda başarılı olmalarını amaçlıyoruz.
            </p>
            <p>
              • Türkçe: Temel, orta ve ileri seviyelerde Türkçe dersleri.
              Konuşma, dinleme, yazma ve okuma becerilerini geliştirme odaklı
              dersler. <br />• Özbekçe: Anadili Türkçe olan veya yabancı
              öğrencilere Özbekçe dil eğitimi. • İngilizce: Akademik İngilizce,
              iş İngilizcesi, sınav hazırlık (IELTS, TOEFL) gibi özel alanlara
              yönelik dersler. <br />• Rusça ve Almanca: Hem başlangıç
              seviyesinden ileri seviyeye kadar dil eğitimi hem de sınav
              hazırlık programları.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-bold">The list of languages</h1>
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
              {languages.map((language) => (
                <SwiperSlide
                  key={language.id}
                  className="flex flex-col items-center"
                  onClick={() => handleCardClick(language.id)}
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
                    src={language.img}
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
                    <h3 className="text-lg font-semibold mt-2">
                      {language.name}
                    </h3>
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
