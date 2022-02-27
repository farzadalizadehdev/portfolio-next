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
          height={300}
          width={200}
          layout="fixed"
          className="custom-image"
        />
      );
    },
  };
  return (
    <section className="skills-section">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <p>SKILLS</p>
        <p>I’m always in learning...</p>
        <ReactMarkdown className="aboutText" components={renderers}>
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default Skills;
