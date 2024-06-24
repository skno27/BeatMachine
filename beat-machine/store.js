import { configureStore } from "@reduxjs/toolkit";
import soundBanksReducer from "./features/soundBanks/soundBanksSlice.js";

const store = configureStore({
  reducer: {
    soundBanks: soundBanksReducer,
  },
});

export default store;
