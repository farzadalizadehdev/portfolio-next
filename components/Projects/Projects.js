import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        return <ProjectItem data={item} key={item.id} />;
      })}
    </ul>
  );
};

export default Projects;
