"use client";
import { useState, useEffect } from "react";
import akaneko from "akaneko";

const AnimePicScreen: React.FC = () => {
    const [animePic, setAnimePic] = useState<string>("");

    const getPic = async () => {
        const pic = await fetch("/api/getMobileAnimeWallpaper")
        const result = await fetch("https://restcountries.com/v3.1/alpha/NGA")
        console.log({pic, result})
    }

    useEffect(() => {
        getPic();
    }, [])

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">

        </section>
    )
}

export default AnimePicScreen;