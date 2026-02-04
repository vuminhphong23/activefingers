// components/Banner.js
const Banner = ({ title, imageUrl, height = "400px" }) => {
    return (
        <section
            className="relative w-full flex items-center justify-center text-center"
            style={{
                height,
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.24), rgba(0,0,0,0.24)), url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "normal",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="wow fadeInUp delay-0-2s"
                style={{
                    lineHeight: "6.5",
                    fontSize: "28px",
                }}>
                {title}
            </h1>
        </section>
    );
};

export default Banner;
