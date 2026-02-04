const Contact = ({
    description,
    buttonText = "Contact Us",
    buttonLink = "/contact",
}) => {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-12">
            <p
                className="text-gray-700 text-lg max-w-2xl leading-relaxed mb-6"
                style={{
                    overflowWrap: "normal",
                    // paddingLeft: "100px",
                    // paddingRight: "100px",
                    margin: "35px 280px",
                }}
            >
                {description}
            </p>
            <a
                href={buttonLink}
                class="theme-btn style-two ms-5"
            >
                {buttonText}
            </a>
        </section>
    );
};

export default Contact;
