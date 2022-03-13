import { CodeIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";

const Contact = (props) => {
  const { email, tel, github } = props.content;
  return (
    <section id="contact" className="h-auto py-12 bg-zinc-900 md:py-24">
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-xl px-4 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold text-slate-50`}>
          CONTACT ME
        </p>
        <p
          className={`text-sm md:text-xl font-light py-4 text-slate-300 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <div className={`h-full flex items-center justify-start flex-wrap `}>
          <a
            href={github}
            className="relative flex items-center justify-center m-4 text-slate-800 "
          >
            <CodeIcon className="inline-block w-12 h-12 p-3 bg-white rounded-full" />
            <div className="px-4 text-left text-white">
              <p className="text-xs font-light text-slate-200">
                View My Github
              </p>
              <span>{github}</span>
            </div>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center m-4 text-slate-800"
          >
            <MailIcon className="inline-block w-12 h-12 p-3 bg-white rounded-full" />
            <div className="px-4 text-left text-white">
              <p className="text-xs font-light text-slate-200">Send e-Mail</p>
              <span>{email}</span>
            </div>
          </a>
          <a
            href={`tel:${tel}`}
            className="flex items-center justify-center m-4 text-slate-800"
          >
            <PhoneIcon className="inline-block w-12 h-12 p-3 bg-white rounded-full" />
            <div className="px-4 text-left text-white">
              <p className="text-xs font-light text-slate-200">Call Me Now</p>
              <span>{tel}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
