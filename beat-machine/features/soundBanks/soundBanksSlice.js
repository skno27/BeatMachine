import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  power: false,
  activeSoundBank: null,
  volume: 0,
  // we may not need to use this, since the user wont be changing the engrained soundbanks, just which is action
  //   soundBanks: {
  //     1: {
  //       q: "./samples/chord1",
  //       w: "./samples/chord2",
  //       e: "./samples/chord3",
  //       a: "./samples/kick1",
  //       s: "./samples/snare1",
  //       d: "./samples/clap1",
  //       z: "./samples/openhat1",
  //       x: "./samples/closedhat1",
  //       c: "./samples/perc1",
  //     },
  //     2: {
  //       q: "./samples/samp1",
  //       w: "./samples/samp2",
  //       e: "./samples/samp3",
  //       a: "./samples/kick2",
  //       s: "./samples/snare2",
  //       d: "./samples/clap2",
  //       z: "./samples/openhat2",
  //       x: "./samples/closedhat2",
  //       c: "./samples/perc2",
  //     },
  //   },
};

const soundBanksSlice = createSlice({
  name: "soundBanks",
  initialState,
  reducers: {
    setPower: (state, action) => {
      state.power = action.payload;
    },
    setActiveSoundBank: (state, action) => {
      state.activeSoundBank = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const { setPower, setActiveSoundBank, setVolume } =
  soundBanksSlice.actions;

export default soundBanksSlice.reducer;
