import { connect } from "react-redux";
import Author from "./Author";
import formatDate from "../utils/formatDate";
import { handleAnswerQuestion } from "../actions/questions";
import { updateUsersAnswers } from "../actions/users";

const UnansweredPoll = (props) => {
  const { poll, users, authedUser } = props;
  const { id, author, optionOne, optionTwo, timestamp } = poll;
  const avatar = users[author].avatarURL;
  const name = users[author].name;

  const date = formatDate(timestamp);

  const chooseOption = (e) => {
    const answer = e.target.value;
    const qid = id;

    props.dispatch(handleAnswerQuestion({ authedUser, qid, answer }));
    props.dispatch(updateUsersAnswers({ authedUser, qid, answer }));
  };

  return (
    <div className="poll">
      <div className="poll-left">
        <h1 className="poll-color poll-heading">
          Would you rather
          <div
            data-testid="test-radiobuttons"
            className="radiobuttons"
            onChange={chooseOption}
          >
            <div className="poll-color-light padding">
              <input type="radio" name="options" value="optionOne" />
              {optionOne.text}
              <span> or</span>
            </div>{" "}
            <div className="poll-color-light padding">
              <input type="radio" name="options" value="optionTwo" />
              {optionTwo.text}
              <span> ?</span>
            </div>
          </div>
        </h1>
      </div>

      <div className="poll-right">
        <Author name={name} date={date} avatar={avatar} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }, { poll }) => {
  return {
    users,
    poll,
    authedUser,
  };
};

export default connect(mapStateToProps)(UnansweredPoll);
