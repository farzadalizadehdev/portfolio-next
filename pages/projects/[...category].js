import ProjectFilter from "../../components/Projects/ProjectFilter/ProjectFilter";
import Projects from "../../components/Projects/Projects";
import Custom404 from "../404";
import {
  getFilteredProjects,
  getAllProjects,
} from "../../utils/getProjectsFromMarkdown";

const FilteredProjectPage = (props) => {
  if (props.hasError) {
    return <Custom404 />;
  }
  return (
    <section className="container max-w-screen-xl min-h-screen p-8 mx-auto">
      <ProjectFilter filters={props.filters} />
      <Projects data={props.category} />
    </section>
  );
};

export async function getServerSideProps(context) {
  const allProject = getAllProjects();
  const filters = allProject.map((project) => {
    return project.category;
  });
  const flatFilters = filters.flat()

  const { params } = context;
  const category = params.category;
  const filteredProjects = getFilteredProjects(category[1]);

  if (!filteredProjects.length) {
    return {
      props: { hasError: true },
      notFound: true,
    };
  }
  return {
    props: {
      category: filteredProjects,
      filters: [...new Set(flatFilters)],
    },
  };
}

export default FilteredProjectPage;
