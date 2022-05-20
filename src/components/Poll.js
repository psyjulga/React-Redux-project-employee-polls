import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/poll.css";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

const Poll = (props) => {
  console.log("props from poll", props);
  const { dispatch, poll, authedUser, questions } = props;
  const { author, id, optionOne, optionTwo, timestamp } = poll;

  const optionOneNum = optionOne.votes.length;
  const optionTwoNum = optionTwo.votes.length;
  const optionsSum = optionOneNum + optionTwoNum;
  const userChoseOptionOne = optionOne.votes.includes(authedUser);
  const userChoseOptionTwo = optionTwo.votes.includes(authedUser);
  const notAnsweredYet = !userChoseOptionOne && !userChoseOptionTwo;

  return !notAnsweredYet ? (
    <AnsweredPoll poll={poll} />
  ) : (
    <UnansweredPoll poll={poll} />
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const poll = questions[id];
  return { authedUser, poll, questions };
};

export default connect(mapStateToProps)(Poll);
