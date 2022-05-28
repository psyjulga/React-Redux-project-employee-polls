import { useNavigate } from "react-router-dom";
import "../styles/notfound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const toHomepage = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <h1> 404 </h1>
      <p className="not-found-text">Sorry, this poll doesn't exist!</p>
      <button className="back-home-button" onClick={toHomepage}>
        Back to Homepage
      </button>
    </div>
  );
};

export default NotFound;
