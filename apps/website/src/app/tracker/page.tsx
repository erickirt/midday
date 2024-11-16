import { Button } from "@midday/ui/button";
import { Icons } from "@midday/ui/icons";
import type { Metadata } from "next";
import Image from "next/image";
import Projects from "public/product-projects.png";
import Slot from "public/product-slot.png";
import Tracker from "public/product-tracker.jpg";

export const metadata: Metadata = {
  title: "Time Tracker",
  description:
    "Track your projects time and gain insightful project overviews.",
};

export default function Page() {
  return (
    <div className="container mb-52">
      <div className="mb-40">
        <h1 className="mt-24 font-medium text-center text-[75px] md:text-[170px] mb-2 leading-none text-stroke">
          Time
        </h1>

        <h3 className="font-medium text-center text-[75px] md:text-[170px] mb-2 leading-none">
          Tracker
        </h3>

        <div className="flex items-center flex-col text-center relative">
          <p className="text-lg mt-4 max-w-[600px]">
            Track your hours with ease and gain a clear monthly breakdown of
            billable amounts. Link tracked time to customers and generate
            invoices.
          </p>

          <Button
            className="mt-12 h-11 space-x-2 items-center py-2"
            variant="outline"
          >
            <span>Start tracking time now</span>
            <Icons.ArrowOutward />
          </Button>
        </div>
      </div>

      <Image src={Tracker} quality={90} alt="Tracker" />

      <div className="flex items-center flex-col text-center relative mt-28">
        <div className="max-w-[600px]">
          <h4 className="font-medium text-xl md:text-2xl mb-4">
            Have an overview of whats going on
          </h4>
          <p className="text-[#878787] text-sm">
            Get a clear monthly overview of your tracked hours, set rates and
            view the total billable amount with a detailed monthly breakdown.
            Stay on top of your projects and manage your time effectively.
          </p>
        </div>

        <Image
          src={Projects}
          quality={90}
          alt="Slot"
          className="mt-10 max-w-[450px] w-full"
        />
        <div className="mt-32 max-w-[600px]">
          <h4 className="font-medium text-xl md:text-2xl mb-4">
            Track all your projects
          </h4>
          <p className="text-[#878787] text-sm mb-10">
            Easily link tracked time to a customer and generate invoices based
            on recorded hours. Export your data as a CSV for seamless reporting
            and analysis.
          </p>
        </div>

        <Image
          src={Slot}
          quality={90}
          alt="Slot"
          className="mt-10 max-w-[550px] w-full"
        />
      </div>
    </div>
  );
}
