import { useRef } from "react";
import Link from "next/link";

const ProjectFilter = (props) => {
  // const typeListRef = useRef();
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   const selectedType = typeListRef.current.value;
  //   props.onSearch(selectedType);
  // };
  return (
    <ul className="flex px-4 mt-4 mb-8 text-sm">
      <li className="px-4 py-2 font-light border-b-2 text-sky-900 hover:text-sky-800 border-b-sky-700">
        <Link href={`/projects`}>All</Link>
      </li>
      <li className="px-4 py-2 font-light text-sky-900 hover:text-sky-800">
        <Link href={`/projects/development`}>Development</Link>
      </li>
      <li className="px-4 py-2 font-light text-sky-900 hover:text-sky-800">
        <Link href={`/projects/uiux`}>UI/UX</Link>
      </li>
      <li className="px-4 py-2 font-light text-sky-900 hover:text-sky-800">
        <Link href={`/graphic`}>Graphic</Link>
      </li>
    </ul>
  );
};
export default ProjectFilter;
