// import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Button, { Button1 } from "../Button";
import userEvent from "@testing-library/user-event";

describe("Buttonのテスト", () => {
  // onClickに設定するモック関数
  const mockOnClick = jest.fn();

  // テスト環境に<Button />をrenderする関数
  const renderer = ({ disabled }: { disabled: boolean }) =>
    render(<Button disabled={disabled} onClick={mockOnClick} />);

  describe("propsのdisabledについて、", () => {
    test("trueのとき、ボタンが非活性化であること", () => {
      renderer({ disabled: true });
      expect(screen.getByRole("button")).toBeDisabled();
    });
    test("falseのとき、ボタンが活性であること", () => {
      renderer({ disabled: false });
      expect(screen.getByRole("button")).toBeEnabled();
    });
  });

  test("propsのonClickについてボタンをクリックするとコールされること", async () => {
    renderer({ disabled: false });
    await waitFor(async () => await userEvent.click(screen.getByRole("button")));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

describe("Button1のテスト", () => {
  const mockOnClick = jest.fn();
  const renderer = (props: Partial<Parameters<typeof Button1>[0]>) =>
    render(
      <Button1
        title='タイトル'
        disabled={props.disabled ?? false}
        onClick={mockOnClick}
        selectedId={props.selectedId}
        id={props.id}
      />
    );

  test("ボタンのテキストがtitleで表示される", () => {
    renderer({ title: "タイトル" });
    expect(screen.getByRole("button")).toHaveTextContent("タイトル");
  });

  describe("selectedIdとidについて、", () => {
    test("一致すると背景色がlightblueになる", () => {
      renderer({ selectedId: 1, id: 1 });
      expect(screen.getByRole("button")).toHaveStyle("backgroundColor: rgb(171,225,250)");
    });
    test("一致しないと背景色がwhiteになる", () => {
      renderer({ selectedId: 1, id: 2 });
      expect(screen.getByRole("button")).toHaveStyle("backgroundColor: rgb(255,255,255)");
    });
  });
  test("クリック時にonClickが呼ばれる", async () => {
    renderer({});
    await userEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
