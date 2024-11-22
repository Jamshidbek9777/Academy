import { GetInTouch } from "../../components";

export const Teachers = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd py-16 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">
            Öğretmen Eğitim Seminerleri
          </h1>
          <p className="font-2xl font-semibold mb-3">
            {" "}
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
          {/* <div>
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
          </div> */}
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
