import Projects from "../../components/Projects/Projects";
import { getAllProjects } from "../../utils/getProjectsFromMarkdown";

const ProjectsPage = (props) => {
  return <Projects data={props.projects} />;
};

export async function getStaticProps() {
  const allProject = getAllProjects();
  return {
    props: {
      projects: allProject,
    },
  };
}

export default ProjectsPage;
