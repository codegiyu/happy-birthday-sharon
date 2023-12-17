"use client";
import CountdownScreen from "@/screens/CountdownScreen";
import FireworksScreen from "@/screens/FireworksScreen";
import MessageScreen from "@/screens/MessageScreen";
import WelcomeScreen from "@/screens/WelcomeScreen";
import useAppStore from "@/store/useAppStore";
import Head from "next/head";
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
      <Head key={"my-head"}>
        <meta name="description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="birthday message wishes" />
        <meta name="author" content="Edward-Precious Omegbu Codegiyu" />
        <meta property="og:type" content="message" />
        <meta property="og:title" content="Happy Birthday Sharon" />
        <meta property="og:description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta property="og:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702843441/sharon-favicon_gfkwki.jpg?_s=public-apps" />
        <meta property="og:url" content="https://happy-birthday-sharon-six.vercel.app" />
        <meta name="twitter:card" content="message" />
        <meta name="twitter:title" content="Happy Birthday Sharon" />
        <meta name="twitter:url" content="https://happy-birthday-sharon-six.vercel.app" />
        <meta name="twitter:site" content="@TheLonerider20" />
        <meta name="twitter:description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta name="twitter:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702843441/sharon-favicon_gfkwki.jpg?_s=public-apps" />
        <link rel="canonical" href="https://happy-birthday-sharon-six.vercel.app" />
      </Head>

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
