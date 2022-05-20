import { Link } from "react-router-dom";
import { connect } from "react-redux";

const UnansweredPoll = (props) => {
  // const { dispatch, poll, authedUser, questions } = props;
  const { author, id, optionOne, optionTwo, timestamp } = props.poll;

  return (
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
  return { authedUser, poll, questions };
};

export default connect(mapStateToProps)(UnansweredPoll);
