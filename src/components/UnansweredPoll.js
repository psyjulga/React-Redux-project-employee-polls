import { connect } from "react-redux";
import Author from "./Author";
import formatDate from "../utils/formatDate";

const UnansweredPoll = (props) => {
  const { poll, users } = props;
  const { author, optionOne, optionTwo, timestamp } = poll;
  const avatar = users[author].avatarURL;
  const name = users[author].name;

  const date = formatDate(timestamp);

  return (
    <div className="poll">
      <div className="poll-left">
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

      <div className="poll-right">
        <Author name={name} date={date} avatar={avatar} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }, { poll }) => {
  return {
    users,
    poll,
  };
};

export default connect(mapStateToProps)(UnansweredPoll);
