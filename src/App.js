import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const markdownDefault = `
  ## markdown preview 
  > This is super cool. 
  ### hello world 
  Lorem ipsum dolor sit amet, consectetur adipiscinwawag elit. Phasellus dapibus nisl sem, sed congue arcu semper sit ekanamet. Pellentesque tempor sit amet odio eu blandit. Sed a commodo odio, at vehicula urna. Cras et sodales ante. Sed iaculis convallis laoreet. Mauris volutpat eros vel erat convallis, mattis rhoncus lectus ornare. Suspendisse scelerisque, lorem eu porta consequat, nibh nulla aliquet ipsum, sed facilisis dui lorem a arcu. Suspendisse vel lectus ut arcu facilisis porta. Aliquam lobortis hendrerit purus at rhoncus. Vestibulum mattis nunc faucibus mattis pellentesque. Duis quis elit nunc. `;
  
  const [markdown, setMarkdown] = useState(markdownDefault);
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
