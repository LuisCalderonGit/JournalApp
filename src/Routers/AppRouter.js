import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";


import { JournalScreen } from "../components/Journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
// import { PublicRoutes } from "./PublicRoutes";
// import { PrivateRoutes } from "./PrivateRoutes";

import { startLoadingNotes } from "../actions/notes";


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checkin, setcheckin] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {

    const auth = getAuth()
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogedIn(true);
        dispatch(startLoadingNotes(user.uid))

      } else {
        setIsLogedIn(false);
      }

      setcheckin(false);

    })

  }, [dispatch, setcheckin, setIsLogedIn]);


  if (checkin) {
    return (
      <h1>Wait a moment...</h1>
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
