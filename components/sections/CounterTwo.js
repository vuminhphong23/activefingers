import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function CounterTwo() {
    return (
        <>
            <div className="counter-two-area pt-45 pb-140">
                <div className="container">
                    <span className="sub-title-style-two mb-40 wow fadeInUp delay-0-2s">we’re proud to work with a Wide range of companies</span>
                    <div className="row no-gap">
                        <div className="col-lg-3 col-6 col-small">
                            <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                                <CounterUp count={250} time={3} plus />
                                <h6 className="counter-title">Satsified Clients</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-small">
                            <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                                <CounterUp count={28} time={3} plus />
                                <h6 className="counter-title">Years of build</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-small">
                            <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                                <CounterUp count={1538} time={3} />
                                <h6 className="counter-title">Total Products</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-small">
                            <div className="counter-item-two no-border counter-text-wrap wow fadeInUp delay-0-5s">
                                <CounterUp count={386} time={3} />
                                <h6 className="counter-title">Total Revinew</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
