import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Comment } from "./comment.entity";
import AppDataSource from "../config/database.config";

export class CommentController {
    static async createComment(req: Request, res: Response) {
        const commentRepository = getRepository(Comment);
        const comment = commentRepository.create(req.body);
        await commentRepository.save(comment);
        res.send(comment);
    }

    static async deleteComment(req: Request, res: Response) {
        const commentRepository = AppDataSource.getRepository(Comment);
        const comment = await commentRepository.findOne({
            where: { id: +req.params.id },
        });
        if (comment) {
            await commentRepository.remove(comment);
            res.send("Comment deleted");
        } else {
            res.status(404).send("Comment not found");
        }
    }
}
