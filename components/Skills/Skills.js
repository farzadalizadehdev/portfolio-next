import ReactMarkdown from "react-markdown";
import Image from "next/image";

const Skills = (props) => {
  const { content } = props.content;
  const renderers = {
    img(image) {
      return (
        <Image
          src={`/images/skills/${image.src}`}
          alt={image.alt}
          priority
          height={250}
          width={250}
          layout="fixed"
          className="custom-image"
        />
      );
    },
  };
  return (
    <section className="skills-section">
      <p>SKILLS</p>
      <p>I’m always in learning...</p>
      <ReactMarkdown className="aboutText" components={renderers}>
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default Skills;
