import { GetInTouch } from "../../components";

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
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
