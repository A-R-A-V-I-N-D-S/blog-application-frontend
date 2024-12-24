// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import TopBar from "./components/top-bar/TopBar";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/SettingsPage/Settings";
import SinglePostPage from "./pages/single/SinglePostPage";
import Write from "./pages/WritePage/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorDialogBox from "./components/dialog-box/ErrorDialogBox";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          // render={() => (isLoggedIn ? <Navigate to="/" /> : <Register />)}
          element={isLoggedIn ? <HomePage /> : <Register />}
        />
        <Route
          path="/login"
          // render={() => (isLoggedIn ? <HomePage /> : <Login />)}
          element={isLoggedIn ? <HomePage /> : <Login />}
        />
        <Route
          path="/write"
          element={
            isLoggedIn ? (
              <Write />
            ) : (
              <>
                <Register />
                <div>
                  <ErrorDialogBox
                    message="You have not logged in"
                    duration={3000}
                  />
                </div>
              </>
            )
          }
        />
        <Route
          path="/settings"
          // render={() => (isLoggedIn ? <Settings /> : <Login />)}
          element={
            isLoggedIn ? (
              <Settings />
            ) : (
              <>
                <Register />
                <ErrorDialogBox />
              </>
            )
          }
        />
        <Route path="/post/:postId" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
