import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");

  if (el) {
    //running in isolation
    mount(el);
  }
}

// context 2
// running file in prod mode through container app
// no gurantee that element "dev-product" available

export { mount };
