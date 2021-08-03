import React, { createContext, useEffect, useState } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import { useContext } from "react";

export const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);

export function Auth0Provider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: "dev-sebl5pdm.jp.auth0.com",
        client_id: "KAyzB6yF8ohJ1WOkJzCezwmDNsVvSplb",
        redirect_uri: window.location.origin,
      });

      setAuth0Client(auth0);

      // handle redirect when user comes back
      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        try {
          await auth0.handleRedirectCallback();
        } catch (err) {
          alert(err);
        }

        window.location.replace(window.location.pathname);
      }

      // is a user authenticated
      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      // go grab the user
      if (isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      setIsLoading(false);
    }

    initAuth0();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login: (...p) => auth0Client.loginWithRedirect(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
