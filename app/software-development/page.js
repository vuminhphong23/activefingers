import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import CartItem from "@/components/sections/CartItem";
import CartOption from "@/components/sections/CartOption";
import CartOptionV2 from "@/components/sections/CartoptionV2";
import BannerSection from "@/components/sections/BannerSection";
import Contact from "@/components/sections/ContactUsSection";

export default function SoftwareDevelopmentPage() {
    return (
        <Layout breadcrumbTitle="Software Development">
            <main>
                <Banner
                    title="Custom Software Development"
                    imageUrl="/assets/images/services/software-development/file3.jpg"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Solving your unique business problems often requires more than an off-the-shelf solution. Partnering",
                        "with a trusted software development team is the next logical step when your operation requires custom",
                        "tools. Active Fingers offers experience and a contemporary understanding of business software",
                        "development—from planning and design through to delivery and support."
                    ]}
                />


                <CartOption
                    title="What We Offer"
                    content="We provide a full range of software development services. We create bespoke solutions to align with our client’s requirements and commit to a process that delivers results on time and within budget. Our service options include:"
                    items={[
                        "Software planning and design to initiate the project",
                        "Full-cycle app development with optional post-launch support",
                        "Integration design and development services to connect software to your platform",
                        "Cloud application development to enable practical remote work",
                        "Automation and optimisation through tailored software"
                    ]}
                    imageSrc="/assets/images/services/software-development/file3.jpg"
                />
                <CartOptionV2
                    imageSrc="/assets/images/services/software-development/file2.jpg"
                    title="Working With Our Team"
                    content={
                        <>
                            Smart investments in technology are central to the operational strategies of modern business—we
                            understand its importance. Our developers are well-versed in today’s best software development
                            practices and tools. We offer development services across a range of programming languages
                            available to support diverse objectives.
                            <br /><br />
                            We put our client’s vision first. A key part to delivering an outstanding solution is listening,
                            understanding business challenges, and offering innovative design and development options for
                            guided consideration.
                        </>
                    }
                />


                <BannerSection
                    title="Take the First Steps"
                    imageUrl="/assets/images/services/software-development/file3.jpg"
                    height="200px"
                />
                <Contact
                    description="With a proven process and extensive skills across programming languages and frameworks, Active Fingers can deliver practical software solutions for your needs. Let us collaborate and find the ideal solutions for your business goals."
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
