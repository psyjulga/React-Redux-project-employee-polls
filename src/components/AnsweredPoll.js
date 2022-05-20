import { connect } from "react-redux";
import formatDate from "../utils/formatDate";
import Author from "./Author";

const AnsweredPoll = (props) => {
  const { poll, authedUser, users } = props;
  const { author, optionOne, optionTwo, timestamp } = poll;
  const avatar = users[author].avatarURL;
  const name = users[author].name;

  const date = formatDate(timestamp);

  const optionOneNum = optionOne.votes.length;
  const optionTwoNum = optionTwo.votes.length;
  const optionsSum = optionOneNum + optionTwoNum;
  const userChoseOptionOne = optionOne.votes.includes(authedUser);

  return (
    <div className="poll">
      <div className="poll-left">
        <h1 className="poll-color poll-heading">
          Would you rather <br />
          <br />
          <span className="poll-color-light">{optionOne.text}</span>
          <br />
          or <span className="poll-color-light">{optionTwo.text}?</span>
          <br />
          <br />
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
      <div className="poll-right">
        <Author name={name} date={date} avatar={avatar} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }, { poll }) => {
  return { authedUser, poll, users };
};

export default connect(mapStateToProps)(AnsweredPoll);
