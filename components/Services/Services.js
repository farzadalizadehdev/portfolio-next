import Link from "next/link";
import styles from "./services.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";
const Services = (props) => {
  const { theme, setTheme } = useTheme();
  return (
    <section
      id="services"
      className={`${styles.theme} h-auto py-12 dark:bg-zinc-900/50 text-slate-700 dark:text-slate-100 bg-slate-100 md:h-screen md:py-0rr`}
    >
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-lg px-6 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold`}>SERVICES</p>
        <p
          className={`text-sm md:text-xl font-light text-slate-400 py-4 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <ul className={`${styles.serviceItems}`}>
          {props.data.map((service) => {
            return (
              <li className="flex flex-col px-8" key={service.title}>
                <div
                  className={`flex items-center justify-between mt-2 ${styles.header}`}
                >
                  <p className="m-0 cursor-default">{service.title}</p>
                  <Image
                    width={35}
                    height={35}
                    src={`/images/services/${service.image}`}
                    alt=""
                  />
                </div>
                <p className="my-4 font-light cursor-default text-md grow">
                  {service.description}
                </p>
                <Link href={`/projects/search/${service.slug}`} passHref>
                  See Projects
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
