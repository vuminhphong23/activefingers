import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import CartItem from "@/components/sections/CartItem";
import CartOption from "@/components/sections/CartOption";
import CartOptionV2 from "@/components/sections/CartoptionV2";
import BannerSection from "@/components/sections/BannerSection";
import Contact from "@/components/sections/ContactUsSection";

export default function SitecoreDevelopmentPage() {
    return (
        <Layout breadcrumbTitle="Sitecore Development">
            <main>
                <Banner
                    title="Sitecore Development"
                    imageUrl="/assets/images/services/sitecore-development/file2.jpg"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Delivering advanced, engaging web experiences is critical to the consumer experience companies",
                        "create today. So too is providing the right content for your niche audiences. Effectively",
                        "meeting these goals requires a robust Content Management System (CMS) inside a Digital",
                        "Experience Platform (DXP). With Sitecore development from Active Fingers, you can take your web presence to the next level."
                    ]}
                />


                <CartOption
                    title="Leveraging Sitecore for Website Development"
                    content={
                        <>
                            Sitecore is a gold-standard DXP built for modularity and scalability in a low-code environment. Packed with tools for customer outreach and analysis, it is currently one of the best ways for mid to large corporates to manage content channels and digital experiences.
                            <br /><br />
                            When we undertake Sitecore DXP development, we equip our clients with a turnkey solution for effective marketing and outreach. Alongside creating web platforms for your brand–based on the Sitecore framework–we can assist with long-term administration, support and integration development services. In addition, we can support your team with editing and publishing content through Sitecore.
                            <br /><br />
                            During a free one-hour consultation, we learn about your business and development goals, share ideas, and lay out your project strategy together. Alongside new development, we can redesign or upgrade existing apps.
                        </>
                    }
                    imageSrc="/assets/images/services/sitecore-development/file2.jpg"
                />
                <CartOptionV2
                    imageSrc="/assets/images/services/sitecore-development/file4.jpg"
                    title="Our Full-Cycle Sitecore Development Services"
                    content={
                        <>
                            We can support you end-to-end or provide only the development support that you need to bridge the project's progress to the next stage. No matter your level of need, we adhere to the same process for proven results as follows:
                        </>
                    }
                    items={[
                        "Investigate your requirements and existing solutions.",
                        "Explore and illuminate how Sitecore and our development services can reshape business processes.",
                        "Create proposals based on your brief and guidelines.",
                        "Complete the Sitecore development services.",
                        "Optional developer training or provide ongoing software development support.",
                    ]}
                    additionalContent={
                        <>
                            We communicate clearly at every step and act on your wishes to deliver a superior business and technological outcome.
                        </>
                    }
                />


                <BannerSection
                    title="We Help You Create Better Customer Experiences"
                    imageUrl="/assets/images/services/sitecore-development/file2.jpg"
                    height="200px"
                />
                <Contact
                    description={
                        <>
                            When teaming up with <strong>Active Fingers</strong>, your company gains a Sitecore development partner who cares about your outcome and delivering exceptional digital experiences. We remain flexible and understanding, making changes and upgrades as required with your approval. We also provide support and training to help your team get the most from Sitecore.
                        </>
                    }
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
