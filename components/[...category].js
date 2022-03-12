import {
  getFilteredProjects,
  getAllProjects,
} from "../utils/getProjectsFromMarkdown";
import ProjectFilter from "./Projects/ProjectFilter/ProjectFilter";
import Projects from "./Projects/Projects";
import Custom404 from "../pages/404";

const FilteredProjectPage = (props) => {
  if (props.hasError) {
    return <Custom404/>;
  }
  if(!props.category) {
    return <h1>LOADING...</h1>
  }
  return (
    <section className="container max-w-screen-xl min-h-screen p-8 mx-auto">
      {/* <ProjectFilter filters={props.filters} /> */}
      <Projects data={props.category} />
    </section>
  );
};

export async function getServerSideProps(context) {
  // const allProject = getAllProjects();
  // const filters = allProject.map((project) => {
  //   return project.category;
  // });
  // const flatFilters = filters.flat()

  const { params } = context;
  const category = params.category;
  const filteredProjects = getFilteredProjects(category[1]);
  // if (!category) {
  //   return {
  //     props: { hasError: true },
  //     notFound: true,
  //   };
  // }
  if (!filteredProjects.length) {
    return {
      props: { hasError: true },
      notFound: true,
    };
  }
  return {
    props: {
      category: filteredProjects,
      // filters: [...new Set(flatFilters)],
    },
  };
}

export default FilteredProjectPage;
