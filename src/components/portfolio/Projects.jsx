import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data, onClick }) => {
  return (
    <div className="flex flex-col h-full max-w-106 rounded-lg hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <div className="h-40 xs:h-44 px-6 pt-6 flex items-center justify-center">
        <img
          src={data?.image}
          alt={`${data?.title} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 xs:p-8">
        <h3 className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </h3>

        <p className="text-gray-600 text-xs xxs:text-[14px] leading-5 text-wrap">
          {data?.category}
        </p>

        <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onClick}
          aria-label={`See more about ${data?.title}`}
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 xs:py-5.75 px-6 max-sm:w-full flex items-center"
        >
          See More
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
