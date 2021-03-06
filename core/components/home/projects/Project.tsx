import Button from "@/components/shared/Button";
import Img from "@/components/shared/Img";
import { Project } from "@/utils/types";

const Project = (project: Project) => {
  return (
    <div className="relative flex flex-col w-full duration-300 transform ring-1 rounded-xl group ring-primary dark:ring-light ring-opacity-5 dark:ring-opacity-10 backdrop-blur-md bg-glass-light dark:bg-glass-dark dark:bg-opacity-10 bg-opacity-10 hover:scale-102 md:flex-row">
      <div className="flex flex-col items-start w-full h-full p-5 space-y-4 md:w-8/12">
        <h2 className="text-4xl font-extrabold">{project.name}</h2>
        <p className="font-light">{project.description}</p>
        <div className="flex w-full space-x-4">
          {project.technologies.map((technology) => (
            <i
              key={technology.id}
              role="img"
              aria-label="technology-icon"
              className={`${technology.icon} text-2xl`}
              title={technology.name}
            />
          ))}
        </div>
        <Button
          className="duration-300 bg-glass-light dark:bg-glass-dark hover:bg-light dark:hover:bg-primary"
          text="View project"
          isNavigation
          href={project.link}
          target="_blank"
        />
      </div>
      <picture className="w-full h-full p-4 sm:-translate-y-5 md:translate-y-0 sm:scale-125 md:translate-x-8 max-h-40 md:max-h-screen md:w-4/12 md:p-0">
        <Img
          src={project.image}
          alt={project.name}
          className="object-contain object-center w-full h-full"
        />
      </picture>
    </div>
  );
};

export default Project;
