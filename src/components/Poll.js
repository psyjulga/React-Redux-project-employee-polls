import { connect } from "react-redux";
import "../styles/poll.css";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

const Poll = (props) => {
  console.log("props from poll", props);
  const { poll, authedUser } = props;
  const { optionOne, optionTwo } = poll;

  const userChoseOptionOne = optionOne.votes.includes(authedUser);
  const userChoseOptionTwo = optionTwo.votes.includes(authedUser);
  const notAnsweredYet = !userChoseOptionOne && !userChoseOptionTwo;

  return (
    <div className="poll-container">
      {!notAnsweredYet ? (
        <AnsweredPoll poll={poll} />
      ) : (
        <UnansweredPoll poll={poll} />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const poll = questions[id];
  return { authedUser, poll };
};

export default connect(mapStateToProps)(Poll);
