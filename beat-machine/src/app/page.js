"use client";
import BeatMachine from "./components/BeatMachine";
import SoundBank from "../banks";

export default function Home() {
  return (
    <div>
      <BeatMachine />
      <br />
      <h1
        id="disappearing"
        className="text-center -mt-10">
        Not very functional on Mobile lol. Please visit again from a desktop!
      </h1>
    </div>
  );
}
