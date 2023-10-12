
import React,{useState} from "react";

import "./QuestionStyle.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {motion} from "framer-motion";

export default function Question({question,answer,key}){
    const [showAnswer,setShowAnswer] = useState(false)

    const handleClick = () => {
        setShowAnswer(!showAnswer)
    }
    return(
        <div className="faq" key={key} onClick={()=>handleClick()}>
            <span className="questionText">
                <p>{question}</p>
                <motion.span
                    variants={{
                        rotate:{rotate: 180},
                        stop:{rotate: 0}
                }}

                    type="button"
                    className="answerBttn"
                    whileTap={{scale: 1.8}}
                    animate={showAnswer ? "rotate" : "stop"}
                    transition={{
                        type:"tween",
                        duration: .7,
                    }}
                >
                    <FontAwesomeIcon icon={faAngleDown} size="xl" style={{color: "#000000"}} />
                </motion.span>
            </span>
                <motion.span
                    variants={{
                        hidden:{opacity: 0,height:0},
                        visible:{opacity: 1,marginBottom:20}
                    }}
                    animate={showAnswer ? "visible" : "hidden"}
                    transition={{
                        type:"spring",
                        duration: 0.7,
                    }}
                className="answerText"
            ><p>{answer}</p></motion.span>
        </div>
    )
}