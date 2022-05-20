import { connect } from "react-redux";
import { handleLogin } from "../actions/shared";
import "../styles/user.css";

const User = (props) => {
  const logout = () => {
    props.dispatch(handleLogin(null));
  };

  return (
    <div className="user">
      <img
        src={props.avatarURL}
        alt={`${props.name.toLowerCase()} avatar`}
        width="35"
        height="35"
      />
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  const { avatarURL } = user;
  return {
    avatarURL,
    name: user.name,
  };
};

export default connect(mapStateToProps)(User);
