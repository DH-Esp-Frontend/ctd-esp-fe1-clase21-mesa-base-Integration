import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveAllGenres, saveGenreInformation } from "../thunk/thunkMiddleware";

export interface GameInformation {
  name: string,
  description?: string,
  background_image?: string,
  image_background?:string,
  id?:number,
 
}
interface State {
  allVideogames: GameInformation[];
  allGenres: string[];
  genreInformation: GameInformation;
  gameInformation: GameInformation;
  isLoading: boolean;
  isAGenreSelected: boolean;
  isAGameSelected: boolean;
}
const initialState: State = {
  allVideogames: [],
  allGenres: [],
  genreInformation: {
    /* definir los valorews iniciales*/
  },
  gameInformation: {
    /* definir los valorews iniciales*/
  },
  isLoading: false,
  isAGenreSelected: false,
  isAGameSelected: false,
};

export const videogamesSlice = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    getAllVideogames: (state, _action) => {
      state.isLoading = true;
      state.isAGenreSelected = false;
      state.isAGameSelected = false;
    },
    saveAllVideogames: () => {
      //saveAllVideogames debe guaradar en allVideogames lo que recibe por pauload

    },
    getIdGenre: (state, _action) => {
      state.isLoading = true;
      state.isAGenreSelected = true;
    },

    SagaFetchWithName: (state, _action) => {
      state.isLoading = true;
      state.isAGenreSelected = false;
      state.isAGameSelected = true;
    },
  SagaSaveGameInformation: () => {/* debe guardar en gameInformation lo que recibe por payload*/},
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveAllGenres.fulfilled,
        () => {/* debe guardar en allGenres lo que recibe por payload */}
      )
      .addCase(saveGenreInformation.fulfilled, () => {/* guardar en genreInformation lo que recibe por payload*/});
  },
});


export const {
  getAllVideogames,
  saveAllVideogames,
  getIdGenre,
  SagaFetchWithName,
  SagaSaveGameInformation,
} = videogamesSlice.actions;

export default videogamesSlice.reducer;
