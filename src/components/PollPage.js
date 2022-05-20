import { useParams } from "react-router-dom";
import Poll from "./Poll";

const PollPage = () => {
  const { question_id } = useParams();
  const id = question_id.replace(":question_", "");

  return <Poll id={id} />;
};

export default PollPage;
