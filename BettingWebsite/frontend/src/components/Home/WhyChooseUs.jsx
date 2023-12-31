import { features } from "../../constants";
import styles, { layout } from "../../style";
import Button from "../Global/Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const WhyChooseUs = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why Choose Us? <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elevate your sports betting experience with us!
        Our expertise lies in providing you with in-depth insights into the performance of players in both
        esports and physical sports. Spend less time researching and more time placing winning bets.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col mt-8`}>
      {/* Increase margin-top using the mt-8 class */}
      <div className="mt-12"> {/* Add margin-top */}
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
