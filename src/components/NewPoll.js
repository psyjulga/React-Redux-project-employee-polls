import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSaveQuestion } from "../actions/questions";
import "../styles/newpoll.css";

const NewPoll = (props) => {
  const { authedUser, dispatch } = props;
  const navigate = useNavigate();

  const [question, setQuestion] = useState({ author: authedUser });
  const [disabled, setDisabled] = useState(true);

  const handlePollSubmit = (e) => {
    e.preventDefault();

    dispatch(handleSaveQuestion(question));

    setQuestion({ author: authedUser });
    setDisabled(true);
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });

    if (question.optionOneText !== "" && question.optionTwoText !== "") {
      setDisabled(false);
    }
  };

  return (
    <div className="new-poll">
      <h1 className="new-poll-heading">Add a new poll</h1>
      <form onSubmit={handlePollSubmit} className="poll-form">
        Would you rather <br />
        <input
          data-testid="test-option-one"
          name="optionOneText"
          value={question.optionOneText}
          onChange={handleInputChange}
          className="input-margin"
          type="text"
          size="50"
        />
        or <br />
        <input
          data-testid="test-option-two"
          name="optionTwoText"
          value={question.optionTwoText}
          onChange={handleInputChange}
          className="input-margin"
          type="text"
          size="50"
        />
        ?
        <br />
        <button disabled={disabled} className="add-button">
          Add poll
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(NewPoll);
