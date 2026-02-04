
import Link from "next/link"

export default function Headline2() {
    return (
        <>
            <div className="headline-area-big pt-70 rpt-20">
                <div className="headline-wrap">
                    <span className="marquee-heading-two">
                        <span className="marquee-inner left">
                            <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">development</Link>  <span>/</span>  <Link href="#">marketng</Link> <span>/</span></span>
                            <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">development</Link>  <span>/</span>  <Link href="#">marketng</Link> <span>/</span></span>
                            <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">development</Link>  <span>/</span>  <Link href="#">marketng</Link> <span>/</span></span>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}
