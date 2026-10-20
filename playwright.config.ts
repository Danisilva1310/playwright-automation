import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.TF_BUILD || !!process.env.CI;

export default defineConfig({
  testDir: './tests/e2e/specs',
  fullyParallel: false, //[cite: 16, 17]
  forbidOnly: isCI, //[cite: 16, 18]
  retries: isCI ? 2 : 0, //[cite: 16, 18]
  workers: isCI ? 4 : undefined, //[cite: 16, 18]
  maxFailures: isCI ? 10 : undefined, //[cite: 16, 18]
  
  outputDir: './tests/e2e/test-results', //[cite: 16]

  reporter: isCI
    ? [
        ['list'],
        ['junit', { outputFile: 'junit.xml' }], // OBRIGATÓRIO[cite: 16, 17]
        ['html', { open: 'never', outputFolder: './tests/e2e/test-results' }], //[cite: 16]
        ['allure-playwright', { outputFolder: 'allure-results' }] //[cite: 16, 27]
      ]
    : [
        ['html', { open: 'on-failure' }], //[cite: 16, 27]
        ['allure-playwright', { outputFolder: 'allure-results' }] //[cite: 16, 27]
      ],

  use: {
    baseURL: process.env.BASE_URL || 'https://front.serverest.dev',
    trace: 'on-first-retry', //[cite: 16, 18]
    screenshot: 'only-on-failure', //[cite: 16]
    video: isCI ? 'on-first-retry' : 'off', //[cite: 16, 18]
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    *name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
});