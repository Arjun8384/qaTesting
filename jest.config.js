const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
  ],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$":
      "identity-obj-proxy",
  },

  collectCoverage: true,

  collectCoverageFrom: [
    "src/components/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
  ],

  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};

module.exports = createJestConfig(customJestConfig);