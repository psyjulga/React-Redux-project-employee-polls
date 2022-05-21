import { handleInitialData } from "../actions/shared";
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Footer from "./Footer";
import Login from "./Login";
import "../styles/app.css";

const App = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    props.dispatch(handleInitialData());
  }, [props.loading]);

  return (
    <Fragment>
      <LoadingBar />
      <div className="app-container">
        <Navbar />
        {props.loading === true ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/questions/:question_id" element={<PollPage />} />
            <Route path="/add" element={<NewPoll />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        )}
        <Footer />
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
