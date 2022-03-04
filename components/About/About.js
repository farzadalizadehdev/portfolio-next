import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "./about.module.css";
import {
  DownloadIcon,
  CodeIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

const About = (props) => {
  const { content } = props.content;
  const { tel, email, github, downloadCV } = props.contactInfo;
  const renderers = {
    img(image) {
      return (
        <Image
          src={`/images/${image.src}`}
          alt={image.alt}
          priority
          height={50}
          width={50}
          layout="fixed"
        />
      );
    },
  };
  return (
    <section
      className={`bg-auto bg-no-repeat bg-center bg-cover bg-fixed bg-[url('/images/about.jpg')] ${styles.aboutSection}`}
    >
      <div className="container flex flex-col justify-center h-full max-w-screen-lg px-4 mx-auto md:justify-start">
        <ReactMarkdown
          className={`${styles.aboutContent} flex flex-col justify-center`}
          components={renderers}
        >
          {content}
        </ReactMarkdown>
        <div
          className={`h-20 flex items-center justify-start ${styles.actionButtons}`}
        >
          <a
            target="_blank"
            href={downloadCV}
            className="flex items-center justify-center px-4 py-2 text-sm text-white rounded-full bg-sky-900 hover:bg-sky-800"
          >
            <DownloadIcon className="inline-block w-4 h-4 mr-1 align-sub" />
            Download CV
          </a>
          <a
            target="_blank"
            href={github}
            className="relative flex items-center justify-center w-8 h-8 ml-4 text-sm text-blue-900 bg-white rounded-full flexitems-center"
          >
            <CodeIcon className="inline-block w-4 h-4" />
          </a>
          <a
            target="_blank"
            href={`mailto:${email}`}
            className="flex items-center justify-center w-8 h-8 ml-4 text-sm text-blue-900 bg-white rounded-full flexitems-center"
          >
            <MailIcon className="inline-block w-4 h-4" />
          </a>
          <a
            target="_blank"
            href={`tel:${tel}`}
            className="flex items-center justify-center w-8 h-8 ml-4 text-sm text-blue-900 bg-white rounded-full flexitems-center"
          >
            <PhoneIcon className="inline-block w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
