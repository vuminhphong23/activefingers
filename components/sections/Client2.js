
import Link from "next/link"

export default function Client2() {
    return (
        <>
            <div id="client" className="client-two-area pt-120 rpt-90 pb-110 rpb-60">
                <div className="container">
                    <div className="our-clients-two wow fadeInUp delay-0-4s">
                        <Link href="/contact"><img src="/assets/images/client-logos/client-two-logo1.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-two-logo2.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-two-logo3.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-two-logo4.png" alt="Client Logo" /></Link>
                        <Link href="/contact"><img src="/assets/images/client-logos/client-two-logo5.png" alt="Client Logo" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
