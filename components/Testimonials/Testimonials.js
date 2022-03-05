import { Tab } from "@headlessui/react";
const Testimonials = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <section className="h-auto py-12 bg-slate-100 md:h-screen md:py-0">
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-md px-6 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold text-sky-900`}>
          TESTIMONIALS
        </p>
        <p
          className={`text-sm md:text-xl font-light py-4 text-sky-900/30 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
              {props.data.map((comment) => {
                return (
                  <Tab
                    key={comment.title}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                        "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                        selected
                          ? "bg-white shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    {comment.title}
                  </Tab>
                );
              })}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {props.data.map((comment) => {
                return (
                  <Tab.Panel
                    key={comment.id}
                    className={classNames(
                      "bg-white rounded-xl p-3",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                    )}
                  >
                    {comment.comment}
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
