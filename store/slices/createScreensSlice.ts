"use client";
import { StateCreator } from "zustand";

const createScreensSlice: StateCreator<ScreensSlice> = (set) => ({
    currentScreen: "welcome",
    countdownDueDate: [2023, 11, 17, 0, 0],
    // timeLeft: {hours: "00", minutes: "00", seconds: "10"},
    // setTimeLeft: (newTime) => set({ timeLeft: newTime }),
    setCurrentScreen: (screen) => set({ currentScreen: screen })
})

export default createScreensSlice;