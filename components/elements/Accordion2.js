'use client'
import { useState } from 'react'

export default function Accordion2() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion wow fadeInUp delay-0-2s" id="faq-accordion">
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button  className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            How to learn digital marketing?
                        </button>
                    </h5>
                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            Can I use the demos made by Ewebot?
                        </button>
                    </h5>
                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Why didn’t you showcase my submission?
                        </button>
                    </h5>
                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseFour">
                            What everybody ought to know about digital marketing?
                        </button>
                    </h5>
                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
