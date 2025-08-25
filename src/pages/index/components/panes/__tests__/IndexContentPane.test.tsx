// import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { IndexContentPane } from "../IndexContentPane";

describe("IndexContentPaneのテスト", () => {
  const mockOnChange = jest.fn();
  const mockOnClickH = jest.fn();
  const mockOnClickA = jest.fn();
  const mockOnClickP = jest.fn();

  beforeEach(() => {
    render(
      <IndexContentPane
        isChecked={false}
        onChange={mockOnChange}
        onClickA={mockOnClickA}
        onClickH={mockOnClickH}
        onClickP={mockOnClickP}
      />
    );
  });

  it("タイトルが表示される", () => {
    expect(screen.getByText("Here is index!")).toBeInTheDocument();
  });

  it("ボタンが3つ表示される", () => {
    expect(screen.getByText("to home")).toBeInTheDocument();
    expect(screen.getByText("to posts")).toBeInTheDocument();
    expect(screen.getByText("to article")).toBeInTheDocument();
  });

  it("チェックボックスの変更時にonChangeが呼ばれる", () => {
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("各ボタンのクリックでコールバックが呼ばれる", () => {
    fireEvent.click(screen.getByText("to home"));
    expect(mockOnClickH).toHaveBeenCalled();

    fireEvent.click(screen.getByText("to article"));
    expect(mockOnClickA).toHaveBeenCalled();

    fireEvent.click(screen.getByText("to posts"));
    expect(mockOnClickP).toHaveBeenCalled();
  });
});
