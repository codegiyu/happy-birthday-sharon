import useAppStore from "@/store/useAppStore";
import { Fireworks } from "fireworks-js";
import { useEffect, useRef } from "react";


const FireworksScreen: React.FC = () => {
    const setCurrentScreen = useAppStore(state => state.setCurrentScreen);
    const fireworksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (fireworksRef.current) {
            const fireworks = new Fireworks(fireworksRef.current, {
                hue: { min: 0, max: 273 },
                acceleration: 1,
                brightness: { min: 22, max: 82 },
                decay: { min: 0.015, max: 0.035 },
                delay: { min: 30, max: 60 },
                explosion: 5,
                flickering: 50,
                intensity: 44,
                friction: 0.96,
                gravity: 1.09,
                opacity: 0.1,
                particles: 200,
                traceLength: 4.72,
                traceSpeed: 5,
                rocketsPoint: { min: 40, max: 60 },
                lineWidth: { explosion: { min: 1, max: 5.81 }, trace: { min: 0.1, max: 3.55 } },
                lineStyle: "square"
            })
            fireworks.start();

            setTimeout(() => {
                setCurrentScreen("message");
                // document.getElementById("message")?.scrollIntoView({ behavior: "smooth" })
            }, 20000)
        }
    }, [setCurrentScreen])

    return (
        <section id="fireworks" className="w-full h-screen relative overflow-hidden">
            <div className="fireworks bg-transparent w-full h-full bg-[50%_50%]" ref={fireworksRef}>

            </div>
            <div className="absolute w-full h-screen bg-transparent top-0 left-0 grid place-items-center">
                
            </div>
        </section>
    )
}

export default FireworksScreen;