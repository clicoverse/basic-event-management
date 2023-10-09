import ClientsFeedBack from "../../Components/ClientsFeedBack/ClientsFeedBack";
import HeroSection from "../../Components/HeroSection";
import IntroductionSection from "../../Components/IntroductionSection/IntroductionSection";
import { LeaderSpeaker } from "../../Components/LeaderSpeaker/LeaderSpeaker";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <IntroductionSection></IntroductionSection>
      <WhyChooseUs></WhyChooseUs>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 mx-auto max-w-screen-2xl px-10 py-10">
        <LeaderSpeaker></LeaderSpeaker>
        <ClientsFeedBack></ClientsFeedBack>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
