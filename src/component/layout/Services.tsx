import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
    return (
        <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
            <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
            <p className="flex text-4xl my-8 justify-center text-white font-bold">Our Services</p>
            <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
                <Service hl="Dream Pattern Analysis" desc="AI-powered analysis of dream patterns to provide personalized insights" img="/icons/analysis.svg" />
                <Service hl="Subconscious Insights" desc="Personalized insights based on subconscious cues for a deeper understanding of dreams" img="/icons/insight.svg" />
                <Service hl="AI Technology" desc="Cutting-edge AI technology for accurate dream prediction" img="/icons/ai.svg" />
                </div>
            <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">Ready to explore your dreams? Try it now.</p>
            <ContactBtn title={"Start exploring"} />

        </div>
    );
}

export default Services;
