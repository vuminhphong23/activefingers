
'use client'
import { useState } from "react"
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'

const images = [
    {
        id: 1,
        url: '/assets/images/instagram/instagram1.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/assets/images/instagram/instagram2.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 3,
        url: '/assets/images/instagram/instagram3.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    },
    {
        id: 4,
        url: '/assets/images/instagram/instagram4.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 5,
        url: '/assets/images/instagram/instagram5.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 6,
        url: '/assets/images/instagram/instagram6.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    }
]

export default function Instagram1() {

    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const openLightbox = (index) => {
        setPhotoIndex(index)
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className="instagram-area">
                <div className="row no-gap justify-content-center align-items-end">
                    {images.map((image, index) => (
                        <div className="col-xl-2 col-lg-3 col-md-4 col-6" key={index}>
                            <div className="instagram-item">
                                <img src={image.url} alt="Instagram" />
                                <a onClick={() => openLightbox(index)} className="text-white"><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    ))}
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]?.url}
                            nextSrc={images[(photoIndex + 1) % images.length].url}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
                            onCloseRequest={closeLightbox}
                            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                        // imageTitle={images[photoIndex].title}
                        // imageCaption={images[photoIndex].description}
                        />
                    )}
                </div>
            </div>
        </>
    )
}
