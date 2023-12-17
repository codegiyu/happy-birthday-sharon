import Image from "next/image";
import galaxy from "@/public/galaxy.gif";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const MessageScreen: React.FC = () => {
    const [paragraphsAppear, setParagraphsAppear] = useState<{ [key: string]: boolean }>({ 1: false });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setParagraphsAppear((prevState) => ({ ...prevState, 1: true }))
        }, 2500)
    }, [])

    return (
        <section id="message" className="container-64 w-full h-screen relative ">
            <Image src={galaxy} alt="" fill className="absolute top-0 left-0 object-cover w-full h-full " />

            <div className="py-20 relative grid gap-10 text-fh-3xl md:text-fh-4xl lg:text-fh-5xl text-white font-satisfy z-[51]">
                {paragraphsAppear[1] ? (
                    <TypeAnimation 
                        splitter={(str) => str.split("")}
                        sequence={[
                            "My dear Tabitha",
                            5000,
                            () => {
                                console.log("Sequence 1 completed");
                                setParagraphsAppear((prevState) => ({ ...prevState, 2: true }));
                            },
                        ]}
                        speed={1}
                        omitDeletionAnimation={true}
                        preRenderFirstString={false}
                        wrapper="span"
                        cursor={false}
                    />
                ) : null}

                
                {paragraphsAppear[2] ? (
                    <TypeAnimation 
                        splitter={(str) => str.split("")}
                        sequence={[
                            "Once again, happy 15th birthday to you.",
                            5000,
                            () => {
                                console.log("Sequence 2 completed");
                                setParagraphsAppear((prevState) => ({ ...prevState, 3: true }));
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
        </section>
    )
}

export default MessageScreen;