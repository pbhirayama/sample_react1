import main from "main.tsx";

module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom"
};

// test('コンポーネントが正しくレンダリングされる', () => {
//   const { getByText } = render(&lt;main />);
//   expect(getByText('Hello, World!')).toBeInTheDocument();
// });
