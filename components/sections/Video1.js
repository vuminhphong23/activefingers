
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Video1() {
    return (
        <>
            <section className="video-area rel z-1">
                <div className="container">
                    <div className="video-top text-center pt-30 mb-30">
                        <h5><Link href="/contact">Contact us</Link> or send an <span>email to</span> vietanhvu225@gmail.com</h5>
                    </div>
                </div>
                <div className="container container-1695">
                    <div className="video-inner pt-110 rpt-60 text-center" style={{ backgroundImage: 'url(assets/images/video/video-bg.jpg)' }}>
                        <span className="play-intro wow fadeInUp delay-0-2s"><span>Play</span> intro</span>
                        <div className="row rpt-15 align-items-center">
                            <div className="col-xl-2 offset-xl-5 col-4 offset-4 wow zoomIn delay-0-2s">
                                <VideoPopup style={1}/>
                            </div>
                            <div className="col-xl-5 col-4 text-start wow fadeInRight delay-0-2s">
                                <span className="video-text">Video</span>
                            </div>
                        </div>
                        <div className="shape-image d-flex mt-60 rmt-40">
                            <img src="/assets/images/shapes/wave-shape.png" alt="Wave" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
