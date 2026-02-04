'use client'
import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
export default function CounterUp({ count, time, plus, k, kPlus, dolar }) {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>

            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} component="span">
                <CountUp end={count} duration={time} redraw={true}>
                    {({ countUpRef }) => (
                        <span className={`count-text 
                        ${plus ? "plus" : ""}
                        ${k ? "k" : ""}
                        ${kPlus ? "k-plus" : ""}
                        ${dolar ? "dolar" : ""}
                        `} ref={countUpRef}></span>
                    )}
                </CountUp>
            </ScrollTrigger>
        </>
    )
}
