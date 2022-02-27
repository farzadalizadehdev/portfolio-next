import Logo from "./Logo/Logo";
import NavItem from "./NavItem/NavItem";
import style from "./navigation.module.css";
import { DownloadIcon } from "@heroicons/react/solid";
const Navigation = (props) => {
  const nav = [
    { name: "SKILLS", to: "#", active: true },
    { name: "WORKS", to: "#", active: false },
    { name: "SERVICES", to: "#", active: false },
    { name: "CLIENTS", to: "#", active: false },
    { name: "CONTACT", to: "#", active: false },
  ];
  return (
    <nav className="flex items-center justify-between h-full">
      <Logo />
      <ul className="flex items-center justify-between h-full basis-6/12">
        {nav.map((item) => {
          return <NavItem key={item.name} item={item} />;
        })}
      </ul>
      <button className="px-4 py-2 text-sm rounded-full text-sky-900 bg-sky-100">
        <DownloadIcon className="inline-block w-4 h-4 mr-1 align-sub" />
        Download CV
      </button>
    </nav>
  );
};

export default Navigation;
