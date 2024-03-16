import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Pricing from "./component/Pricing";
import Landing from "./component/Landing";

// to generate random classname for marketing app
const generateclassName = createGenerateClassName({
  productionPrefix: 'ma'
})
const App = () => {
  return (
    <div>
      <StylesProvider  generateClassName={generateclassName}>
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
