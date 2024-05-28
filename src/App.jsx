import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
