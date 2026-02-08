export default function CartItem({ title, options }) {
    return (
        <section className="pt-10 pb-10 !bg-[#010101] text-black font-[Helvetica] text-[18px] tracking-normal normal-case">
            <div className="max-w-3xl mx-auto px-6">
                {title && (
                    <h2 className="font-semibold mb-6 text-[22px] text-center">{title}</h2>
                )}
                <div className="space-y-4">
                    {options.map((item, index) => {
                        const hasHighlight = item.includes("IT Supported") || item.includes("Sitecore v8");

                        if (hasHighlight) {
                            let parts = [];
                            let remaining = item;

                            ["IT Supported", "Sitecore v8"].forEach((keyword) => {
                                const index = remaining.indexOf(keyword);
                                if (index !== -1) {
                                    parts.push(remaining.slice(0, index));
                                    parts.push(<strong key={keyword} className="font-bold">{keyword}</strong>);
                                    remaining = remaining.slice(index + keyword.length);
                                }
                            });

                            if (remaining) {
                                parts.push(remaining);
                            }

                            return (
                                <p
                                    key={index}
                                    className="m-0 text-[#5e5e5e] text-[18px] font-[Helvetica] text-center"
                                >
                                    <span>{parts}</span>
                                </p>
                            );
                        }


                        return (
                            <p
                                key={index}
                                className="m-0 text-[#5e5e5e] text-[18px] font-[Helvetica] text-center"
                            >
                                <span>{item}</span>
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
