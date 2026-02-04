import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import CartItem from "@/components/sections/CartItem";
import CartOption from "@/components/sections/CartOption";
import CartOptionV2 from "@/components/sections/CartoptionV2";
import BannerSection from "@/components/sections/BannerSection";
import Contact from "@/components/sections/ContactUsSection";

export default function ManagedServicesPage() {
    return (
        <Layout breadcrumbTitle="Managed IT Services">
            <main>
                <Banner
                    title="Managed IT Services"
                    imageUrl="/assets/images/services/managed-services/file1.jpg"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Information Technology (IT) is the backbone of most modern business. Yet its complexity continues",
                        "to expand. Even experienced business owners can run into complications with modern technology.",
                        "However, there is a better way to approach managing this critical resource with managed IT services.",
                        "Active Fingers is at your service-cloud, applications, and infrastructure."
                    ]}
                />


                <CartOption
                    title="What We Offer"
                    content={
                        <>
                            Managed services incorporate IT solutions provided and administered by a third party - ideal for growing companies or those with extensive, complex requirements. Shift the burden from internal teams to outside professionals for capable support of ideal outcomes:

                        </>
                    }
                    items={[
                        "Spend more time on your core business mission and less on IT administration.",
                        "Improve uptime and operational efficiency with well-configured systems.",
                        "Take advantage of the latest technology to improve your operations.",
                        "Find opportunities for savings and efficiency improvements in business processes."
                    ]}
                    imageSrc="/assets/images/services/managed-services/file1.jpg"
                />
                <CartOptionV2
                    imageSrc="/assets/images/services/managed-services/file2.jpg"
                    title="Our Managed Services"
                    content={
                        <>
                            We understand that organisations have different IT requirements. Hence, we take the time to grasp how to best serve you by offering our considerable skills and capabilities. Our managed services can include some or all of the following services:
                        </>
                    }
                    items={[
                        "Integrating business applications into your IT environment.",
                        "Supporting your work with cloud services and business software.",
                        "Optimising and upgrading your existing IT applications and infrastructure.",
                        "Managing your software and liaising with vendors on your behalf.",
                    ]}
                />


                <BannerSection
                    title="Scaled Services to Meet Your Needs"
                    imageUrl="/assets/images/services/managed-services/file1.jpg"
                    height="200px"
                />
                <Contact
                    description="With Active Fingers as your managed IT partner, you can focus on your business while we handle your IT environment-from cloud and applications to infrastructure and vendor liaison. Get in touch to discuss your needs."
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
