/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "SKILLS", href: "skills" },
  { name: "SERVICES", href: "services" },
  { name: "WORKS", href: "works" },
  { name: "CLIENTS", href: "clients" },
  { name: "CONTACT", href: "contact" },
];
const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const handleScrollToSection = (e) => {
    let elementId = e.target.dataset.id;
    var element = document.querySelector(`#${elementId}`);
    element && element.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Popover className="relative h-full">
      <div className="w-full h-full px-4 mx-auto">
        <div className="flex items-center justify-end h-full md:justify-between">
          <div className="flex justify-start w-full md:w-1/6">
            <span className="sr-only">Workflow</span>
            <Link href={`/`} passHref>
              <Image
                className="w-auto h-8 sm:h-10"
                src="/images/tailwind.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
          </div>
          <Popover.Group
            as="nav"
            className="justify-center hidden w-3/6 space-x-10 md:flex grow"
          >
            {navItems.map((item) => {
              return (
                <span
                  data-id={item.href}
                  key={item.name}
                  onClick={handleScrollToSection}
                  className="text-sm cursor-pointer dark:text-slate-200 text-slate-600 hover:text-slate-900"
                >
                  {item.name}
                </span>
              );
            })}
          </Popover.Group>
          <div
            className="block p-4 text-right cursor-pointer md:w-1/6"
            onClick={handleChangeTheme}
          >
            {theme === "dark" ? (
              <MoonIcon className="inline-block w-4 h-4 mr-1 align-sub" />
              ) : (
              <SunIcon className="inline-block w-4 h-4 mr-1 align-sub" />
            )}
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:bg-zinc-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 dark:divide-zinc-700 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="w-auto h-8 sm:h-10"
                    src="/images/tailwind.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:bg-zinc-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  return (
                    <span
                      data-id={item.href}
                      key={`${item.name}MobileNav`}
                      onClick={handleScrollToSection}
                      className="py-2 text-sm font-medium text-gray-900 hover:text-gray-700 dark:text-gray-200"
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navigation;
