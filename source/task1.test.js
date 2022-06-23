import { buildChessBoard, buildEvenRow } from "./task1";

test(" builds a row using spaces and a specific character", () => {
  expect(buildEvenRow(3, "*")).toBe("* * * ");
});

test(" builds several rols based on specific requirements", () => {
  expect(buildChessBoard(3, 3, "$")).not.toBe("# # #");
});
