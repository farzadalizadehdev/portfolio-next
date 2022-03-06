import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const ProjectDetail = (props) => {
  const { title, excerpt, slug, image, content, slide } = props.data;
  const renderers = {
    img(image) {
      return (
        <Image
          src={`/images/projects/${slug}/${image.src}`}
          alt={image.alt}
          priority
          height={100}
          width={200}
          layout="responsive"
          style={{marginTop:'2rem'}}
        />
      );
    },
    code(code) {
      const { children } = code;
      return (
        <SyntaxHighlighter
          style={monokai}
          language="javascript"
          children={children}
        />
      );
    },
  };

  return (
    <div className="bg-slate-50">
      <figure
        style={{
          backgroundImage: `url(/images/projects/${slug}/${slide})`,
        }}
        className={`w-full h-96 bg-cover bg-no-repeat bg-center`}
      ></figure>
      <section className="container flex w-screen max-w-screen-xl px-8 mx-auto -mt-24 bg-transparent">
        <div className="flex flex-col w-2/3">
          <ReactMarkdown className="mt-8 mb-12 text-3xl text-slate-800">
            {title}
          </ReactMarkdown>
          <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
        </div>
        <div className="sticky w-1/3 px-6 py-8 ml-8 bg-white border rounded h-96 top-24 border-slate-200">
          <p className="text-3xl text-slate-800 ">Project Detail</p>
          <ReactMarkdown>{excerpt}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
