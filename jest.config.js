/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resetMocks: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts', 'jest-canvas-mock'],
  globals: {
    'ts-jest': {
      tsconfig: 'jest.tsconfig.json',
    },
  },
};
