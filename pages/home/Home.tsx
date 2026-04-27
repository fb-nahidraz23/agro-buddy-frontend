import SubscriptionPlan from "@/components/shared/SubscriptionPlan";
import Hero from "./sections/Hero";
import KeyFeatures from "./sections/KeyFeatures";
import OurPlatform from "./sections/OurPlatform";

const Home = () => {
    return (
        <div>
            <Hero/>
            <KeyFeatures/>
            <OurPlatform/>
            <SubscriptionPlan/>
        </div>
    );
};

export default Home;