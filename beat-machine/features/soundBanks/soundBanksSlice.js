import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  power: false,
  activeSoundBank: null,
  volume: 0,
  message: "",
  /* gpt originally advised me to put my soundBank mapping 
  into the initial state.
  i chose against this to make soundBanks immutable
  to the user under the hood.
  the user will only control which is active, making 
  the bank collection static, in a sense
  */
};

const soundBanksSlice = createSlice({
  name: "soundBanks",
  initialState,
  reducers: {
    setPower: (state, action) => {
      state.power = action.payload;
      if (action.payload) {
        // when power is turned on...
        state.message = "Powering on...";
        // setTimeout(5000);
        // state.message = "";
        state.volume = 50;
        state.activeSoundBank = 1;
      } else {
        // when power is turned off...
        state.activeSoundBank = null;
        state.volume = 0;
        state.message = "";
      }
    },
    setActiveSoundBank: (state, action) => {
      if (state.power) {
        state.activeSoundBank = action.payload;
        state.message = `Bank ${action.payload}`;
      }
    },
    setVolume: (state, action) => {
      if (state.power) {
        state.volume = action.payload;
        state.message = `Volume: ${action.payload}`;
      }
    },
    setMessage: (state, action) => {
      if (state.power) {
        state.message = action.payload;
      }
    },
  },
});

export const { setPower, setActiveSoundBank, setVolume, setMessage } =
  soundBanksSlice.actions;

export default soundBanksSlice.reducer;
