'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface SectionButtonProps {
  active: boolean;
  section: {
    label: string;
    url: string;
  };
  handleClick: Dispatch<
    SetStateAction<{
      label: string;
      url: string;
    }>
  >;
}

const SectionButton = ({ active, section, handleClick }: SectionButtonProps) => {
  return (
    <div
      onClick={() => handleClick(section)}
      className={`flex border border-neutral-200 dark:border-neutral-800 rounded-lg py-2 px-6 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between max-w-fit cursor-pointer ${
        active ? 'bg-neutral-200 dark:bg-neutral-800' : ''
      }`}
    >
      <div className="flex items-center">
        {/* <TwitterIcon /> */}
        {section.label}
      </div>
      {/* <ArrowIcon /> */}
    </div>
  );
};

const sectionLinks = {
  'fiat-system': {
    label: 'Fiat System',
    url: 'https://airtable.com/embed/appTRfZuq5uAxQVz0/shrGGwuT8najtmORI?backgroundColor=yellow&viewControls=on',
  },
  'bitcoin-basics': {
    label: 'Bitcoin Basics',
    url: 'https://airtable.com/embed/appTRfZuq5uAxQVz0/shrL5mjG4PzlJaUkX?backgroundColor=yellow&viewControls=on',
  },
  'advanced-bitcoin': {
    label: 'Advanced Bitcoin',
    url: 'https://airtable.com/embed/appTRfZuq5uAxQVz0/shrYqx9iDN56CxSyl?backgroundColor=yellow&viewControls=on',
  },
  'bitcoin-mining': {
    label: 'Bitcoin Mining',
    url: 'https://airtable.com/embed/appTRfZuq5uAxQVz0/shrpyjBCCHsTob8aP?backgroundColor=yellow&viewControls=on',
  },
  'current-affairs': {
    label: 'Current Affairs',
    url: 'https://airtable.com/embed/appTRfZuq5uAxQVz0/shrt8h9ALNBdMhPY9?backgroundColor=yellow&viewControls=on',
  },
  more: {
    label: 'More',
    url: 'https://airtable.com/embed/appTRfZuq5uAxQVz0/shrSsrETdH3PpuO8j?backgroundColor=yellow&viewControls=on',
  },
};

export default function LearnPage() {
  const [section, setSection] = useState(sectionLinks['fiat-system']);

  return (
    <section className="max-w-[640px]">
      <h1 className="font-bold text-3xl font-serif mb-8">Learn</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(sectionLinks).map((sectionLink) => {
          return (
            <SectionButton
              active={sectionLink[1].url === section.url}
              section={sectionLink[1]}
              handleClick={setSection}
            />
          );
        })}
      </div>
      <iframe
        className="airtable-embed"
        src={section.url}
        frameBorder="0"
        width="100%"
        height="1000px"
        style={{ background: 'transparent', border: 'none', borderRadius: '24px', padding: '12px' }}
      />
    </section>
  );
}
