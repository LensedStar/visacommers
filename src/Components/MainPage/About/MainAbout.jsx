import React from "react";

import { motion } from "framer-motion";


import "./MainAboutStyle.scss";

export default function MainAbout() {

    return(
        <div className="about">
                <motion.div
                    key={1}
                    className="aboutText aboutText1"
                    initial={{
                        opacity:0,
                        x:-200
                    }}
                    whileInView={{
                        opacity:1,
                        zIndex:-1000,
                        x:0,
                    }}
                    transition={{
                        duration:1,
                        delay:1,
                    }}
                    viewport={{once:false}}
                >
                    <h2>О нас</h2>
                    <p>
                        Lorem ipsum dolor
                        sit amet
                        consectetur adipisicing
                        elit.
                    </p>
                </motion.div>

            <motion.div
                key={2}
                className="aboutText aboutText2"
                initial={{
                    opacity:0,
                    x:200
                }}
                whileInView={{
                    opacity:1,
                    zIndex:-1000,
                    x:0,
                }}
                transition={{
                    duration:1,
                    delay:1.2,
                }}
                viewport={{once:false}}
            >
                <h2>О нас</h2>
                <p>
                    Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.
                </p>
            </motion.div>

            <motion.div
                key={3}
                className="aboutText aboutText1"
                initial={{
                    opacity:0,
                    x:-200
                }}
                whileInView={{
                    opacity:1,
                    zIndex:-1000,
                    x:0,
                }}
                transition={{
                    duration:1,
                    delay:1,
                }}
                viewport={{once:false}}
            >
                <h2>О нас</h2>
                <p>
                    Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.
                </p>
            </motion.div>

        </div>
    )
}