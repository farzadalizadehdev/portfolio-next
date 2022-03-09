// import {
//   getFilteredProjects,
//   getProjectFiles,
//   getProjectData,
//   getAllProjects,
// } from "../../utils/getProjectsFromMarkdown";

const FilteredProjectPage = (props) => {
  console.log(props);
  return <h1>FilteredProjectPage</h1>;
};

// export async function getStaticProps(context) {
//   const { params } = context;
//   const { category } = params;
//   const filteredProjects = getFilteredProjects(category);
//   return {
//     props: {
//       projects: filteredProjects,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allProject = getProjectFiles();
//   const slugs = allProject.map((project) => project.replace(/\.md$/, ""));
//   const categories = [];
//   slugs.map((slug) => {
//     let { category } = getProjectData(slug);
//     categories.push(category);
//   });
//   const unique = (value, index, self) => {
//     return self.indexOf(value) === index;
//   };
//   const uniqueCats = categories.filter(unique);
//   return {
//     paths: uniqueCats.map((cat) => ({ params: { category: [cat] } })),
//     fallback: false,
//   };
// }

export default FilteredProjectPage;
