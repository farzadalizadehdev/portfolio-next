import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "./about.module.css";
import {
  DownloadIcon,
  CodeIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";

const About = (props) => {
  const { theme, setTheme } = useTheme();
  const { content } = props.content;
  const { tel, email, github, downloadCV } = props.contactInfo;
  const renderers = {
    img(image) {
      return (
        <div className="ml-2 align-middle">
          <Image
            src={`/images/${image.src}`}
            alt={image.alt}
            priority
            height={45}
            width={45}
            layout="fixed"
          />
        </div>
      );
    },
  };
  return (
    <section
      className={`bg-no-repeat bg-clip-content bg-left md:bg-center lg:bg-cover h-screen bg-fixed bg-[url('/images/about-light2.jpg')] dark:bg-[url('/images/about-dark1.jpg')] ${styles.aboutSection}`}
    >
      <div className="container z-20 h-full max-w-screen-lg px-4 mx-auto">
        <ReactMarkdown
          className={`${styles.aboutContent} ${theme === 'light' ? styles.light : styles.dark} flex flex-col items-center md:items-start justify-center`}
          components={renderers}
        >
          {content}
        </ReactMarkdown>
        <div
          className={`h-20 flex items-center justify-center md:justify-start ${styles.actionButtons}`}
        >
          <a
            href={downloadCV}
            className="flex items-center justify-center px-4 py-3 text-sm text-white rounded-full dark:text-slate-800 bg-slate-800 dark:bg-slate-200 hover:bg-slate-600"
          >
            <DownloadIcon className="inline-block w-4 h-4 mr-1 align-sub" />
            Download CV
          </a>
          <a
            href={github}
            className="relative flex items-center justify-center w-10 h-10 ml-4 text-sm text-white rounded-full bg-slate-800 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-200 hover:bg-slate-700 flexitems-center"
          >
            <CodeIcon className="inline-block w-4 h-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center w-10 h-10 ml-4 text-sm text-white rounded-full bg-slate-800 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-200 hover:bg-slate-700 flexitems-center"
          >
            <MailIcon className="inline-block w-4 h-4" />
          </a>
          <a
            href={`tel:${tel}`}
            className="flex items-center justify-center w-10 h-10 ml-4 text-sm text-white rounded-full bg-slate-800 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-200 hover:bg-slate-700 flexitems-center"
          >
            <PhoneIcon className="inline-block w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
