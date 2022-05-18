import { connect } from "react-redux";

const Poll = (props) => {
  console.log("Props from Poll: ", props);

  const { dispatch, poll, authedUser, questions } = props;
  const { author, id, optionOne, optionTwo, timestamp } = props.poll;

  // question
  // which option I chose
  // how many votes
  // percentage

  // answered questions || unanswered questions

  // ANSWERED
  console.log("one", optionOne);
  console.log("two", optionTwo);

  const optionOneNum = optionOne.votes.length;
  const optionTwoNum = optionTwo.votes.length;
  const optionsSum = optionOneNum + optionTwoNum;
  const userChoseOptionOne = optionOne.votes.includes(authedUser);
  console.log("choseOption1", userChoseOptionOne);

  return (
    <div>
      <h1>Poll</h1>
      <h3>{userChoseOptionOne ? optionOne.text : optionTwo.text}</h3>
      <p>{userChoseOptionOne ? optionOneNum : optionTwoNum}</p>
      <p>
        {userChoseOptionOne
          ? (optionOneNum / optionsSum) * 100
          : (optionTwoNum / optionsSum) * 100}{" "}
        %
      </p>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const poll = questions[id];
  return { authedUser, poll, questions };
};

export default connect(mapStateToProps)(Poll);
