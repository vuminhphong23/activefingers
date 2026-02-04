const CartOption = ({ title, content, items, additionalContent, imageSrc }) => {
    return (
        <section className="cart-left-section">
            <div className="cart-left-wrapper">
                <img
                    src={`${imageSrc}?w=400`}
                    srcSet={`${imageSrc}?w=400 1x, ${imageSrc}?w=800 2x`}
                    alt={title || "illustration"}
                    className="cart-left-image"
                />

                <div className="cart-left-content">
                    {title && <h4 className="cart-left-title">{title}</h4>}
                    {content && <p className="cart-left-paragraph">{content}</p>}
                    {items && items.length > 0 && (
                        <ul className="cart-left-list">
                            {items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {additionalContent && (<p className="cart-left-paragraph">{additionalContent}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CartOption;