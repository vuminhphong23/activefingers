
import Link from "next/link"

export default function Headline4() {
    return (
        <>
            <div className="headline-area-big pt-130 rpt-50">
                <div className="headline-wrap">
                    <span className="marquee-heading-three">
                        <span className="marquee-inner left">
                            <span className="marquee-item">Schedule a Free <b>Consultation</b> for Designow and Door Replacement</span>
                            <span className="marquee-item">Schedule a Free <b>Consultation</b> for Designow and Door Replacement</span>
                            <span className="marquee-item">Schedule a Free <b>Consultation</b> for Designow and Door Replacement</span>
                        </span>
                        <Link href="/contact" className="hover-box">
                            <span>Get<br /> Schedule Now</span>
                        </Link>
                    </span>
                </div>
            </div>
        </>
    )
}
