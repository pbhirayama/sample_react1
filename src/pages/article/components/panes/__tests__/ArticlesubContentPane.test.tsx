import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticlesubContentPane } from "../ArticlesubContentPane";

describe("ArticlesubContentPaneのテスト", () => {
  it("idが表示される", () => {
    render(<ArticlesubContentPane id='123' />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("This is article 123");
  });

  it("fromがない(未指定)の場合、fromの見出しは表示されない", () => {
    render(<ArticlesubContentPane id='123' />);
    expect(screen.queryByRole("heading", { level: 4 })).toBeNull();
  });

  it("fromが指定されている場合、fromの見出しが表示される", () => {
    render(<ArticlesubContentPane id='123' from='456' />);
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("from:456");
  });
});
