import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Poll from "./Poll";
import NotFound from "./NotFound";

const PollPage = (props) => {
  const { idsArr } = props;

  const { question_id } = useParams();
  const id = question_id.replace(":question_", "");

  return idsArr.includes(id) ? <Poll id={id} /> : <NotFound page="poll" />;
};

const mapStateToProps = ({ questions }) => {
  const idsArr = Object.keys(questions);
  return {
    idsArr,
  };
};

export default connect(mapStateToProps)(PollPage);
