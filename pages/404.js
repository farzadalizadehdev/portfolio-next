import Image from "next/image";
export default function Custom404() {
  return (
    <section className="flex items-center justify-center w-full h-screen max-w-screen-lg mx-auto">
      <Image
        className="center"
        src="/images/404-error-animate.svg"
        width={500}
        height={500}
        alt="404"
      />
    </section>
  );
}
