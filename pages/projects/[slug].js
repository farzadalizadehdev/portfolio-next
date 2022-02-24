import ProjectDetail from "../../components/Projects/ProjectDetail/ProjectDetail";
import {
  getProjectFiles,
  getProjectData,
} from "../../utils/getProjectsFromMarkdown";

const ProjectDetailPage = (props) => {
  console.log(props);
  return <ProjectDetail data={props.projectDetail} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const projectDetail = getProjectData(slug);
  return {
    props: {
      projectDetail: projectDetail,
    },
  };
}

export async function getStaticPaths() {
  const allProject = getProjectFiles();
  const slugs = allProject.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ProjectDetailPage;
