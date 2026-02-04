import Link from 'next/link'

export default function Sidebar({ handleSidebar, isSidebar }) {
    return (
        <>
            <div className="form-back-drop" onClick={handleSidebar}></div>
            <section className="hidden-bar">
                <div className="inner-box text-center">
                    <div className="cross-icon" onClick={handleSidebar}><span className="fa fa-times" /></div>
                    <div className="title">
                        <h4>Get Appointment</h4>
                    </div>
                    {/*Appointment Form*/}
                    <div className="appointment-form">
                        <form method="post" action="contact">
                            <div className="form-group">
                                <input type="text" name="text" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message" rows={5} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="theme-btn style-two">Submit now</button>
                            </div>
                        </form>
                    </div>
                    {/*Social Icons*/}
                    <div className="social-style-one">
                        <Link href="#"><i className="fab fa-twitter" /></Link>
                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                        <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                    </div>
                </div>
            </section>

        </>
    )
}
