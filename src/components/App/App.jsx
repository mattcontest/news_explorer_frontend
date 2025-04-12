import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";
import Main from "../Main/Main.jsx";
import { APIkey } from "../../utils/newsApi.js";
import { getNews } from "../../utils/newsApi.js";

function App() {
  // const [count, setCount] = useState(0);
  const [activeModal, setActiveModal] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedNews, setSavedNews] = useState([]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setActiveModal("login");
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setActiveModal("signup");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSearchSubmit = (keyword) => {
    setKeyword(keyword);
    setIsLoading(true);
    getNews((res) => {
      const articles = res.articles;
      if (!articles || articles.length === 0) {
        setNoResults(true);
      } else {
        setNewsArticles(
          articles.map((article) => {
            return {
              ...article,
              // keyword: keyword,
            };
          })
        );

        console.log("Content of articles after search submit", newsArticles);
      }
    })
      .catch((err) => {
        console.error(`Error ${err}`);
      })
      .finally(() => setIsLoading(false));
    setNoResults(false);
  };

  useEffect(() => {
    //Hardcoding the query for the fetch call for Stage 1.2
    getNews({ q: keyword, apiKey: APIkey })
      .then((data) => {
        console.log("Received data", data);
        const articles = data.articles;
        if (!articles || articles.length == 0) {
          setNewsArticles([]);
        } else {
          setNewsArticles([...articles]);
        }
      })
      .then(() => {
        console.log("Check inside newsArticles array", newsArticles);
      });
  }, [keyword]);

  return (
    <div className="page">
      <div className="page__content">
        <div className="page__style">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    handleLoginClick={handleLoginClick}
                    isLoggedIn={isLoggedIn}
                    handleSearchSubmit={handleSearchSubmit}
                    keyword={keyword}
                    setKeyword={setKeyword}
                  />
                  <Main isLoading={false} articles={newsArticles} />
                  <About />
                </>
              }
            />

            <Route
              path="/saved-news"
              element={
                <>
                  {/* <Header handleLoginClick={handleLoginClick} /> */}
                  <SavedNewsHeader
                    handleLoginClick={handleLoginClick}
                    isLoggedIn={isLoggedIn}
                  />
                  <SavedNews articles={newsArticles} />
                </>
              }
            />
            {/* <Main isLoading={true} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
      <LoginModal
        title={"Sign In"}
        buttonText={"Sign in"}
        activeModal={activeModal}
        isOpen={activeModal === "login"}
        handleCloseModal={closeActiveModal}
        handleSignupClick={handleSignupClick}
      />
      <RegisterModal
        title={"Sign Up"}
        buttonText={"Sign Up"}
        activeModal={activeModal}
        isOpen={activeModal === "signup"}
        handleCloseModal={closeActiveModal}
        handleLoginClick={handleLoginClick}
      />
      <ConfirmationModal
        title={"Registation succesfully completed! "}
        activeModal={activeModal}
        handleCloseModal={closeActiveModal}
        buttonContent={"Sign in"}
        handleSignupClick={handleSignupClick}
      />
    </div>
  );
}

export default App;
