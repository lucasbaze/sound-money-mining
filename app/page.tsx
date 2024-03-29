import { ArrowIcon } from 'components/icons';
import { name, about, bio } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className="max-w-[650px]">
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p className="my-5">{about()}</p>
        <p className="my-5 ">{bio()}</p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/soundmoneybtc"
          >
            <ArrowIcon />
            <p className="h-7">follow us on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://soundmoneymining.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
