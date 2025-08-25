import "@testing-library/jest-dom";
import { ArticleContainer } from "../ArticleContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

// モック関数を用意
const mockNavigate = jest.fn();
const pathname: string = "/article";
// React Routerのフックをモック
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "2" }),
  useNavigate: () => mockNavigate,
  useLocation: () => ({ pathname }),
}));

describe("ArticleContainerのテスト", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ArticleContainer />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("5つのナビゲーションボタンが表示される", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5);
    expect(buttons[0]).toHaveTextContent("to article:1");
    expect(buttons[4]).toHaveTextContent("to article:5");
  });

  it("選択中のIDに基づくクリックでnavigateが呼ばれる(例：2→4)", async () => {
    const button4 = screen.getByRole("button", { name: "to article:4" });
    userEvent.click(screen.getByText("to article:2"));
    await userEvent.click(button4);
    expect(mockNavigate).toHaveBeenCalledWith(`/article/4`, { state: { from: "2" } });
  });
});
