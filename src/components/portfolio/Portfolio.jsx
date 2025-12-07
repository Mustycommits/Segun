import Projects from "./Projects";
import aava from "../../assets/images/portfolio-images/aava.jpeg";
import evercare from "../../assets/images/portfolio-images/evercare.png";
import shalina from "../../assets/images/portfolio-images/shalina.png";
import suntory from "../../assets/images/portfolio-images/suntory.png";
import analyst from "../../assets/images/portfolio-images/analyst.png";
import pgaj from "../../assets/images/portfolio-images/PGAJ.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal"; 
import { useState } from "react";



const projectData = [
  {
    id: 1,
    image: suntory,
    category: "HR Officer (Aug 2021 – December 2022)",
    title: "Suntory Beverages and Food ,Nigeria ",
    description: `
•Weekly GEMBA site tour.
•Coordinate union meetings.
•Registration and documentation of new employees.
•Data collation and analysis.
•Improved employee, engagement, welfare, and social activities.
•Designed quarterly newsletter.
•Computation of Shift Allowance, weekend allowance and overtime.
•Conduction of interview for prospective employees.
•Conduction of induction for new employees.
•Management of employees, factory workers.

`,

    link: "#!",
  },
  {
    id: 2,
    image: aava,
    category: "People & Culture Officer (Nov 2022 – Mar 2023)",
    title: "AAVA Brands Manufacturing Limited",
    description: `•Designed the organization’s organogram structure
•Construction of Job Description for all employees across the site and head office.
•Interview potential employees and ensuring a seamless transition into their new
designations. Conduction of Induction for new employee.
•Initiated the Annual games to help raise awareness for AAVA CSR and promoting employee
engagement.
•Provided an avenue for Team Bonding to help improve productivity.
•Computation of employee hours to collate data for payroll.
•Designed the organizational Newsletter.
•Liaise with all 3rd party stakeholders and contingencies.`,
    link: "#!",
  },
  {
    id: 3,
    image: shalina,
    category: "HR/Admin Executive (Mar 2023 – Sept 2024)",
    title: "Shalina Healthcare Nigeria Limited",
    description: ` •Implemented an optimized recruitment process that reduced time-to-hire by 30%, ensuring timely
staffing for critical roles in a fast-paced pharmaceutical environment.
 •Developed standardized interview protocols and assessment tools, resulting in more efficient
candidate evaluation and selection.
 •Successfully implemented updated policies and training programs to enhance compliance
awareness among employees, reducing the risk of regulatory violations.
 •Spearheaded employee engagement initiatives, including wellness programs, team-building
activities, and recognition programs, leading to a 20% increase in employee satisfaction and
retention.
 •Implemented regular performance reviews and feedback sessions, resulting in a 15% improvement
in employee performance and productivity.
 •Identified opportunities for cost savings and process improvements within the HR and
administrative functions, leading to a 10% reduction in operational expenses.
 •Developed and implemented training and development programs tailored to the specific needs of
employees in the pharmaceutical industry, focusing on technical skills, compliance training, and
leadership development.
 •Increased participation in training programs by 25% through targeted communications and
incentives, enhancing employee competency and readiness to meet industry challenges.
`,
    link: "#!",
  },

  {
    id: 4,
    image: evercare,
    category: "HR Business Partner (March 2025 – Present)",
    title: "Evercare Hospital",
    description: `
    •Assess manpower needs across hospital units, maintaining optimal staffing levels while adhering to a
₦500 million monthly salary budget.
•Ensure adequate manpower to meet performance targets and deliver high-quality patient care
without exceeding budget constraints.
•Recruit skilled staff across medical, allied health, nursing, and administrative departments,
significantly improving Time to Hire and Time to Fill metrics.
Proactively address manpower gaps to maintain seamless operations.
• Manage an annual training budget of ₦250 million in collaboration with the HR Director to enhance
functional and behavioral competencies, ensuring maximum ROI from training investments.
• Maintain a seamless onboarding and offboarding process to support smooth transitions and
compliance, ensuring accurate documentation at every stage.
•Develop initiatives to boost retention and reduce burnout, promoting work-life balance through
programs like Monthly Games, Hangouts, and Tea Time sessions
•Talent acquisition and selection – Analyze manpower requests, source candidates, and arrange
interviews.
•Training, learning, and development – Assist in designing and coordinating training, L &D programs.
• Performance Management -Assist in implementing approved performance appraisal schedule, create
awareness, educate HODs and managers, and monitor the review process with full documentation.
Employee Relations – Assist in the preparation of all staff correspondence, letters, reference
requests, etc. from employment to exit, management of staff records, grievances, and disciplinary
issues.
•Compliance with all regulatory requirements related to Human resources.
•Other duties and responsibilities entrusted by the supervisor and hospital management.

`,
    link: "#!",
  },
  {
    id: 5,
    image: analyst,
    category: "TeamLeadHR Analyst (May 2024 – December 2025",
    title: "The Analyst Hub",
    description: `
      •Coordinate the recruitment process, including job posting, candidate screening, interviewing, and selection.
•Facilitate new hire orientation and onboarding processes to ensure a smooth transition for new
employees.
•Serve as a point of contact for employee inquiries, concerns, and grievances, providing guidance
and resolution as needed.
•Conduct investigations into employee complaints or misconduct and recommend appropriate
actions in compliance with company policies and regulations.
•Assist in developing and implementing performance management processes, including objective--
setting, performance reviews, and feedback mechanisms.
•Support supervisors in addressing performance issues and implementing performance improvement plans.
•Coordinate employee training programs to enhance skills and competencies, in alignment with
organizational goals and objectives.
•Identify training needs and recommend appropriate development opportunities for employees at
all levels.
•Ensure compliance with federal, state, and local employment laws and regulations.
•Maintain up-to-date knowledge of HR best practices and industry trends and recommend updates
to company policies and procedures as needed.

      `,
    link: "#!",
  },
  {
    id: 6,
    image: pgaj,
    category: "Team Lead Virtual HR Assistant (January 2024 – May 2024)",
    title: "Project Get A Job",
    description: `
      •Maintaining and implementing screening criteria for job seeker applications based on partner
company job specifications.
•Conducting initial resume screening and identifying promising candidates for further
consideration.
•Conducting pre-screening interviews to assess candidates’ suitability and communication skills.
•Liaising with partner companies to clarify requirements and provide feedback on potential
candidates.
•Assisting with registration and data management for job seekers and participating companies.
•Providing responsive virtual assistance on HR-related questions and concerns within the
platform.
•Moderating live Q&A sessions and networking opportunities between job seekers and company
representatives.
•Supporting the efficient collection and organization of job applications submitted.
•Assisting the Partner Manager with onboarding and training new partner companies on
platform utilization.
•Managing communication with partners on HR-related aspects of job postings and recruitment
strategies.
•Working with the Data Analyst to Analyze data and generate reports on partnership
performance,
highlighting recruitment outcomes and trends.
•Preparing materials and presentations for partner-focused events and webinars
      `,
    link: "#!",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Work Experience</p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects
              data={data}
              key={index}
              onClick={() => setSelectedProject(data)}
            />
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
      <Modal
        isOpen={selectedProject !== null}
        data={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};





export default Portfolio;
