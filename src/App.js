import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import "./index.css";
import feedbackData from "./Data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackList
          feedback={feedback}
          handleDelete={handleDelete}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;
