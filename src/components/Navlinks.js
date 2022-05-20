import { Link } from "react-router-dom";
import "../styles/navlinks.css";

const Navlinks = () => {
  return (
    <ul className="navlinks">
      <li className="horizontal">
        <Link to={"/"} className="none">
          Home
        </Link>
      </li>
      <li className="horizontal">
        <Link to={"/add"} className="none">
          New Poll
        </Link>
      </li>
      <li className="horizontal">
        <Link to={"/leaderboard"} className="none">
          Leaderboard
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
