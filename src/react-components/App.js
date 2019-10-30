import React, { useState } from "react";
import LandingPage from "./LandingPage";

const App = params => {
  const [page, setPage] = useState("landing");

  return [<LandingPage />];
};

export default App;
