/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, DownloadIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navItems = [
  { name: "SKILLS", href: "skills" },
  { name: "SERVICES", href: "services" },
  { name: "WORKS", href: "works" },
  { name: "CLIENTS", href: "clients" },
  { name: "CONTACT", href: "contact" },
];
const Navigation = () => {
  const handleScrollToSection = (e) => {
    let elementId = e.target.dataset.id;
    var element = document.querySelector(`#${elementId}`);
    element && element.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <Popover className="relative h-full">
      <div className="w-full h-full px-4 mx-auto">
        <div className="flex items-center justify-between h-full">
          <div className="flex justify-start md:flex-1">
            <span className="sr-only">Workflow</span>
            <Link href={`/`}>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {navItems.map((item) => {
              return (
                <span
                  data-id={item.href}
                  key={item.name}
                  onClick={handleScrollToSection}
                  className="text-sm text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  {item.name}
                </span>
              );
            })}
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-sm border border-transparent rounded-full text-sky-800 hover:text-sky-700 bg-sky-50"
            >
              <DownloadIcon className="inline-block w-4 h-4 mr-1 align-sub" />
              Download CV
            </a>
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
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                      className="py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
              <div>
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                >
                  <DownloadIcon className="inline-block w-4 h-4 mr-1 align-sub" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navigation;
