import { NextSEOMetaTags } from './NextSEOMetaTags';

const TITLE = 'Wondermed | At-Home Ketamine Treatment';
const DESCRIPTION =
  'Safe and affordable, clinically-supported, at-home ketamine treatment to rapidly reduce symptoms of anxiety and depression for sustainable mental health benefits. Wondermed provides holistic resources to heal anxiety and live the life you deserve.';

interface SiteMetadataProps {
  appUrlOrigin: string;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  noIndex?: boolean;
}

export const SiteMetadata = ({ appUrlOrigin, title, description, url, image, noIndex }: SiteMetadataProps) => {
  const URL = url || appUrlOrigin;
  const IMAGE = image || `${appUrlOrigin}/images/wondermed-search-image.webp`;

  return (
    <NextSEOMetaTags
      title={title || TITLE}
      metaTitle={title || TITLE}
      description={description || DESCRIPTION}
      image={image || IMAGE}
      noIndex={noIndex}
      openGraph={{
        title: title || TITLE,
        type: 'website',
        image: image || IMAGE,
        description: description || DESCRIPTION,
        url: url || URL,
        siteName: title || TITLE,
      }}
      social={{
        twitter: {
          card: 'summary_large_image',
          site: 'wondermedhealth',
          creator: 'wondermedhealth',
          title: title || TITLE,
          description: description || DESCRIPTION,
          image: image || IMAGE,
          imageAlt: 'wondermed health',
        },
      }}
    />
  );
};
