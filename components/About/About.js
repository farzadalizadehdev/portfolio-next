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
    <section className="about-section">
      <div className="container max-w-screen-xl px-4 mx-auto ">
        <ReactMarkdown className="about-content" components={renderers}>
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default About;
