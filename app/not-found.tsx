import { Metadata } from "next";

import AnimatedButton from "@/components/AnimatedButton";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-dark-300 text-white">
        <div className="top-element flex h-full w-full flex-col items-center justify-center gap-y-4">
          <div className="flex flex-col items-center">
            <h1 className="font-consola h-fit w-fit text-[12rem] leading-none md:text-[16rem] lg:text-[24rem] xl:text-[36rem]">
              404
            </h1>
            <h3 className="text-lg italic lg:text-4xl">
              &quot;This is not the page you are looking for&quot;
            </h3>
          </div>
          <AnimatedButton className="top-element" to="/" text="Go back" />
        </div>
      </div>
    </>
  );
}
