import { handleInitialData } from "../actions/shared";
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import PollPage from "./PollPage";

const App = (props) => {
  console.log("Props from App: ", props);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div>
        <Navbar />
        {props.loading === true ? null : (
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/questions/:question_id" element={<PollPage />} />
            {/* <Route path="/add" element={<NewPoll />} /> */}
            {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});
// props.loading => true / false => if authedUser

export default connect(mapStateToProps)(App);
