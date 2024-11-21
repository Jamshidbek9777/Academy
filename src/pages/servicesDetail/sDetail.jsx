import { useParams } from "react-router-dom";
import { services } from "../../database/services";

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
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={service.image || "/imgs/default-service.png"}
          alt={service.type}
          className="w-72 h-72 rounded-xl shadow-lg object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{service.type}</h1>
          <p className="mt-4 text-gray-700">{service.description}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800">Details</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{service.details}</p>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 flex justify-center">
        <button className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-600 transition">
          Contact Us for More Information
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
