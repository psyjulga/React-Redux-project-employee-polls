import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AnsweredPoll = (props) => {
  const { dispatch, poll, authedUser, questions } = props;
  const { author, id, optionOne, optionTwo, timestamp } = props.poll;

  const optionOneNum = optionOne.votes.length;
  const optionTwoNum = optionTwo.votes.length;
  const optionsSum = optionOneNum + optionTwoNum;
  const userChoseOptionOne = optionOne.votes.includes(authedUser);

  return (
    <Link to={`/questions/:question_${id}`} className="none">
      <div className="poll">
        <h1 className="poll-color poll-heading">
          Would you rather{" "}
          <span className="poll-color-light">{optionOne.text}</span> or{" "}
          <span className="poll-color-light">{optionTwo.text}?</span>
        </h1>
        <h3 className="poll-option">
          {userChoseOptionOne ? optionOne.text : optionTwo.text}
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
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const poll = questions[id];
  return { authedUser, poll, questions };
};

export default connect(mapStateToProps)(AnsweredPoll);
