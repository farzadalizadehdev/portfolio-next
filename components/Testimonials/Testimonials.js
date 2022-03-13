import { Tab } from "@headlessui/react";
import Image from "next/image";
import styles from "./testimonials.module.css";
import Link from "next/link";
import { AnnotationIcon } from "@heroicons/react/outline";

const Testimonials = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <section
      id="clients"
      className="h-auto py-12 dark:bg-zinc-900/50 text-slate-700 dark:text-slate-100 bg-slate-100 md:h-screen md:py-0"
    >
      <div className="container flex flex-col items-center justify-start h-full max-w-screen-lg px-6 py-0 mx-auto md:py-24">
        <p className={`text-4xl md:text-6xl font-bold`}>TESTIMONIALS</p>
        <p
          className={`text-sm md:text-xl font-light py-4 text-slate-400 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <div className="w-full px-2 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 rounded-md bg-slate-200 dark:bg-zinc-800">
              {props.data.map((comment) => {
                return (
                  <Tab
                    key={comment.title}
                    className={({ selected }) =>
                      classNames(
                        "md:w-full p-2 text-sm leading-5 rounded-md",
                        selected
                          ? `bg-white dark:bg-zinc-900 text-slate-700 w-full sm:w-1/2 ${styles.selected}`
                          : "text-slate-600 hover:bg-white/[0.1]"
                      )
                    }
                  >
                    <div className="flex items-center">
                      <Image
                        width={50}
                        height={50}
                        src={`/images/person/${comment.image}`}
                      />
                      <div
                        className={`${styles.detail} hidden md:block px-3 text-left`}
                      >
                        <p className="m-0 text-xs font-bold sm:text-sm text-zinc-700 dark:text-zinc-300">
                          {comment.title}
                        </p>
                        <p className="m-0 text-xs font-light text-zinc-500">
                          {comment.expertise}
                        </p>
                      </div>
                    </div>
                  </Tab>
                );
              })}
            </Tab.List>
            <Tab.Panels className="mt-2 h-96">
              {props.data.map((comment) => {
                return (
                  <Tab.Panel
                    key={comment.id}
                    className={classNames(
                      "bg-white dark:bg-zinc-800 rounded-md p-4 h-full flex"
                    )}
                  >
                    <div className="flex self-start p-2">
                      <Image src={`/images/quote.svg`} width={50} height={50} />
                    </div>
                    <p className="w-full p-4 text-lg italic">
                      {comment.comment}
                    </p>
                    <div className="flex self-end p-2 rotate-180">
                      <Image src={`/images/quote.svg`} width={50} height={50} />
                    </div>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex items-center hidden mt-12">
          <AnnotationIcon className="inline-block w-5 h-5 mr-2" />
          <Link href={`#`}>Write Your Comment</Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
