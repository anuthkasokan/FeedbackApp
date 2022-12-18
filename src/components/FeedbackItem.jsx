import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FontAwesomeIcon
        className="close"
        onClick={() => handleDelete(item.id)}
        color="purple"
        icon={faTimes}
      />
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
