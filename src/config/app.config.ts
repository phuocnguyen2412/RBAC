import express from "express";
import AppDataSource from "./database.config";
import { BookController } from "../book/book.controller";
import { CommentController } from "../comment/comment.controller";
import configRoutes from "./route.config";
const initApp = async () => {
    const app = express();
    app.use(express.json());
    try {
        await AppDataSource.initialize();

        configRoutes(app);
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.log(error);
    }
};
export default initApp;
