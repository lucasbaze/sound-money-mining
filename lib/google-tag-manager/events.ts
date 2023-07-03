export const pageview = (url: string) => {
  window.dataLayer?.push({
    event: 'page_view',
    page: url,
    page_path: url,
  });
};
