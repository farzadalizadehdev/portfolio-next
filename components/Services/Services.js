import Link from "next/link";
import styles from "./services.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";
const Services = (props) => {
  const { theme, setTheme } = useTheme();
  return (
    <section
      id="services"
      className={`${styles.theme} ${
        theme === "dark" ? styles.dark : null
      } min-h-screen py-12 flex items-center justify-center  text-slate-700 dark:text-slate-100 bg-no-repeat bg-center bg-cover bg-fixed bg-[url('/images/service-light.jpg')] dark:bg-[url('/images/service-dark.jpg')] md:py-0`}
    >
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-xl px-6 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold`}>SERVICES</p>
        <p
          className={`text-sm md:text-xl font-light text-slate-400 py-4 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <ul
          className={`flex flex-wrap ${styles.serviceItems}`}
        >
          {props.data.map((service) => {
            return (
              <li className="flex flex-col px-8 m-3 space-x-2 space-y-2 grow md:basis-1/3 lg:basis-1/4" key={service.title}>
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
