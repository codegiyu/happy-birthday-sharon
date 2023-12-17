"use client";
import Image from "next/image";
// import galaxy from "@/public/galaxy.gif";
import gojo from "@/public/gojo.jpg";
import sharon from "@/public/sharon1.jpeg";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { birthdayMessage } from "@/constants/birthdayMessage";

const MessageScreen: React.FC = () => {
    const [paragraphsAppear, setParagraphsAppear] = useState<{ [key: string]: boolean }>({ 1: false });

    const messageBottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setParagraphsAppear((prevState) => ({ ...prevState, 1: true }))
        }, 2500)
    }, [])

    useEffect(() => {
        if (messageBottomRef.current) {
            messageBottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    })

    return (
        <section id="message" className="container-64 w-full h-screen relative overflow-hidden">
            <Image src={sharon} alt="" fill className="absolute top-0 left-0 object-cover w-full h-full " />
            <div className="absolute w-full h-screen top-0 left-0 bg-[#00000099]"></div>

            <div 
                className="py-20 max-h-screen overflow-y-auto relative grid gap-10 text-fh-3xl md:text-fh-4xl 
                lg:text-fh-5xl text-white font-satisfy z-[51]"
            >
                {birthdayMessage.map((item, idx, arr) => {
                    return paragraphsAppear[idx + 1] ? (
                        <TypeAnimation 
                            splitter={(str) => str.split("")}
                            sequence={[
                                item,
                                idx < arr.length - 2 ? 5000 : 1000,
                                () => {
                                    console.log(`Sequence ${idx + 1} completed`);
                                    setParagraphsAppear((prevState) => ({ ...prevState, [idx + 2]: true }));
                                },
                            ]}
                            speed={1}
                            omitDeletionAnimation={true}
                            preRenderFirstString={false}
                            wrapper="span"
                            cursor={false}
                        />  
                    ) : null
                })}

                <div className="w-full h-1" ref={messageBottomRef}></div>
            </div>
        </section>
    )
}

export default MessageScreen;