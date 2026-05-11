import SubscriptionPlan from "@/components/shared/SubscriptionPlan";
import Hero from "./sections/Hero";
import KeyFeatures from "./sections/KeyFeatures";
import OurPlatform from "./sections/OurPlatform";
import OurSolutions from "./sections/OurSolutions";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonial from "./sections/Testimonial";

const Home = () => {
    return (
        <div>
            <Hero/>
            <KeyFeatures/>
            <OurPlatform/>
            <SubscriptionPlan/>
            <OurSolutions/>
            <WhyChooseUs/>
            <Testimonial/>
        </div>
    );
};

export default Home;