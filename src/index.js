import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
// import Loading from "./Loading/Spinner";
import "./index.css";
ReactDOM.render(
  <Suspense
    fallback={
      <div className="spin">
        <div className="spinner-border fast" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    }
  >
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();