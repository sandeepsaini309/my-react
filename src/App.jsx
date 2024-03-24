// import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Header></Header>
      {/* <Header /> */}
      <main>
        <h2>Time to get started!</h2>
        <div className="coreConcept">
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>
            {/* shorter version (only can be used when keys match with dataObject) */}
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
