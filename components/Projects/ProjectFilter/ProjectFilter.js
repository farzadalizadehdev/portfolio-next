import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ProjectFilter = (props) => {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();
  const tab = router.query.category;
  useEffect(() => {
    setActiveTab(tab ? tab[1] : "all");
  }, [tab]);
  return (
    <ul className="flex w-full px-4 mt-4 mb-8 text-sm justify-center md:justify-start items-center sticky top-16 bg-white z-20 h-12">
      <li
        className={`cursor-pointer mx-4 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
          activeTab === "all" ? "border-b-2" : ""
        }`}
      >
        <Link href={`/projects/`}>
          ALL
        </Link>
      </li>
      {props.filters.map((filter) => {
        return (
          <li
            key={filter}
            data-tab={filter}
            className={`cursor-pointer mx-4 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
              activeTab === filter ? "border-b-2" : ""
            }`}
          >
            <Link href={`/projects/search/${filter}`}>
              {filter && filter.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectFilter;
