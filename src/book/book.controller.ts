import { Request, Response } from "express";

import { Book } from "./book.entity";
import AppDataSource from "../config/database.config";

export class BookController {
    static async createBook(req: Request, res: Response) {
        const bookRepository = AppDataSource.getRepository(Book);
        const book = bookRepository.create(req.body);
        await bookRepository.save(book);
        res.send(book);
    }

    static async updateBook(req: Request, res: Response) {
        const bookRepository = AppDataSource.getRepository(Book);
        const book = await bookRepository.findOne({
            where: {
                id: parseInt(req.params.id),
            },
        });
        if (book) {
            bookRepository.merge(book, req.body);
            await bookRepository.save(book);
            res.send(book);
        } else {
            res.status(404).send("Book not found");
        }
    }

    static async deleteBook(req: Request, res: Response) {
        const bookRepository = AppDataSource.getRepository(Book);
        const book = await bookRepository.findOne({
            where: {
                id: parseInt(req.params.id),
            },
        });
        if (book) {
            await bookRepository.remove(book);
            res.send("Book deleted");
        } else {
            res.status(404).send("Book not found");
        }
    }
}
