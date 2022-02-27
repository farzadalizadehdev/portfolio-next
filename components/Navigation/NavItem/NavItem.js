import style from "./navitem.module.css";
const NavItem = (props) => {
  const { name, active } = props.item;
  return (
    <li className={`h-full flex items-center text-sm text-zinc-800 ${active ? style.active : null}`}>
      {name}
    </li>
  );
};

export default NavItem;
