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
          height={25}
          width={25}
          layout="fixed"
          className="custom-image"
        />
      );
    },
  };
  return <ReactMarkdown className="aboutText" components={renderers}>{content}</ReactMarkdown>;
};

export default Skills;
