import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";
import Pricing from "./component/Pricing";
import Landing from "./component/Landing";

const App = () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exect path="/pricing" component={Pricing} />
            <Route exect path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App
