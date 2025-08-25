const { transform } = require("typescript");

module.exports = {
  preset: "ts-jest",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
};

// test('コンポーネントが正しくレンダリングされる', () => {
//   const { getByText } = render(&lt;main />);
//   expect(getByText('Hello, World!')).toBeInTheDocument();
// });
