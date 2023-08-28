import React from 'react';
import styles from "../../style";
import { valorant } from "../../assets";
import { services } from "../../constants";

const Hero = () => {
  

  return (
    <div className={`${styles.boxWidth} ${styles.padding}`}>
      {/* Page Title */}
      <h2 className={styles.heading2}>Our Membership Plans</h2>

      {/* Table */}
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="border rounded p-4 flex flex-col items-center">
              {/* Membership Package Name */}
              <h3 className={styles.heading2}>{service.name}</h3>

              {/* Image Placeholder */}
              <img src={valorant} alt={service.name} className="w-full h-48 mt-4 object-cover rounded" />

              {/* 6 Lines of Text */}
              <div className="mt-4 space-y-2">
                {service.description.map((line, index) => (
                  <p key={index} className={styles.paragraph}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
