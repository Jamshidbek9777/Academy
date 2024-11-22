import { useParams } from "react-router-dom";
import { services } from "../../database/services";
import { GetInTouch } from "../../components";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((service) => service.id.toString() === id);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-600">
          Service not found.
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={service.image || "/imgs/default-service.png"}
              alt={service.type}
              className="w-72 h-72 rounded-xl shadow-lg object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {service.type}
              </h1>
              <p className="mt-4 text-gray-700">{service.description}</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">Details</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {service.details}
            </p>
          </div>
        </div>
        <GetInTouch />
      </div>
    </>
  );
};

export default ServiceDetail;
