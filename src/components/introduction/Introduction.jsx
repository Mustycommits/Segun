import profile from "../../assets/images/segun.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { motion, AnimatePresence } from "framer-motion";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "5 Y+",
  },
  {
    id: 2,
    title: "HR Metrics improved",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "58",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:0.7,duration: 0.5 }}
            className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full"
          >
            Hello, I’m
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold w-full"
            >
              Oluwasegun Mustapha
            </motion.span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-xs xxs:text-lg lg:text-[18px] my-6"
          >
            I'm a versatile<span className="bg-highlight">HR </span>{" "}
            professional based in Lagos, Nigeria. I help businesses to manage
            their human resources and administrative tasks effectively.
          </motion.p>
          <p className="text-center lg:text-start">
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:Mustaphasegun937@gmail.com"
            >
              Get in touch!
            </motion.a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={profile}
          alt="profile"
        />
      </motion.div>
    </div>
  );
};

export default Introduction;
