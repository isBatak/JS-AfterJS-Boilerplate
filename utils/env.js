export const isBrowser = typeof window !== 'undefined';
export const isServer = !isBrowser;

const env = isBrowser ? window.__ENV__ : process.env;

export const isProduction = env.APP_ENV === 'production';
export const isDevelopment = env.APP_ENV === 'development';
export const isStaging = env.APP_ENV === 'staging';
export const apiEndpoint = env.API_URL;

export default env;
