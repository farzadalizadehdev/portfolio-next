import Link from "next/link";
const Works = (props) => {
  return (
    <section className="works-section">
      <p>LATEST WORKS</p>
      <p>I’m always in learning...</p>
      <ul>
        {props.data.map((work) => {
          return <li key={work.id}>{work.title}</li>;
        })}
      </ul>
      <Link href={`/projects`}>see all projects</Link>
    </section>
  );
};

export default Works;
