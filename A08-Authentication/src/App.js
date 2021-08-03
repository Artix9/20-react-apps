import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";
import createAuth0Client from "@auth0/auth0-spa-js";

export default function App() {
  // dev-sebl5pdm.jp.auth0.com
  // KAyzB6yF8ohJ1WOkJzCezwmDNsVvSplb

  useEffect(() => {
    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: "dev-sebl5pdm.jp.auth0.com",
        client_id: "KAyzB6yF8ohJ1WOkJzCezwmDNsVvSplb",
      });

      const isAuthenticated = await auth0.isAuthenticated();
      console.log(isAuthenticated);

      const user = await auth0.getUser();
      console.log(user);
    }

    initAuth0();
  }, []);

  return (
    <Router>
      <div className="app">
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
