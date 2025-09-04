import { useCallback, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import CurrentUserContext from "../context/CurrentUserContext.js";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";
import Main from "../Main/Main.jsx";
import { APIkey } from "../../utils/newsApi.js";
import { getNews } from "../../utils/newsApi.js";
import {
  deleteItem,
  getArticles,
  getSavedNews,
  saveItem,
} from "../../utils/api.js";
import { checkToken, signIn, signUp } from "../../utils/auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

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
  const [authLoading, setAuthLoading] = useState(true);

  // const handleSignUp = async (email, password) => {
  const handleSignUp = async (email, name, password) => {
    console.log("In future it will use email, username and password");
    console.log("email", email);
    console.log("username", name);
    console.log("password", password);
    try {
      const res = await signUp(email, name, password);

      if (res.token) {
        // console.log("-Sign Up 2. Get Token", res.token);
        localStorage.setItem("token", res.token);
        // handleCheckToken;
      }
      return res;
    } catch (error) {
      console.error("Signin Up Error", error);
      //Throwing the error so it can be catched by the handleSubmit in RegisterModal.jsx
      throw error;
    }
  };

  // const handleSignIn = async (email, password) => {
  //   try {
  //     console.log("1. Starting with sign in");
  //     const res = await signIn();
  //     if (res.token) {
  //       console.log("2. Get token", res.token);
  //       localStorage.setItem("token", res.token);
  //       handleCheckToken();
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleSignIn = async ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    console.log("We reached this stage", email, password);
    const res = await signIn({ email, password });
    if (!res.token) {
      throw new Error("Login Failed from App.jsx");
    }
    setIsLoggedIn(true);
    localStorage.setItem("token", res.token);
    setCurrentUser({ name: res.name, _id: res._id });
    closeActiveModal();
    return res;

    // signIn({ email, password })
    //   .then((res) => {
    //     // console.log("SUCCESS: Got response from signIn", res);
    //     // console.log("Check token", res.token);

    //     if (res.token) {
    //       setIsLoggedIn(true);
    //       localStorage.setItem("token", res.token);
    //       // console.log("Check inside of res", res);
    //       setCurrentUser({ name: res.name, _id: res._id });

    //       closeActiveModal();
    //     }
    //   })
    //   .catch((err) => {
    //     console.error("Failed to log in", err);
    //   });
  };

  const handleCheckToken = async () => {
    const token = localStorage.getItem("token");

    if (
      !token ||
      token === "undefined" ||
      token === null ||
      token.trim() === ""
    ) {
      // console.log("5. No Token found so no articles retrieved");
      setIsLoggedIn(false);
      setAuthLoading(false);
      return;
    }

    try {
      const res = await checkToken(token);

      console.log("HandleCheckToken", res);

      if (res) {
        setIsLoggedIn(true);
        const { name, email, _id } = res;
        console.log("When checking the token, res -->", res);
        setCurrentUser({ name, email, _id });
        // console.log("5. About to retrieve articles");
        //After checking the token the relative saved articles from the db should be returned
        // retrieveArticles();
      }
    } catch (error) {
      console.error("Unable to check token", error);
      //Removing immediately the bad token
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
    //Clearing up the saved articles after the logout,
    setSavedNews([]);

    console.log("Logged out!");
  };

  const retrieveArticles = async () => {
    const articles = await getArticles();
    console.log("After retrieving the articles", articles);
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

  const handleRegistrationSuccess = () => {
    console.log("Registration success confirmation!");
    setActiveModal("confirm");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  function checkItemInArray(item, array) {
    return array.some((arrayItem = item.url === arrayItem.url));
  }

  const handleSaveItem = (item) => {
    item.isSaved = !item.isSaved;

    const token = localStorage.getItem("token");

    console.log("Check keyword", keyword);
    console.log("Check entire Item", item);
    const refinedArticle = {
      keyword: keyword,
      title: item.title,
      date: item.date,
      source: item.source || "Unknown",
      link: item.link,
      image: item.image,
      text: item.text,
    };

    console.log("This refinedArticle from App.jsx", refinedArticle);

    if (
      !refinedArticle.title ||
      !refinedArticle.date ||
      !refinedArticle.link ||
      !refinedArticle.image ||
      !refinedArticle.text
    ) {
      console.warn("Skipping invalid article:", refinedArticle);
      return;
    }

    const isAlreadySaved = savedNews.some(
      (saved) => saved && saved.link === refinedArticle.link
    );

    if (isAlreadySaved) {
      // console.log("News already saved");
      return;
    }

    saveItem(refinedArticle, token)
      .then((res) => {
        const savedArticle = res.data;
        setSavedNews([savedArticle, ...savedNews]);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleRetrieveSavedArticles = () => {
    const token = localStorage.getItem("token");
    if (token) {
      getSavedNews(token)
        .then((res) => {
          setSavedNews([...res.data]);
        })
        .catch((err) => {
          console.error(`Error ${err}`);
        });
    }
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
              console.log("Individual article", article._id);
              return {
                ...article,
              };
            })
          );

          // console.log("Content of articles after search submit", );
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

  const handleDeleteArticle = (item) => {
    console.log("Article id about to get deleted", item);
    const token = localStorage.getItem("token");
    deleteItem(item, token).then((res) => {
      console.log("Res from delete article handle", res);
      console.log("Check this item", item);

      setSavedNews((prevArticles) => {
        return prevArticles.filter((thing) => thing._id !== item);
      });
    });
  };

  const openLogin = useCallback(() => {
    setActiveModal("login");
  }, []);

  useEffect(() => {
    // console.log("App mounted, checking token");
    handleCheckToken();
    // console.log("Check current user", currentUser);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      handleRetrieveSavedArticles();
    }
    // }, [isLoggedIn, authLoading]);
  }, [isLoggedIn]);

  useEffect(() => {
    // console.log("Check current user", currentUser.toString.length);
    // console.log("Insde CurrentUser state", currentUser.name);
    if (typeof currentUser.name === "string") {
      console.log("Insde CurrentUser state", currentUser);
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
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
                      handleLogout={handleLogout}
                    />
                    <Main
                      isLoggedIn={isLoggedIn}
                      isLoading={isLoading}
                      articles={newsArticles}
                      noResults={noResults}
                      handleSaveItem={handleSaveItem}
                      setActiveModal={setActiveModal}
                      savedNews={savedNews}
                      handleDeleteItem={handleDeleteArticle}
                    />
                    <About />
                  </>
                }
              />

              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    onRequiredAuth={openLogin}
                    authLoading={authLoading}
                  >
                    <>
                      <SavedNewsHeader
                        handleLoginClick={handleLoginClick}
                        isLoggedIn={isLoggedIn}
                        handleLogout={handleLogout}
                        articles={savedNews}
                      />
                      <SavedNews
                        articles={savedNews}
                        isLoggedIn={isLoggedIn}
                        handleDeleteArticle={handleDeleteArticle}
                      />
                    </>
                  </ProtectedRoute>
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
          onSubmit={handleSignIn}
        />
        <RegisterModal
          title={"Sign Up"}
          buttonText={"Sign Up"}
          activeModal={activeModal}
          isOpen={activeModal === "signup"}
          handleCloseModal={closeActiveModal}
          handleLoginClick={handleLoginClick}
          handleSignUp={handleSignUp}
          handleRegistrationSuccess={handleRegistrationSuccess}
        />
        <ConfirmationModal
          title={"Registation succesfully completed! "}
          activeModal={activeModal}
          isOpen={activeModal === "confirm"}
          handleCloseModal={closeActiveModal}
          buttonContent={"Sign in"}
          handleSignupClick={handleSignupClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
