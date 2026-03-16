import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import CartItem from "@/components/sections/CartItem";
import CartOption from "@/components/sections/CartOption";
import CartOptionV2 from "@/components/sections/CartoptionV2";
import BannerSection from "@/components/sections/BannerSection";
import Contact from "@/components/sections/ContactUsSection";

export default function CmsDevelopmentPage() {
    return (
        <Layout breadcrumbTitle="CMS Development">
            <main>
                <Banner
                    title="CMS Development"
                    imageUrl="/assets/images/services/sitecore-development/file2.jpg"
                    height="200px"
                />

                <CartItem
                    options={[
                        "A modern CMS is the foundation for modular, scalable digital experiences.",
                        "The right platform lets your team manage content once and deliver it consistently across web, mobile, email, and apps-while still giving you powerful tools for personalisation and analytics.",
                        "At Active Fingers, we specialise in implementing and extending enterprise-grade CMS and DXP platforms such as Sitecore.",
                        "We design and build web experiences on top of your chosen CMS, integrate it with the rest of your stack, and support your team with governance, workflows, and publishing processes so content stays organised and effective.",
                        "During a free one-hour consultation, we learn about your business and content goals, share ideas, and lay out a practical CMS roadmap together. Alongside new builds, we can also redesign or upgrade your existing sites and integrations.",
                    ]}
                />

                <CartOption
                    title="Leveraging CMS for Website Development"
                    content={
                        <>
                            A modern CMS is the foundation for modular, scalable digital experiences. The right platform lets your team manage content once and deliver it consistently across web, mobile, email, and apps-while still giving you powerful tools for personalisation and analytics.
                            <br /><br />
                            At Active Fingers, we specialise in implementing and extending enterprise-grade CMS and DXP platforms such as Sitecore. We design and build web experiences on top of your chosen CMS, integrate it with the rest of your stack, and support your team with governance, workflows, and publishing processes so content stays organised and effective.
                            <br /><br />
                            During a free one-hour consultation, we learn about your business and content goals, share ideas, and lay out a practical CMS roadmap together. Alongside new builds, we can also redesign or upgrade your existing sites and integrations.
                        </>
                    }
                    imageSrc="/assets/images/services/sitecore-development/file2.jpg"
                />

                <CartOptionV2
                    imageSrc="/assets/images/services/sitecore-development/file4.jpg"
                    title="Our Full-Cycle CMS Development Services"
                    content={
                        <>
                            We can support you end-to-end or provide only the development support that you need to bridge the project's progress to the next stage. No matter your level of need, we adhere to the same process for proven results as follows:
                        </>
                    }
                    items={[
                        "Investigate your requirements, existing content, and current platforms.",
                        "Explore and illuminate how a modern CMS (including options like Sitecore) and our CMS development services can reshape business processes and content operations.",
                        "Create proposals and solution designs based on your brief, governance model, and technical constraints.",
                        "Implement and complete the CMS development work-configuration, custom development, integrations, and migration.",
                        "Provide optional training, documentation, and ongoing development support so your team can get the most from the CMS.",
                    ]}
                    additionalContent={
                        <>
                            We communicate clearly at every step and act on your feedback to deliver a superior business and technology outcome from your CMS investment.
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

