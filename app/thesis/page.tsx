import type { Metadata } from "next";
import {
  MediumIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "Thesis",
  description: "Why Bitcoin mining venture",
};

export default function ThesisPage() {
  return (
    <section className="max-w-[512px]">
      <h1 className="font-bold text-3xl font-serif">Thesis</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          Banks are failing. Inflation is eating savings. The Federal Reserve
          shows no signs of turning off the money printer.
          <br />
          <br />
          We are currently in an economic transitionary period. The big debt
          cycle has turned the corner and now the world is questioning how we're
          going to operate moving forward.
          <br />
          <br />
          The Federal Reserve is pushing for CBDCs. The BRICS countries are
          pushing the Yuan against commodities. The people are choosing{" "}
          <b>Bitcoin</b>.
        </p>
      </div>
    </section>
  );
}
