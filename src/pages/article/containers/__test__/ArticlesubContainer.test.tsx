import "@testing-library/jest-dom";
import { ArticlesubContainer } from "../ArticlesubContainer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
// import { useLocation, useParams } from "react-router-dom";

// beforeEach(() => {
//   jest.resetModules();
// });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useParams: () => ({ id: "5" }),
}));

describe("ArticlesubContainerのテスト", () => {
  it("id='5',from='1'のとき、正しく描画される", () => {
    (useLocation as jest.Mock).mockReturnValue({
      state: { from: "1" },
    });
    render(
      <MemoryRouter initialEntries={["/article/5"]} initialIndex={0}>
        <ArticlesubContainer />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("This is article 5");
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("from:1");
  });

  it("from='undefined'のとき、<h4>は表示されない", () => {
    (useLocation as jest.Mock).mockReturnValue({
      state: {},
    });
    render(
      <MemoryRouter initialEntries={["/article/3"]} initialIndex={0}>
        <ArticlesubContainer />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("This is article 5");
    expect(screen.queryByRole("heading", { level: 4 })).toBeNull();
  });
});
