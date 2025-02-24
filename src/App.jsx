import React from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import './index.css';

const App = () => {
  return (
      <div className="flex">
        <Sidebar />
        <MainPage />
      </div>
  );
};

export default App;