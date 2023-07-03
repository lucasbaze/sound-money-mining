import { createContext, createElement, FC, useContext } from 'react';

export interface IPublicConfig {
  root: {
    nodeEnv: string;
  };
  app: {
    urlOrigin: string;
    env: string;
  };
  google: {
    tagManagerId?: string;
    auth?: string;
    preview?: string;
  };
}

// Should be null to enforce Config value at app level
// Usage outside of application should return null correctly
export const configContext = createContext<IPublicConfig>(null as any);

export const ConfigProvider: FC<React.PropsWithChildren<{ value: IPublicConfig }>> = ({ children, value }) => {
  return createElement(configContext.Provider, { value }, children);
};

export const useAppConfig = () => useContext<IPublicConfig>(configContext);
