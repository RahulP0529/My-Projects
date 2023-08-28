import styles from "../../style";
import { logo, valorant } from "../../assets";
import { socialMedia } from "../../constants";

const Footer = () => (
  <footer className="text-white">
    <div className={`${styles.boxWidth} mx-auto text-center border-t-[1px] border-t-[#3F3E45] py-4`}>
      <p className="font-poppins font-normal text-[15px] leading-[25px] text-white">
        &copy; 2023 BETTINGWEBSITE. All Rights Reserved.
      </p>

      <div className="flex justify-center mt-2 space-x-4">
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center"
          >
            <img
              src={social.icon}
              alt={social.id}
              className="w-[25px] h-[25px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;


