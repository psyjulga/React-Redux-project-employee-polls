import { connect } from "react-redux";
import Navlinks from "./Navlinks";
import User from "./User";
import "../styles/navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Navlinks />
      {!props.loading && <User />}{" "}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(Navbar);
