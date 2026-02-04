
import Link from "next/link"

export default function Client1() {
    return (
        <>
            <div className="client-area bgc-lighter pt-135 pb-150 rpy-100">
                <div className="container">
                    <span className="sub-title-style-two mb-65 wow fadeInUp delay-0-2s">we’re proud to work with a Wide range of companies in world</span>
                    <div className="our-clients-two wow fadeInUp delay-0-4s">
                        <Link href="/contact"><img src="/assets/images/client-logos/client-logo7.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-logo8.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-logo9.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-logo10.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-logo11.png" alt="Client Logo" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
