import React from "react";
import Navbar from "../Global/Navbar/Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Billing from "./Billing";
import CTA from "./CTA";
//import Stats from "./Stats";
import Footer from "../Global/Footer";
import styles from "../../style";

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <WhyChooseUs />
        <Billing />
        <CTA />
        {/* <Stats /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
