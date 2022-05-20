import { connect } from "react-redux";
import "../styles/poll.css";
// import AnsweredPoll from "./AnsweredPoll";
// import UnansweredPoll from "./UnansweredPoll";

const Poll = (props) => {
  console.log("props from POLL", props);
  const { dispatch, poll, authedUser, questions } = props;
  const { id, optionOne, optionTwo, timestamp } = props.poll;

  const userChoseOptionOne = optionOne.votes.includes(authedUser);
  const userChoseOptionTwo = optionTwo.votes.includes(authedUser);
  const notAnsweredYet = !userChoseOptionOne && !userChoseOptionTwo;

  return !notAnsweredYet ? (
    <Link to={`/questions/:question_${id}`} className="none">
      <div className="poll">
        <h1 className="poll-color poll-heading">
          Would you rather{" "}
          <span className="poll-color-light">{optionOne.text}</span> or{" "}
          <span className="poll-color-light">{optionTwo.text}?</span>
        </h1>
        <h3 className="poll-option">
          My answer: {userChoseOptionOne ? optionOne.text : optionTwo.text}
        </h3>
        <p>
          Votes: {userChoseOptionOne ? optionOneNum : optionTwoNum}
          <span className="poll-percent">
            {userChoseOptionOne
              ? Math.round((optionOneNum / optionsSum) * 100)
              : Math.round((optionTwoNum / optionsSum) * 100)}{" "}
            %
          </span>
        </p>
      </div>
    </Link>
  ) : (
    <Link to={`/questions/:question_${id}`} className="none">
      <div className="poll">
        <h1 className="poll-color poll-heading">
          Would you rather
          <div className="poll-color-light padding">
            <input type="radio" name="options" value="option-one" />
            {optionOne.text}
            <span> or</span>
          </div>{" "}
          <div className="poll-color-light padding">
            <input type="radio" name="options" value="option-two" />
            {optionTwo.text}
            <span> ?</span>
          </div>
        </h1>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const poll = questions[id];
  return { authedUser, poll, questions, id };
};

export default connect(mapStateToProps)(Poll);
