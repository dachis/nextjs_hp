import { Configuration } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: 'de032dc6-4bb4-4522-9232-75ca20237c00',
    authority: 'https://testdomain20220531.b2clogin.com/testdomain20220531.onmicrosoft.com/B2C_1_test-user-flow',
    knownAuthorities: ['testdomain20220531.b2clogin.com'],
    redirect: '/',
    postLogoutRedirectUri: '/',
  },
  cache: {
    cacheLocation: 'localStorage',
  },
};

export const loginRequest = {
  scopes: ['openid', 'offline_access'],
};