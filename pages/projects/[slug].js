import ProjectDetail from "../../components/Projects/ProjectDetail/ProjectDetail";
import {
  getProjectFiles,
  getProjectData,
} from "../../utils/getProjectsFromMarkdown";
import Custom404 from "../404";

const ProjectDetailPage = (props) => {
  if(!props.slug) {
    return <Custom404/>
  }
  return <ProjectDetail data={props.slug} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const projectDetail = getProjectData(slug);
  return {
    props: {
      slug: projectDetail,
    },
  };
}

export async function getStaticPaths() {
  const allProject = getProjectFiles();
  const slugs = allProject.map((project) => project.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ProjectDetailPage;
