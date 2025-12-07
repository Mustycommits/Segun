import { useState } from "react";
import { motion } from "framer-motion";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const iconVariant = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 3,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.08)" }}
      className={`rounded-xl transition-all duration-300 ease-out ${
        style ? style : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        variants={iconVariant}
        animate={hover ? "hover" : "initial"}
        className={`w-11 h-11 sm:w-18 sm:h-18 text-center center rounded-md ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:p-2 sm:w-8 sm:h-8"
        >
          <path d={data?.svgPath} fill={hover ? "#FFFFFF" : "#A53DFF"} />
        </svg>
      </motion.div>

      <div className="mt-3 xs:mt-4 sm:mt-8">
        <motion.p
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-semibold sm:text-xl"
        >
          {`${data?.id}. ${data?.title}`}
        </motion.p>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-3 text-[13px] sm:text-[16px] text-[#697482]"
        >
          {data?.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WorkSteps;
