import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Book } from "../book/book.entity";
import { User } from "../user/user.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @ManyToOne(() => Book, (book) => book.comments)
    book!: Book;

    @ManyToOne(() => User, (reader) => reader.comments)
    user!: User;
}
