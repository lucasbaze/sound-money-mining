import Script from 'next/script';

interface IGoogleTagManagerProps {
  tagManagerId?: string;
  auth?: string;
  preview?: string;
  nodeEnv: string;
}

function withGTMProps(Component: React.ComponentType<GtmScriptsProps>) {
  // eslint-disable-next-line react/display-name
  return ({ tagManagerId, nodeEnv, auth, preview }: IGoogleTagManagerProps) => {
    if (nodeEnv !== 'production' || !tagManagerId) {
      return null;
    }

    const previewEnv = auth && preview ? `&gtm_auth=${auth}&gtm_preview=${preview}&gtm_cookies_win=x` : ``;

    return <Component tagManagerId={tagManagerId} previewEnv={previewEnv} />;
  };
}

interface GtmScriptsProps {
  tagManagerId?: string;
  previewEnv?: string;
}

export const GtmNoScript = ({ tagManagerId, previewEnv }: GtmScriptsProps) => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${tagManagerId}${previewEnv}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};

export const GtmScript = ({ tagManagerId, previewEnv }: GtmScriptsProps) => {
  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${previewEnv}';f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',"${tagManagerId}");
      `}
    </Script>
  );
};

export const GoogleTagManagerNoScript = withGTMProps(GtmNoScript);
export const GoogleTagManagerScript = withGTMProps(GtmScript);
