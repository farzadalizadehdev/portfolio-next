import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const ProjectDetail = (props) => {
  const { title, excerpt, slug, image, content } = props.data;
  const renderers = {
    img(image) {
      return (
        <Image
          src={`/images/projects/${slug}/${image.src}`}
          alt={image.alt}
          priority
          height={200}
          width={200}
          layout="fixed"
          className="custom-image"
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
    p(content){
      return (
        <p className="custom-p">
          {content}
        </p>
      )
    }
  };

  return (
    <div>
      <Image
        src={`/images/projects/${slug}/${image}`}
        alt={title}
        priority
        height={159}
        width={144}
        layout="fixed"
      />
      <ReactMarkdown className="title">{title}</ReactMarkdown>
      <ReactMarkdown>{excerpt}</ReactMarkdown>
      <ReactMarkdown className="content" components={renderers}>{content}</ReactMarkdown>
    </div>
  );
};

export default ProjectDetail;
