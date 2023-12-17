"use client";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import useAppStore from "@/store/useAppStore";

const CountdownScreen: React.FC = () => {
    // const timeLeft = useAppStore(state => state.timeLeft);
    const { timeLeft } = useCountdownTimer();

    return (
        <section id="countdown" className="w-full h-screen relative grid place-items-center font-mono text-white text-center">
            <div className="text-fh-6xl-semi">
                {`${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
            </div>
        </section>
    )
}

export default CountdownScreen;