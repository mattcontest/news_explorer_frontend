import "./App.css";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="page__content">
        <div className="page__style">
          <Header />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
