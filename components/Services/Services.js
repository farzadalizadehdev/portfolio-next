import Link from "next/link";
import styles from "./services.module.css";
import Image from "next/image";
const Services = (props) => {
  return (
    <section id="services" className="h-auto py-12 bg-slate-100 md:h-screen md:py-0">
      <div className="container flex flex-col items-center justify-center h-full max-w-screen-lg px-6 mx-auto">
        <p className={`text-4xl md:text-6xl font-bold text-sky-900`}>
          SERVICES
        </p>
        <p
          className={`text-sm md:text-xl font-light py-4 text-sky-900/30 md:mb-12 mb-0`}
        >
          I’m always in learning...
        </p>
        <ul className={styles.serviceItems}>
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
                <Link href={`/projects/search/${service.slug}`}>
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
