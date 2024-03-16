import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./component/MarketingApp";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

// to generate random classname for marketing app
const generateclassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateclassName}>
        <h1>Container App</h1>
        <hr />
        <h1>Header</h1>
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
