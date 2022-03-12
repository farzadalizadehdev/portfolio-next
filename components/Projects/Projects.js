import Link from "next/link";
import styles from "./projects.module.css";

const Projects = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        const { id, title, excerpt, slug, image, tags } = item;
        return (
          <li
            key={id}
            style={{
              backgroundImage: `url(/images/projects/${slug}/${image})`,
            }}
            className={`${styles.project} relative inline-block relative bg-cover bg-no-repeat bg-center rounded-xl border-slate-200 border hover:border-sky-800`}
          >
            <Link href={`/projects/${slug}`}>
              <div
                className={`cursor-pointer px-4 py-6 h-full w-full flex items-start flex-col justify-end ${styles.detail}`}
              >
                <h1 className=" text-white">{title}</h1>
                <p className="text-xs font-light text-slate-200">{excerpt}</p>
                <ul className="flex items-center justify-start my-2">
                  {tags &&
                    tags.map((tag) => {
                      return (
                        <li
                          key={tag}
                          className="px-3 py-1 mr-2 text-xs font-light rounded-full bg-slate-200"
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
    </ul>
  );
};

export default Projects;
