import { useEffect } from "react";
import ClientsFeedBack from "../../Components/ClientsFeedBack/ClientsFeedBack";
import HeroSection from "../../Components/HeroSection";
import HireUs from "../../Components/HireUs/HireUs";
import IntroductionSection from "../../Components/IntroductionSection/IntroductionSection";
import { LeaderSpeaker } from "../../Components/LeaderSpeaker/LeaderSpeaker";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Services from "../Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    <div>
      <HeroSection></HeroSection>
      <div data-aos="fade-right">
        <IntroductionSection></IntroductionSection>
      </div>
      <div data-aos="fade-left">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div
        data-aos="fade-up-right"
        className="grid gap-10 grid-cols-1 lg:grid-cols-2 mx-auto max-w-screen-2xl px-10 py-10"
      >
        <LeaderSpeaker></LeaderSpeaker>
        <ClientsFeedBack></ClientsFeedBack>
      </div>
      <div data-aos="zoom-in">
        <Services></Services>
      </div>
      <div data-aos="fade-down-right">
        <HireUs></HireUs>
      </div>
    </div>
  );
};

export default Home;
