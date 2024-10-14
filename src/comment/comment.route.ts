import { Router } from "express";
import { CommentController } from "./comment.controller";
import { authenticateJWT } from "../middleware/auth.middleware";
import { checkPermission } from "../middleware/authorziation.middleware";
import { PermissionEnum } from "../feature/permissions.entity";

const commnentsRoute = Router();
commnentsRoute.post(
    "/comments",
    authenticateJWT,
    checkPermission([PermissionEnum.WRITE_COMMENT]),
    CommentController.createComment
);
commnentsRoute.delete(
    "/comments/:id",
    authenticateJWT,
    checkPermission([PermissionEnum.DELETE_BOOK]),
    CommentController.deleteComment
);

export default commnentsRoute;
