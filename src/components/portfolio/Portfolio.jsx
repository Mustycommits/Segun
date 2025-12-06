import Projects from "./Projects";
import aava from "../../assets/images/portfolio-images/aava.jpeg";
import evercare from "../../assets/images/portfolio-images/evercare.png";
import shalina from "../../assets/images/portfolio-images/shalina.png";
import suntory from "../../assets/images/portfolio-images/suntory.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const projectData = [
  {
    id: 1,
    image: suntory,
    category: "",
    title: "Suntory Beverages and Food ,Nigeria ",
    description: "HR Officer (Aug 2021 – December 2022)",
    link: "#!",
  },
  {
    id: 2,
    image: aava,
    category: "",
    title: "AAVA Brands Manufacturing Limited",
    description: "People & Culture Officer (Nov 2022 – Mar 2023)",
    link: "#!",
  },
  {
    id: 3,
    image: shalina,
    category: "",
    title: "Shalina Healthcare Nigeria Limited",
    description: "HR/Admin Executive (Mar 2023 – Sept 2024)",
    link: "#!",
  },

  {
    id: 4,
    image: evercare,
    category: "",
    title: "Evercare Hospital",
    description: "HR Business Partner (March 2025 – Present)",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
          href="#src\assets\Mustapha Oluwasegun CV.pdf!"
          download
        >
          <FontAwesomeIcon icon={faDownload} /> Download CV
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
