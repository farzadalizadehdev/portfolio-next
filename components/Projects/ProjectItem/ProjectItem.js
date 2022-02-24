import ReactMarkDown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = (props) => {
  const { title, excerpt, slug, image } = props.data;
  return (
    <li>
      <Image
        src={`/images/projects/${slug}/${image}`}
        alt={title}
        width={159}
        height={144}
      />
      <ReactMarkDown>{title}</ReactMarkDown>
      <ReactMarkDown>{excerpt}</ReactMarkDown>
      <Link href={`/projects/${slug}`}>View Project Detail</Link>
    </li>
  );
};

export default ProjectItem;
