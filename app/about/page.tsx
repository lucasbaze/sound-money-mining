import Image from "next/image";
import type { Metadata } from "next";
import {
  MediumIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Bitcoin mining venture",
};

type TeamMemberProps = {
  image: string;
  imageAlt: string;
  name: string;
  shortBio: string;
  bio: string;
  bioTwo?: string;
  twitter: string;
  medium?: string;
};

const TeamMember = ({
  image,
  imageAlt,
  name,
  shortBio,
  bio,
  bioTwo,
  twitter,
  medium,
}: TeamMemberProps) => (
  <>
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="mb-4 md:flex-1 overflow-hidden mr-8 min-w-[150px]">
        <Image
          className="rounded-full"
          src={image}
          alt={imageAlt}
          height="150"
          width="150"
          priority
        />
      </div>
      <div className="flex flex-col flex-2 whitespace-pre-line">
        <h2 className="my-2">{name}</h2>
        <p className="leading-snug">{shortBio}</p>
      </div>
    </div>
    <p className="">{bio}</p>
    {bioTwo && <p className="mb-8">{bioTwo}</p>}
    <div className="flex flex-col mb-12 gap-2 md:flex-row md:gap-2">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={twitter}
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between md:max-w-[50%]"
      >
        <div className="flex items-center">
          <TwitterIcon />
          <div className="ml-3">Twitter</div>
        </div>
        <ArrowIcon />
      </a>
      {medium && (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={medium}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <MediumIcon />
            <div className="ml-3">Medium</div>
          </div>
          <ArrowIcon />
        </a>
      )}
    </div>
  </>
);

export default function AboutPage() {
  return (
    <section className="max-w-[512px]">
      <h1 className="font-bold text-3xl font-serif">The Team</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        
        <p className="mb-12">
          With over 10 combined years of exposure, education, and involvement in
          the Bitcoin world, we are excited about Bitcoin and the future. If you
          have any questions, do not hesitate to reach out to us!{" "}
        </p>
        <TeamMember
          key="roberto"
          image="/images/team/roberto-bw-sketch-twitter-lazer-eyes.jpeg"
          imageAlt="Roberto Lazer Eyes"
          name="Roberto Gargurevich"
          shortBio="First principles thinker and analytics junkie."
          bio="An industrial and systems engineer by trade, I discovered a profound passion for investing and economics. I thoroughly enjoy immersing myself in abstract and complex problems, relishing the opportunity to unravel their intricacies. Drawing upon my engineering background, I bring a strategic mindset to explore innovative solutions."
          bioTwo="I have worked in globlal supply chain and fixed asset management for over 5 years. Currently the Senior Analyst of Strategy and Performance at EXSIF Worldwide, Inc, a Berkshire Hathaway Company."  
          twitter="https://twitter.com/gargu_R"
        />
        <TeamMember
          key="roberto"
          image="/images/team/lucas-lazer-eyes.jpeg"
          imageAlt="Lucas Lazer Eyes"
          name="Lucas Bazemore"
          shortBio="If ruthless prioritization had a kid with relentless execution."
          bio="Throughout my career, I've had the pleasure of learning and applying the fundamentals of sales, marketing, product, and engineering with small to medium teams building companies that people want to work at and invest."
          bioTwo="Previously managed software teams at Republic.com. Currently the Director of Engineering at Wondersciences, a psychedelics telemedicine company."
          twitter="https://twitter.com/lazemore"
          medium="https://medium.com/@lucasbazemore"
        />
      </div>
    </section>
  );
}
