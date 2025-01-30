import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/create">Create Post</Link>
  </nav>
);

export default Navbar;
