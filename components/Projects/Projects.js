import Link from "next/link";
import styles from "./projects.module.css";
import { motion } from "framer-motion";

const Projects = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <ul className="container max-w-screen-xl min-h-screen px-8 mx-auto">
      <motion.div initial="hidden" animate="visible" variants={variants}>
        {props.data.map((item) => {
          const { id, title, excerpt, slug, image, tags } = item;
          return (
            <li
              key={id}
              style={{
                backgroundImage: `url(/images/projects/${slug}/${image})`,
              }}
              className={`${styles.project} relative inline-block bg-cover bg-no-repeat bg-center rounded-xl border-slate-200 dark:border-zinc-800 border`}
            >
              <Link href={`/projects/${slug}`} passHref>
                <div
                  className={`cursor-pointer px-4 py-6 h-full w-full flex items-start flex-col justify-end ${styles.detail}`}
                >
                  <h1 className="text-white ">{title}</h1>
                  <p className="text-xs font-light text-slate-200">{excerpt}</p>
                  <ul className="flex items-center justify-start my-2">
                    {tags &&
                      tags.map((tag) => {
                        return (
                          <li
                            key={tag}
                            className="px-3 py-1 mr-2 text-xs font-light rounded-full bg-slate-200 dark:bg-zinc-800 dark:text-zinc-400"
                          >
                            {tag}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </Link>
            </li>
          );
        })}
      </motion.div>
    </ul>
  );
};

export default Projects;
