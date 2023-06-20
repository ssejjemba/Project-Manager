import { rest } from "msw";
import boardsData from "./boards.json";

const handlers = [
  rest.get("/api/boards", (req, res, ctx) => {
    return res(ctx.json({ boards: boardsData }));
  }),
];

export { handlers };
