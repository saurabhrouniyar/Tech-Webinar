const Speakers = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-r from-indigo-50 to-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Our Speakers
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10">

        {/* Speaker 1 */}
        <div className="speaker-card">
          <div className="avatar bg-blue-500">R</div>
          <h3 className="text-lg font-semibold mt-4">Saurabh Kumar</h3>
          <p className="text-gray-600">FrontEnd-Developer</p>
        </div>

        {/* Speaker 2 */}
        <div className="speaker-card">
          <div className="avatar bg-indigo-500">A</div>
          <h3 className="text-lg font-semibold mt-4">Vishal Mishra</h3>
          <p className="text-gray-600">Career Mentor</p>
        </div>

      </div>
    </section>
  );
};

export default Speakers;
