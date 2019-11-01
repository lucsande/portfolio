import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { setState } from "expect/build/jestMatchersObject";

import LandingPage from "./LandingPage";
import MoreInfo from "./MoreInfo";

const Container = ({ location }) => {
  const [tab, setTab] = useState("why");

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 2000, exit: 2000 }}
        classNames={"scroll"}
      >
        <Switch location={location}>
          <Route exact path="/">
            <LandingPage setTab={setTab} />
          </Route>
          <Route path="/info">
            <MoreInfo setTab={setTab} tab={tab} />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Container);
