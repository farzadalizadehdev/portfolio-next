import ProjectFilter from "../../components/Projects/ProjectFilter/ProjectFilter";
import Projects from "../../components/Projects/Projects";
import { getAllProjects } from "../../utils/getProjectsFromMarkdown";

const ProjectsPage = (props) => {
  return (
    <section className="w-full mx-auto dark:bg-gradient-to-t dark:from-purple-600 dark:to-purple-900">
      <ProjectFilter filters={props.filters} />
      <Projects data={props.projects} />
    </section>
  );
};

export async function getStaticProps() {
  const allProject = getAllProjects();
  const filters = allProject.map((project) => {
    return project.category;
  });
  const flatFilters = filters.flat()
  return {
    props: {
      projects: allProject,
      filters: [...new Set(flatFilters)],
    },
  };
}

export default ProjectsPage;
