import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "./projectDetail.module.css";
import {
  BriefcaseIcon,
  CalendarIcon,
  CodeIcon,
  DocumentIcon,
  GlobeAltIcon,
  HandIcon,
  OfficeBuildingIcon,
  PuzzleIcon,
  TemplateIcon,
  TerminalIcon,
  UserIcon,
} from "@heroicons/react/outline";
import ProjectDetailItem from "./ProjectDetailItem/ProjectDetailItem";

const ProjectDetail = (props) => {
  const { title, excerpt, slug, image, content, slide, detail } = props.data;
  const { employer, name, dates, technology, responsibilities, links } = detail;
  const {website, design , github} = links
  const renderers = {
    img(image) {
      return (
        <div className="my-8 overflow-hidden rounded">
          <Image
            src={`/images/projects/${slug}/${image.src}`}
            alt={image.alt}
            priority
            height={100}
            width={200}
            layout="responsive"
          />
        </div>
      );
    },
    code(code) {
      const { children } = code;
      return (
        <SyntaxHighlighter
          className="my-8 overflow-hidden rounded"
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
      <section className="container flex flex-col items-start w-screen max-w-screen-xl px-8 mx-auto -mt-24 bg-transparent lg:flex-row">
        <div className="flex flex-col w-full lg:basis-2/3">
          <h1 className="mt-8 mb-12 text-3xl text-sky-900">{title}</h1>
          <ReactMarkdown
            className="text-lg font-light text-gray-900"
            components={renderers}
          >
            {content}
          </ReactMarkdown>
        </div>
        <div className="sticky w-full h-auto m-0 mb-8 lg:ml-8 lg:basis-96 top-24">
          <div className="px-6 py-8 bg-white border rounded border-slate-200">
            <p className="mb-4 text-3xl text-sky-900">Project Detail</p>
            <ul>
              <ProjectDetailItem
                detail={name}
                icon={<DocumentIcon className={styles.detailIcon} />}
              />
              <ProjectDetailItem
                detail={dates}
                icon={<CalendarIcon className={styles.detailIcon} />}
              />
              <ProjectDetailItem
                detail={employer}
                icon={<OfficeBuildingIcon className={styles.detailIcon} />}
              />
              <ProjectDetailItem
                detail={responsibilities}
                icon={<UserIcon className={styles.detailIcon} />}
              />
              <ProjectDetailItem
                detail={technology}
                icon={<TerminalIcon className={styles.detailIcon} />}
              />
            </ul>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col">
          {website && <a href={website.url} target="_blank" className="flex items-center justify-center w-full h-12 m-0 mt-6 border rounded cursor-pointer md:mx-2 lg:mx-0 lg:mt-6 bg-sky-100 text-sky-800 hover:bg-sky-200 border-sky-200">
            <GlobeAltIcon className="w-5 h-5 mr-2" />
            {website.text}
          </a>}
          {design && <a href={design.url} target="_blank" className="flex items-center justify-center w-full h-12 m-0 mt-6 border rounded cursor-pointer md:mx-2 lg:mx-0 lg:mt-6 bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200 border-fuchsia-200">
            <TemplateIcon className="w-5 h-5 mr-2" />
            {design.text}
          </a>}
          {github && <a href={github.url} target="_blank" className="flex items-center justify-center w-full h-12 m-0 mt-6 border rounded cursor-pointer md:mx-2 lg:mx-0 lg:mt-6 bg-slate-800 text-slate-100 hover:bg-slate-700 border-slate-700">
            <CodeIcon className="w-5 h-5 mr-2" />
            {github.text}
          </a>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
