const BannerSection = ({ title, imageUrl, height = "400px" }) => {
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
            <h1
                className="!text-white !text-[28px] !font-bold !px-4"
                style={{
                    color: "white",
                    fontSize: "28px",
                    fontWeight: "700",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    lineHeight: "6.5",
                }}
            >
                {title}
            </h1>


        </section>
    );
};

export default BannerSection;
