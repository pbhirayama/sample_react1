import "@testing-library/jest-dom";
import Articlesub from "../Articlesub";
import { render, screen } from "@testing-library/react";

jest.mock("../../containers/ArticlesubContainer", () => ({
  __esModule: true,
  ArticlesubContainer: () => <div data-testid='mock-article-sub-container' />,
}));

describe("Articlesubのテスト", () => {
  it("ArticlesubContainerをレンダリングする", () => {
    render(<Articlesub />);
    expect(screen.getByTestId("mock-article-sub-container")).toBeInTheDocument();
  });
});
