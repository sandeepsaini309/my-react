// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import viteImg from "/public/vite.svg";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={viteImg} alt="" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
