import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UnansweredPoll = ({ poll }) => {
  console.log("props from UNanswered poll", poll);
  const { author, id, optionOne, optionTwo, timestamp } = poll;

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

export default connect()(UnansweredPoll);
