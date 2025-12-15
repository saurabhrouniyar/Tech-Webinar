const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      <h1 className="text-xl font-bold text-blue-600">TechWebinar</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-600 hover:scale-99 transition-all duration-300">
        Register
      </button>
    </nav>
  );
};

export default Navbar;
