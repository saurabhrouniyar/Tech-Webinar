const Details = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-r from-blue-50 to-indigo-100">
      <h2 className="text-3xl font-bold text-center mb-12">
        Event Details
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        
        <div className="detail-card animate-float">
          <p className="text-3xl mb-2">📅</p>
          <p className="font-semibold">25 Jan 2026</p>
          <p className="text-gray-600 text-sm">Event Date</p>
        </div>

        <div className="detail-card animate-float delay-200">
          <p className="text-3xl mb-2">⏰</p>
          <p className="font-semibold">6:00 PM IST</p>
          <p className="text-gray-600 text-sm">Event Time</p>
        </div>

        <div className="detail-card animate-float delay-400">
          <p className="text-3xl mb-2">📍</p>
          <p className="font-semibold">Online (Zoom)</p>
          <p className="text-gray-600 text-sm">Event Mode</p>
        </div>

      </div>
    </section>
  );
};

export default Details;
