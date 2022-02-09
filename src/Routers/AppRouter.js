import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import { JournalScreen } from "../components/Journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checkin, setcheckin] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogedIn(true);
      } else {
        setIsLogedIn(false);
      }

      setcheckin(false);

    })

  }, [dispatch, setcheckin, setIsLogedIn]);


  if (checkin) {
    return (
      <h1>Espere...</h1>
    )
  }


  return (
    <BrowserRouter>
      <Routes>

        {isLogedIn ?
          <Route path="/" element={<JournalScreen />} />
          :
          // <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<AuthRouter />} />

        }
        {/* {isLogedIn ?
          <Route path="/" element={<PublicRoutes isLoged={isLogedIn} childrenComponent={JournalScreen} />} />
          :
          // <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<PrivateRoutes isLoged={isLogedIn} childrenComponent={AuthRouter} />} />

        } */}
      </Routes>
    </BrowserRouter>
  );
};
