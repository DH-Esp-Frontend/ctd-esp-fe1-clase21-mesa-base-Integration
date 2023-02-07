import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import videogamesSlice from "./slice";

/*
  En este archivo deberás importar todo lo necesario para que corra el middleware de saga.
  Dentro del método concat() deberás utilizar tu función gereradora.
*/


const store = configureStore({
  reducer: videogamesSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* */),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
