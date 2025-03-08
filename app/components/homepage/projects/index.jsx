import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-50 my-12 lg:my-24 flex flex-col items-center"
    >
      <div className="sticky top-10 w-full">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <h2 className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </h2>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Centered Project Cards */}
      <div className="pt-24 w-full flex flex-col items-center gap-6">
        {projectsData.map((project, index) => (
          <div
            id={`sticky-card-${index + 1}`}
            key={index}
            className="sticky top-20 w-full max-w-2xl mx-auto"
          >
            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
