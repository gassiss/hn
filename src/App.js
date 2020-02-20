import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

const Post = lazy(() => import("./components/Post"));

function NotFound() {
  return <h1>Not found</h1>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id?" component={Post} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
