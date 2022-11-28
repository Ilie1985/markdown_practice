import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");

  const textHandler = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={textHandler}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
      
        </article>
      </section>
    </main>
  );
}

export default App;
