import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import { BaseRoutes } from "./routes/routes.component";
import { scrollToTop } from "./utils/utils";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <>
      <Header />
      {/* Defining routes as array to help keep component clean and DRY */}
      {BaseRoutes.map(({ key, ...otherProps }) => (
        <Route key={key} {...otherProps} />
      ))}

      <ToastContainer
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <ToastContainer />
    </>
  );
}

export default App;
