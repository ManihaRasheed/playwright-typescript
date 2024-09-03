import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 30000,
  use: {
    baseURL: 'https://naveenautomationlabs.com/opencart/index.php',
    headless: false,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
};



export default defineConfig({
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});




