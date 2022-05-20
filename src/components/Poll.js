import { connect } from "react-redux";
import "../styles/poll.css";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

const Poll = (props) => {
  const { dispatch, poll, authedUser, questions } = props;
  const { author, id, optionOne, optionTwo, timestamp } = props.poll;

  const userChoseOptionOne = optionOne.votes.includes(authedUser);
  const userChoseOptionTwo = optionTwo.votes.includes(authedUser);
  const notAnsweredYet = !userChoseOptionOne && !userChoseOptionTwo;

  return !notAnsweredYet ? <AnsweredPoll /> : <UnansweredPoll />;
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const poll = questions[id];
  return { authedUser, poll, questions };
};

export default connect(mapStateToProps)(Poll);
