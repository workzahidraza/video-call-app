import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-5 flex justify-between">

      <h1 className="text-green-400 text-xl font-bold">
        AI Platform
      </h1>

      <div className="flex gap-6">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/voice">Voice Feature</Link>

      </div>

    </nav>
  );
}

export default Navbar;