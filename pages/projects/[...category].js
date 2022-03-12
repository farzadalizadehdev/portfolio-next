import { getFilteredProjects } from "../../utils/getProjectsFromMarkdown";
import ProjectFilter from "../../components/Projects/ProjectFilter/ProjectFilter";
import Projects from "../../components/Projects/Projects";

const FilteredProjectPage = (props) => {
  if (props.hasError) {
    return <h1>Error</h1>;
  }
  return (
    <section className="container max-w-screen-xl min-h-screen p-8 mx-auto">
      <ProjectFilter/>
      <Projects data={props.projects} />
    </section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const category = params.category;
  const filteredProjects = getFilteredProjects(category[1]);
  if (!category) {
    return {
      props: { hasError: true },
      notFound: true,
    };
  }
  return {
    props: {
      projects: filteredProjects,
    },
  };
}

export default FilteredProjectPage;
