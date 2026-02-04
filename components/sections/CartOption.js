const CartOption = ({ title, content, items, imageSrc, imageItems }) => {
    return (
        <section className="cart-option-section">
            <div className="cart-option-wrapper">
                <div className="cart-option-content">
                    {title && <h4 className="cart-option-title">{title}</h4>}
                    {content && <p className="cart-option-paragraph">{content}</p>}
                    {items && items.length > 0 && (
                        <ul className="cart-option-list">
                            {items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="cart-option-image-wrapper" style={{
                    position: 'relative',
                    paddingTop: imageItems && imageItems.length > 0 ? '200px' : '0'
                }}>
                    {imageItems && imageItems.length > 0 && (
                        <ul className="cart-option-overlay-list">
                            {imageItems.map((item, idx) => {
                                const [label, ...rest] = item.split(":");
                                const value = rest.join(":").trim();

                                return (
                                    <li key={idx}>
                                        <strong>{label}:</strong>{" "}
                                        {label.trim() === "Website" ? (
                                            <a
                                                href={value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-highlight"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            value
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <img
                        src={`${imageSrc}?w=400`}
                        srcSet={`${imageSrc}?w=400 1x, ${imageSrc}?w=800 2x`}
                        alt={title || "illustration"}
                        className="cart-option-image"
                    />
                    {/* List mới nằm trên ảnh */}

                </div>
            </div>
        </section>
    );
};

export default CartOption;
