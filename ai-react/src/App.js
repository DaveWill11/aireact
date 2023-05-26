import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { sendCall } from "./scripts/aicall.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


function App() {
  const [question, setQuestion] = useState('Hello, ChatGPT');
  const [submitting, setSubmitting] = useState(false);
  const [answer, setAnswer] = useState('No Answer Yet');
  const [language, setLanguage] = useState('English');
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    let result = sendCall(question, language);
    result.then(e => setAnswer(e));
    // Replace this with the AI Call
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  return (
      <div className="wrapper">
        <h1>The Maniacal Translator</h1>
        {submitting &&
            <div>Submitting Form...</div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Text to translate: </p>
              <input name="question" value={question} onChange={e => {setQuestion(e.target.value)}}/>
            </label>
          </fieldset>
            <br/>
            <label>Choose a language to translate to: </label>
            <select class="form-select" id="language" value={language} onChange={e =>{setLanguage(e.target.value)}}>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
            </select>
          <button type="submit">Submit</button>
        </form>
          <br/>
          <fieldset>
              <p>Translated text: </p>
          <p id={"answer"}>{answer}
          </p>
          </fieldset>
      </div>
  );
}

export default App;
