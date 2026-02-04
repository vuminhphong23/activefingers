import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="page-banner-area pt-135 rpt-95 pb-110 rpb-70 rel z-1 bgs-cover text-center" style={{ backgroundImage: 'url(assets/images/background/banner-bg.png)' }}>
                <div className="container">
                    <div className="banner-inner text-white wow fadeInUp delay-0-2s">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active">{breadcrumbTitle}</li>
                            </ol>
                        </nav>
                        <h1 className="page-title" style={{ backgroundImage: 'url(assets/images/shapes/heading-text.jpg)' }}>{breadcrumbTitle}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
