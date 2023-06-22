import { rest } from "msw";
import boardsData from "./boards.json";
import dummyTasks from "./tasks.json";

const handlers = [
  rest.get("/api/boards", (req, res, ctx) => {
    return res(ctx.json({ boards: boardsData }));
  }),
  rest.get("/api/boards/:boardId/tasks", (req, res, ctx) => {
    const { boardId } = req.params;

    // Filter tasks based on the board ID
    const tasks = dummyTasks.filter((task) => task.boardId === boardId);

    return res(ctx.status(200), ctx.json({ tasks }));
  }),
];

export { handlers };
