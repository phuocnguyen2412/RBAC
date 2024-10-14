import { Router } from "express";
import { BookController } from "./book.controller";
import { authenticateJWT } from "../middleware/auth.middleware";
import { checkPermission } from "../middleware/authorziation.middleware";
import { PermissionEnum } from "../feature/permissions.entity";

const bookRoute = Router();
bookRoute.post(
    "/books",
    authenticateJWT,
    checkPermission([PermissionEnum.CREATE_BOOK]),
    BookController.createBook
);
bookRoute.put(
    "/books/:id",
    authenticateJWT,
    checkPermission([PermissionEnum.EDIT_BOOK]),
    BookController.updateBook
);
bookRoute.delete(
    "/books/:id",
    authenticateJWT,
    checkPermission([PermissionEnum.DELETE_BOOK]),
    BookController.deleteBook
);
export default bookRoute;
