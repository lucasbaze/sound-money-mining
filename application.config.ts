import { IPublicConfig } from './lib/providers/config-provider';

export const getPublicConfig = (): IPublicConfig => {
  const requiredVars = [process.env.NEXT_PUBLIC_VERCEL_URL];

  for (const varName of requiredVars) {
    if (varName === undefined) {
      throw new Error(`process.env.${varName} not found. Please provide ${varName} in env.`);
    }
  }

  return {
    root: {
      nodeEnv: process.env.NODE_ENV || 'development',
    },
    app: {
      urlOrigin: process.env.NEXT_PUBLIC_VERCEL_URL!,
      env: process.env.NEXT_PUBLIC_VERCEL_ENV || 'development',
    },
    google: {
      tagManagerId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
      auth: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_AUTH,
      preview: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_PREVIEW,
    },
  };
};
