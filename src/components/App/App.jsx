import "./App.css";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="page__content">
        <div className="page__style">
          <Header />
          <About />
        </div>
        {/* <h1>About</h1> */}
      </div>
    </div>
  );
}

export default App;
