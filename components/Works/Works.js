import Link from "next/link";
import Image from "next/image";
import styles from "./work.module.css";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Works = (props) => {
  return (
    <section
      id="works"
      className="flex items-center justify-center min-h-screen py-12 dark:bg-neutral-900 text-slate-700 dark:text-slate-100 bg-slate-50"
    >
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-xl px-2 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold `}>LATEST WORKS</p>
        <p
          className={`text-sm md:text-xl font-light py-4 text-slate-400 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <ul className={`w-full flex flex-wrap mb-12 px-4  ${styles.wrapper}`}>
          {props.data.map((work) => {
            return (
              <Link key={work.slug} href={`/projects/${work.slug}`} passHref>
                <li
                  style={{
                    backgroundImage: `url(/images/projects/${work.slug}/${work.image})`,
                  }}
                  className={`cursor-pointer inline-block relative bg-cover bg-no-repeat bg-center rounded-xl border-zinc-200 dark:border-zinc-800 border hover:border-slate-800 ${styles.work}`}
                >
                  <div className={`p-4 ${styles.detail}`}>
                    <h1 className=" text-zinc-800">{work.title}</h1>
                    <p className="text-xs font-light text-zinc-600">
                      {work.excerpt}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center dark:text-slate-100 text-sky-700 hover:text-sky-600">
          <Link href={`/projects`} passHref>See More Projects</Link>
          <ArrowRightIcon className="inline-block w-4 h-4 ml-2" />
        </div>
      </div>
    </section>
  );
};

export default Works;
