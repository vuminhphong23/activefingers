'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* <a onClick={() => setOpen(true)} className="lightbox-image"><i className="icon-play" /></a> */}
            {style === 1 &&
                <a onClick={() => setOpen(true)} className="mfp-iframe hero-video-play" tabIndex={-1}>
                    <img src="/assets/images/hero/play-text.svg" alt="Video Play" />
                </a>
            }
            {style === 2 &&
                <a onClick={() => setOpen(true)} className="mfp-iframe video-play-text">
                    <img src="/assets/images/about/video-play.png" alt="Video Play" />
                </a>
            }
            {style === 3 &&
                <a onClick={() => setOpen(true)} className="mfp-iframe video-play-text wow zoomIn delay-0-2s" tabIndex={-1}>
                    <img src="/assets/images/video/video-play-text.png" alt="Video Play" />
                </a>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}