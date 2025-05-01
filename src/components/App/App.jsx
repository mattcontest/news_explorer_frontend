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
import { getArticles } from "../../utils/api.js";
import { checkToken, signIn, signUp } from "../../utils/auth.js";

function App() {
  // const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedNews, setSavedNews] = useState([]);

  const handleSignUp = async (email, password) => {
    return await signUp();
  };

  const handleSignIn = async (eial, password) => {
    try {
      const res = await signIn();
      if (res.token) {
        localStorage.setItem("token", res.token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await checkToken(token);
      if (res.data) {
        setIsLoggedIn(true);
        const { name, email, _id } = res.data;
        setCurrentUser({ name, email, _id });
        //After checking the token the relative saved articles from the db should be returned
        retrieveArticles();
      }
    } catch (error) {
      console.error("Unablel to check token", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
    //Clearing up the saved articles after the logout,
    //Even tough the /saved-news page won't be available to the user until it logs in
    setSavedNews({});

    console.log("Logged out!");
  };

  const retrieveArticles = async () => {
    const articles = await getArticles();
    setSavedNews(articles);
  };

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
    setIsLoading(true);

    setKeyword(keyword);

    getNews({ q: keyword })
      .then((res) => {
        const articles = res.articles;
        console.log("Check articles", articles);
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
        setNoResults(true);
      })
      .finally(() => setIsLoading(false));
    setNoResults(false);
  };

  // useEffect(() => {
  //Hardcoding the query for the fetch call for Stage 1.2
  // getNews({ q: keyword })
  //   .then((data) => {
  //     setIsLoading(true);
  //     console.log("Received data", data);
  //     const articles = data.articles;
  //     if (!articles || articles.length == 0) {
  //       // setNewsArticles([]);
  //       setNoResults(true);
  //     } else {
  //       return setNewsArticles(articles);
  //     }
  //   })
  //   .then(() => {
  //     console.log("Check inside newsArticles array", newsArticles);
  //   });
  // }, [newsArticles]);

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
                  <Main
                    isLoading={isLoading}
                    articles={newsArticles}
                    noResults={noResults}
                  />
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
