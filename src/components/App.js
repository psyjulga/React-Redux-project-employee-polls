import { handleInitialData } from "../actions/shared";
import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import PollPage from "./PollPage";
import Footer from "./Footer";
import Login from "./Login";
import "../styles/app.css";

const App = (props) => {
  console.log("Props from App: ", props);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

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
            {/* <Route path="/add" element={<NewPoll />} /> */}
            {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
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
