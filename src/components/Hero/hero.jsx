export const Hero = () => {
  return (
    <div className="relative ">
      <div className="opacity-5 absolute inset-0 bg-heroBg bg-cover bg-center -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd  -z-20"></div>
      <div className="flex justify-between mx-auto max-w-screen-2xl items-center">
        <div>
          <h1 className="text-8xl">Welcome</h1>
        </div>
        <div>
          <img
            style={{
              height: "500px",
              borderRadius: "100px",
              marginTop: "100px",
              marginBottom: "100px",
            }}
            src="/imgs/heroBg.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
