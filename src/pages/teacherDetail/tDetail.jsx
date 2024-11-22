import { useParams } from "react-router-dom";
import { popularTeachers } from "../../database/popularTeachers";
import { GetInTouch } from "../../components";

const TeacherDetail = () => {
  const { id } = useParams();
  const teacher = popularTeachers.find((t) => t.id === parseInt(id || "0"));

  if (!teacher) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-600">
          Teacher not found.
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd">
        <div className="max-w-7xl mx-auto px-6 py-16 ">
          {/* Teacher Header */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img
              src={teacher.pic}
              alt={teacher.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {teacher.name}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {teacher.type} Teacher
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {teacher.exp} years of teaching experience
              </p>
              <p className="mt-4 text-gray-700">{teacher.bio}</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-4">
              {teacher.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-600 text-white  px-4 py-2 rounded-full shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">
              Courses Offered
            </h2>
            <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teacher.courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {course.description}
                  </p>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default TeacherDetail;
