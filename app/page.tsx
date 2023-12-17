"use client";
import CountdownScreen from "@/screens/CountdownScreen";
import FireworksScreen from "@/screens/FireworksScreen";
import MessageScreen from "@/screens/MessageScreen";
import WelcomeScreen from "@/screens/WelcomeScreen";
import useAppStore from "@/store/useAppStore";
import { useEffect } from "react";


export default function Home() {
  const currentScreen = useAppStore(state => state.currentScreen);
  const setCurrentScreen = useAppStore(state => state.setCurrentScreen);

  useEffect(() => {
    console.log({currentScreen});
  }, [currentScreen])

  useEffect(() => {
    setCurrentScreen("welcome");
  }, [setCurrentScreen])

  return (
    <main className="w-full h-screen bg-black-0a ralative overflow-hidden">
      {currentScreen === "welcome" ? (
        <div className="w-full h-screen absolute top-0 left-0 z-1">
          <WelcomeScreen />
        </div>
      ) : null}

      {currentScreen === "countdown" ? (
        <div className="w-full h-screen absolute top-0 left-0 z-10">
          <CountdownScreen />
        </div>
      ) : null}

      {currentScreen === "fireworks" ? (
        <div className="w-full h-screen absolute top-0 left-0 z-20">
          <FireworksScreen />
        </div>
      ) : null}
      
      {currentScreen === "message" ? (
        <div className="w-full h-screen absolute top-0 left-0 z-30">
          <MessageScreen />
        </div>
      ) : null}
    </main>
  )
}
