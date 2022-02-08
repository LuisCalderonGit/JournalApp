import React from "react";
import { Provider } from 'react-redux';
import { AppRouter } from "./Routers/AppRouter";


// import { BrowserRouter } from "react-router-dom";

import { store } from "./stores/store";


export const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
