// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";


import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import ProfilePage from "./components/ProfilePage";
import DrinksPage from "./components/DrinksPage";
import StoresPage from "./components/StoresPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path={'/'}>
            <SplashPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route path="/users/:id">
            <ProfilePage />
          </Route>

          <Route path="/drinks">
            <DrinksPage />
          </Route>

          <Route path="/bars">
            <StoresPage />
          </Route>

        </Switch>


      )}


    </>
  );
}

export default App;
