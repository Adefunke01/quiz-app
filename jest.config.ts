module.exports = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/index.ts", "!**/*.d.ts", "!**/node_modules/**"],
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/"],
    transform: {
      ".(ts|tsx)": "ts-jest"
    },
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.app.json",
      },
    },
  };