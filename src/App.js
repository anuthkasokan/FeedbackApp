import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import "./index.css";
import feedbackData from "./Data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  console.log(feedback);
  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </>
  );
}

export default App;
