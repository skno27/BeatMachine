# Beat Machine

This project was a great opportunity for me to dive into Redux and apply it to a real-world application. I built a virtual drum machine as part of my freeCodeCamp Frontend Libraries certification. The machine features custom React components and uses Redux for state management to control power, volume, and the active sound bank.

As a music producer, I designed the machine to replicate some response features of hardware drum machines I've used, such as re-triggering samples when a pad is hit. See if you can guess the source of the samples loaded onto Bank 1!

## Features

- **Power Control**: The power switch enables or disables all functionality. Turning the power on initializes the volume to 50% and sets the sound bank to Bank 1.
- **Volume Control**: Adjusts the volume across all pads dynamically.
- **Sound Bank Selection**: Dynamically assigns a different set of sounds to each pad by updating the `ref` attribute of the associated audio element.
- **Live Feedback Display**: Updates a "message" state variable to display real-time feedback in the control panel whenever state changes occur.

## Technology and Tools

- **Next.js**: My go-to framework for React due to its simplicity and powerful features.
- **React-Redux**: Used to manage the app's global state. It handles:
  - Power state: Ensures the drum machine is functional only when powered on.
  - Volume state: Manages the volume across all drum pads.
  - Sound Bank state: Switches between different sets of sounds.
  - Message state: Provides real-time updates to the display panel.
- **FontAwesome**: Added for the "hazard" icon to enhance the design.
- **freeCodeCamp Testing Module**: Included for unit testing.

## Demo

This project is live on Vercel: [Beat Machine](https://beat-machine.vercel.app/)

## Run the Project Locally

To run this project locally, follow these steps:

1. **Install Node.js**  
   If you don't have Node.js installed, you can download it from the [official Node.js website](https://nodejs.org/). Choose the "LTS" version for the most stable experience.  

   To verify installation, run the following commands in your terminal or command prompt:  
   ```bash
   node -v
   npm -v
   ```
2. **Copy the repo, install dependencies, and start the dev server**
  If you’re using Command Prompt or PowerShell, ensure you’re in the correct directory. The commands above should work without modification, but you may need to use \ as a path separator (e.g., cd BeatMachine\beat-machine).

  ```bash
  git clone https://github.com/skno27/BeatMachine.git
  cd BeatMachine/beat-machine
  npm install
  npm run start
  ```
