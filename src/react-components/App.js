import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./Container";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Container />
      </React.Fragment>
    </Router>
  );
};

export default App;
