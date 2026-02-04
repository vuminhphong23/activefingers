import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import CartItem from "@/components/sections/CartItem";
import CartOption from "@/components/sections/CartOption";
import CartOptionV2 from "@/components/sections/CartoptionV2";
import BannerSection from "@/components/sections/BannerSection";
import Contact from "@/components/sections/ContactUsSection";

export default function AppDevelopmentPage() {
    return (
        <Layout breadcrumbTitle="App Development">
            <main>
                <Banner
                    title="Custom App Development"
                    imageUrl="/assets/images/services/app-development/file3.jpg"
                    height="200px"
                />

                <CartItem
                    options={[
                        "A well-designed app offers your company a significant advantage. It might be a customer-facing",
                        "solution for self-service or e-commerce shopping or a mobile utility for employees working in the field.",
                        "Quality and reliability are a priority. At Active Fingers you can connect with a trusted team for",
                        "web, mobile, and hybrid app development-from concept to launch and beyond."
                    ]}
                />


                <CartOption
                    title="What We Offer"
                    content={
                        <>
                            Our team of proven professionals are well-versed in modern development coding languages and SDLC processes. We design and develop web, mobile, and hybrid apps. We enjoy solving problems, overcoming challenges and delivering success for our clients.
                            <br /><br />
                            During a free one-hour consultation, we learn about your business and development goals, share ideas, and lay out your project strategy together. Alongside new development, we can redesign or upgrade existing apps.
                        </>
                    }
                    imageSrc="/assets/images/services/app-development/file3.jpg"
                />
                <CartOptionV2
                    imageSrc="/assets/images/services/app-development/file2.jpg"
                    title="7 Steps of Our Mobile App Development Process"
                    content={
                        <>
                            Every project is different. We follow a clear, proven process - from your first idea to the app store-so you get quality and on-time delivery. We keep you informed at every step.
                            <br /><br />
                            Our process:
                        </>
                    }
                    items={[
                        "Ideation - define the concept and goals.",
                        "Analytics & Market Research - understand users and competition.",
                        "App Platform Selection - choose iOS, Android, or cross-platform.",
                        "UI/UX Design - intuitive, user-friendly interfaces.",
                        "App Development - build, integrate, and optimise.",
                        "Testing - thorough QA and bug fixing before release.",
                        "Deployment to App Store - publish and post-launch support."
                    ]}
                />


                <BannerSection
                    title="Design, Development, and Support - All in One Place"
                    imageUrl="/assets/images/services/app-development/file3.jpg"
                    height="200px"
                />
                <Contact
                    description={
                        <>
                            When teaming up with <strong>Active Fingers</strong>, your company gains an app development partner who cares about your outcome and delivering exceptional user experiences. We remain flexible and understanding, making changes and upgrades as required with your approval. We also provide support options to help maintain your app.
                        </>
                    }
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
