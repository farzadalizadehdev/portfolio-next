import Projects from "../../components/Projects/Projects";
import { getAllProjects } from "../../utils/getProjectsFromMarkdown";

const ProjectsPage = (props) => {
  return <section className="container max-w-screen-xl min-h-screen p-8 mx-auto">
    <Projects data={props.projects} />
  </section>
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
