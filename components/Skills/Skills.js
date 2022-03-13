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
          height={350}
          width={1000}
        />
      );
    },
  };
  return (
    <section id="skills" className="h-auto py-12 md:h-screen md:py-0 bg-slate-50">
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-xl px-4 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold text-sky-900`}>SKILLS</p>
        <p
          className={`text-sm md:text-xl font-light py-4 text-sky-900/30 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Skills;
