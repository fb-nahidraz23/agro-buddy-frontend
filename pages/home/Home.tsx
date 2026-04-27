import SubscriptionPlan from "@/components/shared/SubscriptionPlan";
import Hero from "./sections/Hero";
import KeyFeatures from "./sections/KeyFeatures";
import OurPlatform from "./sections/OurPlatform";
import OurSolutions from "./sections/OurSolutions";

const Home = () => {
    return (
        <div>
            <Hero/>
            <KeyFeatures/>
            <OurPlatform/>
            <SubscriptionPlan/>
            <OurSolutions/>
        </div>
    );
};

export default Home;