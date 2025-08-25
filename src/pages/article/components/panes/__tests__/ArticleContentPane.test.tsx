import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticleContentPane } from "../ArticleContentPane";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("../../../containers/ArticleContainer", () => ({
  ArticleContainer: () => <div data-testid='article-container'>Mocked ArticleContainer</div>,
}));

describe("ArticleContentPaneのテスト", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ArticleContentPane />
      </MemoryRouter>
    );
  });

  it("タイトルが表示される", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("This is article");
  });

  it("ArticleContainerが表示される", () => {
    expect(screen.getByTestId("article-container")).toBeInTheDocument();
  });
});

jest.mock("../../Articlesub", () => ({
  __esModule: true,
  default: () => <div data-testid='articlesub'>Mocked Articlesub</div>,
}));

describe("ArticleContentPaneのルーティングテスト", () => {
  it("子ルートがOutlet経由で表示される(記事ID月のルートにアクセスした時、ArticlesubがOutletに表示される)", () => {
    render(
      <MemoryRouter initialEntries={["/article/child"]}>
        <Routes>
          <Route path='/article' element={<ArticleContentPane />}>
            <Route path=':id' element={<div data-testid='articlesub'>Mocked Articlesub</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("This is article")).toBeInTheDocument();
    expect(screen.getByTestId("articlesub")).toBeInTheDocument();
  });
});
