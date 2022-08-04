import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Provider from "./context/provider";

function App () {
  return (
    <div className="App">
      <Provider>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
