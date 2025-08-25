import "@testing-library/jest-dom";
import Article from "../Article";
import { render, screen } from "@testing-library/react";

jest.mock("../panes/ArticleContentPane", () => ({
  __esModule: true,
  ArticleContentPane: () => <div data-testid='mock-article-content-pane' />,
}));

describe("Articleのテスト", () => {
  it("ArticleContentPaneをレンダリングする", () => {
    render(<Article />);
    expect(screen.getByTestId("mock-article-content-pane")).toBeInTheDocument();
  });
});
