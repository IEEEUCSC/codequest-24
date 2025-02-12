import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import Hero from "@/components/Hero";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="">
      <div className="color-showcase p-20">
        <h2>Background Colors</h2>

        <div className="flex flex-wrap justify-center gap-2">
          <h2>Background Colors</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="color-block cq-bg-pr-50"></div>
            <div className="color-block cq-bg-pr-100"></div>
            <div className="color-block cq-bg-pr-200"></div>
            <div className="color-block cq-bg-pr-300"></div>
            <div className="color-block cq-bg-pr-400"></div>
            <div className="color-block cq-bg-pr-500"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="color-block cq-bg-dark-100"></div>
            <div className="color-block cq-bg-dark-200"></div>
            <div className="color-block cq-bg-dark-300"></div>
            <div className="color-block cq-bg-dark-400"></div>
          </div>
        </div>

        <h2>Text Colors</h2>

        <div className="text-example cq-text-pr-50">Primary 50</div>

        <div className="text-example cq-text-pr-100">Primary 100</div>

        <div className="text-example cq-text-pr-200">Primary 200</div>

        <div className="text-example cq-text-pr-300">Primary 300</div>

        <div className="text-example cq-text-pr-400">Primary 400</div>

        <div className="text-example cq-text-pr-500">Primary 500</div>

        <div className="text-example cq-text-dark-100">Dark 100</div>

        <div className="text-example cq-text-dark-200">Dark 200</div>

        <div className="text-example cq-text-dark-300">Dark 300</div>

        <div className="text-example cq-text-dark-400">Dark 400</div>
      </div>

      <div className="min-h-screen w-full" />

      <div className="min-h-screen w-full" />
    </div>
  );
}
