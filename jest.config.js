module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './reports',
      filename: 'report.html',
      expand: true,
      pageTitle: 'AI Chatbot QA Report'
    }]
  ],
  testTimeout: 30000
};