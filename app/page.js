import Layout from "@/components/layout/Layout"
import AboutTwo3 from "@/components/sections/AboutTwo3"
import Headline7 from "@/components/sections/Headline7"
import Headline8 from "@/components/sections/Headline8"
import Hero2 from "@/components/sections/Hero2"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import StrategyMission from "@/components/sections/StrategyMission"
import Testimonials2 from "@/components/sections/Testimonials2"
import WorkProcess from "@/components/sections/WorkProcess"

export default function Home() {
    return (
        <Layout bodyCls="home-two">
            <Hero2 />
            <ServicesThree2 />
            <Headline7 />
            <Headline8 />
            <WorkProcess />
            <StrategyMission />
            <Testimonials2 />
            <AboutTwo3 />
        </Layout>
    )
}
