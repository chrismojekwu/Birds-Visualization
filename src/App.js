import { useState } from "react";
import Animals from "./Animals/Animals";
import "./App.css";

function App() {
  const [opacity, setOpacity] = useState(0);
  return (
    <>
      <Animals />
      <section className="footer">
        <div
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          className="title"
        >
          <a
            href="https://chrismojekwu.github.io/Portfolio/"
            target="_blank"
            rel="noopener"
          >
            BIRDS
          </a>
        </div>
        <div className="name" style={{ opacity: opacity }}>
          by chris mojekwu
        </div>
      </section>
    </>
  );
}

export default App;
