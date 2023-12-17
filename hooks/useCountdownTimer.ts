"use client";
import { useState, useEffect, useCallback } from "react";
import useAppStore from "@/store/useAppStore";

const useCountdownTimer = () => {
    const countdownDueDate = useAppStore(state => state.countdownDueDate);
    const currentScreen = useAppStore(state => state.currentScreen);
    const setCurrentScreen = useAppStore(state => state.setCurrentScreen);
    // const timeLeft = useAppStore(state => state.timeLeft);
    // const setTimeLeft = useAppStore(state => state.setTimeLeft);
    const [timeLeft, setTimeLeft] = useState<TimeBreakdown>({hours: "00", minutes: "00", seconds: "10"})
    const [count, setCount] = useState<number>(10);
    const [stopTimer, setStopTimer] = useState<boolean>(false);

    const countDownFinished = useCallback(() => {
        setCurrentScreen("fireworks");
        // document.getElementById("fireworks")?.scrollIntoView({ behavior: "smooth" })
    }, [setCurrentScreen]);

    const tick = useCallback(() => {
        const dueDate = new Date(...countdownDueDate).getTime();
        const now = Date.now();
        const timeDifferenceInSeconds = Math.floor((dueDate - now) / 1000); // 1000 milliseconds make a second

        if (timeDifferenceInSeconds > 0) {
            const seconds = String(timeDifferenceInSeconds % 60).padStart(2, "0");
            const minutes = String(Math.floor(timeDifferenceInSeconds / 60) % 60).padStart(2, "0");
    
            // hours is seconds / 60s * 60mins
            const hours = String(Math.floor(timeDifferenceInSeconds / (60 * 60))).padStart(2, "0");
    
            setTimeLeft({hours, minutes, seconds});
        } else {
            setTimeLeft({hours: "00", minutes: "00", seconds: "00"})
            setStopTimer(true)
        };
    }, [countdownDueDate, setTimeLeft]);

    const tick2 = useCallback(() => {
        if (currentScreen === "countdown") {
            if (Number(timeLeft.seconds) > 0) {
                const newSeconds = String(Number(timeLeft.seconds) - 1).padStart(2, "0");
        
                setTimeLeft({ hours: "00", minutes: "00", seconds: newSeconds });
            } else {
                setTimeLeft({hours: "00", minutes: "00", seconds: "00"})
                setStopTimer(true)
            };
        }
    }, [setTimeLeft, timeLeft.seconds, currentScreen])

    useEffect(() => {
        if (!stopTimer) {
            const timer = setTimeout(() => {
                tick2();
            }, 1000)
    
            return () => clearTimeout(timer);
        }
    }, [tick2, timeLeft, stopTimer, currentScreen])

    useEffect(() => {
        const { hours, minutes, seconds } = timeLeft;

        if (hours === "00" && minutes === "00" && seconds === "00") {
            countDownFinished();
        }
    }, [timeLeft, countDownFinished])

    return { timeLeft }
}

export default useCountdownTimer;