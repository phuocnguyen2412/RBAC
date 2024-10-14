import { BookController } from "../book/book.controller";
import { CommentController } from "../comment/comment.controller";
import { Express } from "express";
import commnentsRoute from "../comment/comment.route";
import bookRoute from "../book/book.route";
import authRoute from "../auth/auth.route";
const configRoutes = (app: Express) => {
    app.use("/auth", authRoute);
    app.use("/books", bookRoute);
    app.use("/comments", commnentsRoute);
};
export default configRoutes;
