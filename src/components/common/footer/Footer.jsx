import { Link } from "react-scroll";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Process", url: "work-process" },
  { id: 3, name: "Experience", url: "portfolio" },
  { id: 4, name: "Contact", url: "contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Oluwasegun Mustapha
        </p>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              smooth={true}
              duration={900}
              offset={-100}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px] cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          &copy; {copyrightYear} Oluwasegun Mustapha
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed with ❤️ by{" "}
        <a
          href="https://github.com/Mustycommits?tab=repositories"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Khalid
        </a>
      </p>
    </footer>
  );
};

export default Footer;
