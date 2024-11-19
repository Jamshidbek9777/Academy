import { Card, CardBody } from "@nextui-org/react";
import { BadgeHelp } from "lucide-react";

export const WhyUs = () => {
  return (
    <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd py-16">
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 mx-auto max-w-7xl gap-8 text-center lg:text-left">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/imgs/whyus.png"
            alt="Why choose us"
            className="w-full h-auto max-w-sm mx-auto lg:mx-0 lg:max-w-md"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Why choose us
          </h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            Adopting customer satisfaction as a principle, Mavi Hat Turizm
            attracts attention with its comfortable vehicles and high standard
            service approach.
          </p>

          {/* Cards Section */}
          <div className="mt-8 space-y-4">
            <Card className="border rounded-lg shadow-md">
              <CardBody>
                <div className="flex items-center gap-4">
                  <BadgeHelp className="text-primary" />
                  <p className="text-sm md:text-base">
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border rounded-lg shadow-md">
              <CardBody>
                <div className="flex items-center gap-4">
                  <BadgeHelp className="text-primary" />
                  <p className="text-sm md:text-base">
                    Enjoy high-quality services tailored to your needs.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border rounded-lg shadow-md">
              <CardBody>
                <div className="flex items-center gap-4">
                  <BadgeHelp className="text-primary" />
                  <p className="text-sm md:text-base">
                    Benefit from top-notch support and innovative solutions.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
