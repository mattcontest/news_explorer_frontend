import "./App.css";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

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
      <LoginModal title={"Sign In"} buttonText={"Sign in"} />
    </div>
  );
}

export default App;
