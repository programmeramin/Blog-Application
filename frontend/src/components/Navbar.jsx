import { Link } from "react-router";
function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <h1 className="text-lg font-bold">My Blog</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/register" className="hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
