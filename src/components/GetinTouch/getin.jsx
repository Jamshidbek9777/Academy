export const GetInTouch = () => {
  return (
    <div className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd pt-2 pb-8">
      <div className="mx-auto max-w-7xl px-6 flex lg:flex-row items-center lg:items-start justify-between gap-12">
        <div className="flex-1 flex flex-col items-center gap-6">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center">
            Biz bilan bog'laning
          </h1>
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gradientStart"
            />
            <input
              type="number"
              placeholder="Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gradientStart"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gradientStart"
          />
          <textarea
            // rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gradientStart resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
