import Link from "next/link";
import Image from "next/image";
import styles from "./work.module.css";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Works = (props) => {
  return (
    <section className="h-auto py-12 lg:py-0 lg:h-screen bg-slate-50">
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-lg px-2 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold text-sky-900`}>
          LATEST WORKS
        </p>
        <p
          className={`text-sm md:text-xl font-light py-4 text-sky-900/30 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <ul className={`w-full flex flex-wrap mb-12 px-4  ${styles.wrapper}`}>
          {props.data.map((work) => {
            return (
              <Link href={`/projects/${work.slug}`}>
                <li
                  style={{
                    backgroundImage: `url(/images/projects/${work.slug}/${work.image})`,
                  }}
                  className={`cursor-pointer inline-block relative bg-cover bg-no-repeat bg-center rounded-xl border-slate-200 border ${styles.work}`}
                  key={work.id}
                >
                  <div className={`p-4 ${styles.detail}`}>
                    <h1>{work.title}</h1>
                    <ul className="flex items-center justify-start my-2">
                      {work.tags.map((tag) => {
                        return (
                          <li
                            key={tag}
                            className="px-2 mx-1 text-sm font-light rounded-full bg-slate-200"
                          >
                            {tag}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center text-sky-700">
          <Link href={`/projects`}>ALL PROJECTS</Link>
          <ArrowRightIcon className="inline-block w-4 h-4 ml-2" />
        </div>
      </div>
    </section>
  );
};

export default Works;
