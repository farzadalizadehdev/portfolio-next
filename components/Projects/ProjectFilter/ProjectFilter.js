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
    <ul className="sticky z-20 flex items-center justify-center w-full h-12 px-4 mt-4 mb-8 text-sm bg-white md:justify-start top-16">
      <li
        onClick={handleTabChange}
        className={`cursor-pointer mx-4 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
          activeTab === "all" ? "border-b-2" : ""
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
            className={`cursor-pointer mx-4 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
              activeTab === filter ? "border-b-2" : ""
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
