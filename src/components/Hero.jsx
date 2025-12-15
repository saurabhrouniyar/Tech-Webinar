import img from "../assets/Happy-announcement-cuate.png"
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-20 bg-gray-50">
      
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
          Tech Career Webinar 2025
        </h1>
        <p className="text-gray-600 mb-6">
          Learn how to start your IT career with expert guidance.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded">
          Save Your Seat
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={img}
          alt="Webinar"
          className="w-72 md:w-96"
        />
      </div>

    </section>
  );
};

export default Hero;
