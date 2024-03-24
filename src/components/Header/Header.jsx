// import viteImg from "/public/vite.svg";
import reactLogo from "../../assets/react.svg";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactLogo} style={{ width: "100px" }} alt="react logo" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
