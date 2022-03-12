import Image from "next/image";
export default function Custom404() {
  return (
    <section className="h-screen w-full mx-auto max-w-screen-lg  flex items-center justify-center">
      <Image
        className="center"
        src="/404-error-animate.svg"
        width={500}
        height={500}
        alt="404"
      />
    </section>
  );
}
