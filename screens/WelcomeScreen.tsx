"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "@/components/Button/PrimaryButton";
import useAppStore from "@/store/useAppStore";


const WelcomeScreen: React.FC = () => {
    const setCurrentScreen = useAppStore(state => state.setCurrentScreen);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [showOptions] = useState<boolean>(false);

    const talkWithGojo = () => {

    }

    const makeAnimePics = () => {

    }
 
    useEffect(() => {
        setTimeout(() => {
            setIsTyping(true);
        }, 1500)
    }, [])

    return (
        <section 
            id="welcome" 
            className="container-64 w-full h-screen flex flex-col items-center justify-center gap-20 text-white text-center relative"
        >
            <div className="text-fh-3xl md:text-fh-4xl lg:text-fh-6xl">
                {isTyping ? (
                    <TypeAnimation
                        splitter={(str) => str.split("")}
                        sequence={[
                            "So you've come, Ojou chan😏", // Types whole message
                            5000, // Waits 1s
                            "Well, things got completed a little late...",
                            5000,
                            "...not too late, I hope",
                            5000,
                            "Anyway, enjoy the rest of the show....",
                            5000,
                            () => {
                                console.log("Welcome sequence completed");
                                // document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" })
                                setCurrentScreen("countdown");
                                // setShowOptions(true);
                            },
                        ]}
                        speed={1}
                        omitDeletionAnimation={true}
                        preRenderFirstString={false}
                        wrapper="span"
                        cursor={false}
                    />
                ) : null}

            </div>
            
            {showOptions ? (
                <div className=" w-full flex flex-col md:flex-row items-center gap-6 justify-start md:justify-center">
                    <div className="w-[90%] md:w-[250px]">
                        <PrimaryButton 
                            text="A chance to talk with Gojo"
                            clickHandler={talkWithGojo}
                            fullWidth={true}
                        />
                    </div>
                    <div className="w-[90%] md:w-[250px]">
                        <PrimaryButton 
                            text="Generate your anime pic"
                            clickHandler={makeAnimePics}
                            fullWidth={true}
                        />
                    </div>
                </div>
            ) : null}
        </section>
    )
}

export default WelcomeScreen;