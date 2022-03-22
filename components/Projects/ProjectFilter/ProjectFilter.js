import { useRouter } from "next/router";
import { useState } from "react";

const ProjectFilter = (props) => {
  const router = useRouter();
  const initialActiveTab = router.query.category
  const [activeTab, setActiveTab] = useState(initialActiveTab ? initialActiveTab[1] : 'all');
  const handleTabChange = (e) => {
    const tab = e.target.dataset.tab;
    router.push(tab ? `/projects/search/${tab}` : `/projects`);
    setActiveTab(tab ? tab : 'all')
  };
  return (
    <ul className="container sticky z-20 flex items-center justify-center h-20 max-w-screen-xl px-8 mx-auto text-sm bg-white dark:bg-zinc-900 md:justify-start top-16">
      <li
        onClick={handleTabChange}
        className={`cursor-pointer mx-4 py-2 font-light text-sky-900 hover:text-sky-800 dark:text-slate-300 dark:border-b-slate-400 border-b-sky-900 ${
          activeTab === "all" ? "border-b" : ""
        }`}
      >
        ALL
      </li>
      {props.filters.map((filter) => {
        return (
          <li
            onClick={handleTabChange}
            key={filter}
            data-tab={filter}
            className={`cursor-pointer mx-4 py-2 font-light text-sky-900 dark:text-slate-300 hover:text-sky-800 dark:border-b-slate-400 border-b-sky-900 ${
              activeTab === filter ? "border-b" : ""
            }`}
          >
            {filter && filter.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectFilter;
