import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ProjectFilter = () => {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();
  const tab = router.query.category;
  useEffect(() => {
    setActiveTab(tab ? tab[1] : "all");
  }, [tab]);

  return (
    <ul className="flex px-4 mt-4 mb-8 text-sm justify-center md:justify-start">
      <li
        className={`cursor-pointer px-4 py-2 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
          activeTab === "all" ? "border-b-2" : ""
        }`}
      >
        <Link href={`/projects/`}>All</Link>
      </li>
      <li
        data-tab="development"
        className={`cursor-pointer px-4 py-2 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
          activeTab === "development" ? "border-b-2" : ""
        }`}
      >
        <Link href={`/projects/search/development`}>Development</Link>
      </li>
      <li
        data-tab="uiux"
        className={`cursor-pointer px-4 py-2 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
          activeTab === "uiux" ? "border-b-2" : ""
        }`}
      >
        <Link href={`/projects/search/uiux`}>UI/UX</Link>
      </li>
      <li
        data-tab="graphic"
        className={`cursor-pointer px-4 py-2 font-light text-sky-900 hover:text-sky-800 border-b-sky-700 ${
          activeTab === "graphic" ? "border-b-2" : ""
        }`}
      >
        <Link href={`/projects/search/graphic`}>Graphic</Link>
      </li>
    </ul>
  );
};
export default ProjectFilter;
