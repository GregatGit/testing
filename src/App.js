import React from "react";

import Header from "./components/Header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [{
  fName: 'Joe',
  lName: 'Doe',
  email: 'anemail@there.com',
  age: 25,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to see posts" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
