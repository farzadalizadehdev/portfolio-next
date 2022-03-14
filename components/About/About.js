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
      <div className="absolute z-10 w-full h-full bg-sky-100/90 dark:bg-neutral-900/90"></div>
      <div className="container z-20 flex flex-col justify-center h-full max-w-screen-lg px-4 mx-auto md:justify-start">
        <ReactMarkdown
          className={`${styles.aboutContent} bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-sky-700 dark:from-sky-400 dark:to-sky-800 flex flex-col justify-center`}
          components={renderers}
        >
          {content}
        </ReactMarkdown>
        <div
          className={`h-20 flex items-center justify-start ${styles.actionButtons}`}
        >
          <a
            href={downloadCV}
            className="flex items-center justify-center px-4 py-3 text-sm text-white rounded-full dark:text-slate-800 bg-slate-700 dark:bg-slate-200 hover:bg-sky-800"
          >
            <DownloadIcon className="inline-block w-4 h-4 mr-1 align-sub" />
            Download CV
          </a>
          <a
            href={github}
            className="relative flex items-center justify-center w-10 h-10 ml-4 text-sm text-blue-900 bg-white rounded-full flexitems-center"
          >
            <CodeIcon className="inline-block w-4 h-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center w-10 h-10 ml-4 text-sm text-blue-900 bg-white rounded-full flexitems-center"
          >
            <MailIcon className="inline-block w-4 h-4" />
          </a>
          <a
            href={`tel:${tel}`}
            className="flex items-center justify-center w-10 h-10 ml-4 text-sm text-blue-900 bg-white rounded-full flexitems-center"
          >
            <PhoneIcon className="inline-block w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
