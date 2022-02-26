import ReactMarkdown from "react-markdown";
import Image from "next/image";

const About = (props) => {
  const { content } = props.content;
  const renderers = {
    img(image) {
      return (
        <Image
          src={`/images/${image.src}`}
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
  return (
    <section>
      <ReactMarkdown className="aboutText" components={renderers}>
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default About;
