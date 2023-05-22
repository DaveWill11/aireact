import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { sendCall } from "./scripts/aicall.js";


function App() {
  const [question, setQuestion] = useState('Hello, ChatGPT');
  const [submitting, setSubmitting] = useState(false);
  const [answer, setAnswer] = useState('No Answer Yet');
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    let result = sendCall(question);
    result.then(e => setAnswer(e));
    // Replace this with the AI Call
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  return (
      <div className="wrapper">
        <h1>How About Them AI</h1>
        {submitting &&
            <div>Submitting Form...</div>
        }
        <p id={"answer"}>{answer}
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Question</p>
              <input name="question" value={question} onChange={e => {setQuestion(e.target.value)}}/>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default App;
