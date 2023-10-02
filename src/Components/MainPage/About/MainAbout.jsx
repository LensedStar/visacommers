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
                    }}
                    viewport={{once:true}}
                >
                    <h2>Почему словения</h2>
                    <p>
                        Lorem ipsum dolor
                        sit amet
                        consectetur adipisicing
                        elit.Lorem ipsum dolor
                        sit amet
                        consectetur adipisicing
                        elit.Lorem ipsum dolor
                        sit amet
                        consectetur adipisicing
                        elit.Lorem ipsum dolor
                        sit amet
                        consectetur adipisicing
                        elit.Lorem ipsum dolor
                        sit amet
                        consectetur adipisicing
                        elit.Lorem ipsum dolor
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
                    delay:.2,
                }}
                viewport={{once:true}}
            >
                <h2>Почему мы </h2>
                <p>
                    Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
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
                    delay:.5,
                }}
                viewport={{once:true}}
            >
                <h2>Кто может податься</h2>
                <p>
                    Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing
                    elit.Lorem ipsum dolor
                    sit amet elit.
                </p>
            </motion.div>

        </div>
    )
}