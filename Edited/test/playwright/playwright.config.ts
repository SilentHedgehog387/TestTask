import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 20000,

  use: {
    headless: false,
    baseURL: 'https://shop.mango.com/preHome.faces',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
  projects: [{
      name: 'Chrome',
      use: { browserName: 'chromium' }
    }]
};

export default config;
